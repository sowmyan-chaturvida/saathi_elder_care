import { NextRequest, NextResponse } from 'next/server';
import { createParentSchema } from '@/server/schemas/parentSchema';
import { careStore } from '@/server/db/careStore';
import { logAuditEvent } from '@/server/audit/auditLogger';
import { rateLimiter } from '@/server/security/rateLimiter';

export async function GET() {
  const parents = careStore.getAllParents();
  return NextResponse.json({
    success: true,
    data: parents,
  });
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';

  // 1. Rate Limiting: 10 requests per minute
  const limitCheck = rateLimiter.check(`add_parent_${ip}`, 10, 60000);
  if (!limitCheck.allowed) {
    return NextResponse.json(
      {
        success: false,
        error: {
          code: 'RATE_LIMIT_EXCEEDED',
          message: 'Too many requests. Please wait a minute before registering another profile.',
        },
      },
      { status: 429 }
    );
  }

  try {
    const rawBody = await request.json();
    const parsed = createParentSchema.safeParse(rawBody);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'VALIDATION_ERROR',
            message: 'Invalid parent profile details',
            details: parsed.error.format(),
          },
        },
        { status: 400 }
      );
    }

    const newParent = careStore.addParent(parsed.data);

    // 2. Audit Trail
    logAuditEvent({
      actorId: 'caregiver_priya',
      role: 'caregiver',
      action: 'PARENT_ADDED',
      resource: `/api/v1/parents/${newParent.id}`,
      ipAddress: ip,
      status: 'SUCCESS',
      details: {
        parentName: newParent.name,
        preferredName: newParent.preferredName,
        age: newParent.age,
        relation: newParent.relation,
      },
    });

    return NextResponse.json({
      success: true,
      data: newParent,
    });
  } catch (error) {
    console.error('Add parent error:', error);
    return NextResponse.json(
      {
        success: false,
        error: {
          code: 'INTERNAL_ERROR',
          message: 'Failed to register parent profile',
        },
      },
      { status: 500 }
    );
  }
}
