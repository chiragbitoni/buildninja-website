"use client";
import { motion } from "framer-motion";
import { DollarSign, Zap, Shield } from "lucide-react";
import styles from "./VerdictCards.module.css";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function VerdictCards() {
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
            Quick verdict
          </span>
          <h2 className={styles.sectionTitle}>At a glance: BuildNinja vs TeamCity</h2>
          <p className={styles.sectionSub}>
            Both platforms target self-hosted CI/CD. The divergence lies in cost architecture,
            operational overhead, and setup complexity — not raw feature capability.
          </p>
        </motion.div>

        <motion.div
          className={styles.verdictGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className={`${styles.verdictCard} ${styles.cardGreen}`} variants={cardVariants}>
            <div className={`${styles.verdictIcon} ${styles.iconGreen}`}>
              <DollarSign size={20} />
            </div>
            <h3>Permanently Free — No Caps</h3>
            <p>BuildNinja Growth Edition costs $0 forever with unlimited agents, unlimited users, and unlimited build configurations. TeamCity traps you at 3 agents and 100 configs on the free tier — upgrade costs $2,351/yr.</p>
          </motion.div>

          <motion.div className={`${styles.verdictCard} ${styles.cardOrange}`} variants={cardVariants}>
            <div className={`${styles.verdictIcon} ${styles.iconOrange}`}>
              <Zap size={20} />
            </div>
            <h3>5-Minute Setup, No JVM</h3>
            <p>One Docker command to full deployment. No Java Virtual Machine, no RAM-heavy overhead, no plugin management. TeamCity requires hours of configuration, JVM tuning, and ongoing maintenance.</p>
          </motion.div>

          <motion.div className={`${styles.verdictCard} ${styles.cardBlue}`} variants={cardVariants}>
            <div className={`${styles.verdictIcon} ${styles.iconBlue}`}>
              <Shield size={20} />
            </div>
            <h3>Native .NET + SSO Included</h3>
            <p>MSBuild and VSTest run natively with zero plugin configuration. All 5 SSO providers (GitHub, GitLab, Bitbucket, Google, Azure AD) are built into the free tier. TeamCity restricts SSO behind paid enterprise licenses.</p>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.choiceCols}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className={`${styles.choiceCard} ${styles.choiceYes}`}>
            <h3 className={styles.choiceTitle}>Choose BuildNinja if you…</h3>
            <div className={styles.choiceItem}><span className={styles.choiceCheck}>✓</span>Want self-hosted CI/CD with zero licensing cost, ever</div>
            <div className={styles.choiceItem}><span className={styles.choiceCheck}>✓</span>Need unlimited agents without costly add-ons</div>
            <div className={styles.choiceItem}><span className={styles.choiceCheck}>✓</span>Want your first build running in minutes, not days</div>
            <div className={styles.choiceItem}><span className={styles.choiceCheck}>✓</span>Need MSBuild, VSTest, Docker, Kubernetes — all without plugins</div>
            <div className={styles.choiceItem}><span className={styles.choiceCheck}>✓</span>Current CI/CD cost is growing and needs to stop</div>
          </div>
          <div className={`${styles.choiceCard} ${styles.choiceMaybe}`}>
            <h3 className={styles.choiceTitle}>Stick with TeamCity if you…</h3>
            <div className={styles.choiceItem}><span className={styles.choiceArrow}>→</span>Have years of investment in Kotlin DSL pipeline configurations</div>
            <div className={styles.choiceItem}><span className={styles.choiceArrow}>→</span>Need complex DAG build chains across many dependent projects</div>
            <div className={styles.choiceItem}><span className={styles.choiceArrow}>→</span>Are deeply embedded in the JetBrains toolchain</div>
            <div className={styles.choiceItem}><span className={styles.choiceArrow}>→</span>Have a dedicated DevOps engineer managing CI/CD full-time</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
