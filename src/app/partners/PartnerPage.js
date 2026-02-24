"use client";
import Fifth from "../../components/Partner/Sections/Fifth/Fifth";
import Fourth from "../../components/Partner/Sections/Fourth/Fourth";
import Hero from "../../components/Partner/Sections/Hero/Hero";
import Second from "../../components/Partner/Sections/Second/Second";
import Third from "../../components/Partner/Sections/Third/Third";

export default function PartnerPage(){
    return (<div>
        <Hero/>
        <Second />
        <Third/>
        <Fourth />
        <Fifth />
    </div>)
}