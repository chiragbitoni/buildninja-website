"use client"
import Fifth from "../components/Faq/Sections/Fifth/Fifth";
import Fourth from "../components/Faq/Sections/Fourth/Fourth";
import Hero from "../components/Faq/Sections/Hero/Hero";
import Second from "../components/Faq/Sections/Second/Second";
import Third from "../components/Faq/Sections/Third/page";

export const metadata = {
  alternates: {
    canonical: "https://buildninja.grapehub.io/faq",
  },
};

export default function Faq() {
    return (
        <div>
            <Hero />
            <Second />
            <Third />
            <Fourth />
            <Fifth />
        </div>
    )
}
