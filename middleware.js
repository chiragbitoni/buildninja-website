import { NextResponse } from "next/server";

export function middleware(req) {
  // Redirect /install/dashboard requests to the consolidated /install page
  if (req.nextUrl.pathname === "/install/dashboard") {
    return NextResponse.redirect(new URL("/install", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/install/dashboard",
  ],
};
