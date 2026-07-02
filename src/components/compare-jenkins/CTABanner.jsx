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
        <motion.div
          className={s.heroBadge}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >Free to start · No credit card</motion.div>
        <motion.h2
          className={s.ctaTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >Ready to leave <em>Jenkins behind?</em></motion.h2>
        <motion.p
          className={s.ctaSub}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          Deploy BuildNinja in 5 minutes on your own servers. No seat limits. No cloud dependency. No YAML nightmares.
        </motion.p>
        <motion.div
          className={s.ctaBtns}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link href="/install" className={s.btnPrimary}>
            Get Started Free <ArrowRight size={16} />
          </Link>
          <Link href="/dojo" className={s.btnOutline}>
            Try the Live Demo
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
