"use client";
import Hero from "../../app/components/Install/Sections/Hero/Hero"
import Fifth from "../components/Install/Sections/Fifth/Fifth";
import InstallForm from "../components/Install/Sections/InstallForm/InstallForm";
import Fourth from "../components/Install/Sections/Fourth/Fourth";
import Second from "../components/Install/Sections/Second/Second";
import Third from "../components/Install/Sections/Third/Third";
export default function Install() {
  return (
    <div >
      <Hero />
      <Second />
      <InstallForm />
      <Third />
      <Fourth />
      <Fifth />
    </div>
  );
}