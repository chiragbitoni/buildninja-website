"use client";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faShieldHalved,
  faWrench,
  faGlobe,
  faBolt,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./WhySelfHosted.module.css";

const accentColors = [
  "var(--color-primary)",
  "var(--color-info)",
  "var(--color-warning)",
  "var(--color-success)",
  "var(--color-primary-alt)",
  "var(--color-info-alt)",
];

const reasons = [
  { icon: faDollarSign, title: "Cost that doesn't scale with usage", text: "SaaS CI/CD tools charge per build minute or per credit. As your team ships faster, your CI/CD bill grows in lockstep. With a self-hosted platform like BuildNinja, the server cost is fixed. Run 100 builds or 10,000 — the price stays the same. For teams running more than 50 builds per day, self-hosted typically costs 80–90% less than a comparable SaaS plan." },
  { icon: faShieldHalved, title: "Data sovereignty for regulated industries", text: "Healthcare, financial services, defence, and government teams cannot send source code or build artefacts to third-party cloud infrastructure. HIPAA, SOC 2, and FedRAMP require demonstrable control over where data is processed. Self-hosted CI/CD is not an option for these teams — it is a compliance requirement." },
  { icon: faWrench, title: "No vendor lock-in or credit exhaustion", text: "Cloud CI/CD platforms can change pricing, discontinue features, or experience outages that halt your entire pipeline. When CircleCI changed its credit model in 2023, thousands of teams scrambled. With BuildNinja running on your infrastructure, your CI/CD is independent of any vendor's business decisions." },
  { icon: faGlobe, title: "Air-gapped and offline environments", text: "Some engineering environments have no internet access by design — classified government systems, industrial control networks, highly secure financial infrastructure. SaaS CI/CD tools fundamentally cannot operate here. BuildNinja runs fully offline once deployed." },
  { icon: faBolt, title: "Faster builds on hardware you spec", text: "Cloud CI/CD runs on shared compute you cannot directly optimise. If you need more CPU or memory, you pay more per build. With BuildNinja, you choose your build hardware. Teams with memory-intensive test suites or CPU-heavy compilation can provision exactly what they need." },
  { icon: faGear, title: "Full control without DevOps overhead", text: "Jenkins offered self-hosted CI/CD but required extensive plugin management, manual upgrades, and deep Groovy scripting knowledge. BuildNinja offers the same infrastructure control with a fraction of the operational overhead — one Docker command replaces weeks of configuration." },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const rowVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function WhySelfHosted() {
  return (
    <section className={styles.section}>
      <div className={styles.ambientGlow} />
      <div className={styles.gridOverlay} />

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.mainCol}>
            <motion.div
              className={styles.header}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span className={styles.eyebrow}>Why self-hosted CI/CD?</span>
              <h2 className={styles.title}>
                Six reasons engineering teams choose self-hosted over SaaS
              </h2>
              <p className={styles.lead}>
                Cloud-based CI/CD tools are convenient until they&apos;re not. Growing teams
                consistently hit the same walls: cost, compliance, control, and credit
                limits. Self-hosted CI/CD eliminates all of them.
              </p>
            </motion.div>

            <motion.div
              className={styles.list}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
            {reasons.map((r, i) => (
              <motion.div key={i} className={styles.row} variants={rowVariants}>
                <div className={styles.rowTrack}>
                  <div className={styles.rowDot} style={{ "--row-accent": accentColors[i] }}>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  {i < reasons.length - 1 && <div className={styles.rowStem} style={{ "--row-accent": accentColors[i] }} />}
                </div>
                <div className={styles.rowBody}>
                  <div className={styles.rowHeader}>
                    <div className={styles.rowIcon} style={{ "--row-accent": accentColors[i] }}>
                      <FontAwesomeIcon icon={r.icon} />
                    </div>
                    <h3 className={styles.rowTitle}>{r.title}</h3>
                  </div>
                  <p className={styles.rowText}>{r.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          </div>

          <div className={styles.sidebar}>
            <motion.div
              className={styles.stickyCard}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            >
              <div className={styles.cardGlow} />
              <div className={styles.cardNoise} />

              <div className={styles.cardHighlight}>
                <span className={styles.highlightNumber}>80–90%</span>
                <span className={styles.highlightLabel}>cost savings vs SaaS CI/CD</span>
              </div>

              <div className={styles.cardDivider} />

              <ul className={styles.statList}>
                <li className={styles.statItem}>
                  <span><strong>$0 platform cost</strong> — unlimited build minutes</span>
                </li>
                <li className={styles.statItem}>
                  <span><strong>No per-seat pricing</strong> — add unlimited developers</span>
                </li>
                <li className={styles.statItem}>
                  <span><strong>One Docker command</strong> — deploys in under 5 minutes</span>
                </li>
                <li className={styles.statItem}>
                  <span><strong>25+ years</strong> of developer tooling by GrapeCity</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
