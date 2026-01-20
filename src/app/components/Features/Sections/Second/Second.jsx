import "./Second.css";
import { secondSectionText } from "../../../../../../public/static/featuresPageText";
import Image from "next/image";
export default function Second() {
    return (
        <section className="secondFeaturesSection">
            <div className="secondFeaturesCardsContainer">
                {secondSectionText.cards.map((card, idx) => (
                    <div key={idx} className="secondFeaturesCard">
                        <Image width={0} height={0} src={card.icon} alt={card.icon} className="secondFeaturesCardIcon" />
                        <h3 className="secondFeaturesCardTitle">{card.title}</h3>
                        <p className="secondFeaturesCardDescription">{card.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}