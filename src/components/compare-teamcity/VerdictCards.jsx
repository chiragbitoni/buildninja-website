"use client";
import { motion } from "framer-motion";
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

        </motion.div>

        <motion.div
          className={styles.dual}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className={`${styles.vcard} ${styles.winner}`} variants={cardVariants}>
            <div className={styles.vcardHead}>
              <span className={styles.vcardName}>BuildNinja</span>
              <span className={styles.badgeWin}>✓ Recommended</span>
            </div>
            <div className={styles.vstatGrid}>
              <div className={styles.vstat}>
                <div className={`${styles.vstatVal} ${styles.tg}`}>$0</div>
                <div className={styles.vstatKey}>License cost</div>
              </div>
              <div className={styles.vstat}>
                <div className={styles.vstatVal}>&lt; 5 min</div>
                <div className={styles.vstatKey}>Setup time</div>
              </div>
              <div className={styles.vstat}>
                <div className={styles.vstatVal}>Unlimited</div>
                <div className={styles.vstatKey}>Users &amp; agents</div>
              </div>
              <div className={styles.vstat}>
                <div className={styles.vstatVal}>5</div>
                <div className={styles.vstatKey}>SSO providers free</div>
              </div>
            </div>
            <ul className={styles.vlist}>
              <li className={styles.vitem}><span className={`${styles.dot} ${styles.dotG}`}></span>Free - no seat limits, no expiry, no credit card</li>
              <li className={styles.vitem}><span className={`${styles.dot} ${styles.dotG}`}></span>One Docker command to full deployment - no JVM, no RAM overhead</li>
              <li className={styles.vitem}><span className={`${styles.dot} ${styles.dotG}`}></span>Native MSBuild + VSTest - zero plugin configuration needed</li>
              <li className={styles.vitem}><span className={`${styles.dot} ${styles.dotG}`}></span>All 5 SSO providers: GitHub, GitLab, Bitbucket, Google, Azure AD</li>
              <li className={styles.vitem}><span className={`${styles.dot} ${styles.dotG}`}></span>AI-powered pipeline features in v1.2.0 at no extra cost</li>
            </ul>
          </motion.div>

          <motion.div className={styles.vcard} variants={cardVariants}>
            <div className={styles.vcardHead}>
              <span className={styles.vcardName}>TeamCity</span>
              <span className={styles.badgeNeutral}>JetBrains</span>
            </div>
            <div className={styles.vstatGrid}>
              <div className={styles.vstat}>
                <div className={`${styles.vstatVal} ${styles.tr2}`}>$2,399+</div>
                <div className={styles.vstatKey}>Enterprise on-prem</div>
              </div>
              <div className={styles.vstat}>
                <div className={styles.vstatVal}>Hours–days</div>
                <div className={styles.vstatKey}>Setup time</div>
              </div>
              <div className={styles.vstat}>
                <div className={`${styles.vstatVal} ${styles.tr2}`}>$15/user</div>
                <div className={styles.vstatKey}>Cloud (Per committer)</div>
              </div>
              <div className={styles.vstat}>
                <div className={`${styles.vstatVal} ${styles.tr2}`}>3 free</div>
                <div className={styles.vstatKey}>Build agents</div>
              </div>
            </div>
            <ul className={styles.vlist}>
              <li className={styles.vitem}><span className={`${styles.dot} ${styles.dotG}`}></span>Mature platform - 15+ years of CI/CD development history</li>
              <li className={styles.vitem}><span className={`${styles.dot} ${styles.dotG}`}></span>Powerful build chains and DAG pipelines for complex workflows</li>
              <li className={styles.vitem}><span className={`${styles.dot} ${styles.dotA}`}></span>Professional free tier: hard cap at 3 agents, 100 configurations</li>
              <li className={styles.vitem}><span className={`${styles.dot} ${styles.dotR}`}></span>Enterprise starts at $2,399/yr (includes 3 build agents)
                Additional build agents: $359/yr each</li>
              <li className={styles.vitem}><span className={`${styles.dot} ${styles.dotR}`}></span>JVM dependency - high RAM requirement on-premises</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
