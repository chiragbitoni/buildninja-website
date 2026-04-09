"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import s from "./PricingFaq.module.css";
import { useSelector } from "react-redux";
import { pricingSeventhText } from "../../../../../public/static/pricingPageText";
import { useRouter } from "next/navigation";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function PricingFaq() {
  const { region } = useSelector((state) => state.pricing);
  const text = pricingSeventhText[region] || pricingSeventhText.global;
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

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
          <span className={s.sectionBadge}>FAQ</span>
          <h2 className={s.title}>{text.title}</h2>
        </motion.div>

        <motion.div className={s.faqGrid} variants={containerVariants}>
          {text.faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`${s.faqCard} ${openIndex === index ? s.faqCardOpen : ""}`}
              onClick={() => toggle(index)}
              role="button"
              data-cursor-grow
              aria-expanded={openIndex === index}
              id={`pricing-faq-${index}`}
              variants={itemVariants}
            >
              <h3 className={s.faqQuestion}>
                {faq.question}
                <span className={`${s.faqChevron} ${openIndex === index ? s.faqChevronOpen : ""}`}>
                  ▾
                </span>
              </h3>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.p 
                    className={s.faqAnswer}
                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                    animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}

          {/* View All FAQ tile */}
          <motion.div className={`${s.faqCard} ${s.viewCard}`} variants={itemVariants}>
            <button
              id="pricing-faq-view-all"
              className={s.faqBtn}
              onClick={() => router.push("/faq")}
            >
              {text.button}
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
