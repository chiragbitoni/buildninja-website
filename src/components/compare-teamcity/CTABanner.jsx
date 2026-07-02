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
          Ready to move off <em>TeamCity?</em>
        </motion.h2>
        <motion.p
          className={styles.ctaSub}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          BuildNinja Growth Edition is free forever - unlimited users, unlimited agents, unlimited builds. Deploy in under 5 minutes with one Docker command.
        </motion.p>
        <motion.div
          className={styles.ctaBtns}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <Link href="/install" className={styles.btnPrimary}>
            Get your free BuildNinja key <ArrowRight size={16} />
          </Link>
          <Link href="/dojo" className={styles.btnSecondary}>
            Try the live Dojo sandbox <ArrowRight size={16} />
          </Link>
        </motion.div>
        <motion.div
          className={styles.ctaNote}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <span className={styles.ctaBadge}>No credit card</span>
          <span className={styles.ctaBadge}>No seat limits</span>
          <span className={styles.ctaBadge}>No expiry</span>
          <span className={styles.ctaBadge}>Self-hosted on your own infrastructure</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
