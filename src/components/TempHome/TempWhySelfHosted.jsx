"use client";
import { motion } from "framer-motion";
import { DollarSign, Shield, Wrench, Globe, Zap, Settings } from "lucide-react";
import styles from "./TempWhySelfHosted.module.css";

const reasons = [
  { icon: DollarSign, title: "Cost that doesn't scale with usage", text: "SaaS CI/CD tools charge per build minute or per credit. As your team ships faster, your CI/CD bill grows in lockstep. With a self-hosted platform like BuildNinja, the server cost is fixed. Run 100 builds or 10,000 — the price stays the same. For teams running more than 50 builds per day, self-hosted typically costs 80–90% less than a comparable SaaS plan." },
  { icon: Shield, title: "Data sovereignty for regulated industries", text: "Healthcare, financial services, defence, and government teams often cannot send source code or build artefacts to third-party cloud infrastructure. HIPAA, SOC 2, FedRAMP, and similar frameworks require demonstrable control over where data is processed. Self-hosted CI/CD is not an option for these teams — it is a compliance requirement." },
  { icon: Wrench, title: "No vendor lock-in or credit exhaustion", text: "Cloud CI/CD platforms can change pricing, discontinue features, or experience outages that halt your entire deployment pipeline. When CircleCI changed its credit model in 2023, thousands of teams scrambled. With BuildNinja running on infrastructure you control, your CI/CD is independent of any vendor's business decisions." },
  { icon: Globe, title: "Air-gapped and offline environments", text: "Some engineering environments have no internet access by design — classified government systems, industrial control networks, highly secure financial infrastructure. SaaS CI/CD tools fundamentally cannot operate in these environments. BuildNinja is designed to run fully offline once deployed." },
  { icon: Zap, title: "Faster builds on hardware you spec", text: "Cloud CI/CD tools run builds on shared compute that you cannot directly optimise. If you need more CPU or memory, you pay more per build. With BuildNinja, you choose your build hardware. Teams with memory-intensive test suites or CPU-heavy compilation can provision exactly the hardware they need." },
  { icon: Settings, title: "Full control without DevOps overhead", text: "Jenkins offered self-hosted CI/CD but required extensive plugin management, manual upgrades, and deep Groovy scripting knowledge. BuildNinja offers the same infrastructure control with a fraction of the operational overhead. One Docker command replaces weeks of Jenkins configuration." },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function TempWhySelfHosted() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.eyebrow}>Why self-hosted CI/CD?</span>
          <h2 className={styles.title}>Five reasons engineering teams choose self-hosted over SaaS CI/CD</h2>
          <p className={styles.lead}>
            Cloud-based CI/CD tools are convenient until they&apos;re not. Growing teams consistently run into the same four walls: cost, compliance, control, and credit limits. Self-hosted CI/CD eliminates all four.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div key={i} className={styles.card} variants={cardVariants}>
                <div className={styles.cardIcon}>
                  <Icon size={18} />
                </div>
                <h3 className={styles.cardTitle}>{r.title}</h3>
                <p className={styles.cardText}>{r.text}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
