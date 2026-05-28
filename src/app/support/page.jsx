import SupportPage from "./Supportpage";

export const metadata = {
<<<<<<< HEAD
<<<<<<< HEAD
  title: { absolute: "BuildNinja Support | CI/CD Help & Technical Assistance" },
  description: "Get technical support and help for your BuildNinja CI/CD platform. Contact our team to resolve your DevOps issues, streamline your pipeline, and maximize deployment efficiency.",
  keywords: ["BuildNinja support", "CI/CD technical assistance", "DevOps troubleshooting", "pipeline support", "customer succeed DevOps", "CI/CD help"],
=======
  title: "BuildNinja Support & Technical Assistance | Support",
  description: "Need help? Access our documentation, join the community, or contact our technical support team for BuildNinja CI/CD assistance.",
  keywords: ["BuildNinja support", "CI/CD technical assistance", "DevOps help", "build automation documentation", "continuous integration support"],
>>>>>>> dojo-banner
=======
  title: { absolute: "BuildNinja Support | CI/CD Help & Technical Assistance" },
  description: "Get technical support and help for your BuildNinja CI/CD platform. Contact our team to resolve your DevOps issues, streamline your pipeline, and maximize deployment efficiency.",
  keywords: ["BuildNinja support", "CI/CD technical assistance", "DevOps troubleshooting", "pipeline support", "customer succeed DevOps", "CI/CD help"],
>>>>>>> 626eba93133d1b9c50d7dc0c5356d0da54429c82
  alternates: {
    canonical: "https://buildninja.grapehub.io/support",
  },
  openGraph: {
    title: "BuildNinja Support & Technical Assistance | Support",
    description: "Need help? Access our documentation, join the community, or contact our technical support team for BuildNinja CI/CD assistance.",
    url: "https://buildninja.grapehub.io/support",
    siteName: "BuildNinja",
    images: [
      {
        url: "https://buildninja.grapehub.io/resources/BuildNinja.png",
        width: 1200,
        height: 630,
        alt: "BuildNinja CI/CD Support",
      },
    ],
    type: "website",
  },
};

export default function Support() {
  return <SupportPage />;
}
