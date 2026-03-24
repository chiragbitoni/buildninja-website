"use client";
import React from "react";
import { useSelector } from "react-redux";
import s from "./PricingValueProp.module.css";
import { pricingFourthText } from "../../../../../public/static/pricingPageText";
import { paths } from "../../../../../public/static/paths";
import Image from "next/image";

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
                      <Image
                        width={18}
                        height={18}
                        className={s.cardShieldIcon}
                        src={paths.icons.cardPricingShield}
                        alt="shield icon"
                      />
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
