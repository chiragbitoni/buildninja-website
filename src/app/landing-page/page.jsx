import LandingPage from "./LandingPage";

export const metadata = {
  title: { absolute: "Self-Hosted CI/CD with kenzoAI | BuildNinja" },
  description: "Explore BuildNinja: self-hosted CI/CD for pipeline automation and build visibility, with kenzoAI insights for logs, configurations, and code changes.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://www.buildninja.io/landing-page",
  },
  openGraph: {
    title: "Self-Hosted CI/CD with kenzoAI | BuildNinja",
    description: "Explore BuildNinja: self-hosted CI/CD for pipeline automation and build visibility, with kenzoAI insights for logs, configurations, and code changes.",
    url: "https://www.buildninja.io/landing-page",
    siteName: "BuildNinja",
    images: [
      {
        url: "https://www.buildninja.io/resources/BuildNinja.png",
        width: 1200,
        height: 630,
        alt: "BuildNinja self-hosted CI/CD with kenzoAI",
      },
    ],
    type: "website",
  },
};

export default function Landing() {
  return <LandingPage />;
}
