import FaqPage from "./FAQPage";

export const metadata = {
<<<<<<< HEAD
    title: { absolute: "CI/CD Platform FAQ & DevOps Support" },
    description: "Got questions about setting up a self-hosted CI/CD pipeline? Browse our BuildNinja FAQ for answers to common DevOps, installation, and deployment queries.",
    keywords: ["CI/CD FAQ", "DevOps support", "BuildNinja troubleshooting", "self-hosted CI/CD setup", "pipeline deployment questions", "DevOps platform queries"],
=======
    title: "Frequently Asked Questions | FAQ",
    description: "Find answers to common questions about BuildNinja CI/CD, installation, pricing, security, and enterprise features.",
    keywords: ["BuildNinja FAQ", "CI/CD questions", "self-hosted DevOps FAQ", "build server security", "enterprise CI/CD answers"],
>>>>>>> dojo-banner
    alternates: {
        canonical: "https://buildninja.grapehub.io/faq",
    },
};

export default function Faq() {
    return (
   <FaqPage/>
    )
}
