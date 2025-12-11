export function checkAuth() {
  if (typeof window === "undefined") return false; // SSR safety

  const raw = localStorage.getItem("bNEmail");
  if (!raw) return false;

  try {
    const data = JSON.parse(raw);
    return Boolean(data?.userId && data?.email);
  } catch (e) {
    console.error("Invalid bNEmail in localStorage:", e);
    return false;
  }
}
