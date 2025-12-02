export async function fetchPlansFromAPI() {
  try {
    const url =
      process.env.NEXT_PUBLIC_USR_SVC_URL +
      "/api/Subscription/plans?source=1";

    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch plans");

    return await res.json();
  } catch (err) {
    console.error("API error:", err);
    return null;
  }
}
