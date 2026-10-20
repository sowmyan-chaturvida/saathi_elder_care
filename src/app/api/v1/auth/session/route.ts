import { NextRequest, NextResponse } from 'next/server';
import { AuthUser } from '@/types/auth';

export async function GET(request: NextRequest) {
  const cookie = request.cookies.get('saathi_auth');

  if (!cookie || !cookie.value) {
    return NextResponse.json({
      authenticated: false,
      user: null,
    });
  }

  try {
    const user = JSON.parse(cookie.value) as AuthUser;
    return NextResponse.json({
      authenticated: true,
      user,
    });
  } catch {
    return NextResponse.json({
      authenticated: false,
      user: null,
    });
  }
}
