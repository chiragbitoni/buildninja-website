import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import s from "./PricingValueProp.module.css";
import { pricingFourthText } from "../../../../../public/static/pricingPageText";
import { paths } from "../../../../../public/static/paths";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

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
      <motion.div 
        className={s.inner}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
      >
        <motion.div className={s.header} variants={itemVariants}>
          <span className={s.sectionBadge}>Why BuildNinja</span>
          <h2 className={s.title}>
            Pricing That Makes Sense{" "}
            <span className={s.accent}>as You Grow</span>
          </h2>
          <p className={s.subtitle}>{text.subtitle}</p>
        </motion.div>

        {/* Problem block */}
        <motion.div className={s.problemBlock} variants={itemVariants}>
          <div className={s.problemMeta}>
            <span className={s.problemLabel}>{text.problemTitle}</span>
            <span className={s.problemTag}>{text.problemTag}</span>
          </div>
          <p
            className={s.problemDesc}
            dangerouslySetInnerHTML={{ __html: text.problemDesc }}
          />
        </motion.div>

        {/* Bento cards */}
        <motion.div className={s.grid} variants={containerVariants}>
          {text.cards.map((card, index) => (
            <motion.div
              key={index}
              className={`${s.card} ${card.badges ? s.cardWide : ""}`}
              variants={itemVariants}
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
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
