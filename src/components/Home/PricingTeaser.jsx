"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./PricingTeaser.module.css";

const pricingPlans = [
  {
    name: "Solo Edition",
    price: "Free Forever",
    desc: "Perfect for individuals and small teams.",
    features: [
      "Up to 10 users",
      "Unlimited agents",
      "3 concurrent builds",
      "1 SSO provider"
    ],
    button: "Install Free",
    link: "/install",
    highlight: false,
  },
  {
    name: "Shogun Edition",
    price: "$199",
    period: "/month",
    desc: "The full platform. Unlimited everything. No commitment.",
    features: [
      "Unlimited users & agents",
      "Unlimited concurrent builds",
      "Kubernetes high-availability",
      "Priority direct engineering support"
    ],
    button: "Start 30-Day Trial",
    link: "/addtocart?planid=ebf94a66-a86f-4ea5-a5cc-f401d81ead21",
    highlight: true,
  }
];

export default function PricingTeaser() {
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
          <div className={styles.badge}>Predictable Pricing</div>
          <h2 className={styles.title}>
            Self-Hosted CI/CD. <span className={styles.gradient}>No Per-Seat Surprises.</span>
          </h2>
          <p className={styles.subtitle}>
            CI/CD costs shouldn't spiral as your team grows. Pay for scale, not headcount.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`${styles.card} ${plan.highlight ? styles.highlightCard : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <div className={styles.cardHeader}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <div className={styles.priceRow}>
                  <span className={styles.price}>{plan.price}</span>
                  {plan.period && <span className={styles.period}>{plan.period}</span>}
                </div>
                <p className={styles.planDesc}>{plan.desc}</p>
              </div>

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
                <Link href={plan.link} className={plan.highlight ? styles.primaryBtn : styles.secondaryBtn}>
                  {plan.button}
                </Link>
                {plan.highlight && <p className={styles.guarantee}>No credit card required</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
