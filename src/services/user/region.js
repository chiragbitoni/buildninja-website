export async function fetchUserRegionAPI() {
  try {
    const url = (process.env.NEXT_PUBLIC_USR_SVC_URL || "") + "/api/User/region";
    const res = await fetch(url, { cache: "no-store", method: "GET" });
    
    if (!res.ok) {
      return null;
    }
    
    const data = await res.text();
    try {
      const json = JSON.parse(data);
      // Expected API format: {"success":true, "country_code":"IN", ...}
      return json.country_code || null;
    } catch(e) {
      return data.trim();
    }
  } catch (err) {
    console.error("API error fetching user region:", err);
    return null;
  }
}
