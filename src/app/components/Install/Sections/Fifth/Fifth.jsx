import { fifthSectionText } from "../../../../../../public/static/installPageText"
import "./Fifth.css"
export default function Fifth() {
    return (
        <section className="installFifthSection">
            <div className="installFifthContent">
                <h2 className="installFifthTitle">{fifthSectionText.title}</h2>
                <p className="installFifthSubTitle">{fifthSectionText.subTitle}</p>
                <button className="installFifthButton">{fifthSectionText.buttonText}</button>
            </div>
        </section>
    )
}