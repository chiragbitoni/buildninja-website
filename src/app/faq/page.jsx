import FaqPage from "./FAQPage";
import { thirdSectionText } from "../../../public/static/faqPageText";

export const metadata = {
    title: "Frequently Asked Questions | FAQ",
    description: "Find answers to common questions about BuildNinja CI/CD, installation, pricing, security, and enterprise features.",
    keywords: ["BuildNinja FAQ", "CI/CD questions", "self-hosted DevOps FAQ", "build server security", "enterprise CI/CD answers"],
    alternates: {
        canonical: "https://buildninja.grapehub.io/faq",
    },
    openGraph: {
        title: "Frequently Asked Questions | FAQ",
        description: "Find answers to common questions about BuildNinja CI/CD, installation, pricing, security, and enterprise features.",
        url: "https://buildninja.grapehub.io/faq",
        siteName: "BuildNinja",
        images: [
            {
                url: "https://buildninja.grapehub.io/resources/BuildNinja.png",
                width: 1200,
                height: 630,
                alt: "BuildNinja CI/CD FAQ",
            },
        ],
        type: "website",
    },
};

export default function Faq() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": "https://buildninja.grapehub.io/faq#faqpage",
        "mainEntity": thirdSectionText.faqs.flatMap(category =>
            category.faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer.replace(/<[^>]*>/g, "")
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
