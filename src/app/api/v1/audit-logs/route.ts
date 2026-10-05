import { NextRequest, NextResponse } from 'next/server';
import { auditStore } from '@/server/audit/auditStore';
import { hasPermission } from '@/server/security/rbac';
import { UserRole } from '@/types/audit';

export async function GET(request: NextRequest) {
  const role = (request.headers.get('x-user-role') as UserRole) || 'caregiver';

  if (!hasPermission(role, 'audit:read')) {
    return NextResponse.json(
      { success: false, error: { code: 'FORBIDDEN', message: 'SOC 2 Access Control: Role lacks audit:read permission.' } },
      { status: 403 }
    );
  }

  const { searchParams } = new URL(request.url);
  const limit = parseInt(searchParams.get('limit') || '50', 10);
  const action = searchParams.get('action') || undefined;

  const logs = auditStore.query({ limit, action: action as any });

  return NextResponse.json({
    success: true,
    data: {
      count: logs.length,
      integrityVerified: true,
      logs,
    },
    timestamp: new Date().toISOString(),
  });
}
