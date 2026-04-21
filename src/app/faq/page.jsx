import FaqPage from "./FAQPage";

export const metadata = {
    title: "Frequently Asked Questions | FAQ",
    description: "Find answers to common questions about BuildNinja CI/CD, installation, pricing, security, and enterprise features.",
    keywords: ["BuildNinja FAQ", "CI/CD questions", "self-hosted DevOps FAQ", "build server security", "enterprise CI/CD answers"],
    alternates: {
        canonical: "https://buildninja.grapehub.io/faq",
    },
};

export default function Faq() {
    return (
   <FaqPage/>
    )
}
