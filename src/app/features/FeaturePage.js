'use client';
import FeatureHero from '../../components/Features/Sections/FeatureHero/FeatureHero';
import FeatureGrid from '../../components/Features/Sections/FeatureGrid/FeatureGrid';
import FeatureHighlights from '../../components/Features/Sections/FeatureCta/FeatureHighlights';
import FeatureCta from '../../components/Features/Sections/FeatureCta/FeatureCta';

export default function FeaturesPage() {
  return (
    <main>
      {/* 1. Hero + Dashboard screenshot */}
      <FeatureHero />

      {/* 2. Feature grid — 9 consolidated feature groups */}
      <FeatureGrid />

      {/* 3. Bento highlight sections — visibility, security, git/ssh */}
      <FeatureHighlights />

      {/* 4. Final CTA */}
      <FeatureCta />
    </main>
  );
}
