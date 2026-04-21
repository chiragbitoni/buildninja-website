import SupportPage from "./Supportpage";

export const metadata = {
  title: "BuildNinja Support & Technical Assistance | Support",
  description: "Need help? Access our documentation, join the community, or contact our technical support team for BuildNinja CI/CD assistance.",
  keywords: ["BuildNinja support", "CI/CD technical assistance", "DevOps help", "build automation documentation", "continuous integration support"],
  alternates: {
    canonical: "https://buildninja.grapehub.io/support",
  },
};

export default function Support() {
  return <SupportPage />;
}
