"use client";

import YouTubePopup from "../components/YouTubePopup/YouTubePopup";
import TrackingInitializer from "@/components/TrackingInitializer";
import { MarketingShell } from "../components/MarketingSite/app/site-context";
import {
  SiteFooter as MarketingFooter,
  SiteHeader as MarketingHeader,
} from "../components/MarketingSite/app/site-chrome";

export default function SiteFrame({ blogPosts, children }) {
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
