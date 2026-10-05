import { NextRequest, NextResponse } from 'next/server';
import { careStore } from '@/server/db/careStore';
import { createMedicationSchema } from '@/server/schemas/medicationSchema';
import { logAuditEvent } from '@/server/audit/auditLogger';
import { hasPermission } from '@/server/security/rbac';
import { UserRole } from '@/types/audit';

export async function GET() {
  const medications = careStore.getMedications();
  return NextResponse.json({
    success: true,
    data: medications,
    timestamp: new Date().toISOString(),
  });
}

export async function POST(request: NextRequest) {
  const role = (request.headers.get('x-user-role') as UserRole) || 'caregiver';
  const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';

  if (!hasPermission(role, 'medication:write')) {
    logAuditEvent({
      actorId: 'unknown',
      role,
      action: 'UNAUTHORIZED_ACCESS_ATTEMPT',
      resource: '/api/v1/medications',
      ipAddress: ip,
      status: 'BLOCKED',
      details: { attemptedAction: 'create_medication' }
    });

    return NextResponse.json(
      { success: false, error: { code: 'FORBIDDEN', message: 'Only authorized caregivers can add prescriptions.' } },
      { status: 403 }
    );
  }

  try {
    const rawBody = await request.json();
    const parsed = createMedicationSchema.safeParse(rawBody);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'VALIDATION_ERROR',
            message: 'Invalid prescription details',
            details: parsed.error.format(),
          }
        },
        { status: 400 }
      );
    }

    const newMed = careStore.addMedication(parsed.data);

    logAuditEvent({
      actorId: 'priya_sharma_caregiver',
      role: 'caregiver',
      action: 'MEDICATION_ADDED',
      resource: `/api/v1/medications/${newMed.id}`,
      ipAddress: ip,
      status: 'SUCCESS',
      details: {
        medicationName: newMed.name,
        dosage: newMed.dosage,
        scheduledTime: newMed.scheduledTime,
      }
    });

    return NextResponse.json({
      success: true,
      data: newMed,
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: { code: 'INTERNAL_ERROR', message: 'Failed to add medication' } },
      { status: 500 }
    );
  }
}
