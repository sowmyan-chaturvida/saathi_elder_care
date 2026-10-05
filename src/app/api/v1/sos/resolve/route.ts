import { NextRequest, NextResponse } from 'next/server';
import { resolveSosSchema } from '@/server/schemas/sosSchema';
import { careStore } from '@/server/db/careStore';
import { logAuditEvent } from '@/server/audit/auditLogger';

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';

  try {
    const rawBody = await request.json();
    const parsed = resolveSosSchema.safeParse(rawBody);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: { code: 'VALIDATION_ERROR', message: 'Invalid resolution payload', details: parsed.error.format() }
        },
        { status: 400 }
      );
    }

    const { resolvedBy, note } = parsed.data;
    const resolvedAlert = careStore.resolveSos(resolvedBy, note);

    if (!resolvedAlert) {
      return NextResponse.json(
        { success: false, error: { code: 'NO_ACTIVE_SOS', message: 'No active SOS alert to resolve.' } },
        { status: 404 }
      );
    }

    logAuditEvent({
      actorId: 'priya_sharma_caregiver',
      role: 'caregiver',
      action: 'SOS_RESOLVED',
      resource: `/api/v1/sos/${resolvedAlert.id}`,
      ipAddress: ip,
      status: 'SUCCESS',
      details: {
        resolvedBy,
        resolutionNote: note,
        alertDurationMs: new Date().getTime() - new Date(resolvedAlert.triggeredAt).getTime(),
      }
    });

    return NextResponse.json({
      success: true,
      data: resolvedAlert,
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: { code: 'INTERNAL_ERROR', message: 'Failed to resolve SOS' } },
      { status: 500 }
    );
  }
}
