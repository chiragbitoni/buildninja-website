"use client";

import HeroSection from "@/components/Home/HeroSection";
import TrustBanner from "@/components/Home/TrustBanner";
import CTASection from "@/components/Home/CTASection";
import FeaturesGrid from "@/components/Home/FeaturesGrid";
import HowItWorks from "@/components/Home/HowItWorks";
import SocialProof from "@/components/Home/SocialProof";
import WorksWith from "@/components/Home/WorksWith";
import PricingTeaser from "@/components/Home/PricingTeaser";
import AIRoadmap from "@/components/Home/AIRoadmap";
import FAQSection from "@/components/Home/FAQSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WorksWith />
      <FeaturesGrid />
      <HowItWorks />
      <SocialProof />
      <PricingTeaser />
      <AIRoadmap />
      <TrustBanner />
      <FAQSection />
      <CTASection />
    </>
  );
}
