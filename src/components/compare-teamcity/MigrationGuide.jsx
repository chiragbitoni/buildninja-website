"use client";
import { motion } from "framer-motion";
import { ArrowRight, Check, Clock } from "lucide-react";
import Link from "next/link";
import styles from "./MigrationGuide.module.css";

const stepVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" },
  }),
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
  {
    title: "Deploy BuildNinja alongside TeamCity",
    desc: "Both run simultaneously during transition — no production disruption on day one.",
    time: "5 min",
  },
  {
    title: "Use the Dojo sandbox",
    desc: "Prototype your first two or three pipelines before touching any production infrastructure.",
    time: "10 min",
  },
  {
    title: "Migrate low-risk projects first",
    desc: "Feature branch CI, documentation builds, and internal tooling pipelines.",
    time: "1–2 hrs",
  },
  {
    title: "Move production pipelines last",
    desc: "After validating behaviour on lower-risk builds over one or two sprint cycles.",
    time: "2–4 hrs",
  },
  {
    title: "Decommission TeamCity",
    desc: "Once all pipelines are validated and the entire team is comfortable with BuildNinja's workflow.",
    time: "30 min",
  },
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className={styles.migCard}>
            <h3 className={styles.migCardTitle}><Check size={16} className={styles.migCheckIcon} /> What transfers directly</h3>
            {transfers.map((t, i) => (
              <div key={i} className={styles.migItem}><span className={styles.migCheck}>→</span>{t}</div>
            ))}
          </div>
          <div className={styles.migCard}>
            <h3 className={styles.migCardTitle} style={{ color: "var(--color-warning)" }}> What requires rebuilding</h3>
            {rebuilds.map((r, i) => (
              <div key={i} className={styles.migItem}><span className={styles.migWarn}>→</span>{r}</div>
            ))}
          </div>
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

        <div className={styles.stepsGrid}>
          {steps.map((s, i) => (
            <motion.div
              key={i}
              className={styles.stepCard}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stepVariants}
            >
              <div className={styles.stepNum}>0{i + 1}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
              <span className={styles.stepTime}><Clock size={14} /> {s.time}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
