"use client";
import { motion } from "framer-motion";
import styles from "./HowItWorks.module.css";

const steps = [
  {
    step: "01",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
      </svg>
    ),
    title: "Pull and Run",
    code: "docker pull buildninja/buildninja",
    desc: "Deploy in minutes, not weeks. Just a single command to spin up your private build farm.",
  },
  {
    step: "02",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: "Connect Code",
    desc: "Securely link GitHub, GitLab, or Bitbucket. Zero vendor lock-in, total control of your source.",
  },
  {
    step: "03",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"/>
      </svg>
    ),
    title: "Smart Config",
    desc: "Use AI-assisted triggers and pipeline logic to optimize builds automatically.",
  },
  {
    step: "04",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
    title: "Scale Instantly",
    desc: "Ship confidently with unlimited users and parallel builds on your own hardware.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      cubicBezier: [0.19, 1, 0.22, 1],
    },
  },
};

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how-it-works">
      <div className={styles.glow} aria-hidden="true" />
      
      <div className={styles.container}>
        {/* Header Section */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className={styles.badge}>
             Quick Launch
          </div>
          <motion.h2 className={styles.title}>
            The Simple <span>Self-Hosted</span> Solution
          </motion.h2>
          <motion.p className={styles.subtitle}>
            From zero to running builds in under 5 minutes. No specialized DevOps knowledge required.
          </motion.p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((s, i) => (
            <motion.div key={i} className={styles.stepWrapper} variants={itemVariants}>
              <div className={styles.stepCard}>
                <div className={styles.stepHeader}>
                  <div className={styles.iconWrapper}>
                    {s.icon}
                  </div>
                  <span className={styles.stepLabel}>STEP {s.step}</span>
                </div>

                <h3 className={styles.stepTitle}>{s.title}</h3>
                
                {s.code && (
                  <div className={styles.codeBlock}>
                    {s.code}
                  </div>
                )}
                
                <p className={styles.desc}>{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
