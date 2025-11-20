import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();

  const apiRes = await fetch(process.env.NEXT_PUBLIC_EMAIL_SIGNUP_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  }).then((r) => r.json());

  if (apiRes?.value?.accessToken) {
    const response = NextResponse.json({
      success: true,
      accessToken: apiRes.value.accessToken,
    });

    response.cookies.set({
      name: "buildNinjaAccess",
      value: apiRes.value.accessToken,
      httpOnly: true,
      secure: true,
      sameSite: "None",
      domain: ".grapehub.io",
      path: "/",
      maxAge: 60 * 60 * 24, // 1 day
    });

    return response;
  }

  return NextResponse.json(apiRes);
}
