"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import posthog from "posthog-js";
import styles from "./FAQSection.module.css";
import { homeFaqs } from "../../../public/static/homePageText";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => {
    const isOpening = openIndex !== i;
    setOpenIndex(isOpening ? i : null);
    if (isOpening) {
      posthog.capture("faq_question_opened", { question: homeFaqs[i].q });
    }
  };

  return (
    <section className={styles.section} id="faq">
      <div className={styles.ambientGlow} />
      <div className={styles.gridOverlay} />

      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.eyebrow}>Quick Answers</div>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
        </motion.div>

        <div className={styles.faqList}>
          {homeFaqs.map((faq, i) => (
            <motion.div
              key={i}
              className={`${styles.faqItem} ${openIndex === i ? styles.open : ""}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
            >
              <button
                className={styles.question}
                onClick={() => toggleFAQ(i)}
                aria-expanded={openIndex === i}
              >
                <h3>{faq.q}</h3>
                <div className={`${styles.icon} ${openIndex === i ? styles.iconOpen : ""}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </div>
              </button>

              <motion.div
                className={styles.answerWrap}
                initial={false}
                animate={{
                  height: openIndex === i ? "auto" : 0,
                  opacity: openIndex === i ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{
                  overflow: "hidden",
                  visibility: openIndex === i ? "visible" : "hidden",
                }}
              >
                <p className={styles.answer}>{faq.a}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
