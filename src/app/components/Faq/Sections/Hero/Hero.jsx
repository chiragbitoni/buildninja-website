import './Hero.css';
import { heroSectionText } from "../../../../../../public/static/faqPageText";
export default function Hero() {
    return (
        <section className="faqHeroSection">
            <div className="faqHeroContent">
                <p className="faqHeroHighlight">{heroSectionText.highlight}</p>
                <h1 className="faqHeroTitle">
                    {heroSectionText.title} <br />
                </h1>
                <p className="faqHeroSubtitle">
                    {heroSectionText.subTitle}<br />
                </p>
            </div>
        </section>
    );
}
