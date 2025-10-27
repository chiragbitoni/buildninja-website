import './Sixth.css';
import { paths } from "../../../../../../public/static/paths";
import { sixthSectionText } from '../../../../../../public/static/pricingPageText';
export default function Sixth() {
    return (
        <section className="sixthPricingSection">
            <div className="sixthPricingContent">
                <h1 className="sixthPricingTitle">
                    {sixthSectionText.title}
                </h1>

                <div className="sixth-pricing-simple-grid">
                    <div className="sixth-pricing-simple-box">
                        <img src={paths.icons.clock} alt="CDS Icon" className="sixth-pricing-simple-box-icon" />
                        <h3 className="sixth-pricing-simple-box-heading">{sixthSectionText.card1Title}</h3>
                        <p className="sixth-pricing-simple-box-text">{sixthSectionText.card1Text}</p>
                    </div>
                    <div className="sixth-pricing-simple-box">
                        <img src={paths.icons.thunderBlack} alt="Versioning Icon" className="sixth-pricing-simple-box-icon" />
                        <h3 className="sixth-pricing-simple-box-heading">{sixthSectionText.card2Title}</h3>
                        <p className="sixth-pricing-simple-box-text">{sixthSectionText.card2Text}</p>
                    </div>
                    <div className="sixth-pricing-simple-box">
                        <img src={paths.icons.circleGreenCheck} alt="Circle Check Icon" className="sixth-pricing-simple-box-icon" />
                        <h3 className="sixth-pricing-simple-box-heading">{sixthSectionText.card3Title}</h3>
                        <p className="sixth-pricing-simple-box-text">{sixthSectionText.card3Text}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
