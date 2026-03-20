import { getAuthCookie } from "@/lib/cookieAuth";

export function checkAuth() {
  const data = getAuthCookie();
  return Boolean(data?.userId && data?.email);
}
