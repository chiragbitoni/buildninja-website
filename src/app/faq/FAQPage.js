"use client";
import { Suspense } from "react";
import FaqHero from "../../components/Faq/Sections/FaqHero/FaqHero";
import FaqQuestions from "../../components/Faq/Sections/FaqQuestions/FaqQuestions";
import FaqHelp from "../../components/Faq/Sections/FaqHelp/FaqHelp";
import FaqCta from "../../components/Faq/Sections/FaqCta/FaqCta";

export default function FaqPage() {
    return (
        <div>
            <FaqHero />
            <Suspense fallback={<div style={{ minHeight: "100px", background: "var(--color-bg)" }} />}>
                <FaqQuestions />
            </Suspense>
            <FaqHelp />
            <FaqCta />
        </div>
    )
}
