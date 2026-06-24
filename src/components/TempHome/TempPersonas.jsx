"use client";
import { motion } from "framer-motion";
import styles from "./TempPersonas.module.css";

const personas = [
  { tag: "Startups", title: "Move fast without a mounting SaaS bill", text: "Startups run high build volumes as they iterate quickly. CircleCI and GitHub Actions credits add up fast. BuildNinja gives early-stage teams the same CI/CD quality as enterprise tooling — at $0 platform cost. Spend the engineering budget on product, not build pipelines." },
  { tag: "Regulated industries", title: "Healthcare, finance, and defence teams", text: "When your compliance framework prohibits sending source code to external cloud providers, your CI/CD choices narrow quickly. BuildNinja runs entirely within your perimeter. Pair it with your existing access controls and secrets management infrastructure." },
  { tag: "Jenkins migrators", title: "Teams escaping Jenkins complexity", text: "Jenkins is powerful but operationally expensive — plugin conflicts, manual upgrades, Groovy expertise requirements, and an aging UI create ongoing maintenance burden. BuildNinja offers the same self-hosted, infrastructure-level control with a setup time measured in minutes, not days." },
  { tag: "Growing engineering teams", title: "50–500 engineer orgs hitting seat limits", text: "Per-seat CI/CD pricing is a growth tax. As your team expands from 10 to 50 to 200 engineers, your CI/CD costs scale linearly regardless of whether your build volume warrants it. BuildNinja's unlimited-user model means adding developers costs nothing." },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function TempPersonas() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.eyebrow}>Who uses BuildNinja?</span>
          <h2 className={styles.title}>Built for teams who care about control</h2>
          <p className={styles.lead}>
            BuildNinja is used across company sizes and industries — anywhere teams need fast, reliable CI/CD without handing their build infrastructure to a third-party cloud.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {personas.map((p, i) => (
            <motion.div key={i} className={styles.card} variants={cardVariants}>
              <span className={styles.tag}>{p.tag}</span>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardText}>{p.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
