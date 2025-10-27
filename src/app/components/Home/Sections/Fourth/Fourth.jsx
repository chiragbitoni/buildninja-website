import Image from "next/image";
import './Fourth.css';
import { fourthSectionText } from "../../../../../../public/static/homePageText";
import { paths } from "../../../../../../public/static/paths";
export default function Fourth() {
    return (
        <section className="fourthSection">
            <div className="fourthContent">
                <h1 className="fourthTitle">
                    {fourthSectionText.title}
                </h1>

                <div className="fourth-simple-grid">
                    {/* Step 1 */}
                    <div className="fourth-simple-box">
                        <img src={paths.icons.cds} alt="CDS Icon" className="fourth-simple-box-icon" />
                        <button className="fourth-simple-box-button" disabled>{fourthSectionText.card1Step}</button>
                        <h3 className="fourth-simple-box-heading">{fourthSectionText.card1Title}</h3>
                        <p className="fourth-simple-box-text">{fourthSectionText.card1Text}</p>
                    </div>
                    {/* Step 2 */}
                    <div className="fourth-simple-box">
                        <img src={paths.icons.versioning} alt="Versioning Icon" className="fourth-simple-box-icon" />
                        <button className="fourth-simple-box-button" disabled>{fourthSectionText.card2Step}</button>
                        <h3 className="fourth-simple-box-heading">{fourthSectionText.card2Title}</h3>
                        <p className="fourth-simple-box-text">{fourthSectionText.card2Text}</p>
                    </div>
                    {/* Step 3 */}
                    <div className="fourth-simple-box">
                        <img src={paths.icons.circleCheck} alt="Circle Check Icon" className="fourth-simple-box-icon" />
                        <button className="fourth-simple-box-button" disabled>{fourthSectionText.card3Step}</button>
                        <h3 className="fourth-simple-box-heading">{fourthSectionText.card3Title}</h3>
                        <p className="fourth-simple-box-text">{fourthSectionText.card3Text}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
