import FaqPage from "./FAQPage";
import { thirdSectionText } from "../../../public/static/faqPageText";

export const metadata = {
<<<<<<< HEAD
<<<<<<< HEAD
    title: { absolute: "CI/CD Platform FAQ & DevOps Support" },
    description: "Got questions about setting up a self-hosted CI/CD pipeline? Browse our BuildNinja FAQ for answers to common DevOps, installation, and deployment queries.",
    keywords: ["CI/CD FAQ", "DevOps support", "BuildNinja troubleshooting", "self-hosted CI/CD setup", "pipeline deployment questions", "DevOps platform queries"],
=======
    title: "Frequently Asked Questions | FAQ",
    description: "Find answers to common questions about BuildNinja CI/CD, installation, pricing, security, and enterprise features.",
    keywords: ["BuildNinja FAQ", "CI/CD questions", "self-hosted DevOps FAQ", "build server security", "enterprise CI/CD answers"],
>>>>>>> dojo-banner
=======
    title: { absolute: "CI/CD Platform FAQ & DevOps Support" },
    description: "Got questions about setting up a self-hosted CI/CD pipeline? Browse our BuildNinja FAQ for answers to common DevOps, installation, and deployment queries.",
    keywords: ["CI/CD FAQ", "DevOps support", "BuildNinja troubleshooting", "self-hosted CI/CD setup", "pipeline deployment questions", "DevOps platform queries"],
>>>>>>> 626eba93133d1b9c50d7dc0c5356d0da54429c82
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
