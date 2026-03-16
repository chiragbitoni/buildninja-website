"use client";
import { motion } from "framer-motion";
import styles from "./SocialProof.module.css";

const pillars = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
      </svg>
    ),
    bad: "Spending weeks configuring Jenkins or legacy CI/CD plugins.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    ),
    bad: "Dealing with opaque deployment failures during business peaks.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    bad: "Burning out engineers on infrastructure instead of product innovation.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/>
      </svg>
    ),
    bad: "Escalating per-seat SaaS costs that punish your team's growth.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    bad: "Buggy releases caused by inconsistent and unreliable pipelines.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    bad: "Missing critical deadlines due to 'maintenance-heavy' DevOps workflows.",
  },
];

const whys = [
  {
    label: "Eliminate Friction",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    color: "var(--color-primary)",
    glow: "rgba(255, 65, 114, 0.4)",
    desc: "CI/CD tools often promise simplicity but deliver hidden complexity. BuildNinja removes the abstraction layers, giving you raw speed without the YAML headaches.",
  },
  {
    label: "Optimized Flow",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
      </svg>
    ),
    color: "#40a9ff",
    glow: "rgba(64, 169, 255, 0.4)",
    desc: "Our philosophy: if a new engineer can't understand the pipeline in 5 minutes, it's failed. Built by the team at GrapeCity with 25+ years of software delivery expertise.",
  },
  {
    label: "Scale Confidently",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.71-2.12.71-2.12s-1.12-1-2.29-1c-1.17 0-1.42.12-1.42.12z"/><path d="M22 2s-5.74 3.74-7.25 5.25c-1.51 1.51-1.51 3.5 0 5s3.49 1.51 5 0C21.26 10.74 25 5 25 5s-1-1.12-3-3z"/><path d="M13 13L9 17"/><path d="M11 11l-4 4"/></svg>
    ),
    color: "#62de56",
    glow: "rgba(98, 222, 86, 0.4)",
    desc: "Ship features multiple times daily on your own hardware. No DevOps PhD required. Just reliable builds and deployments that work every single time.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.19, 1, 0.22, 1] }
  },
};

export default function SocialProof() {
  return (
    <section className={styles.section}>
      <div className={styles.bgGlow} aria-hidden="true" />
      
      <div className={styles.container}>
        {/* ── Problem Section ── */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={`${styles.badge} ${styles.problemBadge}`}>DevOps Bottlenecks</div>
          <h2 className={styles.title}>
            Stop Fighting Your <span>CI/CD Tools</span>
          </h2>
          <p className={styles.subtitle}>
            Modern software teams lose thousands of hours to brittle pipelines and complex infrastructure management.
          </p>
        </motion.div>

        <motion.div 
          className={styles.problemGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {pillars.map((p, i) => (
            <motion.div key={i} className={styles.problemItem} variants={itemVariants}>
              <div className={styles.problemIcon}>{p.icon}</div>
              <div className={styles.problemText}>{p.bad}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Solution Section ── */}
        <div className={styles.storySection}>
          <motion.div 
            className={styles.header}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={`${styles.badge} ${styles.trustBadge}`}>Why BuildNinja</div>
            <h2 className={styles.title}>Built for High-Velocity Teams</h2>
            <p className={styles.subtitle}>
              Infrastructure that thinks like an engineer, so you can focus on building what matters.
            </p>
          </motion.div>

          <motion.div 
            className={styles.whyGrid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {whys.map((w, i) => (
              <motion.div 
                key={w.label} 
                className={styles.whyCard} 
                variants={itemVariants}
                style={{ "--glow-color": w.glow }}
              >
                <div className={styles.cardGlow} />
                <div className={styles.whyIcon}>{w.icon}</div>
                <h3 className={styles.whyLabel} style={{ color: w.color }}>{w.label}</h3>
                <p className={styles.whyDesc}>{w.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Stats Strip ── */}
        <motion.div 
          className={styles.statsStrip}
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {[
            { value: "Free", label: "Up to 3 Agents" },
            { value: "< 5m", label: "Setup Time" },
            { value: "$199/mo", label: "Unlimited Scale" },
            { value: "Self-Hosted", label: "Full Control" },
          ].map((stat, i) => (
            <div key={i} className={styles.statItem}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
