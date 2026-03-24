"use client";
import React from "react";
import { useSelector } from "react-redux";
import s from "./PricingValueProp.module.css";
import { pricingFourthText } from "../../../../../public/static/pricingPageText";
import { paths } from "../../../../../public/static/paths";
import Image from "next/image";

// Inline SVG — uses currentColor so it's fully theme-aware
const ShieldIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    style={{ flexShrink: 0 }}
  >
    <path d="M12 1L3 5v6c0 5.25 3.75 10.15 9 11.35C17.25 21.15 21 16.25 21 11V5l-9-4z" />
  </svg>
);

export default function PricingValueProp() {
  const { region } = useSelector((state) => state.pricing);
  const text = JSON.parse(JSON.stringify(pricingFourthText));
  text.cards[2].desc =
    region === "india"
      ? "Free up to 3 concurrent agents. ₹17,499/month unlimited users beyond that. No hidden costs, no complex calculations."
      : "Free up to 3 concurrent agents. $199/month unlimited users beyond that. No hidden costs, no complex calculations.";

  return (
    <section className={s.section}>
      <div className={s.inner}>
        <div className={s.header}>
          <span className={s.sectionBadge}>Why BuildNinja</span>
          <h2 className={s.title}>
            Pricing That Makes Sense{" "}
            <span className={s.accent}>as You Grow</span>
          </h2>
          <p className={s.subtitle}>{text.subtitle}</p>
        </div>

        {/* Problem block */}
        <div className={s.problemBlock}>
          <div className={s.problemMeta}>
            <span className={s.problemLabel}>{text.problemTitle}</span>
            <span className={s.problemTag}>{text.problemTag}</span>
          </div>
          <p
            className={s.problemDesc}
            dangerouslySetInnerHTML={{ __html: text.problemDesc }}
          />
        </div>

        {/* Bento cards */}
        <div className={s.grid}>
          {text.cards.map((card, index) => (
            <div
              key={index}
              className={`${s.card} ${card.badges ? s.cardWide : ""}`}
            >
              <div className={s.cardIconWrap}>
                <Image
                  width={26}
                  height={26}
                  className={s.cardIcon}
                  src={card.icon}
                  alt={card.alt}
                />
              </div>
              <div className={s.cardHeader}>
                <h3 className={s.cardTitle}>{card.title}</h3>
                {card.tag && <span className={s.cardTag}>{card.tag}</span>}
              </div>
              <p className={s.cardDesc}>{card.desc}</p>
              {card.link && (
                <a href={`/faq?open=${card.id}`} className={s.cardLink}>
                  Learn more →
                </a>
              )}
              {card.badges && (
                <div className={s.badgesWrap}>
                  {card.badges.map((b, i) => (
                    <span key={i} className={s.badge}>
                      <ShieldIcon />
                      {b}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
