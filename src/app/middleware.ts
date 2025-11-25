// middleware.ts
import { NextRequest, NextResponse } from "next/server";

const PUBLIC_PATHS = ["/", "/login"];

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  const token = req.cookies.get("token")?.value;
  const role = req.cookies.get("role")?.value;

  const isPublic =
    PUBLIC_PATHS.includes(pathname) ||
    pathname.startsWith("/_next") ||
    pathname === "/favicon.ico";

  if (!token) {
    if (!isPublic) {
      return NextResponse.redirect(new URL("/", req.url));
    }
    return NextResponse.next();
  }

  if (token && pathname === "/login") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (!role && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/login", "/dashboard/:path*"],
};