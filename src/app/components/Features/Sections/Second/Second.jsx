import "./Second.css";
import { secondSectionText } from "../../../../../../public/static/featuresPageText";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { openVideo } from "@/redux/slice/videoPopupSlice";
export default function Second() {
    const dispatch = useDispatch();

    return (
        <section className="secondFeaturesSection">
            <div className="secondFeaturesCardsContainer">
                {secondSectionText.cards.map((card, idx) => (
                    <div key={idx} className="secondFeaturesCard" onClick={() => {if(card.videoId )dispatch(openVideo({ videoId: card.videoId, title: card.title, ctaText: card.description, link: card.link }))}}>
                        <Image width={0} height={0} src={card.icon} alt={card.title} className="secondFeaturesCardIcon defaultIcon" />
                        <Image width={0} height={0} src={card.iconHover} alt={card.title} className="secondFeaturesCardIcon hoverIcon" />
                        <h3 className="secondFeaturesCardTitle">{card.title}</h3>
                        <p className="secondFeaturesCardDescription">{card.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}