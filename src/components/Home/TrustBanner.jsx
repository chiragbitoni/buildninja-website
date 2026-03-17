"use client";
import { motion } from "framer-motion";
import styles from "./TrustBanner.module.css";

const trustPoints = [
  "25+ Years of Innovation",
  "Trusted by Global Enterprises",
  "Self-Contained Deployment",
  "Predictable Pricing — $199/mo",
  "Business Hours Support"
];

export default function TrustBanner() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.leftCol}>
            <div className={styles.badge}>Our Heritage</div>
            <h2 className={styles.title}>
              Built by <span className={styles.highlight}>GrapeCity India</span>
            </h2>
            <p className={styles.desc}>
              Backed by GrapeCity's 25+ years of global developer tools expertise. Support means direct access to actual engineers during business hours — not chatbots.
            </p>
          </div>

          <div className={styles.rightCol}>
            {trustPoints.map((point, i) => (
              <motion.div 
                key={i} 
                className={styles.trustItem}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>{point}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
