"use client";
import FaqHero from "../../components/Faq/Sections/FaqHero/FaqHero";
import FaqQuestions from "../../components/Faq/Sections/FaqQuestions/FaqQuestions";
import FaqHelp from "../../components/Faq/Sections/FaqHelp/FaqHelp";
import FaqCta from "../../components/Faq/Sections/FaqCta/FaqCta";

export default function FaqPage() {
    return (
        <div>
            <FaqHero />
            <FaqQuestions />
            <FaqHelp />
            <FaqCta />
        </div>
    )
}
