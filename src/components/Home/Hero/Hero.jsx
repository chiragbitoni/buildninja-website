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
                <div className="heroButtonsContainer">
                    <div className="heroButtonsRow">
                        <button className="demoBtn" onClick={() => { router.push("/install") }}>{heroSectionText.primaryButton}</button>
                        <button className="heroBtn" onClick={() => dispatch(openVideo({ videoId: process.env.NEXT_PUBLIC_YOUTUBE_VIDEO_ID, title: "BuildNinja", ctaText: "Self Hosted CI/CD That Just Works" }))}>{heroSectionText.secondaryButton}</button>
                    </div>
                    <div className="heroButtonsRow">
                        <button
                            className="sandboxBtn"
                            onClick={() => window.open("https://buildninja-stage.grapehub.io/dojo", "_self")}
                        >
                            Try the Dojo
                        </button>
                    </div>
                </div>

                <div className="heroCarousel">
                    <BuildNinjaDemo />
                </div>
            </div>
        </section>
    );
}
