export async function checkAuth() {
  const API_URL = process.env.NEXT_PUBLIC_AUTH_ME_API_URL;

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    // ❗ If unauthorized → return false (not logged in)
    if (res.status === 401) {
      console.log("Not logged in: 401");
      return false;
    }

    // ❗ If empty response → return false
    const text = await res.text();
    if (!text) {
      console.log("Not logged in: empty response");
      return false;
    }

    const data = JSON.parse(text);
    console.log("ME RESPONSE:", data);

    return !!data?.userId; 
  } catch (err) {
    console.error("Auth check failed:", err);
    return false;
  }
}
