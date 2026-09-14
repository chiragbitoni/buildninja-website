import { LegalPage } from "../../components/MarketingSite/app/legal-page";

export const metadata = {
  title: { absolute: "Privacy Policy | BuildNinja" },
  description: "Read BuildNinja's Privacy Policy to understand how we collect, use, and protect your personal information while ensuring transparency and data security.",
  alternates: {
    canonical: "https://www.buildninja.io/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | BuildNinja",
    description: "Read BuildNinja's Privacy Policy to understand how we collect, use, and protect your personal information while ensuring transparency and data security.",
    url: "https://www.buildninja.io/privacy-policy",
    siteName: "BuildNinja",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return <LegalPage route="privacy-policy" />;
}
