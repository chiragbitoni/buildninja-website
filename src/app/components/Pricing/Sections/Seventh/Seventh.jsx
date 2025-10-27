import "./Seventh.css";
import { seventhSectionText } from "../../../../../../public/static/pricingPageText";

export default function Seventh(){
    return (
        <section className="seventhPricingSection">
            <h2 className="seventhPricingTitle">{seventhSectionText.title}</h2>
            <div className="seventhPricingButtonContainer">
                <button className="seventhPricingFreeButton">{seventhSectionText.button1}</button>
                <button className="seventhPricingShogunButton">{seventhSectionText.button2}</button>
            </div>
            <p className="seventhPricingDescription">{seventhSectionText.description}</p>
        </section>
    )
}