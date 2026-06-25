"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import styles from "./CTABanner.module.css";

export default function CTABanner() {
  return (
    <section className={styles.ctaSection}>
      <motion.div
        className={styles.ctaInner}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className={styles.ctaTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Stop paying per agent. Start owning your <em>CI/CD.</em>
        </motion.h2>
        <motion.p
          className={styles.ctaSub}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Deploy in 5 minutes. Run unlimited builds on unlimited agents. Pay nothing.
        </motion.p>
        <motion.div
          className={styles.ctaBtns}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <Link href="/install" className={styles.btnPrimary}>
            Deploy BuildNinja free
          </Link>
          <Link href="/dojo" className={styles.btnSecondary}>
            Try Dojo sandbox <ArrowRight size={16} />
          </Link>
        </motion.div>
        <motion.p
          className={styles.ctaNote}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Self-hosted in 5 minutes · Unlimited builds · No seat pricing · Cancel anytime
        </motion.p>
      </motion.div>
    </section>
  );
}
