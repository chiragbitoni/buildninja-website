"use client";

import { Suspense } from "react";
import PostHogPageView from "./posthog-pageview";

export default function PosthogWrapper() {
  return (
    <Suspense fallback={null}>
      <PostHogPageView />
    </Suspense>
  );
}
