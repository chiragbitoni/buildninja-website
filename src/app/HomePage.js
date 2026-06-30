"use client";

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

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhatIsNinja />
      {/* <HowItWorks /> */}
      {/* <SocialProof /> */}
      <WhoUsesNinja />
      <WhySelfHosted />
      <CoreCapabilities />
      <WorksWith />
      <HowNinjaCompares />
      {/* <FeaturesGrid /> */}

      {/* <PricingTeaser /> */}
      <AIRoadmap />
      <FAQSection />
      <CTASection />
    </>
  );
}
