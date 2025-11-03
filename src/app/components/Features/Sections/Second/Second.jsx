import "./Second.css";
import { secondSectionText } from "../../../../../../public/static/featuresPageText";
export default function Second() {
    return (
        <section className="secondFeaturesSection">
            <div className="secondFeaturesCardsContainer">
                {secondSectionText.cards.map((card, idx) => (
                    <div key={idx} className="secondFeaturesCard">
                        <img src={card.icon} alt={card.icon} className="secondFeaturesCardIcon" />
                        <h3 className="secondFeaturesCardTitle">{card.title}</h3>
                        <p className="secondFeaturesCardDescription">{card.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}