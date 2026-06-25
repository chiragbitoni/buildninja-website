"use client";
import { motion } from "framer-motion";
import { Clock, ExternalLink } from "lucide-react";
import Link from "next/link";
import styles from "./MigrationGuide.module.css";

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: "easeOut" },
  }),
};

export default function MigrationGuide() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.span
          className="badge-alt"
          style={{ marginBottom: "10px" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Migration Guide
        </motion.span>
        <motion.h2
          className="section-title"
          style={{ fontSize: "clamp(24px, 3.5vw, 36px)", marginBottom: "14px" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Switching from TeamCity to BuildNinja - 4 Steps
        </motion.h2>
        <motion.p
          className="section-subtitle"
          style={{ margin: "0 auto 40px" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Most teams complete their migration in under a day. Here&apos;s exactly how it works.
        </motion.p>

        <div className={styles.stepsGrid}>
          <motion.div
            className={styles.stepCard}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stepVariants}
          >
            <div className={styles.stepNum}>01</div>
            <h4>Deploy BuildNinja</h4>
            <p>
              Pull the BuildNinja Docker image and run it on your server alongside TeamCity. Both operate in parallel — zero disruption to existing builds.
            </p>
            <span className={styles.stepTime}><Clock size={14} /> 5 min</span>
          </motion.div>
          <motion.div
            className={styles.stepCard}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stepVariants}
          >
            <div className={styles.stepNum}>02</div>
            <h4>Connect Your Repos</h4>
            <p>
              Connect GitHub, GitLab, or Bitbucket via OAuth. BuildNinja will pull your repositories and detect branch structures automatically.
            </p>
            <span className={styles.stepTime}><Clock size={14} /> 5 min</span>
          </motion.div>
          <motion.div
            className={styles.stepCard}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stepVariants}
          >
            <div className={styles.stepNum}>03</div>
            <h4>Rebuild Pipelines</h4>
            <p>
              Recreate your pipeline logic in BuildNinja&apos;s step-based UI or YAML config. Kotlin DSL, XML, and complex dependency graphs map to BuildNinja step types. Many teams recreate typical pipelines in less than an hour.
            </p>
            <span className={styles.stepTime}><Clock size={14} /> 30–60 min</span>
            <Link href="https://buildninja.grapehub.io/docs/manage-projects-and-builds/export-and-reuse-build-configurations/yaml-configuration-reference" className={styles.guideLink}>
              <ExternalLink size={14} /> YAML Reference
            </Link>
          </motion.div>
          <motion.div
            className={styles.stepCard}
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stepVariants}
          >
            <div className={styles.stepNum}>04</div>
            <h4>Validate &amp; Decommission</h4>
            <p>
              Run builds on BuildNinja alongside TeamCity for a sprint cycle. Once all pipelines validate, shut down TeamCity and own your CI/CD free forever.
            </p>
            <span className={styles.stepTime}><Clock size={14} /> 1–2 weeks</span>
          </motion.div>
        </div>

        <motion.div
          className={styles.termSection}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className={styles.termTitle}>Terminology mapping</h3>
          <div className={styles.termTable}>
            <div className={styles.termRow}>
              <span className={styles.termLabel}>TeamCity</span>
              <span className={styles.termArrow}>→</span>
              <span className={styles.termLabel}>BuildNinja</span>
            </div>
            <div className={styles.termRow}><span>Build Configuration</span><span className={styles.termArrow}>→</span><span>Pipeline</span></div>
            <div className={styles.termRow}><span>Build Agent</span><span className={styles.termArrow}>→</span><span>Agent</span></div>
            <div className={styles.termRow}><span>Build Parameters</span><span className={styles.termArrow}>→</span><span>Build Parameters</span></div>
            <div className={styles.termRow}><span>VCS Root</span><span className={styles.termArrow}>→</span><span>Repository Connection</span></div>
            <div className={styles.termRow}><span>Build Chain</span><span className={styles.termArrow}>→</span><span>Pipeline Dependencies</span></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
