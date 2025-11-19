import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  try {
    const cookieStore = cookies();
    console.log("All cookies:", cookieStore.getAll());

    const token = cookieStore.get("buildNinjaAccess")?.value;

    return NextResponse.json({ token: !!token });
  } catch (err) {
    console.error("CHECK TOKEN ERROR:", err);
    return NextResponse.json(
      { error: String(err) },
      { status: 500 }
    );
  }
}
