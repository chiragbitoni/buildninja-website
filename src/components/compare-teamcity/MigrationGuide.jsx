"use client";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import styles from "./MigrationGuide.module.css";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const transfers = [
  "Build logic — compile, test, and deploy steps map directly to BuildNinja step types",
  "Environment variables and secrets — re-enter in BuildNinja's Build Parameters",
  "VCS integrations — GitHub, GitLab, and Bitbucket connect via OAuth in minutes",
  "Agent machines — existing Windows/Linux/macOS machines become BuildNinja agents",
];

const rebuilds = [
  "Kotlin DSL configuration — most pipelines rebuild in under an hour",
  "Complex DAG build chains — verify against v1.2.0 for advanced cases",
  "Custom TeamCity plugins with no direct equivalent — evaluate case-by-case",
];

const steps = [
  { title: "Deploy BuildNinja alongside TeamCity", desc: "Both run simultaneously during transition — no production disruption on day one." },
  { title: "Use the Dojo sandbox", desc: "Prototype your first two or three pipelines before touching any production infrastructure." },
  { title: "Migrate low-risk projects first", desc: "Feature branch CI, documentation builds, and internal tooling pipelines." },
  { title: "Move production deployment pipelines last", desc: "After validating behaviour on lower-risk builds over one or two sprint cycles." },
  { title: "Decommission TeamCity", desc: "Once all pipelines are validated and the entire team is comfortable with BuildNinja's workflow." },
];

export default function MigrationGuide() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="badge-alt" style={{ marginBottom: "10px", display: "inline-flex" }}>
            Migration guide
          </span>
          <h2 className={styles.sectionTitle}>Moving from TeamCity to BuildNinja</h2>
          <p className={styles.sectionSub}>
            Most TeamCity-to-BuildNinja migrations complete in a few hours to a couple of days,
            depending on pipeline count and complexity.
          </p>
        </motion.div>

        <motion.div
          className={styles.migCols}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className={styles.migCard} variants={cardVariants}>
            <h3 className={styles.migCardTitle}><Check size={16} style={{ color: "var(--color-success)" }} /> What transfers directly</h3>
            {transfers.map((t, i) => (
              <div key={i} className={styles.migItem}><span className={styles.migCheck}>→</span>{t}</div>
            ))}
          </motion.div>
          <motion.div className={styles.migCard} variants={cardVariants}>
            <h3 className={styles.migCardTitle} style={{ color: "var(--color-warning)" }}> What requires rebuilding</h3>
            {rebuilds.map((r, i) => (
              <div key={i} className={styles.migItem}><span className={styles.migWarn}>→</span>{r}</div>
            ))}
          </motion.div>
        </motion.div>

        <motion.h3
          className={styles.stepsTitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Recommended migration steps
        </motion.h3>

        <motion.div
          className={styles.steps}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((s, i) => (
            <motion.div key={i} className={styles.step} variants={cardVariants}>
              <div className={styles.stepNum}>{i + 1}</div>
              <div>
                <strong>{s.title}</strong>
                <p className={styles.stepDesc}>{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
