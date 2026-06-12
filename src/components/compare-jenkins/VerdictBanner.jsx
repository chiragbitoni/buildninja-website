"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import s from './VerdictBanner.module.css';

export default function VerdictBanner() {
  return (
    <div className={s.verdictBanner} role="region" aria-labelledby="verdict-heading">
      <h2 id="verdict-heading" className="sr-only">Quick Verdict</h2>
      
      <motion.div
        className={s.verdictGrid}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className={`${s.verdictCol} ${s.ninjaCol}`}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className={`${s.toolLogo} ${s.ninja}`}>
            <img src="/resources/logo-buildninja.svg" alt="BuildNinja" className={s.vbLogoBn} />
          </div>
          <div className={s.toolTagline}>Modern self-hosted CI/CD, v1.1.0</div>
          <div className={`${s.verdictScore} ${s.ninja}`}>
            91<span className={s.scoreMax}>/100</span>
          </div>
          <div className={s.verdictLabel}>Overall Score</div>
          <div className={`${s.verdictPill} ${s.winner}`}>
            <CheckCircle2 size={14} /> Recommended for modern teams
          </div>
        </motion.div>
        
        <motion.div
          className={s.verdictCenter}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className={s.vsBadge}>VS</div>
        </motion.div>
        
        <motion.div
          className={`${s.verdictCol} ${s.jenkinsCol}`}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className={`${s.toolLogo} ${s.jenkins}`}>
            <img src="/resources/jenkins-logo.svg" alt="Jenkins" className={s.vbLogoJk} />
          </div>
          <div className={s.toolTagline}>Open source, since 2011</div>
          <div className={`${s.verdictScore} ${s.jenkins}`}>
            64<span className={s.scoreMaxJenkins}>/100</span>
          </div>
          <div className={s.verdictLabel}>Overall Score</div>
          <div className={`${s.verdictPill} ${s.challenger}`}>
            Powerful but complex
          </div>
        </motion.div>
        
      </motion.div>
    </div>
  );
}
