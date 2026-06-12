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
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <span className={s.highlight}>BuildNinja</span> vs Jenkins:<br />
        Which CI/CD Platform Wins?
      </motion.h1>
      
      <motion.p
        className={s.heroSub}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        A fair, detailed breakdown of both tools - setup time, performance, maintenance burden, plugin ecosystem, and total cost of ownership.
      </motion.p>
      
      <motion.div
        className={s.heroMeta}
        role="list"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.45 }}
      >
        <span role="listitem">Feature-by-feature comparison</span>
        <span role="listitem">Real setup benchmarks</span>
        <span role="listitem">Migration guide included</span>
        <span role="listitem">No affiliate bias</span>
      </motion.div>
    </header>
  );
}
