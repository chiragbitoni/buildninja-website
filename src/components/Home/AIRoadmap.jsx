"use client";
import { motion } from "framer-motion";
import styles from "./AIRoadmap.module.css";

const features = [
  {
    title: "Configuration Analysis",
    desc: "AI reviews your pipeline config and surfaces optimizations, redundant steps, and cache opportunities before you ship.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <circle cx="5" cy="14" r="3" />
        <path d="m9 18-1.5-1.5" />
      </svg>
    ),
  },
  {
    title: "Logs Analysis",
    desc: "Stop reading 10,000-line logs. BuildNinja Intelligence pinpoints the exact failure line and suggests a fix.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4" />
        <path d="M19 17V5a2 2 0 0 0-2-2H4" />
        <path d="M15 8h-5" />
        <path d="M15 12h-5" />
      </svg>
    ),
  },
  {
    title: "Build Prediction",
    desc: "Predict build outcomes and flaky tests before they block your team. Ship with confidence, not luck.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
];

export default function AIRoadmap() {
  return (
    <section className={styles.section} id="intelligence">
      <div className={styles.container}>
        <motion.div
          className={styles.panel}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.panelInner}>
            <div className={styles.contentCol}>
              <span className={styles.badge}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
                  <path d="M9 13a4.5 4.5 0 0 0 3-4" />
                  <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
                  <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
                  <path d="M6 18a4 4 0 0 1-1.967-.516" />
                  <path d="M12 13h4" />
                  <path d="M12 18h6a2 2 0 0 1 2 2v1" />
                  <path d="M12 8h8" />
                  <path d="M16 8V5a2 2 0 0 1 2-2" />
                  <circle cx="16" cy="13" r=".5" />
                  <circle cx="18" cy="3" r=".5" />
                  <circle cx="20" cy="21" r=".5" />
                  <circle cx="20" cy="8" r=".5" />
                </svg>
                Coming Soon
              </span>
              <h2 className={styles.title}>
                The Next Evolution:<br />
                <span className={styles.gradient}>BuildNinja Intelligence</span>
              </h2>
              <p className={styles.subtitle}>
                AI-powered insights built directly into your CI/CD. Less time debugging, more time shipping.
              </p>
            </div>
            <div className={styles.cardsCol}>
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  className={styles.card}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className={styles.cardIcon}>{f.icon}</div>
                  <div>
                    <h3 className={styles.cardTitle}>{f.title}</h3>
                    <p className={styles.cardDesc}>{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
