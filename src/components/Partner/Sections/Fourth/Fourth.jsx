import "./Fourth.css";
import Image from "next/image";
import { useRef } from "react";
import { paths } from "../../../../../public/static/paths";
export default function Fourth() {
    const fourthSectionText = {
        title: "Partnership models",
        subTitle:
            "Choose a motion that matches your business—then we’ll co-design the rollout and go-to-market plan.",
        cards: [
            {
                icon: "/resources/icons/partnerPageAssets/handshakeWhite.svg",
                iconHover: "/resources/icons/partnerPageAssets/handshakePurple.svg",
                title: "Integration partnerships",
                description:
                    "Build connectors and reference architectures that make adoption frictionless.",
            },
            {
                icon: "/resources/icons/partnerPageAssets/handshakeWhite.svg",
                iconHover: "/resources/icons/partnerPageAssets/handshakePurple.svg",
                title: "Reseller / referral programs",
                description:
                    "Earn through referrals or resale, aligned to your sales motion and customer base.",
            },
            {
                icon: "/resources/icons/partnerPageAssets/handshakeWhite.svg",
                iconHover: "/resources/icons/partnerPageAssets/handshakePurple.svg",
                title: "Co-marketing & launches",
                description:
                    "Tell a joint story with credible outcomes—case studies, webinars, and announcements.",
            },
            {
                icon: "/resources/icons/partnerPageAssets/handshakeWhite.svg",
                iconHover: "/resources/icons/partnerPageAssets/handshakePurple.svg",
                title: "Implementation & training",
                description:
                    "Deliver onboarding, rollout, and team enablement as a packaged service.",
            },
            {
                icon: "/resources/icons/partnerPageAssets/handshakeWhite.svg",
                iconHover: "/resources/icons/partnerPageAssets/handshakePurple.svg",
                title: "Technology alliances",
                description:
                    "Co-develop solutions inside the CI/CD ecosystem and share distribution.",
            },
        ],
    };
    return (
        <section className="partnerFourthSection" id="partnershipModelsSection">
            <div className="partnerFourthBanner">
                <Image src="/resources/icons/partnerPageAssets/buildNinjaStars.svg" width={20} height={20} alt="Grapecity Stars Icon"></Image>
                <p>How it works</p>
            </div>
            <div className="partnerFourthHeader">
                <h3 className="partnerFourthHeaderTitle">Partnership models</h3>
                <p className="partnerFourthHeaderSubtitle">Choose a motion that matches your business—then we’ll co-design the rollout and go-to-market plan.</p>
            </div>
            <div className="partnerFourthCardsContainer">
                {fourthSectionText.cards.map((card, idx) => (
                    <div key={idx} className="partnerFourthCard"
                    // onClick={() => {if(card.videoId )dispatch(openVideo({ videoId: card.videoId, title: card.title, ctaText: card.description, link: card.link }))}}
                    >
                        <Image width={0} height={0} src={card.icon} alt={card.title} className="partnerFourthCardIcon defaultIcon" />
                        <Image width={0} height={0} src={card.iconHover} alt={card.title} className="partnerFourthCardIcon hoverIcon" />
                        <h3 className="partnerFourthCardTitle">{card.title}</h3>
                        <p className="partnerFourthCardDescription">{card.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}