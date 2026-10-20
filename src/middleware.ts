import { NextRequest, NextResponse } from 'next/server';
import { AuthUser } from '@/types/auth';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const requestId = `req_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

  // Parse session cookie
  const authCookie = request.cookies.get('saathi_auth');
  let authUser: AuthUser | null = null;
  if (authCookie?.value) {
    try {
      authUser = JSON.parse(authCookie.value) as AuthUser;
    } catch {
      authUser = null;
    }
  }

  const isPublicRoute =
    pathname.startsWith('/login') ||
    pathname.startsWith('/api/v1/auth') ||
    pathname.startsWith('/api/v1/health') ||
    pathname.startsWith('/_next') ||
    pathname === '/favicon.ico';

  // 1. Unauthenticated users trying to access protected pages
  if (!authUser && !isPublicRoute && !pathname.startsWith('/api/')) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('returnUrl', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // 2. Already authenticated user visiting /login
  if (authUser && pathname === '/login') {
    if (authUser.role === 'senior') {
      return NextResponse.redirect(new URL('/senior', request.url));
    }
    return NextResponse.redirect(new URL('/family', request.url));
  }

  // 3. Role-Based Access Control: Family Portal is for children/guardians ONLY
  if (pathname.startsWith('/family')) {
    if (authUser?.role === 'senior') {
      const seniorUrl = new URL('/senior', request.url);
      seniorUrl.searchParams.set('error', 'family_portal_restricted');
      return NextResponse.redirect(seniorUrl);
    }
  }

  // 4. Default home '/' routing based on role
  if (pathname === '/' && authUser) {
    if (authUser.role === 'senior') {
      return NextResponse.redirect(new URL('/senior', request.url));
    }
    return NextResponse.redirect(new URL('/family', request.url));
  }

  const response = NextResponse.next();

  // 5. SOC 2 Traceability Header
  response.headers.set('X-Request-Id', requestId);

  // 6. SOC 2 CC6.6 Defense in Depth: HTTP Security Headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(self), geolocation=()');
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');

  // 7. Content Security Policy (permitting Web Speech, Google Fonts, and self)
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    font-src 'self' https://fonts.gstatic.com;
    img-src 'self' data: https:;
    connect-src 'self' https://generativelanguage.googleapis.com;
    media-src 'self' blob: data:;
    frame-ancestors 'none';
  `.replace(/\s{2,}/g, ' ').trim();

  response.headers.set('Content-Security-Policy', cspHeader);

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
