import React from 'react';

// Page components
import Hero from '@/components/compare-github-actions/Hero';
import PricingReality from '@/components/compare-github-actions/PricingReality';
import StructuralWins from '@/components/compare-github-actions/StructuralWins';
import ComparisonTable from '@/components/compare-github-actions/ComparisonTable';
import MidCTA from '@/components/compare-github-actions/MidCTA';
import CostCalculator from '@/components/compare-github-actions/CostCalculator';
import CodeComparison from '@/components/compare-github-actions/CodeComparison';
import MigrationGuide from '@/components/compare-github-actions/MigrationGuide';
import Recommendation from '@/components/compare-github-actions/Recommendation';
import FAQ from '@/components/compare-github-actions/FAQ';
import RelatedPages from '@/components/compare-github-actions/RelatedPages';
import CTABanner from '@/components/compare-github-actions/CTABanner';

export const metadata = {
  title: 'BuildNinja vs GitHub Actions | 2026 Comparison',
  description: 'An honest, detailed comparison between BuildNinja and GitHub Actions. See how unlimited self-hosted builds compare against GitHub per-minute pricing.',
};

export default function BuildNinjaVsGitHubActions() {
  return (
    <>
      <Hero />
      <PricingReality />
      <StructuralWins />
      <ComparisonTable />
      <MidCTA />
      <CostCalculator />
      <CodeComparison />
      <MigrationGuide />
      <Recommendation />
      <FAQ />
      <RelatedPages />
      <CTABanner />
    </>
  );
}
