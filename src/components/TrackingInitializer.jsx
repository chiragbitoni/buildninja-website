"use client";

import { useEffect } from "react";
import { initTracking } from "@/lib/tracking/initTracking";

export default function TrackingInitializer() {
  useEffect(() => {
    initTracking();
  }, []);

  return null;
}