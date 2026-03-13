"use client";

import HeroSection from "@/components/Home/HeroSection";
import CTASection from "@/components/Home/CTASection";
import FeaturesGrid from "@/components/Home/FeaturesGrid";
import HowItWorks from "@/components/Home/HowItWorks";
import SocialProof from "@/components/Home/SocialProof";
import WorksWith from "@/components/Home/WorksWith";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WorksWith />
      <FeaturesGrid />
      <HowItWorks />
      {/* <SocialProof /> */}
      {/* <CTASection /> */}
    </>
  );
}
