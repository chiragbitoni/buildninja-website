"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import styles from "./PricingTeaser.module.css";

import { useSelector, useDispatch } from "react-redux";
import { setBilling } from "@/redux/slice/pricingSlice";

export default function PricingTeaser() {
  const dispatch = useDispatch();
  const region = useSelector((state) => state.pricing?.region || "worldwide");
  const billing = useSelector((state) => state.pricing?.billing || "monthly");

  const isIndia = region === "india";
  const isAnnual = billing === "annual";

  const shogunPrice = isIndia
    ? isAnnual ? "₹11,666" : "₹17,499"
    : isAnnual ? "$133" : "$199";

  const shogunPeriod = isAnnual ? "/mo (billed annually)" : "/month";

  const pricingPlans = [
    {
      name: "Solo Edition",
      price: "Free Forever",
      period: "",
      desc: "Perfect for individuals and small growing teams.",
      features: [
        "Up to 10 users",
        "3 concurrent builds",
        "Unlimited build agents",
        "30-day build history",
        "1 SSO provider choice"
      ],
      button: "Get Your Free Key",
      link: "/install",
      note: "No strings attached",
      highlight: false,
    },
    {
      name: "Shogun Edition",
      price: shogunPrice,
      period: shogunPeriod,
      desc: "Enterprise scale without per-seat cost anxiety.",
      features: [
        "Unlimited users & projects",
        "Unlimited concurrent builds",
        "Unlimited build agents",
        "Perpetual build history",
        "Priority business support"
      ],
      button: "Start Trial License",
      link: "/addtocart?planid=ebf94a66-a86f-4ea5-a5cc-f401d81ead21",
      note: "No credit card required",
      highlight: true,
    }
  ];

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

        <motion.div 
          className={styles.toggleWrapper}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className={styles.toggleGroup}>
            <button
              className={`${styles.toggleBtn} ${!isAnnual ? styles.activeToggle : ""}`}
              onClick={() => dispatch(setBilling("monthly"))}
            >
              Monthly
            </button>
            <button
              className={`${styles.toggleBtn} ${isAnnual ? styles.activeToggle : ""}`}
              onClick={() => dispatch(setBilling("annual"))}
            >
              Annual <span className={styles.saveBadge}>Save 33%</span>
            </button>
          </div>
        </motion.div>

        <div className={styles.grid}>
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              layout
              className={`${styles.card} ${plan.highlight ? styles.highlightCard : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <div className={styles.cardHeader}>
                {plan.highlight && (
                  <span className={styles.cardHighlightFeatured}>MOST POPULAR</span>
                )}
                <motion.h3 layout className={styles.planName}>{plan.name}</motion.h3>
                <motion.div layout className={styles.priceRow}>
                  <AnimatePresence mode="popLayout">
                    <motion.span
                      key={plan.price}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className={styles.price}
                    >
                      {plan.price}
                    </motion.span>
                  </AnimatePresence>
                  
                  {plan.period && (
                    <AnimatePresence mode="popLayout">
                      <motion.span
                        key={plan.period}
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 5 }}
                        transition={{ duration: 0.2 }}
                        className={styles.period}
                      >
                        {plan.period}
                      </motion.span>
                    </AnimatePresence>
                  )}
                </motion.div>
                <motion.p layout className={styles.planDesc}>{plan.desc}</motion.p>
              </div>

              <motion.ul layout className={styles.featureList}>
                {plan.features.map((feat, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.checkIcon}>
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {feat}
                  </li>
                ))}
              </motion.ul>

              <motion.div layout className={styles.cardFooter}>
                <Link href={plan.link} className={plan.highlight ? styles.primaryBtn : styles.secondaryBtn}>
                  {plan.button}
                </Link>
                {plan.note && <p className={styles.guarantee}>{plan.note}</p>}
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className={styles.fullPricingLink}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Link href="/pricing" className={styles.compareBtn}>
            Compare All Plans & Features
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
