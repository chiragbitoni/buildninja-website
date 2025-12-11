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
import PostHogPageView from "./components/Analytics/posthog-pageview";
import { Suspense } from "react";
import PosthogWrapper from "./components/Analytics/PostHogWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BuildNinja | Stop Fighting Your CI/CD Tool",
  description: "Build Ninja - The Ultimate Build System for Developers",
  icons: {
    icon: paths.icons.favicon,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
