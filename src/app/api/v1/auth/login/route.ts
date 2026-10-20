import { NextRequest, NextResponse } from 'next/server';
import { AuthUser, LoginRequest } from '@/types/auth';
import { logAuditEvent } from '@/server/audit/auditLogger';

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';

  try {
    const body = (await request.json()) as LoginRequest;
    let user: AuthUser;

    if (body.preset === 'senior_ramesh') {
      user = {
        id: 'user_ramesh',
        name: 'Ramesh Sharma',
        email: 'ramesh.sharma73@gmail.com',
        role: 'senior',
        avatar: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=150&auto=format&fit=crop&q=80',
        activeParentId: 'senior_ramesh_73',
        provider: 'google',
      };
    } else if (body.preset === 'custom' && body.customData) {
      user = {
        id: `user_${Date.now()}`,
        name: body.customData.name || 'Family Member',
        email: body.customData.email || 'guardian@saathi.care',
        role: body.customData.role || 'caregiver',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAW085qJ3na6gbyskBvjQAW_MEINbKgEUPK76FRqtyru509luuXv-8JcvDU0U67Qp4E8m5cVAfJOEJnY0HWZwybDkGVS6SpO3wb27j25Y98krcuukay3SvZM-3MxsIynmt7ADS47bPIHrGsyitXNbYGUCyhnRha2Po_cyJFJGB2VzQ3A96C0NNrpsxfXKTRFEhcK6WbQodLaAZaUvRTHcf_0Blo3F_yzxT221fxixgrLN6Vsn8DvCY',
        provider: 'google',
      };
    } else {
      // Default: Priya Sharma (Daughter / Family Caregiver)
      user = {
        id: 'user_priya',
        name: 'Priya Sharma',
        email: 'priya.sharma@gmail.com',
        role: 'caregiver',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAW085qJ3na6gbyskBvjQAW_MEINbKgEUPK76FRqtyru509luuXv-8JcvDU0U67Qp4E8m5cVAfJOEJnY0HWZwybDkGVS6SpO3wb27j25Y98krcuukay3SvZM-3MxsIynmt7ADS47bPIHrGsyitXNbYGUCyhnRha2Po_cyJFJGB2VzQ3A96C0NNrpsxfXKTRFEhcK6WbQodLaAZaUvRTHcf_0Blo3F_yzxT221fxixgrLN6Vsn8DvCY',
        provider: 'google',
      };
    }

    logAuditEvent({
      actorId: user.id,
      role: user.role === 'senior' ? 'senior' : 'caregiver',
      action: 'USER_LOGGED_IN',
      resource: '/api/v1/auth/login',
      ipAddress: ip,
      status: 'SUCCESS',
      details: {
        provider: 'google',
        role: user.role,
        email: user.email,
      },
    });

    const response = NextResponse.json({
      success: true,
      user,
    });

    // Set cookie valid for 7 days
    response.cookies.set('saathi_auth', JSON.stringify(user), {
      path: '/',
      maxAge: 7 * 24 * 60 * 60,
      sameSite: 'lax',
      httpOnly: false, // Accessible to client-side auth context as well
    });

    return response;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      {
        success: false,
        error: {
          code: 'AUTH_ERROR',
          message: 'Failed to complete login',
        },
      },
      { status: 500 }
    );
  }
}
