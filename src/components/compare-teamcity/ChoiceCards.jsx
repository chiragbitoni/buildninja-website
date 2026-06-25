"use client";
import { motion } from "framer-motion";
import styles from "./VerdictCards.module.css";

export default function ChoiceCards() {
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
            Decision guide
          </span>
          <h2 className={styles.sectionTitle}>Which tool is right for your team?</h2>
          <p className={styles.sectionSub}>
            Be honest about your team&apos;s situation. Both tools can run CI/CD pipelines - the question is which fits your constraints.
          </p>
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
            <div className={styles.choiceItem}><span className={styles.choiceCheck}>✓</span>Need MSBuild, VSTest, Docker, Kubernetes - all without plugins</div>
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
