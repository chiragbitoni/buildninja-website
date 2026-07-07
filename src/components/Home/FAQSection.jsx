"use client";
import { motion } from "framer-motion";
import styles from "./FAQSection.module.css";
import { homeFaqs } from "../../../public/static/homePageText";

export default function FAQSection() {
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

        <div className={styles.faqSplit}>
          <div className={styles.faqCol}>
            {homeFaqs.slice(0, Math.ceil(homeFaqs.length / 2)).map((faq, i) => (
              <motion.div
                key={i}
                className={styles.faqItem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
              >
                <div className={styles.question}>
                  <h3>{faq.q}</h3>
                  <div className={styles.icon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </div>
                </div>

                <div className={styles.answerWrap}>
                  <div className={styles.answerInner}>
                    <p className={styles.answer}>{faq.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className={styles.faqCol}>
            {homeFaqs.slice(Math.ceil(homeFaqs.length / 2)).map((faq, i) => (
              <motion.div
                key={i}
                className={styles.faqItem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i + Math.ceil(homeFaqs.length / 2)) * 0.06, duration: 0.5 }}
              >
                <div className={styles.question}>
                  <h3>{faq.q}</h3>
                  <div className={styles.icon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </div>
                </div>

                <div className={styles.answerWrap}>
                  <div className={styles.answerInner}>
                    <p className={styles.answer}>{faq.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
