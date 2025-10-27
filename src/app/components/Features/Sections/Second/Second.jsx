import { secondSectionText } from "../../../../../../public/static/featuresPageText";
import { paths } from "../../../../../../public/static/paths";
import "./Second.css";
export default function Second() {
    return (
        <section className="secondFeaturesSection">
            <div className="secondFeaturesCardsContainer">
                {secondSectionText.cards.map((card, idx) => (
                    <div className="secondFeaturesCard">
                        <img src={card.icon} alt={card.icon} className="secondFeaturesCardIcon" />
                        <h3 className="secondFeaturesCardTitle">{card.title}</h3>
                        <p className="secondFeaturesCardDescription">{card.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}