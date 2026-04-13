"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./PricingTeaser.module.css";
import { ShogunIcon } from "@/components/Pricing/Sections/PricingHero/PricingIcons";

export default function PricingTeaser() {
  const plan = {
    name: "Free Edition",
    price: "Free Forever",
    period: "No credit card required",
    desc: "The core BuildNinja orchestration platform is 100% free for individual developers and small teams.",
    features: [
      "Up to 10 users included",
      "3 concurrent builds",
      "Unlimited build agents",
      "Full dashboard access",
      "Standard Docker deployment"
    ],
    button: "Get Started",
    link: "/install",
    note: "No hidden fees. No strings attached.",
    label: "FREE EDITION",
    isSolo: true,
  };

  return (
    <section className={styles.section} id="pricing">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.badge}>Transparent Orchestration</div>
          <h2 className={styles.title}>
            Self-Hosted CI/CD. <span className={styles.gradient}>Always Free Core.</span>
          </h2>
          <p className={styles.subtitle}>
            Experience high-performance build intelligence without the per-seat tax. 
            Download the Free Edition and scale your automation today.
          </p>
        </motion.div>

        <div className={styles.centerGrid}>
          <motion.div
            layout
            className={`${styles.card} ${styles.horizontalCard}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.cardLeft}>
              <div className={styles.cardTop}>
                <span className={`${styles.cardHighlight} ${styles.cardHighlightSolo}`}>
                  {plan.label}
                </span>
              </div>
              <div className={styles.cardBranding}>
                <div className={`${styles.planIcon} ${styles.planIconSolo}`}>
                  <ShogunIcon color="var(--color-info)" />
                </div>
                <motion.h3 layout className={styles.planName}>{plan.name}</motion.h3>
              </div>
              <div className={styles.priceRow}>
                <span className={styles.price}>{plan.price}</span>
                <span className={styles.period}>{plan.period}</span>
              </div>
              <p className={styles.planDesc}>{plan.desc}</p>
            </div>

            <div className={styles.cardRight}>
              <ul className={styles.featureList}>
                {plan.features.map((feat, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.checkIcon}>
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>

              <div className={styles.cardFooter}>
                <Link href={plan.link} className={`${styles.btnBase} ${styles.primaryBtnSolo}`}>
                  {plan.button}
                </Link>
                <p className={styles.guarantee}>{plan.note}</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className={styles.fullPricingLink}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Link href="/pricing" className={styles.compareBtn}>
            Scale to Enterprise? View Full Breakdown
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
