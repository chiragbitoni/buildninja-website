import './Hero.css';
import { heroSectionText } from "../../../../../../public/static/installPageText";
export default function Hero() {
    return (
        <section className="installHeroSection">
            <div className="installHeroContent">
                <p className="installHeroHighlight">{heroSectionText.highlight}</p>
                <h1 className="installHeroTitle">
                    {heroSectionText.title} <br />
                </h1>
                <p className="installHeroSubtitle">
                    {heroSectionText.subTitle}<br />
                </p>
            </div>
        </section>
    );
}
