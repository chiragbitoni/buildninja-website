import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Nav/NavBar";

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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`min-h-screen ${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
