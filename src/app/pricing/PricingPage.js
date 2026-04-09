"use client";
import PricingHero from "../../components/Pricing/Sections/PricingHero/PricingHero";
import PricingPhilosophy from "../../components/Pricing/Sections/PricingPhilosophy/PricingPhilosophy";
import PricingTable from "../../components/Pricing/Sections/PricingTable/PricingTable";
import PricingValueProp from "../../components/Pricing/Sections/PricingValueProp/PricingValueProp";
import PricingCoreFeatures from "../../components/Pricing/Sections/PricingCoreFeatures/PricingCoreFeatures";
import PricingDetailedSpecs from "../../components/Pricing/Sections/PricingDetailedSpecs/PricingDetailedSpecs";
import PricingFaq from "../../components/Pricing/Sections/PricingFaq/PricingFaq";
import PricingCta from "../../components/Pricing/Sections/PricingCta/PricingCta";

export default function PricingPage() {
  return (
    <div>
      <PricingHero />
      <PricingPhilosophy />
      <PricingTable />
      <PricingValueProp />
      <PricingCoreFeatures />
      <PricingDetailedSpecs />
      <PricingFaq />
      <PricingCta />
    </div>
  );
}
