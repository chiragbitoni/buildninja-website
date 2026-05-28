import React from 'react';
import Hero from '@/components/compare-circleci/Hero';
import SnapshotStats from '@/components/compare-circleci/SnapshotStats';
import VerdictCards from '@/components/compare-circleci/VerdictCards';
import ComparisonTable from '@/components/compare-circleci/ComparisonTable';
import CostCalculator from '@/components/compare-circleci/CostCalculator';
import CodeComparison from '@/components/compare-circleci/CodeComparison';
import MigrationGuide from '@/components/compare-circleci/MigrationGuide';
import FAQ from '@/components/compare-circleci/FAQ';
import Recommendation from '@/components/compare-circleci/Recommendation';
import ExploreLinks from '@/components/compare-circleci/ExploreLinks';
import CTABanner from '@/components/compare-circleci/CTABanner';

export const metadata = {
  title: 'BuildNinja vs CircleCI 2026: Full Comparison — Self-Hosted CI/CD vs SaaS',
  description: 'BuildNinja vs CircleCI — honest feature comparison. See why teams switch from CircleCI to BuildNinja: unlimited builds, no seat pricing, self-hosted CI/CD, and full data sovereignty.',
  alternates: {
    canonical: 'https://buildninja.grapehub.io/compare/buildninja-vs-circleci',
  },
};

export default function CompareCircleCIPage() {
  return (
    <>
      <Hero />
      <SnapshotStats />
      <VerdictCards />
      <ComparisonTable />
      <CostCalculator />
      <CodeComparison />
      <MigrationGuide />
      <Recommendation />
      <FAQ />
      <ExploreLinks />
      <CTABanner />
    </>
  );
}
