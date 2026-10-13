import { NextRequest, NextResponse } from 'next/server';
import { analyzeScamSchema } from '@/server/schemas/scamSchema';
import { rateLimiter } from '@/server/security/rateLimiter';
import { logAuditEvent } from '@/server/audit/auditLogger';
import { detectScamMessage } from '@/server/ai/geminiClient';
import { careStore } from '@/server/db/careStore';

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';

  // Rate Limiting: 15 scam checks per minute
  const limitCheck = rateLimiter.check(`scam_${ip}`, 15, 60000);
  if (!limitCheck.allowed) {
    return NextResponse.json(
      {
        success: false,
        error: { code: 'RATE_LIMIT_EXCEEDED', message: 'Too many scam verification requests. Please wait a minute.' }
      },
      { status: 429 }
    );
  }

  try {
    const rawBody = await request.json();
    const parsed = analyzeScamSchema.safeParse(rawBody);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: { code: 'VALIDATION_ERROR', message: 'Please provide valid text to analyze', details: parsed.error.format() }
        },
        { status: 400 }
      );
    }

    const { text, imageBase64, senderInfo } = parsed.data;
    const report = await detectScamMessage(text, imageBase64);

    // Audit log
    logAuditEvent({
      actorId: 'senior_ramesh',
      role: 'senior',
      action: 'SCAM_ANALYZED',
      resource: `/api/v1/scam/${report.id}`,
      ipAddress: ip,
      status: 'SUCCESS',
      details: {
        verdict: report.verdict,
        category: report.category,
        confidenceScore: report.confidenceScore,
        senderInfo: senderInfo || 'Unknown',
      }
    });

    // If scam was detected, post to caregiver activity feed for family visibility
    if (report.verdict === 'HIGH' || report.verdict === 'MEDIUM') {
      careStore.addActivity({
        type: 'scam_checked',
        title: `Suspicious Message Checked (${report.verdict} RISK)`,
        description: `Ramesh ji checked a suspicious message: "${report.titleEnglish}". Action recommended: ${report.recommendedActionEnglish}`,
        severity: report.verdict === 'HIGH' ? 'warning' : 'info',
        metadata: { reportId: report.id, verdict: report.verdict, category: report.category }
      });
    }

    return NextResponse.json({
      success: true,
      data: report,
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    console.error('Scam analysis route error:', err);
    return NextResponse.json(
      { success: false, error: { code: 'INTERNAL_ERROR', message: 'Failed to analyze message' } },
      { status: 500 }
    );
  }
}
