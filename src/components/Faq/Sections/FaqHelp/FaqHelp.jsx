"use client";
import React from "react";
import s from "./FaqHelp.module.css";
import { fourthSectionText } from "../../../../../public/static/faqPageText";
import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function FaqHelp() {
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <motion.div 
          className={s.header} 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={itemVariants}
        >
          <h2 className={s.title}>{fourthSectionText.title}</h2>
          <p className={s.subTitle}>{fourthSectionText.subTitle}</p>
        </motion.div>

        <motion.div 
          className={s.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {fourthSectionText.cards.map((card, idx) => {
            const isExternal = Boolean(card.link);
            const CardTag = isExternal ? motion.a : motion(Link);
            const props = isExternal 
              ? { href: card.link, target: "_blank", rel: "noopener noreferrer" } 
              : { href: card.router || "#" };

            // Determine which SVG to render based on the card title
            let IconSvg = null;
            if (card.title === "Documentation") {
              IconSvg = (
                <svg className={s.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              );
            } else if (card.title === "Email Support") {
              IconSvg = (
                <svg className={s.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              );
            } else {
              // Search Docs
              IconSvg = (
                <svg className={s.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              );
            }

            return (
              <CardTag 
                key={idx} 
                className={s.card} 
                {...props}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <div className={s.iconWrap}>
                  {IconSvg}
                </div>
                <h3 className={s.cardTitle}>{card.title}</h3>
                <p className={s.cardDesc}>{card.description}</p>
                <div className={s.btn}>
                  {card.buttonText}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </CardTag>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
