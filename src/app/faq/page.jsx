import FaqPage from "./FAQPage";

export const metadata = {
    title: { absolute: "CI/CD Platform FAQ & DevOps Support" },
    description: "Got questions about setting up a self-hosted CI/CD pipeline? Browse our BuildNinja FAQ for answers to common DevOps, installation, and deployment queries.",
    keywords: ["CI/CD FAQ", "DevOps support", "BuildNinja troubleshooting", "self-hosted CI/CD setup", "pipeline deployment questions", "DevOps platform queries"],
    alternates: {
        canonical: "https://buildninja.grapehub.io/faq",
    },
};

export default function Faq() {
    return (
   <FaqPage/>
    )
}
