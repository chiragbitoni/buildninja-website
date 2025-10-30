import './Hero.css';
import { heroSectionText } from "../../../../../../public/static/featuresPageText";
export default function Hero() {
    return (
        <section className="featuresHeroSection">
            <div className="featuresHeroContent">
                <h1 className="featuresHeroTitle">
                    {heroSectionText.title} <br />
                </h1>
                <p className="featuresHeroSubtitle">
                    {heroSectionText.subtitle}<br />
                </p>              
            </div>
        </section>
    );
}
