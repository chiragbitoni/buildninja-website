"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";
import YouTubePopup from "../components/YouTubePopup/YouTubePopup";
import TrackingInitializer from "@/components/TrackingInitializer";
import { MarketingShell } from "../components/MarketingSite/app/site-context";
import {
  SiteFooter as MarketingFooter,
  SiteHeader as MarketingHeader,
} from "../components/MarketingSite/app/site-chrome";

export default function SiteFrame({ blogPosts, children }) {
  const { setTheme } = useTheme();

  useEffect(() => {
    const root = document.documentElement;
    const syncTheme = () => {
      const theme = root.classList.contains("dark") ? "dark" : "light";
      root.dataset.theme = theme;
      setTheme(theme);
    };
    syncTheme();

    const observer = new MutationObserver(syncTheme);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, [setTheme]);

  return (
    <MarketingShell>
      <MarketingHeader />
      <div id="site-main">
        <YouTubePopup />
        <TrackingInitializer />
        {children}
      </div>
      <MarketingFooter />
    </MarketingShell>
  );
}
