import { NextRequest, NextResponse } from 'next/server';
import { careStore } from '@/server/db/careStore';
import { logAuditEvent } from '@/server/audit/auditLogger';

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';

  const result = careStore.markMedicationTaken(id);

  if (!result) {
    return NextResponse.json(
      { success: false, error: { code: 'NOT_FOUND', message: 'Medication not found' } },
      { status: 404 }
    );
  }

  logAuditEvent({
    actorId: 'senior_ramesh',
    role: 'senior',
    action: 'MEDICATION_TAKEN',
    resource: `/api/v1/medications/${id}`,
    ipAddress: ip,
    status: 'SUCCESS',
    details: {
      medicationName: result.medication.name,
      scheduledTime: result.medication.scheduledTime,
      takenAt: result.medication.takenAt,
    }
  });

  return NextResponse.json({
    success: true,
    data: {
      medication: result.medication,
      message: `${result.medication.name} successfully marked as taken!`,
    },
    timestamp: new Date().toISOString(),
  });
}
