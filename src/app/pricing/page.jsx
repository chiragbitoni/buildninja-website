"use client";
import Hero from "../components/Pricing/Sections/Hero/Hero";
// import Second from "../components/Pricing/Sections/Second/Second";
import Third from "../components/Pricing/Sections/Third/Third";
import Table from "../components/Pricing/Sections/Table/Table";
import Fourth from "../components/Pricing/Sections/Fourth/Fourth";
import Fifth from "../components/Pricing/Sections/Fifth/Fifth";
import Sixth from "../components/Pricing/Sections/Sixth/Sixth";
import Seventh from "../components/Pricing/Sections/Seventh/Seventh";
import Eighth from "../components/Pricing/Sections/Eighth/Eighth";
export default function Pricing() {
  return (
    <div >
      <Hero />
      {/* <Second /> */}
      <Third />
      <Table />
      <Fourth />
      <Fifth />
      <Sixth />
      <Seventh />
      <Eighth />
    </div>
  );
}