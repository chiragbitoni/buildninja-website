"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Zap } from 'lucide-react';
import Link from 'next/link';
import s from './Recommendation.module.css';

export default function Recommendation() {
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
        >
          Honest Recommendation
        </motion.span>
        <motion.h2
          className="section-title"
          style={{ fontSize: 'clamp(24px, 3.5vw, 36px)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Which tool is right for your team?
        </motion.h2>

        <div className={s.recGrid}>
          <motion.div
            className={`${s.recCard} ${s.recCardBn}`}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className={s.recIcon}><img src="/resources/logo-buildninja.svg" alt="BuildNinja" className={s.recLogoBn} /></div>
            <h3 className={s.recTitle}>Choose BuildNinja if you…</h3>
            <ul className={s.recList}>
              <li className={s.recListItem}>
                <span className={s.recListIconBn}><Check size={14} color="currentColor" /></span>
                <span className={s.recListItemBn}>Want unlimited builds without watching a credit meter</span>
              </li>
              <li className={s.recListItem}>
                <span className={s.recListIconBn}><Check size={14} color="currentColor" /></span>
                <span className={s.recListItemBn}>Require data sovereignty (HIPAA, GDPR, financial compliance)</span>
              </li>
              <li className={s.recListItem}>
                <span className={s.recListIconBn}><Check size={14} color="currentColor" /></span>
                <span className={s.recListItemBn}>Are migrating from Jenkins and want simplicity, not new complexity</span>
              </li>
              <li className={s.recListItem}>
                <span className={s.recListIconBn}><Check size={14} color="currentColor" /></span>
                <span className={s.recListItemBn}>Need to run CI/CD in an air-gapped or offline environment</span>
              </li>
              <li className={s.recListItem}>
                <span className={s.recListIconBn}><Check size={14} color="currentColor" /></span>
                <span className={s.recListItemBn}>Have a growing team where per-seat costs are becoming a problem</span>
              </li>
              <li className={s.recListItem}>
                <span className={s.recListIconBn}><Check size={14} color="currentColor" /></span>
                <span className={s.recListItemBn}>Prefer owning your infrastructure rather than renting capacity</span>
              </li>
            </ul>
            <Link href="/install" className={s.btnPrimary}>
              <Zap size={14} color="currentColor" />
              Start Free - No Card Needed
            </Link>
          </motion.div>

          <motion.div
            className={`${s.recCard} ${s.recCardAlt}`}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <div className={s.recIcon}><img src="/resources/circleci-logo.svg" alt="CircleCI" className={s.recLogoCi} /></div>
            <h3 className={s.recTitle}>CircleCI may be better if you…</h3>
            <ul className={s.recList}>
              <li className={s.recListItem}>
                <span className={s.recListIconAlt}><ArrowRight size={14} color="currentColor" /></span>
                <span className={s.recListItemAlt}>Need zero infrastructure management (fully managed SaaS)</span>
              </li>
              <li className={s.recListItem}>
                <span className={s.recListIconAlt}><ArrowRight size={14} color="currentColor" /></span>
                <span className={s.recListItemAlt}>Rely heavily on CircleCI's orbs ecosystem (1,000+ integrations)</span>
              </li>
              <li className={s.recListItem}>
                <span className={s.recListIconAlt}><ArrowRight size={14} color="currentColor" /></span>
                <span className={s.recListItemAlt}>Have an enterprise contract with SLA guarantees already in place</span>
              </li>
              <li className={s.recListItem}>
                <span className={s.recListIconAlt}><ArrowRight size={14} color="currentColor" /></span>
                <span className={s.recListItemAlt}>Build volume is low enough that credits rarely run out</span>
              </li>
              <li className={s.recListItem}>
                <span className={s.recListIconAlt}><ArrowRight size={14} color="currentColor" /></span>
                <span className={s.recListItemAlt}>Need CircleCI's advanced mobile (iOS/Android) build infrastructure</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
