import SupportPage from "./Supportpage";

export const metadata = {
  title: { absolute: "BuildNinja Support | CI/CD Help & Technical Assistance" },
  description: "Get technical support and help for your BuildNinja CI/CD platform. Contact our team to resolve your DevOps issues, streamline your pipeline, and maximize deployment efficiency.",
  keywords: ["BuildNinja support", "CI/CD technical assistance", "DevOps troubleshooting", "pipeline support", "customer succeed DevOps", "CI/CD help"],
  alternates: {
    canonical: "https://buildninja.grapehub.io/support",
  },
};

export default function Support() {
  return <SupportPage />;
}
