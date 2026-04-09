"use client";
import LandingHero from "../../components/Landing/Sections/LandingHero/LandingHero";
import LandingFeatures from "../../components/Landing/Sections/LandingFeatures/LandingFeatures";
import LandingAbout from "../../components/Landing/Sections/LandingAbout/LandingAbout";

export default function LandingPage(){
    return (
        <main>
            <LandingHero />
            <LandingFeatures />
            <LandingAbout />
        </main>
    );
}