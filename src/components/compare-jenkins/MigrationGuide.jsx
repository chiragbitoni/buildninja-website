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
    <section id="migration" className={s.section}>
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
          Switching from Jenkins to BuildNinja - 4 Steps
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
            <h4>Deploy BuildNinja</h4>
            <p>
              Run <code style={{ fontSize: '12px', background: 'var(--color-bg-shell)', padding: '2px 6px', borderRadius: '4px' }}>docker pull buildninja/buildninja</code> on any server. Takes 5 minutes. Keep Jenkins running - no cutover yet.
            </p>
            <div className={s.stepFooter}>
              <span className={s.stepTime}><Clock aria-label="Time" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /> 5 min</span>
            </div>
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
              Link your GitHub, GitLab, or Bitbucket repos via OAuth. BuildNinja sets up webhooks automatically - your repos stay where they are.
            </p>
            <div className={s.stepFooter}>
              <span className={s.stepTime}><Clock aria-label="Time" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /> 3 min</span>
            </div>
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
            <h4>Convert Pipelines to YAML</h4>
            <p>
              Translate your Jenkinsfiles into BuildNinja's pipeline YAML. The syntax is similar for standard CI/CD workflows (build, test, deploy). Most pipelines translate in 30–60 minutes.
            </p>
            <div className={s.stepFooter}>
              <span className={s.stepTime}><Clock aria-label="Time" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /> 30–60 min</span>
              <Link href="https://buildninja.grapehub.io/docs/manage-projects-and-builds/export-and-reuse-build-configurations/yaml-configuration-reference" className={s.guideLink}>
                <ExternalLink size={14} /> YAML Reference
              </Link>
            </div>
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
            <h4>Validate & Cut Over</h4>
            <p>
              Run both in parallel for 1 week. Compare build outputs, validate results match, then point all webhooks to BuildNinja and decommission Jenkins.
            </p>
            <div className={s.stepFooter}>
              <span className={s.stepTime}><Clock aria-label="Time" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /> 1 week</span>
              <Link href="https://buildninja.grapehub.io/docs/manage-projects-and-builds/export-and-reuse-build-configurations#run-builds-directly-from-yaml-file" className={s.guideLink}>
                <ExternalLink size={14} /> View Guide
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
