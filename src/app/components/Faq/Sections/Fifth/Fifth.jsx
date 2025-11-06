import "./Fifth.css";
import { fifthSectionText } from "../../../../../../public/static/faqPageText";

export default function Fifth(){
    return (
        <section className="faqFifthSection">
            <h2 className="faqFifthTitle">{fifthSectionText.title}</h2>
            <p className="faqFifthDescription">{fifthSectionText.description}</p>
            <div className="faqFifthButtonContainer">
                <button className="faqFifthFreeButton">{fifthSectionText.button1}</button>
                <button className="faqFifthShogunButton">{fifthSectionText.button2}</button>
            </div>
        </section>
    )
}