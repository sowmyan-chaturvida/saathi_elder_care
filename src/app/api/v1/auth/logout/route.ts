import { NextRequest, NextResponse } from 'next/server';
import { logAuditEvent } from '@/server/audit/auditLogger';
import { AuthUser } from '@/types/auth';

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
  const cookie = request.cookies.get('saathi_auth');

  let actorId = 'anonymous';
  let role: 'caregiver' | 'senior' = 'caregiver';

  if (cookie?.value) {
    try {
      const u = JSON.parse(cookie.value) as AuthUser;
      actorId = u.id;
      role = u.role === 'senior' ? 'senior' : 'caregiver';
    } catch {
      // ignore
    }
  }

  logAuditEvent({
    actorId,
    role,
    action: 'USER_LOGGED_OUT',
    resource: '/api/v1/auth/logout',
    ipAddress: ip,
    status: 'SUCCESS',
  });

  const response = NextResponse.json({
    success: true,
    message: 'Logged out successfully',
  });

  // Clear session cookie
  response.cookies.delete('saathi_auth');

  return response;
}
