"use client";
import { motion } from "framer-motion";
import styles from "./TempFeatures.module.css";

const features = [
  { title: "Build automation and pipeline scheduling", text: "BuildNinja supports full pipeline automation with cron-based scheduling, multi-stage pipeline definitions, and intelligent dependency resolution between build steps. Configure triggers per branch, tag, or pull request event. Run parallel stages across multiple build agents to reduce end-to-end build time.", accent: true },
  { title: "Native Git and version control integration", text: "Connect BuildNinja to GitHub, GitLab, Bitbucket, or any self-hosted Git server with full OAuth 2.0 and OIDC authentication. BuildNinja's intelligent Git caching reduces repository clone times dramatically on repeated builds by persisting the Git object store between pipeline runs.", accent: true },
  { title: "Multi-platform build agents", text: "BuildNinja's distributed agent architecture lets you run build agents on Windows, Linux, and macOS — simultaneously. Agents register with the server and advertise their capabilities. The pipeline scheduler automatically routes builds to the right agent based on platform requirements." },
  { title: "Enterprise security and RBAC", text: "Role-based access control (RBAC) operates at both the system level and individual project level. All secrets are encrypted with AES-256 before storage. Single sign-on works via GitHub, GitLab, Google, Microsoft, Bitbucket, and custom OIDC providers." },
  { title: "Real-time build dashboards", text: "BuildNinja's dashboard updates every 10 seconds without page refresh. Filter build logs by agent, pipeline step, or time range. View historical build performance trends across projects. The high-density dashboard design is optimised for engineering leads." },
  { title: "Docker and Kubernetes deployment", text: "Deploy build artefacts directly to Docker or Kubernetes environments from within the pipeline. BuildNinja supports canary deployment strategies for zero-downtime releases. Environment-specific secrets are injected at deploy time." },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function TempFeatures() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.eyebrow}>Core capabilities</span>
          <h2 className={styles.title}>Everything a modern CI/CD platform needs — built in, not bolted on</h2>
          <p className={styles.lead}>
            BuildNinja ships with the features engineering teams actually need, without requiring a plugin ecosystem to reach production-grade functionality.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((f, i) => (
            <motion.div key={i} className={`${styles.item} ${f.accent ? styles.itemAccent : ""}`} variants={itemVariants}>
              <h3 className={styles.itemTitle}>{f.title}</h3>
              <p className={styles.itemText}>{f.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
