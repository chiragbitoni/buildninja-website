"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ExternalLink } from 'lucide-react';
import Link from 'next/link';
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
          style={{ margin: '0 auto' }}
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
              Connect GitHub, GitLab, or Bitbucket via OAuth. Builds are triggered manually or scheduled - no webhook automation required.
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
            <h4>Convert Config to YAML</h4>
            <p>
              Convert your <code style={{ fontSize: '12px', background: 'var(--color-bg-shell)', padding: '2px 6px', borderRadius: '4px' }}>.circleci/config.yml</code> to <code style={{ fontSize: '12px', background: 'var(--color-bg-shell)', padding: '2px 6px', borderRadius: '4px' }}>buildninja.yaml</code>. The syntax is similar - most pipelines translate in under 30 minutes. Commit the YAML file to your repository.
            </p>
            <span className={s.stepTime}><Clock aria-label="Time" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /> 30–60 min</span>
            <Link href="https://buildninja.grapehub.io/docs/manage-projects-and-builds/export-and-reuse-build-configurations/yaml-configuration-reference" className={s.guideLink}>
              <ExternalLink size={14} /> YAML Reference
            </Link>
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
            <h4>Run from Config File</h4>
            <p>
              Create a new Build Configuration, select the <strong>Config File</strong> runner, and point it to your <code style={{ fontSize: '12px', background: 'var(--color-bg-shell)', padding: '2px 6px', borderRadius: '4px' }}>buildninja.yaml</code> in the repository. BuildNinja will execute all steps defined in the file - no manual pipeline setup needed.
            </p>
            <span className={s.stepTime}><Clock aria-label="Time" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /> 5 min</span>
            <Link href="https://buildninja.grapehub.io/docs/manage-projects-and-builds/export-and-reuse-build-configurations#run-builds-directly-from-yaml-file" className={s.guideLink}>
              <ExternalLink size={14} /> View Guide
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
