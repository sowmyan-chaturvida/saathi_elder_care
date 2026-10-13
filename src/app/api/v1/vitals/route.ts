import { NextRequest, NextResponse } from 'next/server';
import { careStore } from '@/server/db/careStore';
import { logVitalsSchema } from '@/server/schemas/vitalsSchema';
import { logAuditEvent } from '@/server/audit/auditLogger';
import { rateLimiter } from '@/server/security/rateLimiter';
import { UserRole } from '@/types/audit';

export async function GET() {
  const vitals = careStore.getVitals();
  return NextResponse.json({
    success: true,
    data: vitals,
    timestamp: new Date().toISOString(),
  });
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
  const role = (request.headers.get('x-user-role') as UserRole) || 'caregiver';

  // Rate Limiting (max 15 vitals log requests per 60 seconds)
  const rl = rateLimiter.check(`vitals_${ip}`, 15, 60000);
  if (!rl.allowed) {
    return NextResponse.json(
      { success: false, error: { code: 'RATE_LIMITED', message: 'Too many vitals update requests. Please wait a moment.' } },
      { status: 429 }
    );
  }

  try {
    const rawBody = await request.json();
    const parsed = logVitalsSchema.safeParse(rawBody);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'VALIDATION_ERROR',
            message: 'Invalid health vitals data',
            details: parsed.error.format(),
          },
        },
        { status: 400 }
      );
    }

    const newLog = careStore.addVitalsLog(parsed.data);

    logAuditEvent({
      actorId: 'caregiver_priya',
      role,
      action: 'VITALS_RECORDED',
      resource: '/api/v1/vitals',
      ipAddress: ip,
      status: 'SUCCESS',
      details: {
        vitalsId: newLog.id,
        bp: `${newLog.bloodPressureSystolic}/${newLog.bloodPressureDiastolic}`,
        sugar: `${newLog.bloodSugar} (${newLog.bloodSugarType})`,
      },
    });

    return NextResponse.json(
      {
        success: true,
        data: newLog,
        message: 'Health vitals recorded successfully.',
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: { code: 'INTERNAL_ERROR', message: error?.message || 'Failed to record vitals' } },
      { status: 500 }
    );
  }
}
