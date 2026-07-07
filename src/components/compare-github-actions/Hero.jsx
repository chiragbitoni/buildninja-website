"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import s from './Hero.module.css';


export default function Hero() {
  return (
    <header className={s.hero} role="banner">
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
          <span style={{ fontStyle: 'normal', background: 'linear-gradient(135deg, var(--color-primary) 30%, var(--color-primary-alt))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent', display: 'inline-block', paddingBottom: '0.15em', marginBottom: '-0.15em', verticalAlign: 'top' }}>BuildNinja</span> vs GitHub Actions<br />
          The Honest Comparison
        </motion.h1>

        <motion.p
          className={`section-subtitle ${s.fadeUp}`}
          style={{ fontSize: '17px', margin: '0 auto 32px', maxWidth: '800px', lineHeight: 1.7, textAlign: 'center' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          GitHub Actions is deeply embedded in GitHub's ecosystem - but <strong>pricing adds up fast</strong>. Self-hosted runners are free, but GitHub-hosted minutes, per-seat fees, and storage overages make costs unpredictable. This page compares every feature, every cost, and every trade-off honestly.
        </motion.p>

        <motion.div
          className={`${s.heroBadges} ${s.fadeUp}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <span className={s.heroBadge}>
            <span className={`${s.dot} ${s.dotRed}`}></span>
            BuildNinja: Unlimited builds included
          </span>
          <span className={s.heroBadge}>
            <span className={`${s.dot} ${s.dotGreen}`}></span>
            GitHub Actions: 2,000 min free, then pay-as-you-go
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
            Deploy BuildNinja Free
          </Link>
          <a href="#comparison-table" className={s.btnOutline}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="3" />
            </svg>
            Jump to Comparison Table
          </a>
        </motion.div>

        <motion.div
          className={`${s.heroStats} ${s.fadeUp}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.75 }}
        >
          <div className={s.hsItem}>
            <div className={`${s.hsVal} ${s.hsValOrange}`}>Unlimited</div>
            <div className={s.hsLbl}>BuildNinja builds/mo - no caps</div>
          </div>
          <div className={s.hsItem}>
            <div className={`${s.hsVal} ${s.hsValRed}`}>2,000 min</div>
            <div className={s.hsLbl}>GitHub Actions free (private repos)</div>
          </div>
          <div className={s.hsItem}>
            <div className={`${s.hsVal} ${s.hsValGreen}`}>$0/build</div>
            <div className={s.hsLbl}>BuildNinja per-build cost</div>
          </div>
          <div className={s.hsItem}>
            <div className={`${s.hsVal} ${s.hsValDark}`}>$0.006<span style={{ fontSize: '14px' }}>/min</span></div>
            <div className={s.hsLbl}>GitHub Actions Linux runners (2-core)</div>
          </div>
        </motion.div>

        <motion.div
          className={s.heroMeta}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <span className={s.metaBadge}>Updated June 2026</span>
        </motion.div>
      </div>
    </header>
  );
}
