"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import s from './DecisionGuide.module.css';

export default function DecisionGuide() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <motion.span
          className="badge-alt"
          style={{ marginBottom: '10px' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >Decision Guide</motion.span>
        <motion.h2
          className="section-title"
          style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', marginBottom: '14px' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >Which Tool is Right for You?</motion.h2>
        <motion.p
          className="section-subtitle"
          style={{ margin: '0 auto' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Be honest about your team's situation. Both tools can run CI/CD pipelines - the question is which is right for your constraints.
        </motion.p>

        <motion.div
          className={s.decisionGrid}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          
          <div className={s.migrationBox}>
            <h3 className={s.chooseNinja}>Choose BuildNinja if…</h3>
            <ul className={s.featureList}>
              <li><Check size={16} className={s.iconWin} /> You want to be running builds in under 10 minutes</li>
              <li><Check size={16} className={s.iconWin} /> You don't have a dedicated DevOps engineer</li>
              <li><Check size={16} className={s.iconWin} /> You want unlimited users without per-seat costs</li>
              <li><Check size={16} className={s.iconWin} /> You're a growing startup or mid-size dev team</li>
              <li><Check size={16} className={s.iconWin} /> You want modern UX and low maintenance overhead</li>
              <li><Check size={16} className={s.iconWin} /> You're looking for a Jenkins replacement that just works</li>
              <li><Check size={16} className={s.iconWin} /> You want to run CI/CD on your own servers, not cloud</li>
            </ul>
          </div>

          <div className={`${s.migrationBox} ${s.migrationBoxAlt}`}>
            <h3 className={s.chooseJenkins}>Stick with Jenkins if…</h3>
            <ul className={s.featureListAlt}>
              <li><ArrowRight size={16} className={s.iconMuted} /> You have a large existing Jenkins investment (pipelines, plugins, scripts)</li>
              <li><ArrowRight size={16} className={s.iconMuted} /> You require a very specific plugin that only Jenkins has</li>
              <li><ArrowRight size={16} className={s.iconMuted} /> Your org runs extremely complex, highly customized pipelines</li>
              <li><ArrowRight size={16} className={s.iconMuted} /> You have a dedicated Jenkins admin who knows it well</li>
              <li><ArrowRight size={16} className={s.iconMuted} /> You need a platform with 14+ years of community answers</li>
            </ul>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
