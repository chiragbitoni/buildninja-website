"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import s from './MigrationGuide.module.css';

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: 'easeOut' }
  })
};

export default function MigrationGuide() {
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
          Migration Guide
        </motion.span>
        <motion.h2
          className="section-title"
          style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', marginBottom: '14px' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Switching from CircleCI to BuildNinja - 4 Steps
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Most teams complete their migration in under 1 day. Here's exactly how it works.
        </motion.p>

        <div className={s.stepsGrid}>
          <motion.div
            className={s.stepCard}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stepVariants}
          >
            <div className={s.stepNum}>01</div>
            <h4>Install BuildNinja</h4>
            <p>
              Pull the BuildNinja Docker image and run it on your server. Takes 2 minutes. No Kubernetes, no cloud account, no credit card.
            </p>
            <span className={s.stepTime}><Clock aria-label="Time" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /> 5 min</span>
          </motion.div>
          <motion.div
            className={s.stepCard}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stepVariants}
          >
            <div className={s.stepNum}>02</div>
            <h4>Connect Your Repos</h4>
            <p>
              Connect GitHub, GitLab, or Bitbucket via OAuth. BuildNinja sets up webhooks automatically - no manual configuration.
            </p>
            <span className={s.stepTime}><Clock aria-label="Time" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /> 3 min</span>
          </motion.div>
          <motion.div
            className={s.stepCard}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stepVariants}
          >
            <div className={s.stepNum}>03</div>
            <h4>Translate Your Pipelines</h4>
            <p>
              Convert your <code style={{ fontSize: '12px', background: 'var(--color-bg-shell)', padding: '2px 6px', borderRadius: '4px' }}>.circleci/config.yml</code> to <code style={{ fontSize: '12px', background: 'var(--color-bg-shell)', padding: '2px 6px', borderRadius: '4px' }}>buildninja.yaml</code>. The syntax is similar - most pipelines translate in under 30 minutes. Use our migration guide for common patterns.
            </p>
            <span className={s.stepTime}><Clock aria-label="Time" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /> 30–60 min</span>
          </motion.div>
          <motion.div
            className={s.stepCard}
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stepVariants}
          >
            <div className={s.stepNum}>04</div>
            <h4>Run &amp; Validate</h4>
            <p>
              Push a commit and watch your pipeline execute. Verify build outputs, deploy targets, and notification integrations. Switch DNS / environment variables, and you're live.
            </p>
            <span className={s.stepTime}><Clock aria-label="Time" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /> 1–2 hours</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
