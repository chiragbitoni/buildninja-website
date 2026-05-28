import LegalContent from "@/components/Legal/LegalContent";
import { fetchGrapeHubPage } from "@/services/grapehub/fetchPage";

export const metadata = {
  title: "Refund and Cancellation Policy | BuildNinja",
  description: "Read BuildNinja's Refund and Cancellation Policy outlining the terms for service withdrawal, refund eligibility, and customer support assistance.",
  alternates: {
    canonical: "https://buildninja.grapehub.io/refund-and-cancellation-policy",
  },
  openGraph: {
    title: "Refund and Cancellation Policy | BuildNinja",
    description: "Read BuildNinja's Refund and Cancellation Policy outlining the terms for service withdrawal, refund eligibility, and customer support assistance.",
    url: "https://buildninja.grapehub.io/refund-and-cancellation-policy",
    siteName: "BuildNinja",
    type: "website",
  },
};

export default async function RefundPolicyPage() {
  const content = await fetchGrapeHubPage("refund-and-cancellation-policy");
  
  return (
    <LegalContent 
      title="Refund & Cancellation"
      description="Read our refund, cancellation, and transaction policies for digital products and subscriptions."
      badge="Legal Documents"
      htmlContent={content}
    />
  );
}
