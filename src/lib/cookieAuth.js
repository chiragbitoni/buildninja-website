<<<<<<< HEAD
/**
 * cookieAuth.js
 * Centralized helpers for reading/writing the bNEmail auth cookie.
 * Cookie expires in 30 days by default.
 */

const COOKIE_NAME = "bNEmail";
=======
const COOKIE_NAME = "bNEmailInstall";
>>>>>>> dev
const DEFAULT_EXPIRES_DAYS = 7;

/**
 * Set the auth cookie with an expiry.
 * @param {{ userId: string, email: string }} data
 * @param {number} [expiresDays]
 */
export function setAuthCookie(data, expiresDays = DEFAULT_EXPIRES_DAYS) {
<<<<<<< HEAD
  if (typeof document === "undefined") return; // SSR guard

  const expires = new Date();
  expires.setDate(expires.getDate() + expiresDays);

  const value = encodeURIComponent(JSON.stringify(data));
  document.cookie = `${COOKIE_NAME}=${value}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
=======
    if (typeof document === "undefined") return; // SSR guard

    const expires = new Date();
    expires.setDate(expires.getDate() + expiresDays);

    const value = encodeURIComponent(JSON.stringify(data));
    document.cookie = `${COOKIE_NAME}=${value}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
>>>>>>> dev
}

/**
 * Get the parsed auth cookie value, or null if missing/invalid.
 * @returns {{ userId: string, email: string } | null}
 */
export function getAuthCookie() {
<<<<<<< HEAD
  if (typeof document === "undefined") return null; // SSR guard

  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${COOKIE_NAME}=`));

  if (!match) return null;

  try {
    return JSON.parse(decodeURIComponent(match.split("=").slice(1).join("=")));
  } catch {
    return null;
  }
=======
    if (typeof document === "undefined") return null; // SSR guard

    const match = document.cookie
        .split("; ")
        .find((row) => row.startsWith(`${COOKIE_NAME}=`));

    if (!match) return null;

    try {
        return JSON.parse(decodeURIComponent(match.split("=").slice(1).join("=")));
    } catch {
        return null;
    }
>>>>>>> dev
}

/**
 * Clear the auth cookie (logout).
 */
export function clearAuthCookie() {
<<<<<<< HEAD
  if (typeof document === "undefined") return; // SSR guard
  document.cookie = `${COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Lax`;
=======
    if (typeof document === "undefined") return; // SSR guard
    document.cookie = `${COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Lax`;
>>>>>>> dev
}
