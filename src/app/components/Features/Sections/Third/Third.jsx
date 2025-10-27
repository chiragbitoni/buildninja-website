import "./Third.css";
import { thirdSectionText } from "../../../../../../public/static/featuresPageText";

export default function Third(){
    return (
        <section className="thirdFeaturesSection">
            <h2 className="thirdFeaturesTitle">{thirdSectionText.title}</h2>
            <p className="thirdFeaturesDescription">{thirdSectionText.description}</p>
            <div className="thirdFeaturesButtonContainer">
                <button className="thirdFeaturesFreeButton">{thirdSectionText.button1}</button>
                <button className="thirdFeaturesShogunButton">{thirdSectionText.button2}</button>
            </div>
        </section>
    )
}