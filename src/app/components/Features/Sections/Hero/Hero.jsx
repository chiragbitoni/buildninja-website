import './Hero.css';
import { heroSectionText } from "../../../../../../public/static/featuresPageText";
export default function Hero() {
    return (
        <section className="pricingHeroSection">
            <div className="pricingHeroContent">
                <h1 className="pricingHeroTitle">
                    {heroSectionText.title} <br />
                </h1>
                <p className="pricingHeroSubtitle">
                    {heroSectionText.subtitle}<br />
                </p>              
            </div>
        </section>
    );
}
