"use client";
import { motion } from "framer-motion";
import styles from "./TempCTABanner.module.css";

export default function TempCTABanner() {
  return (
    <section className={styles.section}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Stop paying per build.{" "}
          <span className={styles.titleAccent}>Start owning your CI/CD.</span>
        </motion.h2>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Deploy in 5 minutes. Run unlimited builds. Pay nothing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a href="/install" className={styles.cta}>
            Deploy BuildNinja free
          </a>
        </motion.div>

        <motion.p
          className={styles.note}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          No credit card. No account required. Just Docker.
        </motion.p>
      </div>
    </section>
  );
}
