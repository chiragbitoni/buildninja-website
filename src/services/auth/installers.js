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
export async function downloadInstaller(fileName) {
  try {
    // Read user data from localStorage
    const saved = localStorage.getItem("bNEmail");
    if (!saved) throw new Error("User not found in localStorage");

    const user = JSON.parse(saved); // { userId, email }

    // Build full URL using env variable
    const url = `${process.env.NEXT_PUBLIC_USR_SVC_URL}/api/Installers/download/${fileName}`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        userId: user.userId,
        email: user.email,
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
