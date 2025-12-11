export async function fetchUser() {
  const API_URL = `${process.env.NEXT_PUBLIC_USR_SVC_URL}/api/Auth/me`;
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    // No token → backend returns 401 → treat as not logged in
    if (res.status === 401) {
      return null;
    }

    const text = await res.text();
    if (!text) return null;

    return JSON.parse(text);

  } catch (err) {
    console.warn("Auth /me request failed:", err);
    return null;
  }
}
