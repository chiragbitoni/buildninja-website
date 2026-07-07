"use client";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroInner}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge-alt" style={{ marginBottom: "10px", display: "inline-flex" }}>
              CI/CD Comparison
            </span>
          </motion.div>

          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <span style={{ fontStyle: 'normal', background: 'linear-gradient(135deg, var(--color-primary) 30%, var(--color-primary-alt))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent', display: 'inline-block', paddingBottom: '0.15em', marginBottom: '-0.15em', verticalAlign: 'top' }}>BuildNinja</span> vs TeamCity:<br />
            Which Self-Hosted CI/CD Is <br/>Right for Your Team?
          </motion.h1>

          <motion.p
            className={styles.heroSub}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Both are self-hosted. Both support Windows, .NET, and enterprise-scale builds.
            Only one is free for unlimited teams and deploys in under 5 minutes.
            Here is the honest, data-backed breakdown.
          </motion.p>

          <motion.div
            className={styles.verdictPill}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            BuildNinja wins on price, setup speed, and zero licensing overhead
          </motion.div>

          <motion.div
            className={styles.heroCtas}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a href="/install" className={styles.btnPrimary}>
              Deploy BuildNinja free
            </a>
            <a href="/dojo" className={styles.btnSecondary}>
              Try Dojo sandbox (no install)
            </a>
          </motion.div>

          <motion.div
            className={styles.heroMeta}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <span className={styles.metaBadge}>Updated June 2026</span>
          </motion.div>
        </div>
      </div>

      <div className={styles.statsBar}>
        <div className={styles.container}>
          <div className={styles.statsRail}>
            <div className={styles.statCell}>
              <div className={`${styles.statVal} ${styles.statGreen}`}>$0</div>
              <div className={styles.statKey}>BuildNinja license cost</div>
              <div className={styles.statSub}>Permanent Growth Edition</div>
            </div>
            <div className={styles.statCell}>
              <div className={`${styles.statVal} ${styles.statRed}`}>$2,399+</div>
              <div className={styles.statKey}>TeamCity Enterprise / yr</div>
              <div className={styles.statSub}>On-premises, 3 agents only</div>
            </div>
            <div className={styles.statCell}>
              <div className={`${styles.statVal} ${styles.statGreen}`}>&lt; 5 min</div>
              <div className={styles.statKey}>BuildNinja setup time</div>
              <div className={styles.statSub}>Single Docker command</div>
            </div>
            <div className={styles.statCell}>
              <div className={`${styles.statVal} ${styles.statPurple}`}>$9,120</div>
              <div className={styles.statKey}>Max annual savings</div>
              <div className={styles.statSub}>Based on a 25-developer team using 10 build agents</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
