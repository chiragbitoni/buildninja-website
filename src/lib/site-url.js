const siteBaseUrl = (process.env.NEXT_PUBLIC_BUILDNINJA_URL || "").replace(/\/+$/, "");

export function siteUrl(path = "") {
  if (!path) return siteBaseUrl;
  return `${siteBaseUrl}/${String(path).replace(/^\/+/, "")}`;
}
