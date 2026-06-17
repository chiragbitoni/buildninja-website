import { fetchGrapeHubPage } from "@/services/grapehub/fetchPage";
import ContactPageClient from "./ContactPageClient";

export const metadata = {
  title: "Contact Us | BuildNinja",
  description: "Have questions or need assistance? Contact the BuildNinja team at GrapeCity India for inquiries, sales, and support.",
  alternates: {
    canonical: "https://buildninja.grapehub.io/contact",
  },
  openGraph: {
    title: "Contact Us | BuildNinja",
    description: "Have questions or need assistance? Contact the BuildNinja team at GrapeCity India for inquiries, sales, and support.",
    url: "https://buildninja.grapehub.io/contact",
    siteName: "BuildNinja",
    type: "website",
  },
};

export default async function ContactPage() {
  const grapehubContactHtml = await fetchGrapeHubPage("contact");

  const contactSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://buildninja.grapehub.io" },
          { "@type": "ListItem", position: 2, name: "Contact", item: "https://buildninja.grapehub.io/contact" },
        ],
      },
      {
        "@type": "ContactPage",
        "@id": "https://buildninja.grapehub.io/contact",
        name: "Contact BuildNinja",
        description: "Have questions or need assistance? Contact the BuildNinja team at GrapeCity India for inquiries, sales, and support.",
        publisher: { "@id": "https://buildninja.grapehub.io/#organization" },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <ContactPageClient grapehubContactHtml={grapehubContactHtml} />
    </>
  );
}
