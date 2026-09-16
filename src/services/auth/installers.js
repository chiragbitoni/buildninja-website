export async function fetchInstallers() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_USR_SVC_URL}/api/Installers/list`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });

  if (!res.ok) throw new Error("Failed to fetch installers");

  return res.json();
}

// Build-time fetch so the installer list is baked into the static page and
// users never wait on a runtime request. Throws so `next build` fails when
// installers cannot be fetched - the install page must never ship without
// live installer data (same pattern as the plans build fetch).
export async function fetchInstallersForBuild() {
  const url = `${process.env.NEXT_PUBLIC_USR_SVC_URL}/api/Installers/list`;

  let res;
  try {
    res = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      // force-cache: runs once at build time (avoids Next treating the
      // route as dynamic via revalidate: 0, which static export forbids)
      cache: "force-cache",
    });
  } catch (err) {
    const message = `[Install Build] Installers not fetched - build aborted. Installer service unreachable at ${url}: ${err.message}`;
    console.error(message);
    throw new Error(message);
  }

  if (!res.ok) {
    const message = `[Install Build] Installers not fetched - build aborted. Installer service returned HTTP ${res.status} ${res.statusText} for ${url}`;
    console.error(message);
    throw new Error(message);
  }

  let installers;
  try {
    installers = await res.json();
  } catch (err) {
    const message = `[Install Build] Installers not fetched - build aborted. Invalid JSON response from ${url}: ${err.message}`;
    console.error(message);
    throw new Error(message);
  }

  return installers;
}

// Download file endpoint
// @param {{ userId?: string | null, email?: string }} user - user from the in-memory email cache
export async function downloadInstaller(fileName, user = {}) {
  const url = `${process.env.NEXT_PUBLIC_USR_SVC_URL}/api/Installers/download/${encodeURIComponent(fileName)}`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      userId: user?.userId || null,
      email: user?.email || null,
    }),
  });

  if (!res.ok) throw new Error(`Download failed with status ${res.status}`);

  const blob = await res.blob();
  const href = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = href;
  a.download = fileName;
  a.click();

  URL.revokeObjectURL(href);
}
