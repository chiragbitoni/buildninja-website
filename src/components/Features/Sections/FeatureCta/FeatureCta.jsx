'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './FeatureCta.module.css';

export default function FeatureCta() {
  return (
    <section className={styles.section}>
      <motion.div 
        className={styles.inner}
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.content}>
          <span className={styles.eyebrow}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
            Ready to build faster?
          </span>

          <h2 className={styles.title}>
            Start shipping with confidence.
          </h2>

          <p className={styles.subtitle}>
            Get BuildNinja running in your environment in under 5 minutes.
            Self-hosted, fully private, no vendor lock-in.
          </p>

          <div className={styles.btnRow}>
            <Link href="/install" className={styles.btnPrimary}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Install BuildNinja Free
            </Link>
            <Link href="/support" className={styles.btnOutline}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              Talk to Sales
            </Link>
          </div>

          <div className={styles.miniStats}>
            <div className={styles.miniStat}>
              <span className={styles.miniStatValue}>5 min</span>
              <span className={styles.miniStatLabel}>Setup Time</span>
            </div>
            <div className={styles.miniStat}>
              <span className={styles.miniStatValue}>Self-hosted</span>
              <span className={styles.miniStatLabel}>Full Control</span>
            </div>
            <div className={styles.miniStat}>
              <span className={styles.miniStatValue}>Free</span>
              <span className={styles.miniStatLabel}>To Get Started</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
