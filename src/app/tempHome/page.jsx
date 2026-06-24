import {
  TempHero,
  TempWhatIs,
  TempComparison,
  TempWhySelfHosted,
  TempPersonas,
  TempFeatures,
  TempFAQ,
  TempCTABanner,
} from "@/components/TempHome";

export default function TempHomePage() {
  return (
    <>
      <TempHero />
      <TempWhatIs />
      <TempComparison />
      <TempWhySelfHosted />
      <TempPersonas />
      <TempFeatures />
      <TempFAQ />
      <TempCTABanner />
    </>
  );
}
