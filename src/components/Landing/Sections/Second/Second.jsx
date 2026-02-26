import "./Second.css";
import { secondSectionText } from "../../../../../public/static/landingPageText";
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
        }, 2000);
    };

    const handleMouseLeave = () => {
        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
            hoverTimeoutRef.current = null;
        }
    };

    const handleClick = (card) => {
        handleMouseLeave(); // cancel hover timer
        openVideoPopup(card);
    };

    return (
        <section className="landingSecondSection">
            <div className="landingSecondHeader">
                <h3 className="landingSecondHeaderTitle">
                    {secondSectionText.title}
                </h3>
                <p className="landingSecondHeaderSubtitle">
                    {secondSectionText.subTitle}
                </p>
            </div>

            <div className="landingSecondCardsContainer">
                {secondSectionText.cards.map((card, idx) => (
                    <div
                        key={idx}
                        className="landingSecondCard"
                        onClick={() => handleClick(card)}
                        onMouseEnter={() => handleMouseEnter(card)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Image
                            width={0}
                            height={0}
                            src={card.icon}
                            alt={card.title}
                            className="landingSecondCardIcon defaultIcon"
                        />
                        <Image
                            width={0}
                            height={0}
                            src={card.iconHover}
                            alt={card.title}
                            className="landingSecondCardIcon hoverIcon"
                        />

                        <h3 className="landingSecondCardTitle">
                            {card.title}
                        </h3>

                        {card.videoId && <div className="hoverProgressBar" />}
                    </div>
                ))}
            </div>
        </section>
    );
}