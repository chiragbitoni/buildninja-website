"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Infinity, Lock, Hammer } from 'lucide-react';
import s from './StructuralWins.module.css';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: 'easeOut' }
  })
};

export default function StructuralWins() {
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
          Why Teams Switch from GitHub Actions
        </motion.span>
        <motion.h2
          className="section-title"
          style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', marginBottom: '14px' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Three reasons BuildNinja wins on structure, not just price
        </motion.h2>
        <motion.p
          className="section-subtitle"
          style={{ maxWidth: '580px', margin: '0 auto' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          These aren't feature preferences - they're structural differences GitHub cannot change without dismantling their revenue model.
        </motion.p>

        <div className={s.verdictGrid}>
          <motion.div
            className={`${s.verdictCard} ${s.verdictCardGreen}`}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <div className={`${s.verdictIcon} ${s.verdictIconGreen}`}><Infinity aria-label="Unlimited" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></div>
            <h3>No Per-Build Billing - Ever</h3>
            <p>
              GitHub Actions charges per compute minute from the moment you exceed 2,000 free monthly minutes. BuildNinja runs on your infrastructure with zero per-build fees. Run 10 or 10,000 builds this month - your BuildNinja server cost doesn't change. GitHub's per-minute model is their core revenue stream; they structurally cannot offer unlimited builds without eliminating it.
            </p>
          </motion.div>
          <motion.div
            className={`${s.verdictCard} ${s.verdictCardOrange}`}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <div className={`${s.verdictIcon} ${s.verdictIconOrange}`}><Lock aria-label="Security" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></div>
            <h3>Real Self-Hosting - Not "Bring Your Own Servers, Still Pay Per Minute"</h3>
            <p>
              GitHub Actions self-hosted runners are free, but you're still tied to GitHub's ecosystem - paying $4-21/user/mo just for the plan, locked to GitHub repos, and hit with per-minute costs if you use hosted runners. BuildNinja can be installed on any machine via a single <code style={{ fontSize: '12px', background: 'var(--color-bg-shell)', padding: '2px 6px', borderRadius: '4px' }}>docker run</code> command with zero per-build taxes, zero per-seat fees, and works with any Git provider. For regulated industries, air-gapped environments, or cost-conscious teams - there's no real comparison.
            </p>
          </motion.div>
          <motion.div
            className={`${s.verdictCard} ${s.verdictCardBlue}`}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <div className={`${s.verdictIcon} ${s.verdictIconBlue}`}><Hammer aria-label="Architecture" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></div>
            <h3>True Platform Independence</h3>
            <p>
              GitHub Actions is deeply coupled to GitHub's ecosystem - switching your Git host means rebuilding all your workflows. BuildNinja works with GitHub, GitLab, and Bitbucket interchangeably. It runs on your infrastructure, not Microsoft's. For teams with multi-cloud strategies, compliance requirements, or simply wanting to avoid vendor lock-in, this independence is structural, not cosmetic.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
