"use client";
import React, { useState } from "react";
import s from "./PricingFaq.module.css";
import { useSelector } from "react-redux";
import { pricingSeventhText } from "../../../../../public/static/pricingPageText";
import { useRouter } from "next/navigation";

export default function PricingFaq() {
  const { region } = useSelector((state) => state.pricing);
  const text = pricingSeventhText[region] || pricingSeventhText.global;
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className={s.section}>
      <div className={s.inner}>
        <div className={s.header}>
          <span className={s.sectionBadge}>FAQ</span>
          <h2 className={s.title}>{text.title}</h2>
        </div>

        <div className={s.faqGrid}>
          {text.faqs.map((faq, index) => (
            <div
              key={index}
              className={`${s.faqCard} ${openIndex === index ? s.faqCardOpen : ""}`}
              onClick={() => toggle(index)}
              role="button"
              aria-expanded={openIndex === index}
              id={`pricing-faq-${index}`}
            >
              <h3 className={s.faqQuestion}>
                {faq.question}
                <span className={`${s.faqChevron} ${openIndex === index ? s.faqChevronOpen : ""}`}>
                  ▾
                </span>
              </h3>
              {openIndex === index && (
                <p className={s.faqAnswer}>{faq.answer}</p>
              )}
            </div>
          ))}

          {/* View All FAQ tile */}
          <div className={`${s.faqCard} ${s.viewCard}`}>
            <button
              id="pricing-faq-view-all"
              className={s.faqBtn}
              onClick={() => router.push("/faq")}
            >
              {text.button}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
