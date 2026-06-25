"use client";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import styles from "./PainPoints.module.css";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const pains = [
  { icon: "/resources/icons/calculatorPink.svg", title: "The agent cost cliff", body: "The Professional free tier locks teams at 3 agents and 100 configurations. Once outgrown, you face a $2,399/yr Enterprise license plus $359/yr per additional agent - $4,912/yr for a 10-agent setup." },
  { icon: "/resources/icons/serverPink.svg", title: "Heavy JVM resource footprint", body: "TeamCity runs on the JVM and demands significant RAM to keep the UI responsive. Without enough memory, the interface becomes sluggish and build queues slow." },
  { icon: "/resources/icons/gearPink.svg", title: "Configuration complexity at scale", body: "Long-term TeamCity users report that the admin panel is difficult to navigate and reconfiguring existing projects is consistently error-prone." },
  { icon: "/resources/icons/walletPink.svg", title: "Renewal pricing restructuring", body: "JetBrains changed on-premises renewal pricing in late 2025, removing the 50% renewal discount for customers who miss the expiry window by more than one month." },
];

const resolutions = [
  "No agent fees - unlimited build agents included in Growth Edition at zero cost.",
  "No JVM dependency - lightweight footprint on a 4-core, 8 GB VPS.",
  "UI-first configuration - most pipelines set up through the dashboard without touching YAML.",
  "No renewal risk - Growth Edition has no annual license, no renewal window.",
];

export default function PainPoints() {
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
            Real user feedback
          </span>
          <h2 className={styles.sectionTitle}>Why teams leave TeamCity</h2>
          <p className={styles.sectionSub}>
            These issues come from published reviews on Capterra, Gartner Peer Insights, and G2 - consistent patterns across independent reviewers.
          </p>
        </motion.div>

        <motion.div
          className={styles.painGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {pains.map((p, i) => (
            <motion.div key={i} className={styles.painCard} variants={cardVariants}>
              <div className={styles.painIcon}><img src={p.icon} alt="" className={styles.painIconImg} /></div>
              <h3 className={styles.painTitle}>{p.title}</h3>
              <p className={styles.painBody}>{p.body}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={styles.resolve}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className={styles.resolveTitle}>
            How BuildNinja resolves each of these
          </h3>
          <ul className={styles.resolveList}>
            {resolutions.map((r, i) => (
              <li key={i} className={styles.resolveItem}>
                <MoveRight size={14} className={styles.resolveCheck} />
                {r}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
