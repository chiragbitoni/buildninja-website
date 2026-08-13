"use client";

import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import posthog from "posthog-js";

import CenteredHeroSection from "@/components/Home/CenteredHeroSection";
import WorksWith from "@/components/Home/WorksWith";
import WhySelfHosted from "@/components/Home/WhySelfHosted";

import HowNinjaCompares from "@/components/Home/HowNinjaCompares";
import SocialProof from "@/components/Home/SocialProof";
import TrustBanner from "@/components/Home/TrustBanner";
import AIRoadmap from "@/components/Home/AIRoadmap";
import FAQSection from "@/components/Home/FAQSection";
import CTASection from "@/components/Home/CTASection";

function SectionTracker({ name, children }) {
  const ref = useRef(null);
  const tracked = useRef(false);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && !tracked.current) {
      tracked.current = true;
      posthog.capture("section_viewed", { section: name });
    }
  }, [isInView, name]);

  return <div ref={ref}>{children}</div>;
}

export default function HomePage() {
  return (
    <>
      <SectionTracker name="centered_hero"><CenteredHeroSection /></SectionTracker>
      <SectionTracker name="works_with"><WorksWith /></SectionTracker>
      <SectionTracker name="why_self_hosted"><WhySelfHosted /></SectionTracker>

      <SectionTracker name="how_ninja_compares"><HowNinjaCompares /></SectionTracker>
      {/* <SectionTracker name="social_proof"><SocialProof /></SectionTracker> */}
      <SectionTracker name="ai_roadmap"><AIRoadmap /></SectionTracker>
      <SectionTracker name="faq"><FAQSection /></SectionTracker>
      <SectionTracker name="trust_banner"><TrustBanner /></SectionTracker>
      <SectionTracker name="cta"><CTASection /></SectionTracker>
    </>
  );
}
