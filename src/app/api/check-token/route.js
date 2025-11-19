import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  try {
    const cookieStore = await cookies(); // <-- IMPORTANT

    const token = cookieStore.get("buildNinjaAccess")?.value;

    return NextResponse.json({ token: !!token });
  } catch (err) {
    console.error("CHECK TOKEN ERROR:", err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
