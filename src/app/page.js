"use client";
import Hero from "./components/Home/Sections/Hero/Hero";
import Second from "./components/Home/Sections/Second/Second";
import Third from "./components/Home/Sections/Third/Third";
import Fourth from "./components/Home/Sections/Fourth/Fourth";
import Fifth from "./components/Home/Sections/Fifth/Fifth";
import Sixth from "./components/Home/Sections/Sixth/Sixth";
import Seventh from "./components/Home/Sections/Seventh/Seventh";
import Eighth from "./components/Home/Sections/Eighth/Eighth";
import Ninth from "./components/Home/Sections/Ninth/Ninth";
export default function Home() {
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
      <Ninth />
    </div>
  );
}