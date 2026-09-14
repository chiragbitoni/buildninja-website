import LandingPage from "./LandingPage";

export const metadata = {
  title: { absolute: "DevOps Made Simple - BuildNinja | Landing Page" },
  description: "Experience the speed and security of BuildNinja self-hosted CI/CD platform. Standardize your build pipelines and optimize your release cycles today.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://www.buildninja.io/landing-page",
  },
  openGraph: {
    title: "DevOps Made Simple - BuildNinja | Landing Page",
    description: "Experience the speed and security of BuildNinja self-hosted CI/CD platform. Standardize your build pipelines and optimize your release cycles today.",
    url: "https://www.buildninja.io/landing-page",
    siteName: "BuildNinja",
    images: [
      {
        url: "https://www.buildninja.io/resources/BuildNinja.png",
        width: 1200,
        height: 630,
        alt: "BuildNinja CI/CD Landing Page",
      },
    ],
    type: "website",
  },
};

export default function Landing() {
  return <LandingPage />;
}
