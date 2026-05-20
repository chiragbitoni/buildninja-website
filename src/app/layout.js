import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/Nav/NavBar";
import { ReduxProvider } from "@/redux/ReduxProvider";
import { paths } from "../../public/static/paths";
import Footer from "../components/Footer/Footer";
import ClientAuthProvider from "./ClientAuthProvider";
import GoogleAnalytics from "../components/Analytics/GA";
import YouTubePopup from "../components/YouTubePopup/YouTubePopup";
import PHProviderWrapper from "../components/Analytics/Providers";
import PosthogWrapper from "../components/Analytics/PostHogWrapper";
import Script from "next/script";
import "./globals.css";
import "./animations.css";
import Cursor from "@/components/ui/Cursor";
import { ThemeProvider } from "@/components/ThemeProvider";
import DynamicFavicon from "@/components/DynamicFavicon";
import TrackingInitializer from "@/components/TrackingInitializer";

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
        "https://www.linkedin.com/showcase/build-ninja/",
        "https://www.instagram.com/GrapeHubindia/",
        "https://www.facebook.com/GrapeHubIndiaPvtLtd",
        "https://www.youtube.com/@BuildNinja_CICD",
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
  metadataBase: new URL("https://buildninja.grapehub.io"),
  alternates: {
    canonical: "/",
  },
  title: {
    default:
      "Build Ninja Self-Hosted CI/CD DevOps Made Simple |GrapeHub India",
    template: "%s | BuildNinja",
  },
  description:
    "Optimize your DevOps workflow with Build Ninja integrates with GitHub,GitLab & Bitbucket. Deploy in minutes without complexity.Jenkins Alternative Try free today",

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
  verification: {
    google: "TXxGesv5AA45OhGIYqDoLArrrfIWPRPpi8LV5hYQAK8",  
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <GoogleAnalytics GA_ID={process.env.NEXT_PUBLIC_GA_ID} />
      </head>
      <body
        className={`min-h-screen ${geistSans.variable} ${geistMono.variable}`}
      >
        <Cursor />
        <PHProviderWrapper>
          <PosthogWrapper />
          <ReduxProvider>
            <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem>
              <DynamicFavicon />
              <ClientAuthProvider>
                <Navbar />
                <TrackingInitializer />
                <main>
                  <YouTubePopup />
                  {children}
                </main>
                <Footer />
              </ClientAuthProvider>
            </ThemeProvider>
          </ReduxProvider>
        </PHProviderWrapper>
      </body>
    </html>
  );
}
