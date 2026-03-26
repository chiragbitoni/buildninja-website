"use client";
import React from "react";
import s from "./PartnerModels.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHandshake, 
  faLink, 
  faRocket, 
  faGraduationCap, 
  faMicrochip 
} from "@fortawesome/free-solid-svg-icons";

const models = [
  {
    icon: <FontAwesomeIcon icon={faHandshake} />,
    title: "Reseller / referral programs",
    description: "Earn through referrals or resale, aligned to your sales motion and customer base.",
    wide: true
  },
  {
    icon: <FontAwesomeIcon icon={faLink} />,
    title: "Integration partnerships",
    description: "Build connectors and reference architectures that make adoption frictionless.",
    wide: false
  },
  {
    icon: <FontAwesomeIcon icon={faRocket} />,
    title: "Co-marketing & launches",
    description: "Tell a joint story with credible outcomes, case studies, webinars, and announcements.",
    wide: false
  },
  {
    icon: <FontAwesomeIcon icon={faGraduationCap} />,
    title: "Implementation & training",
    description: "Deliver onboarding, rollout, and team enablement as a packaged service.",
    wide: false
  },
  {
    icon: <FontAwesomeIcon icon={faMicrochip} />,
    title: "Technology alliances",
    description: "Co-develop solutions inside the CI/CD ecosystem and share distribution.",
    wide: false
  },
];

export default function PartnerModels() {
  return (
    <section className={s.section} id="partnershipModelsSection">
      <div className={s.inner}>
        <div className={s.header}>
            <span className={s.tag}>How It Works</span>
            <h2 className={s.title}>Partnership models</h2>
            <p className={s.subTitle}>Choose a motion that matches your business—then we’ll co-design the rollout and go-to-market plan.</p>
        </div>

        <div className={s.grid}>
            {models.map((card, idx) => (
                <div key={idx} className={`${s.card} ${card.wide ? s.wide : ""}`}>
                    <div className={s.iconWrap}>{card.icon}</div>
                    <h3 className={s.cardTitle}>{card.title}</h3>
                    <p className={s.cardDesc}>{card.description}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
