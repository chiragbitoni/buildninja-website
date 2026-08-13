/**
 * emailCache.js
 * In-memory cache for the downloader's email. No cookies, no session/local
 * storage. Survives client-side (SPA) navigation only; resets on full reload.
 */

const CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes

let cachedUser = null;

/**
 * Get the cached email user if the cache is still valid.
 * @returns {{ userId: string | null, email: string } | null}
 */
export function getCachedEmailUser() {
  if (!cachedUser) return null;

  if (Date.now() > cachedUser.expiresAt) {
    cachedUser = null;
    return null;
  }

  return { userId: cachedUser.userId, email: cachedUser.email };
}

/**
 * Cache the email (and optional userId) for 10 minutes.
 * @param {{ userId?: string | null, email: string }} user
 */
export function setCachedEmailUser(user) {
  if (!user?.email) return;

  cachedUser = {
    userId: user.userId || null,
    email: user.email,
    expiresAt: Date.now() + CACHE_TTL_MS,
  };
}

/**
 * Clear the cached email user.
 */
export function clearCachedEmailUser() {
  cachedUser = null;
}
