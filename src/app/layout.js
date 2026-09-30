import { Geist, Geist_Mono } from "next/font/google";
import { fetchGrapeHubBlogPosts } from "@/services/grapehub/fetchPage";
import { ReduxProvider } from "@/redux/ReduxProvider";
import ClientAuthProvider from "./ClientAuthProvider";
import GoogleAnalytics from "../components/Analytics/GA";
import PHProviderWrapper from "../components/Analytics/Providers";
import PosthogWrapper from "../components/Analytics/PostHogWrapper";
import "./globals.css";
import "./animations.css";
import "../components/MarketingSite/app/site-base.css";
import "../components/MarketingSite/app/design-system.css";
import "../components/MarketingSite/app/announcement-bar.css";
import "../components/MarketingSite/app/story-layout.css";
import "../components/MarketingSite/app/product-pages.css";
import "../components/MarketingSite/app/dashboard-preview.css";
import "../components/MarketingSite/app/ai-runner-demo.css";
import "../components/MarketingSite/app/product-previews.css";
import "../components/MarketingSite/app/brand-logo.css";
import "../components/MarketingSite/app/marketing-home.css";
import "../components/MarketingSite/app/animation-scenes.css";
import "../components/MarketingSite/app/developer-page.css";
import "react-international-phone/style.css";
import "./site-theme.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import SchemaScript from "@/components/SchemaScript";
import SiteFrame from "./SiteFrame";

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
      "@id": "https://www.buildninja.io/#organization",
      name: "BuildNinja",
      url: "https://www.buildninja.io",
      logo: "https://www.buildninja.io/resources/BuildNinja.png",
      sameAs: [
        "https://www.linkedin.com/showcase/build-ninja/",
        "https://www.instagram.com/GrapeHubindia/",
        "https://www.facebook.com/GrapeHubIndiaPvtLtd",
        "https://www.youtube.com/@BuildNinja_CICD",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.buildninja.io/#website",
      url: "https://www.buildninja.io",
      name: "BuildNinja",
      publisher: {
        "@id": "https://www.buildninja.io/#organization",
      },
    },
  ],
};
export const metadata = {
  metadataBase: new URL("https://www.buildninja.io"),
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

  openGraph: {
    title: "BuildNinja – Self hosted CI/CD platform",
    description:
      "BuildNinja helps developers manage software development life cycle efficiently with advanced CI/CD technology, real-time collaboration, and zero downtime updates.",
    url: "https://www.buildninja.io/",
    siteName: "BuildNinja",
    type: "website",
    images: [
      {
        url: "https://www.buildninja.io/resources/BuildNinja.png",
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
    images: ["https://www.buildninja.io/resources/BuildNinja.png"],
  },
  verification: {
    google: [
      "TXxGesv5AA45OhGIYqDoLArrrfIWPRPpi8LV5hYQAK8",
      "xTvvvmy_SGaQ3obul5vGL6LMggN_L4OC9EqzTSZ9_0E",
    ],
  },
};

export default async function RootLayout({ children }) {
  let blogPosts = [];
  try {
    const posts = await fetchGrapeHubBlogPosts();
    blogPosts = [...posts].sort(
      (a, b) => new Date(b.firstPublishedDate) - new Date(a.firstPublishedDate)
    );
  } catch (e) {}

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="sitemap" type="application/xml" title="Sitemap" href="https://www.buildninja.io/sitemap.xml" />
        <SchemaScript />
        <script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <GoogleAnalytics GA_ID={process.env.NEXT_PUBLIC_GA_ID} />
      </head>
      <body className={`min-h-screen ${geistSans.variable} ${geistMono.variable}`}>
        <PHProviderWrapper>
          <PosthogWrapper />
          <ReduxProvider>
            <ThemeProvider
              attribute={["class", "data-theme"]}
              storageKey="buildninja-theme"
              defaultTheme="light"
              enableSystem={false}
            >
              <ClientAuthProvider>
                <SiteFrame blogPosts={blogPosts}>
                  {children}
                </SiteFrame>
              </ClientAuthProvider>
            </ThemeProvider>
          </ReduxProvider>
        </PHProviderWrapper>
      </body>
    </html>
  );
}
