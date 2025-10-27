import Image from "next/image";
import './Hero.css';
import { heroSectionText } from "../../../../../../public/static/homePageText";
export default function Hero() {
    return (
        <section className="heroSection">
            <div className="heroContent">
                <h1 className="heroTitle">
                    {heroSectionText.title1} <br />
                    {heroSectionText.title2}
                </h1>
                <p className="heroSubtitle">
                    {heroSectionText.subtitle1}<br />
                    {heroSectionText.subtitle2}<br />
                    {heroSectionText.subtitle3}
                </p>
                <div className="heroButtons">
                    <button className="heroBtn">{heroSectionText.primaryButton}</button>
                    <button className="demoBtn">{heroSectionText.secondaryButton}</button>
                </div>
            </div>
            <div className="dashboardImageWrapper">
                <Image
                    width={600}
                    height={400}
                    src="/resources/dashboardWhite.png"
                    alt="Dashboard preview"
                    className="dashboardImage"
                    sizes="50vw"
                    priority
                />
            </div>
        </section>
    );
}
