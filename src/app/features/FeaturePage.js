"use client";
import Hero from "../../components/Features/Sections/Hero/Hero";
import Second from "../../components/Features/Sections/Second/Second";
import Third from "../../components/Features/Sections/Third/Third";

export const metadata = {
  alternates: {
    canonical: "https://buildninja.grapehub.io/features",
  },
  title: "Features",
};

export default function FeaturesPage() {
  return (
    <div>
      <Hero />
      <Second />
      <Third />
    </div>
  );
}
