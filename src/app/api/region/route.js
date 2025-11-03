export async function GET() {
  try {
    const res = await fetch("https://ipwho.is/", { cache: "no-store" }); // prevent static caching
    const data = await res.json();
    const region = data?.country_code === "IN" ? "india" : "global";

    // Return JSON response
    return Response.json({ region }, { status: 200 });
  } catch {
    return Response.json({ region: "global" }, { status: 200 });
  }
}
