export const getCookie = (name) => {
  if (typeof document === "undefined") return null;

  const match = document.cookie.match(
    new RegExp("(^| )" + name + "=([^;]+)")
  );

  return match ? decodeURIComponent(match[2]) : null;
};

export const setCookie = (name, value, days = 365, overwrite = true) => {
  if (typeof window === "undefined") return;

  if (!overwrite && getCookie(name)) return;

  const hostname = window.location.hostname;

  const domain = hostname.endsWith(".localtest.me")
    ? ".localtest.me"
    : hostname.endsWith(".grapehub.io")
    ? ".grapehub.io"
    : null;

  const expires = new Date();
  expires.setDate(expires.getDate() + days);

  let cookie = `${name}=${encodeURIComponent(
    value
  )}; expires=${expires.toUTCString()}; path=/; SameSite=None`;

  if (domain) cookie += `; domain=${domain}`;
  if (window.location.protocol === "https:") cookie += `; Secure`;

  document.cookie = cookie;
};