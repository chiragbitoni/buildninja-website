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


      </div>
    </section>
  );
}
