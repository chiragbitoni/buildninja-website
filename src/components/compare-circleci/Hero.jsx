"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import s from './Hero.module.css';

export default function Hero() {
  return (
    <header className={s.hero} role="banner">
      <div className={s.container}>
        <div className={s.heroInner}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="badge-alt" style={{ marginBottom: '20px' }}>
              Honest Comparison
            </div>
          </motion.div>

          <motion.h1
            className={`section-title ${s.fadeUp}`}
            style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700, marginBottom: '18px' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <span style={{ fontStyle: 'normal', background: 'linear-gradient(135deg, var(--color-primary) 30%, var(--color-primary-alt))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent', display: 'inline-block', paddingBottom: '0.15em', marginBottom: '-0.15em', verticalAlign: 'top' }}>BuildNinja</span> vs CircleCI<br />
            Which CI/CD Tool Wins?

          </motion.h1>

          <motion.p
            className={`section-subtitle ${s.fadeUp}`}
            style={{ fontSize: '17px', margin: '0 auto 32px', maxWidth: '800px', lineHeight: 1.7, textAlign: 'center' }}
            initial={{ opacity: 0, y: 20 }}

            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Unlimited builds vs up to ~6,000 build-minutes/mo. No seat pricing vs per-minute billing. True self-hosted vs SaaS-only. We compared every feature - honestly.
          </motion.p>

          <motion.div
            className={`${s.heroBadges} ${s.fadeUp}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <span className={s.heroBadge}>
              <span className={`${s.dot} ${s.dotOrange}`}></span>
              BuildNinja: Unlimited builds included
            </span>
            <span className={s.heroBadge}>
              <span className={`${s.dot} ${s.dotGreen}`}></span>
              CircleCI: Up to ~6,000 min/mo free, then pay-per-credit
            </span>
          </motion.div>

          <motion.div
            className={`${s.heroCtas} ${s.fadeUp}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link href="/install" className={s.btnPrimary}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              Start BuildNinja Free
            </Link>
            <a href="#comparison-table" className={s.btnSecondary}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2" />
              </svg>
              Jump to Comparison Table
            </a>
          </motion.div>

          <motion.div
            className={s.heroMeta}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <span className={s.metaBadge}>Updated June 2026</span>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
