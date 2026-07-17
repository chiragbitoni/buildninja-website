"use client";

import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import posthog from "posthog-js";

import HeroSection from "@/components/Home/HeroSection";
import DevHeroSection from "@/components/Home/DevHeroSection";
import WorksWith from "@/components/Home/WorksWith";
import CTASection from "@/components/Home/CTASection";
import AIRoadmap from "@/components/Home/AIRoadmap";
import FAQSection from "@/components/Home/FAQSection";
// import SocialProof from "@/components/Home/SocialProof";
// import HowItWorks from "@/components/Home/HowItWorks";
import WhatIsNinja from "@/components/Home/WhatIsNinja";
import WhoUsesNinja from "@/components/Home/WhoUsesNinja";
import CoreCapabilities from "@/components/Home/CoreCapabilities";
import HowNinjaCompares from "@/components/Home/HowNinjaCompares";

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
      <SectionTracker name="hero"><HeroSection /></SectionTracker>
      <SectionTracker name="dev_hero"><DevHeroSection /></SectionTracker>
      <SectionTracker name="works_with"><WorksWith /></SectionTracker>
      <SectionTracker name="what_is_ninja"><WhatIsNinja /></SectionTracker>
      {/* <HowItWorks /> */}
      {/* <SocialProof /> */}
      <SectionTracker name="who_uses_ninja"><WhoUsesNinja /></SectionTracker>
      <SectionTracker name="core_capabilities"><CoreCapabilities /></SectionTracker>
      <SectionTracker name="how_ninja_compares"><HowNinjaCompares /></SectionTracker>
      {/* <FeaturesGrid /> */}

      {/* <PricingTeaser /> */}
      <SectionTracker name="ai_roadmap"><AIRoadmap /></SectionTracker>
      <SectionTracker name="faq"><FAQSection /></SectionTracker>
      <SectionTracker name="cta"><CTASection /></SectionTracker>
    </>
  );
}
