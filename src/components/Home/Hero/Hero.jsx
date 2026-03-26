import Image from "next/image";
import './Hero.css';
import { heroSectionText } from "../../../../public/static/homePageText";
import { useRouter } from "next/navigation";
import { openVideo } from "@/redux/slice/videoPopupSlice";
import { useDispatch } from "react-redux";
import Banner from "@/components/Banner/Banner";
import BuildNinjaDemo from "../BuildNinjaDemo";

export default function Hero() {
    const router = useRouter();
    const dispatch = useDispatch();
    return (
        <section className="heroSection">
            <div className="heroContent">
            <Banner/>
                <h1 className="heroTitle">
                    {heroSectionText.title1} <br />
                    {heroSectionText.title2}
                </h1>
                <p className="heroSubtitle">
                    {heroSectionText.subtitle}<br />
                    {heroSectionText.subtitle2}<br />
                    {heroSectionText.subtitle3}
                </p>
                <div className="heroActions">
                    <button className="primaryAction" onClick={() => { router.push("/install") }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
                        {heroSectionText.primaryButton}
                    </button>
                    
                    <button className="secondaryAction" onClick={() => dispatch(openVideo({ videoId: process.env.NEXT_PUBLIC_YOUTUBE_VIDEO_ID, title: "BuildNinja", ctaText: "Self Hosted CI/CD That Just Works" }))}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                        {heroSectionText.secondaryButton}
                    </button>

                    <button className="dojoAction" onClick={() => window.open("https://buildninja-stage.grapehub.io/dojo", "_self")}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
                        Try the Dojo
                    </button>
                </div>

                <div className="heroCarousel">
                    <BuildNinjaDemo />
                </div>
            </div>
        </section>
    );
}
