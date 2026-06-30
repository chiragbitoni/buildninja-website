"use client";

import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import posthog from "posthog-js";

import HeroSection from "@/components/Home/HeroSection";
import CTASection from "@/components/Home/CTASection";
import AIRoadmap from "@/components/Home/AIRoadmap";
import FAQSection from "@/components/Home/FAQSection";
import WorksWith from "@/components/Home/WorksWith";
// import SocialProof from "@/components/Home/SocialProof";
// import HowItWorks from "@/components/Home/HowItWorks";
import WhatIsNinja from "@/components/Home/WhatIsNinja";
import WhySelfHosted from "@/components/Home/WhySelfHosted";
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
      <SectionTracker name="what_is_ninja"><WhatIsNinja /></SectionTracker>
      {/* <HowItWorks /> */}
      {/* <SocialProof /> */}
      <SectionTracker name="who_uses_ninja"><WhoUsesNinja /></SectionTracker>
      <SectionTracker name="why_self_hosted"><WhySelfHosted /></SectionTracker>
      <SectionTracker name="core_capabilities"><CoreCapabilities /></SectionTracker>
      <SectionTracker name="works_with"><WorksWith /></SectionTracker>
      <SectionTracker name="how_ninja_compares"><HowNinjaCompares /></SectionTracker>
      {/* <FeaturesGrid /> */}

      {/* <PricingTeaser /> */}
      <SectionTracker name="ai_roadmap"><AIRoadmap /></SectionTracker>
      <SectionTracker name="faq"><FAQSection /></SectionTracker>
      <SectionTracker name="cta"><CTASection /></SectionTracker>
    </>
  );
}
