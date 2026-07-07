"use client";
import React from 'react';
import { motion } from 'framer-motion';
import s from './Hero.module.css';

export default function Hero() {
  return (
    <header className={s.hero}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="badge-alt" style={{ marginBottom: '20px' }}>Honest Comparison</div>
      </motion.div>
      
      <motion.h1
        className="section-title"
        style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700, marginBottom: '18px' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <span style={{ fontStyle: 'normal', background: 'linear-gradient(135deg, var(--color-primary) 30%, var(--color-primary-alt))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent', display: 'inline-block', paddingBottom: '0.15em', marginBottom: '-0.15em', verticalAlign: 'top' }}>BuildNinja</span> vs Jenkins:<br />
        Which CI/CD Platform Wins?
      </motion.h1>
      
      <motion.p
        className="section-subtitle"
        style={{ fontSize: '17px', margin: '0 auto 32px', maxWidth: '800px', lineHeight: 1.7, textAlign: 'center' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        A fair, detailed breakdown of both tools - setup time, performance, maintenance burden, plugin ecosystem, and total cost of ownership.
      </motion.p>
      
      <motion.div
        className={s.heroMeta}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.45 }}
      >
        <span className={s.metaBadge}>Updated June 2026</span>
        <span className={s.metaBadge}>Feature-by-feature comparison</span>
        <span className={s.metaBadge}>Real setup benchmarks</span>
        <span className={s.metaBadge}>Migration guide included</span>
        <span className={s.metaBadge}>No affiliate bias</span>
      </motion.div>
    </header>
  );
}
