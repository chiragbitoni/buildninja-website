import { getCookie, setCookie } from "./cookies";

export const initTracking = () => {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams(window.location.search);

  const existingSession = getCookie("gh_session_id");
  const existingUtm = getCookie("gh_utm");

  // Session (create if missing)
  if (!existingSession) {
    setCookie("gh_session_id", crypto.randomUUID());
  }

  // UTM (first-touch only)
  if (!existingUtm) {
    const utm = {
      source: params.get("utm_source"),
      medium: params.get("utm_medium"),
      campaign: params.get("utm_campaign"),
      content: params.get("utm_content"),
    };

    if (utm.source || utm.medium || utm.campaign) {
      setCookie("gh_utm", JSON.stringify(utm));
    }
  }
};