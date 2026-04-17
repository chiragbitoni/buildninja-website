"use client";
import { motion } from "framer-motion";
import styles from "./AIRoadmap.module.css";

const features = [
  {
    title: "Configuration Analysis",
    desc: "Leverage integrated AI models to intelligently analyze and evaluate your build configurations for better orchestration.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
      </svg>
    ),
  },
  {
    title: "Logs Analysis",
    desc: "Intelligently analyze detailed build execution logs with AI to detect issues and present them in human-readable terms.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 8l4 4-4 4M8 12h8"></path>
      </svg>
    ),
  },
  {
    title: "Build Prediction",
    desc: "Utilize AI models to accurately predict the eventual success of your build processes before they complete.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
    ),
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.19, 1, 0.22, 1] }
  },
};

export default function AIRoadmap() {
  return (
    <section className={styles.section} id="intelligence">
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.badge}>Coming Soon</div>
          <h2 className={styles.title}>
            The Next Evolution: <span className={styles.gradient}>BuildNinja Intelligence</span>
          </h2>
          <p className={styles.subtitle}>
            Make your CI/CD not just automated, but intelligent. No ML expertise required to benefit from our upcoming suite of AI tools.
          </p>
        </motion.div>

        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((f, i) => (
            <motion.div key={i} className={styles.card} variants={itemVariants}>
              <div className={styles.iconWrapper}>
                <div className={styles.iconGlow} />
                {f.icon}
              </div>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className={styles.footer}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p>
            <strong>Also coming:</strong> Intelligent Error Analysis, Auto Branch Configuration, and Proactive Agent Management.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

