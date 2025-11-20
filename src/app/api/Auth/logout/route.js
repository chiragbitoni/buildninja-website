import { NextResponse } from "next/server";

export async function POST() {
  try {
    const response = NextResponse.json({ success: true });

    // Clear cookie
    response.cookies.set("access_token", "", {
      path: "/",
      domain: ".grapehub.io", // IMPORTANT
      expires: new Date(0),   // delete
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    return response;
  } catch (error) {
    return NextResponse.json({ success: false });
  }
}
