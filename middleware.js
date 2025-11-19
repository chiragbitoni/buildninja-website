import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("buildNinjaAccess")?.value;

  // Protect /download/access and /download/dashboard
  if (!token && req.nextUrl.pathname.startsWith("/download")) {
    if (
      req.nextUrl.pathname === "/download/access" ||
      req.nextUrl.pathname === "/download/dashboard"
    ) {
      return NextResponse.redirect(new URL("/download", req.url));
    }
  }

  // If already logged in, block /download
  if (token && req.nextUrl.pathname === "/download") {
    return NextResponse.redirect(new URL("/download/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/download",
    "/download/access",
    "/download/dashboard",
  ],
};
