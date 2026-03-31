import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faBolt, 
  faLayerGroup, 
  faRocket, 
  faShieldHalved, 
  faExclamationTriangle,
  faClock,
  faUsersSlash,
  faArrowTrendUp,
  faMicrochip,
  faInfinity,
  faServer
} from "@fortawesome/free-solid-svg-icons";
import styles from "./SocialProof.module.css";

const problems = [
  { icon: faClock, text: "Spending weeks on Jenkins plugins." },
  { icon: faExclamationTriangle, text: "Opaque deployment failures." },
  { icon: faUsersSlash, text: "Burning out engineering talent." },
  { icon: faArrowTrendUp, text: "Escalating per-seat SaaS costs." },
  { icon: faLayerGroup, text: "Buggy, unreliable pipelines." },
  { icon: faBolt, text: "Missing critical delivery deadlines." }
];

const whys = [
  {
    title: "Eliminate Friction",
    icon: faBolt,
    desc: "CI/CD tools often promise simplicity but deliver hidden complexity. BuildNinja removes the abstraction layers, giving you raw speed without the YAML headaches.",
    color: "var(--color-primary)"
  },
  {
    title: "Optimized Flow",
    icon: faLayerGroup,
    desc: "If an engineer can't understand the pipeline in 5 minutes, it's failed. Built by a team with 25+ years of software delivery expertise.",
    color: "#40a9ff"
  },
  {
    title: "Scale Confidently",
    icon: faRocket,
    desc: "Ship features multiple times daily on your own hardware. No DevOps PhD required. Just reliable builds that work every single time.",
    color: "#62de56"
  }
];

const stats = [
  { value: "Free", label: "Up to 3 Agents", icon: faUsersSlash },
  { value: "< 5m", label: "Setup Time", icon: faClock },
  { value: "$199/mo", label: "Unlimited Scale", icon: faInfinity },
  { value: "Self-Hosted", label: "Full Control", icon: faServer }
];

export default function SocialProof() {
  return (
    <section className={styles.section}>
      <div className={styles.ambientGlow} />
      <div className={styles.gridOverlay} />
      
      <div className={styles.container}>
        {/* ── Stats Strip ── */}
        <motion.div 
          className={styles.statsStrip}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, i) => (
            <div key={i} className={styles.statItem}>
              <div className={styles.statIcon}>
                <FontAwesomeIcon icon={stat.icon} />
              </div>
              <div className={styles.statContent}>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* ── The Struggle (Problem) ── */}
        <div className={styles.problemSection}>
          <motion.div 
            className={styles.header}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className={styles.badge}>The Cost of Complexity</span>
            <h2 className={styles.title}>Stop Fighting Your <span>CI/CD Tools</span></h2>
            <p className={styles.subtitle}>
              Modern software teams lose thousands of hours to brittle pipelines and complex infrastructure management.
            </p>
          </motion.div>

          <div className={styles.problemGrid}>
            {problems.map((p, i) => (
              <motion.div 
                key={i} 
                className={styles.problemCard}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <FontAwesomeIcon icon={p.icon} className={styles.problemIcon} />
                <span className={styles.problemText}>{p.text}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Why BuildNinja (Solution) ── */}
        <div className={styles.solutionSection}>
          <motion.div 
            className={styles.header}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className={styles.badge}>The Ninja Way</span>
            <h2 className={styles.title}>Built for High-Velocity Teams</h2>
          </motion.div>

          <div className={styles.whyGrid}>
            {whys.map((w, i) => (
              <motion.div 
                key={i} 
                className={styles.whyCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className={styles.whyIcon} style={{ "--accent": w.color }}>
                  <FontAwesomeIcon icon={w.icon} />
                </div>
                <h3 className={styles.whyTitle}>{w.title}</h3>
                <p className={styles.whyDesc}>{w.desc}</p>
                <div className={styles.cardBg} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
