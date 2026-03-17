"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./FAQSection.module.css";

const faqs = [
  {
    q: "Is BuildNinja cloud-based or self-hosted?",
    a: "Self-hosted only. BuildNinja runs on your own infrastructure — Windows, Linux, macOS, Docker, or Kubernetes. Your code, credentials, and builds never leave your network."
  },
  {
    q: "Is the Solo Edition really free forever?",
    a: "Yes. No credit card, no time limit, no expiry. Up to 10 users with 3 concurrent builds and unlimited agents — forever. Includes automated builds, VCS integration, artifacts, real-time logs, and email notifications."
  },
  {
    q: "What happens to my price when my team grows?",
    a: "Nothing changes. Add 10 or 100 developers — the Shogun Edition is still a flat $199/month. You only pay for infrastructure capacity, never per developer."
  },
  {
    q: "Do I need a DevOps engineer to set up BuildNinja?",
    a: "No. Most engineering leads set up BuildNinja in under 30 minutes. The Unified Installer handles server, agent, and database on Windows. Docker users pull one image and configure with environment variables."
  },
  {
    q: "Does it support macOS / Apple Silicon?",
    a: "Yes. Full support for Apple Silicon (M-series) on both Server and Agent. You can run builds natively on your Mac infrastructure."
  },
  {
    q: "Can I migrate from Jenkins, GitLab CI, or Azure DevOps?",
    a: "Yes. Free migration assistance for your first 3 projects is included with annual Shogun subscriptions — covering pipeline conversion guidance and initial configuration."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className={styles.section} id="faq">
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.badge}>Quick Answers</div>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
        </motion.div>

        <div className={styles.faqList}>
          {faqs.map((faq, i) => (
            <motion.div 
              key={i} 
              className={`${styles.faqItem} ${openIndex === i ? styles.open : ""}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <button 
                className={styles.question}
                onClick={() => toggleFAQ(i)}
                aria-expanded={openIndex === i}
              >
                <h3>{faq.q}</h3>
                <div className={styles.icon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.plusIcon}>
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    className={styles.answerWrap}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className={styles.answer}>{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
