import { LegalPage } from "../../components/MarketingSite/app/legal-page";

export const metadata = {
  title: { absolute: "Terms of Service | BuildNinja" },
  description: "Read BuildNinja's Terms and Conditions outlining the rules, responsibilities, and policies governing the use of our website, products, and services.",
  alternates: {
    canonical: "https://www.buildninja.io/terms-of-service",
  },
  openGraph: {
    title: "Terms of Service | BuildNinja",
    description: "Read BuildNinja's Terms and Conditions outlining the rules, responsibilities, and policies governing the use of our website, products, and services.",
    url: "https://www.buildninja.io/terms-of-service",
    siteName: "BuildNinja",
    type: "website",
  },
};

export default function TermsOfServicePage() {
  return <LegalPage route="terms-of-service" />;
}
