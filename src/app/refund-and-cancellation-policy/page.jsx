import { siteUrl } from "@/lib/site-url";
import { LegalPage } from "../../components/MarketingSite/app/legal-page";

export const metadata = {
  title: { absolute: "Refund and Cancellation Policy | BuildNinja" },
  description: "Read BuildNinja's Refund and Cancellation Policy outlining the terms for service withdrawal, refund eligibility, and customer support assistance.",
  alternates: {
    canonical: siteUrl("/refund-and-cancellation-policy"),
  },
  openGraph: {
    title: "Refund and Cancellation Policy | BuildNinja",
    description: "Read BuildNinja's Refund and Cancellation Policy outlining the terms for service withdrawal, refund eligibility, and customer support assistance.",
    url: siteUrl("/refund-and-cancellation-policy"),
    siteName: "BuildNinja",
    type: "website",
  },
};

export default function RefundPolicyPage() {
  return <LegalPage route="refund-and-cancellation-policy" />;
}
