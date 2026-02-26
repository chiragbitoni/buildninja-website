import "./Second.css";
import { secondSectionText } from "../../../../../public/static/featuresPageText";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { openVideo } from "@/redux/slice/videoPopupSlice";
import { useRef } from "react";
export default function Second() {
    const dispatch = useDispatch();
    const hoverTimeoutRef = useRef(null);

    const openVideoPopup = (card) => {
        if (!card.videoId) return;

        dispatch(
            openVideo({
                videoId: card.videoId,
                title: card.title,
                ctaText: card.description,
                link: card.link,
            })
        );
    };

    const handleMouseEnter = (card) => {
        if (!card.videoId) return;

        hoverTimeoutRef.current = setTimeout(() => {
            openVideoPopup(card);
        }, 2000); // 2 seconds hover
    };

    const handleMouseLeave = () => {
        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
            hoverTimeoutRef.current = null;
        }
    };

    const handleClick = (card) => {
        handleMouseLeave();
        openVideoPopup(card);
    };
    return (
        <section className="secondFeaturesSection">
            <div className="secondFeaturesCardsContainer">
                {secondSectionText.cards.map((card, idx) => (
                    <div key={idx} className="secondFeaturesCard"
                        onClick={() => handleClick(card)}
                        onMouseEnter={() => handleMouseEnter(card)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Image width={0} height={0} src={card.icon} alt={card.title} className="secondFeaturesCardIcon defaultIcon" />
                        <Image width={0} height={0} src={card.iconHover} alt={card.title} className="secondFeaturesCardIcon hoverIcon" />
                        <h3 className="secondFeaturesCardTitle">{card.title}</h3>
                        <p className="secondFeaturesCardDescription">{card.description}</p>
                        {card.videoId && <div className="hoverProgressBar" />}
                    </div>
                ))}
            </div>
        </section>
    )
}