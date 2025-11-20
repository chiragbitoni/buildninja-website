import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  try {
    const rawToken = cookies().get("refresh_token");
    const token = rawToken?.value;

    if (!token) {
      return NextResponse.json({ user: null }, { status: 200 });
    }

    const API_URL = process.env.AUTH_ME_API_URL;

    const response = await fetch(API_URL, {
      method: "POST",   // ← IMPORTANT!!
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      return NextResponse.json({ user: null }, { status: 200 });
    }

    const user = await response.json();

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ user: null }, { status: 200 });
  }
}
