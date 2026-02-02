import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Nav/NavBar";
import { ReduxProvider } from "@/redux/ReduxProvider";
import { paths } from "../../public/static/paths";
import Footer from "./components/Footer/Footer";
import ClientAuthProvider from "./ClientAuthProvider";
import GoogleAnalytics from "./components/Analytics/GA";
import YouTubePopup from "./components/YouTubePopup/YouTubePopup";
import PHProviderWrapper from "./components/Analytics/Providers";
import PosthogWrapper from "./components/Analytics/PostHogWrapper";
import Script from "next/script";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://buildninja.grapehub.io/#organization",
      name: "BuildNinja",
      url: "https://buildninja.grapehub.io",
      logo: "https://buildninja.grapehub.io/resources/BuildNinja.png",
      sameAs: [
        "https://www.linkedin.com/company/grapecityindiapvtltd/",
        "https://www.instagram.com/grapecityindia/",
        "https://www.facebook.com/GrapeCityIndiaPvtLtd",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://buildninja.grapehub.io/#website",
      url: "https://buildninja.grapehub.io",
      name: "BuildNinja",
      publisher: {
        "@id": "https://buildninja.grapehub.io/#organization",
      },
    },
  ],
};
export const metadata = {
  title: {
    default: "BuildNinja – Self Hosted CI/CD Platform",
    template: "%s | BuildNinja",
  },
  description:
    "BuildNinja helps developers manage software development life cycle efficiently with advanced CI/CD technology, real-time collaboration, and zero downtime updates.",

  alternates: {
    canonical: "https://buildninja.grapehub.io/",
  },

  icons: {
    icon: paths.icons.favicon,
  },

  openGraph: {
    title: "BuildNinja – Self hosted CI/CD platform",
    description:
      "BuildNinja helps developers manage software development life cycle efficiently with advanced CI/CD technology, real-time collaboration, and zero downtime updates.",
    url: "https://buildninja.grapehub.io/",
    siteName: "BuildNinja",
    type: "website",
    images: [
      {
        url: "https://buildninja.grapehub.io/resources/BuildNinja.png",
        width: 1200,
        height: 630,
        alt: "BuildNinja CI/CD platform",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "BuildNinja – Self hosted CI/CD platform",
    description:
      "BuildNinja helps developers manage software development life cycle efficiently with advanced CI/CD technology, real-time collaboration, and zero downtime updates.",
    images: ["https://buildninja.grapehub.io/resources/BuildNinja.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <GoogleAnalytics GA_ID={process.env.NEXT_PUBLIC_GA_ID} />
      </head>
      <body
        className={`min-h-screen ${geistSans.variable} ${geistMono.variable}`}
      >
        <PHProviderWrapper>
          <PosthogWrapper />
          <ReduxProvider>
            <ClientAuthProvider>
              <Navbar />
              <main className="pt-16">
                <YouTubePopup />
                {children}
              </main>
              <Footer />
            </ClientAuthProvider>
          </ReduxProvider>
        </PHProviderWrapper>
      </body>
    </html>
  );
}
