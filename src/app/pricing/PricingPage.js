"use client";
import PricingPlans from "../../components/Pricing/Sections/PricingPlans/PricingPlans";
import PricingPhilosophy from "../../components/Pricing/Sections/PricingPhilosophy/PricingPhilosophy";
import PricingValueProp from "../../components/Pricing/Sections/PricingValueProp/PricingValueProp";
import PricingCoreFeatures from "../../components/Pricing/Sections/PricingCoreFeatures/PricingCoreFeatures";
import PricingFaq from "../../components/Pricing/Sections/PricingFaq/PricingFaq";
import PricingCta from "../../components/Pricing/Sections/PricingCta/PricingCta";

export default function PricingPage({ plansData }) {
  return (
    <div>
      <PricingPlans plansData={plansData} />
      <PricingPhilosophy />
      <PricingValueProp />
      <PricingCoreFeatures />
      {/* <PricingDetailedSpecs /> */}
      <PricingFaq />
      <PricingCta />
    </div>
  );
}
