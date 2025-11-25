export async function checkAuth() {
  if (typeof window === "undefined") return false;

  const userId = localStorage.getItem("userId");
  return !!userId;
}
