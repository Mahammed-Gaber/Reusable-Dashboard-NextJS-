// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
    console.log("req");
  const pathname = req.nextUrl.pathname;
  const token = req.cookies.get('token');
  console.log("token", token);
  // صفحات عامة (مش محتاجة auth)
  if (pathname.startsWith('/login') || pathname.startsWith('/_next') || pathname === '/favicon.ico') {
    return NextResponse.next();
  }

  // لو مفيش تسجيل دخول → Landing
  if (!token?.value) {
    if (pathname !== '/') {
      return NextResponse.redirect(new URL('/', req.url));
    }
    return NextResponse.next();
  }

  // لو مسجل دخول وداخل على الـ Root → يروح Dashboard
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/dashboards', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/dashboard/:path*', '/login'],
};