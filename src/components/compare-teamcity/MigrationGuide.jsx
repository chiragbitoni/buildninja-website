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
              Run <code className={styles.code}>docker pull buildninja/buildninja</code> on any server. Takes 5 minutes. Keep TeamCity running - no cutover yet.
            </p>
            <div className={styles.stepFooter}>
              <span className={styles.stepTime}><Clock size={14} /> 5 min</span>
            </div>
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
              Link your GitHub, GitLab, or Bitbucket repos via OAuth. BuildNinja sets up webhooks automatically - your repos stay where they are.
            </p>
            <div className={styles.stepFooter}>
              <span className={styles.stepTime}><Clock size={14} /> 3 min</span>
            </div>
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
            <h4>Convert Pipelines to YAML</h4>
            <p>
              Translate your Kotlin DSL or XML configs into BuildNinja&apos;s pipeline YAML. The syntax is similar for standard CI/CD workflows (build, test, deploy). Most pipelines translate in 30&ndash;60 minutes.
            </p>
            <div className={styles.stepFooter}>
              <span className={styles.stepTime}><Clock size={14} /> 30–60 min</span>
              <Link href="https://buildninja.grapehub.io/docs/manage-projects-and-builds/export-and-reuse-build-configurations/yaml-configuration-reference" className={styles.guideLink}>
                <ExternalLink size={14} /> YAML Reference
              </Link>
            </div>
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
            <h4>Set Run from Config File</h4>
            <p>
              BuildNinja can execute builds directly from a YAML file in your repository - no UI configuration needed. Point BuildNinja at your <code className={styles.code}>.buildninja.yaml</code> in your repository root and it handles the rest.
            </p>
            <div className={styles.stepFooter}>
              <Link href="https://buildninja.grapehub.io/docs/manage-projects-and-builds/export-and-reuse-build-configurations#run-builds-directly-from-yaml-file" className={styles.guideLink}>
                <ExternalLink size={14} /> Run from Config Guide
              </Link>
            </div>
          </motion.div>
        </div>

        <p className={styles.cutoverNote}>
          Run both in parallel for 1 week. Compare build outputs, validate results match, then point all webhooks to BuildNinja and decommission TeamCity.
        </p>

      </div>
    </section>
  );
}
