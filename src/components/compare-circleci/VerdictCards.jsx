"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Lock, Infinity } from 'lucide-react';
import s from './VerdictCards.module.css';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: 'easeOut' }
  })
};

export default function VerdictCards() {
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
          Why Teams Switch from CircleCI
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
          style={{ margin: '0 auto' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          These aren't feature preferences - they're business model differences CircleCI can't change without dismantling their revenue model.
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
            <h3>Truly Unlimited Builds - Not "Generous Limits"</h3>
            <p>
              CircleCI's free tier offers up to ~6,000 build-minutes/month. A team running 50 builds/day exhausts that in 6 days. BuildNinja's self-hosted model means unlimited builds on your own server with zero per-build costs. CircleCI's credit model is their core revenue mechanism - they structurally cannot offer truly unlimited builds without destroying their business.
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
            <h3>Real Self-Hosting - Not "Bring Your Own Kubernetes"</h3>
            <p>
              CircleCI offers a self-hosted "Server" product - but it requires Kubernetes, dedicated infrastructure management, and is gated behind enterprise contracts starting at five figures annually. BuildNinja can be installed on any machine via the installer, or self-hosted with a single <code style={{ fontSize: '12px', background: 'var(--color-bg-shell)', padding: '2px 6px', borderRadius: '4px' }}>docker run</code> command on any server. For regulated industries, air-gapped environments, or cost-conscious teams - there's no real comparison.
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
            <div className={`${s.verdictIcon} ${s.verdictIconBlue}`}><DollarSign aria-label="Pricing" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></div>
            <h3>No Per-Seat Pricing - Your Bill Stays Flat as You Grow</h3>
            <p>
              BuildNinja puts you in control - from the hardware your builds run on to the network they operate in. Add build agents, configure private networking, and manage your own storage. CircleCI's SaaS model means you're limited to their infrastructure choices and plan constraints.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
