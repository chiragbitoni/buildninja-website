import "./Second.css";
import Image from "next/image";
import { useRef } from "react";
import { paths } from "../../../../../public/static/paths";
export default function Second() {
    const secondSectionText = {
        title: "Powerful Features to Supercharge",
        subTitle:
            "From automated builds to enterprise-grade security, everythng you need to build, test, and deploy with confidence.",
        cards: [
            {
                icon: "/resources/icons/partnerPageAssets/handshakepurple.svg",
                iconHover: "/resources/icons/partnerPageAssets/handshake.svg",
                title: "New revenue opportunities",
                description:
                    "Add implementation, managed services, training, or resale—with clear partner pricing and scalable models.",
            },
            {
                icon: "/resources/icons/partnerPageAssets/buildNinjaStarsPink.svg",
                iconHover: "/resources/icons/partnerPageAssets/buildNinjaStars.svg",
                title: "Joint GTM & co-marketing",
                description:
                    "Webinars, case studies, partner spotlights, integration launches, and co-branded campaigns.",
            },
            {
                icon: "/resources/icons/partnerPageAssets/tickGolden.svg",
                iconHover: "/resources/icons/partnerPageAssets/tickPink.svg",
                title: "Technical enablement",
                description:
                    "Priority onboarding, architecture guidance, and direct engineering support to accelerate delivery.",
            },
            {
                icon: "/resources/icons/partnerPageAssets/lockGreen.svg",
                iconHover: "/resources/icons/partnerPageAssets/lockPink.svg",
                title: "Self-hosted security posture",
                description:
                    "Source code, secrets, logs, and artifacts stay inside your customer’s environment—ideal for compliance.",
            },
            {
                icon: "/resources/icons/partnerPageAssets/clockBrown.svg",
                iconHover: "/resources/icons/partnerPageAssets/clockPink.svg",
                title: "Fast parallel execution",
                description:
                    "High-throughput pipelines designed for speed and scale, without build-minute billing surprises.",
            },
            {
                icon: "/resources/icons/partnerPageAssets/locationBlue.svg",
                iconHover: "/resources/icons/partnerPageAssets/locationPink.svg",
                title: "Flexible deployment",
                description:
                    "Run on Kubernetes, VMs, private cloud, or fully air-gapped infrastructure.",
            },
        ],
    };
    return (
        <section className="partnerSecondSection">
            <div className="partnerSecondBanner">
                <Image src="/resources/icons/partnerPageAssets/buildNinjaStars.svg" width={20} height={20} alt="Grapecity Stars Icon"></Image>
                <p>Why partner</p>
            </div>
            <div className="partnerSecondHeader">
                <h3 className="partnerSecondHeaderTitle">Benefits built for real delivery</h3>
                <p className="partnerSecondHeaderSubtitle">A partner program designed to help you win, deliver, and expand—without friction or surprise costs.</p>
            </div>
            <div className="partnerSecondCardsContainer">
                {secondSectionText.cards.map((card, idx) => (
                    <div key={idx} className="partnerSecondCard"
                    // onClick={() => {if(card.videoId )dispatch(openVideo({ videoId: card.videoId, title: card.title, ctaText: card.description, link: card.link }))}}
                    >
                        <Image width={0} height={0} src={card.icon} alt={card.title} className="partnerSecondCardIcon defaultIcon" />
                        <Image width={0} height={0} src={card.iconHover} alt={card.title} className="partnerSecondCardIcon hoverIcon" />
                        <h3 className="partnerSecondCardTitle">{card.title}</h3>
                        <p className="partnerSecondCardDescription">{card.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}