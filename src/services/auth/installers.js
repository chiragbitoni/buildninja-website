export async function fetchInstallers() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_USR_SVC_URL}/api/Installers/list`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });

  if (!res.ok) throw new Error("Failed to fetch installers");

  return res.json();
}

// Download file endpoint
// @param {{ userId?: string | null, email?: string }} user - user from the in-memory email cache
export async function downloadInstaller(fileName, user = {}) {
  try {
    // Build full URL using env variable
    const url = `${process.env.NEXT_PUBLIC_USR_SVC_URL}/api/Installers/download/${fileName}`;

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

    if (!res.ok) throw new Error("Download failed");

    // Convert response to file & download
    const blob = await res.blob();
    const href = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = href;
    a.download = fileName;
    a.click();

    URL.revokeObjectURL(href);

  } catch (error) {
    console.error(error);
    alert("Failed to download file");
  }
}