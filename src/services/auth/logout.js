export async function logoutUserAPI(userId) {
  const API_URL = `${process.env.NEXT_PUBLIC_AUTH_LOGOUT_URL}/${userId}`;

  const res = await fetch(API_URL, {
    method: "POST",
    credentials: "include",
  });

  // Backend returns only: false
  const text = await res.text();

  // Treat ANY response as logout success
  return { success: true };
}
