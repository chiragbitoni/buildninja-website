"use client";

import Hero from "../components/Home/Hero/Hero";
import Second from "../components/Home/Second/Second";
import Third from "../components/Home/Third/Third";
import Fourth from "../components/Home/Fourth/Fourth";
import Fifth from "../components/Home/Fifth/Fifth";
import Sixth from "../components/Home/Sixth/Sixth";
import Seventh from "../components/Home/Seventh/Seventh";
import Eighth from "../components/Home/Eighth/Eighth";
import SandboxCTA from "../components/Home/SandboxCTA/SandboxCTA";
import Ninth from "../components/Home/Ninth/Ninth";

export default function HomePage() {
  return (
    <div className="homePage">
      <Hero />
      <Second />
      <Fifth />
      <Third />
      <Fourth />
      <Sixth />
      <Seventh />
      <Eighth />
      <SandboxCTA />
      <Ninth />
    </div>
  );
}
