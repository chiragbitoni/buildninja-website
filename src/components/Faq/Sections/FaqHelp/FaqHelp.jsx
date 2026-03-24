"use client";
import React from "react";
import s from "./FaqHelp.module.css";
import { fourthSectionText } from "../../../../../public/static/faqPageText";
import Link from "next/link";

export default function FaqHelp() {
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <div className={s.header}>
          <h2 className={s.title}>{fourthSectionText.title}</h2>
          <p className={s.subTitle}>{fourthSectionText.subTitle}</p>
        </div>

        <div className={s.grid}>
          {fourthSectionText.cards.map((card, idx) => {
            const isExternal = Boolean(card.link);
            const CardTag = isExternal ? "a" : Link;
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
              <CardTag key={idx} className={s.card} {...props}>
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
        </div>
      </div>
    </section>
  );
}
