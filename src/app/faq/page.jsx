import FaqPage from "./FAQPage";
import { thirdSectionText } from "../../../public/static/faqPageText";

export const metadata = {
    title: "Frequently Asked Questions | FAQ",
    description: "Find answers to common questions about BuildNinja CI/CD, installation, pricing, security, and enterprise features.",
    keywords: ["BuildNinja FAQ", "CI/CD questions", "self-hosted DevOps FAQ", "build server security", "enterprise CI/CD answers"],
    alternates: {
        canonical: "https://buildninja.grapehub.io/faq",
    },
};

export default function Faq() {
    // Generate dynamic, search-compliant FAQPage JSON-LD schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": thirdSectionText.faqs.flatMap(category =>
            category.faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer.replace(/<[^>]*>/g, "") // Clean HTML tags for compliant schema formatting
                }
            }))
        )
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <FaqPage />
        </>
    );
}
