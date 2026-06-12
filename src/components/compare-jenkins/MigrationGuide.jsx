"use client";
import React from 'react';
import { motion } from 'framer-motion';
import s from './MigrationGuide.module.css';

export default function MigrationGuide() {
  return (
    <section id="migration" className={s.section}>
      <div className={s.container}>
        <motion.span
          className={s.sectionLabel}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >Migration Guide</motion.span>
        <motion.h2
          className="section-title"
          style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', marginBottom: '14px' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >Switching from Jenkins to BuildNinja</motion.h2>
        <motion.p
          className="section-subtitle"
          style={{ margin: '0 auto' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Already on Jenkins and considering a switch? Here's how teams typically migrate without disrupting their delivery cadence.
        </motion.p>

        <motion.div
          className={s.migrationBox}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className={s.migrationTitle}>Estimated migration time: 1–3 days for most teams</h3>
          <p className={s.migrationSub}>Depending on pipeline complexity. Most teams run both in parallel during transition.</p>
          
          <div className={s.migrationSteps}>
            
            <div className={s.migrationStep}>
              <div className={s.stepNum}>1</div>
              <div className={s.stepContent}>
                <h4>Deploy BuildNinja alongside Jenkins</h4>
                <p>Run <code className={s.codeSnippet}>docker pull buildninja/buildninja</code> on any server. Takes 5 minutes. Keep Jenkins running - no cutover yet.</p>
              </div>
            </div>
            
            <div className={s.migrationStep}>
              <div className={s.stepNum}>2</div>
              <div className={s.stepContent}>
                <h4>Connect your repositories</h4>
                <p>Link your GitHub, GitLab, or Bitbucket repos. BuildNinja supports OAuth so this takes under 2 minutes per repo.</p>
              </div>
            </div>
            
            <div className={s.migrationStep}>
              <div className={s.stepNum}>3</div>
              <div className={s.stepContent}>
                <h4>Recreate pipelines (usually faster than expected)</h4>
                <p>Translate your Jenkinsfiles into BuildNinja's pipeline YAML. For most standard CI/CD workflows (build → test → deploy), this takes 30–60 minutes. Complex Groovy scripts take longer.</p>
              </div>
            </div>
            
            <div className={s.migrationStep}>
              <div className={s.stepNum}>4</div>
              <div className={s.stepContent}>
                <h4>Run both in parallel for 1 week</h4>
                <p>Compare outputs and build times. Validate that BuildNinja's results match Jenkins for your test suites and deployments before full cutover.</p>
              </div>
            </div>
            
            <div className={s.migrationStep}>
              <div className={s.stepNum}>5</div>
              <div className={s.stepContent}>
                <h4>Decommission Jenkins</h4>
                <p>Once confident, point all webhooks to BuildNinja, remove Jenkins from your infra, and reclaim that server budget.</p>
              </div>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
