import { NextRequest, NextResponse } from 'next/server';
import { triggerSosSchema } from '@/server/schemas/sosSchema';
import { careStore } from '@/server/db/careStore';
import { logAuditEvent } from '@/server/audit/auditLogger';
import { rateLimiter } from '@/server/security/rateLimiter';

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';

  // Rate Limiting: max 5 SOS triggers per 60 seconds
  const limitCheck = rateLimiter.check(`sos_${ip}`, 5, 60000);
  if (!limitCheck.allowed) {
    return NextResponse.json(
      {
        success: false,
        error: { code: 'RATE_LIMIT_EXCEEDED', message: 'SOS rate limit reached' }
      },
      { status: 429 }
    );
  }

  try {
    const rawBody = await request.json().catch(() => ({}));
    const parsed = triggerSosSchema.safeParse(rawBody);
    const source = parsed.success ? parsed.data.source : 'senior_button';

    const alert = careStore.triggerSos(source);

    logAuditEvent({
      actorId: 'senior_ramesh',
      role: 'senior',
      action: 'SOS_TRIGGERED',
      resource: `/api/v1/sos/${alert.id}`,
      ipAddress: ip,
      status: 'SUCCESS',
      details: {
        alertId: alert.id,
        triggerSource: source,
        contactsNotified: ['Priya Sharma (+91 98112 45678)', 'Dr. Anand Verma (+91 98711 23456)'],
      }
    });

    return NextResponse.json({
      success: true,
      data: {
        alert,
        escalation: {
          sirenActive: true,
          notificationsSent: true,
          contactsAlerted: careStore.getSeniorProfile().emergencyContacts,
        }
      },
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: { code: 'INTERNAL_ERROR', message: 'Failed to trigger SOS' } },
      { status: 500 }
    );
  }
}
