import { NextRequest, NextResponse } from 'next/server';
import { converseSchema } from '@/server/schemas/companionSchema';
import { rateLimiter } from '@/server/security/rateLimiter';
import { logAuditEvent } from '@/server/audit/auditLogger';
import { converseWithSaathi } from '@/server/ai/geminiClient';
import { careStore } from '@/server/db/careStore';

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';

  // 1. Rate Limiting: 20 requests per minute
  const limitCheck = rateLimiter.check(`companion_${ip}`, 20, 60000);
  if (!limitCheck.allowed) {
    logAuditEvent({
      actorId: 'senior_ramesh',
      role: 'senior',
      action: 'RATE_LIMIT_EXCEEDED',
      resource: '/api/v1/companion/converse',
      ipAddress: ip,
      status: 'BLOCKED',
      details: { limit: 20, endpoint: 'companion/converse' }
    });

    return NextResponse.json(
      {
        success: false,
        error: {
          code: 'RATE_LIMIT_EXCEEDED',
          message: 'Too many voice requests. Please take a breath and try in a minute.',
        }
      },
      { status: 429 }
    );
  }

  try {
    const rawBody = await request.json();
    const parsed = converseSchema.safeParse(rawBody);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'VALIDATION_ERROR',
            message: 'Invalid request body',
            details: parsed.error.format()
          }
        },
        { status: 400 }
      );
    }

    const { message, conversationHistory } = parsed.data;
    const { reply, modelUsed } = await converseWithSaathi(message, conversationHistory);

    // 2. Audit & Activity Logging
    logAuditEvent({
      actorId: 'senior_ramesh',
      role: 'senior',
      action: 'COMPANION_CONVERSATION',
      resource: '/api/v1/companion/converse',
      ipAddress: ip,
      status: 'SUCCESS',
      details: {
        userPromptLength: message.length,
        modelUsed,
        snippet: message.substring(0, 40) + '...',
      }
    });

    // Optionally record to care store timeline if user discussed specific routines
    if (message.toLowerCase().includes('dard') || message.toLowerCase().includes('pain') || message.toLowerCase().includes('dawai')) {
      careStore.addActivity({
        type: 'companion_chat',
        title: 'Health-related chat with Saathi',
        description: `Ramesh ji mentioned: "${message.substring(0, 60)}..."`,
        severity: 'info',
      });
    }

    return NextResponse.json({
      success: true,
      data: {
        reply,
        modelUsed,
        timestamp: new Date().toISOString(),
      }
    });
  } catch (error) {
    console.error('Companion endpoint error:', error);
    return NextResponse.json(
      {
        success: false,
        error: {
          code: 'INTERNAL_ERROR',
          message: 'Failed to process companion conversation',
        }
      },
      { status: 500 }
    );
  }
}
