export function getToken() {
  if (typeof window === "undefined") return null;
  return sessionStorage.getItem("buildNinjaAccess");
}

export function saveToken(token) {
  if (typeof window === "undefined") return;
  sessionStorage.setItem("buildNinjaAccess", token);
}

export function removeToken() {
  if (typeof window === "undefined") return;
  sessionStorage.removeItem("buildNinjaAccess");
}
