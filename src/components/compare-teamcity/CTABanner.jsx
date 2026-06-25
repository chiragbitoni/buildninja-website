"use client";
import { motion } from "framer-motion";
import styles from "./CTABanner.module.css";

export default function CTABanner() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaInner}>
        <motion.h2
          className={styles.ctaTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Stop paying per agent.<br />
          Start owning your <em>CI/CD.</em>
        </motion.h2>
        <motion.p
          className={styles.ctaSub}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Deploy in 5 minutes. Run unlimited builds on unlimited agents. Pay nothing.
        </motion.p>
        <motion.div
          className={styles.ctaBtns}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a href="/install" className={styles.btnPrimary}>
            Deploy BuildNinja free
          </a>
          <a href="/dojo" className={styles.btnSecondary}>
            Try Dojo sandbox
          </a>
        </motion.div>

      </div>
    </section>
  );
}
