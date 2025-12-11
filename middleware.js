import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("buildNinjaAccess")?.value;

  // Protect /install/access and /install/dashboard
  if (!token && req.nextUrl.pathname.startsWith("/install")) {
    if (
      req.nextUrl.pathname === "/install/access" ||
      req.nextUrl.pathname === "/install/dashboard"
    ) {
      return NextResponse.redirect(new URL("/install", req.url));
    }
  }

  // If already logged in, block /install
  if (token && req.nextUrl.pathname === "/install") {
    return NextResponse.redirect(new URL("/install/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/installd",
    "/install/access",
    "/install/dashboard",
  ],
};
