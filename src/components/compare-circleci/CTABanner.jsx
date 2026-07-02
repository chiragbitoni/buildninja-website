"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import s from './CTABanner.module.css';

export default function CTABanner() {
  return (
    <section className={s.ctaSection}>
      <motion.div
        className={s.ctaInner}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className={s.ctaTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Ready to stop paying for <em>every build?</em>
        </motion.h2>
        <motion.p
          className={s.ctaSub}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Join engineering teams who switched from CircleCI to BuildNinja and cut their CI/CD costs by 60–80% while gaining full data control. No credit card. No seat limits. No surprises.
        </motion.p>
        <motion.div
          className={s.ctaBtns}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <Link href="/install" className={s.btnPrimary}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            Deploy BuildNinja Free
          </Link>
          <Link href="/dojo" className={s.btnSecondary}>
            Try the Dojo Sandbox <ArrowRight aria-label="Right Arrow" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} />
          </Link>
        </motion.div>
        <motion.p
          className={s.ctaNote}
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
