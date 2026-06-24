"use client";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import styles from "./ComparisonTable.module.css";

const pricingData = [
  {
    plan: "BuildNinja — Growth Edition",
    amount: "$0",
    period: "forever · no credit card required",
    sup: "",
    desc: "Permanently free with zero feature gating, no seat limits, and no time restriction. Every feature included from day one.",
    featured: true,
    features: [
      "Unlimited users",
      "Unlimited concurrent builds",
      "Unlimited build agents",
      "All 5 SSO providers included",
      "Full RBAC + AES-256 secrets",
      "Docker & Kubernetes deployment",
      "Native MSBuild + VSTest",
      "Perpetual build history",
    ],
  },
  {
    plan: "TeamCity — Professional",
    amount: "$0",
    period: "on-premises · hard limits apply",
    sup: "",
    desc: "Free tier with strict caps. Most real-world teams outgrow this within weeks of active use.",
    featured: false,
    features: [
      "Unlimited users",
      { text: "Hard cap: 3 build agents only", ok: false },
      { text: "Hard cap: 100 build configurations", ok: false },
      { text: "No priority support", ok: false },
      { text: "Most teams outgrow this quickly", warn: true },
    ],
  },
  {
    plan: "TeamCity — Enterprise",
    amount: "$2,351",
    period: "on-premises server license /yr",
    sup: "/yr",
    desc: "Agent add-ons compound fast. A 10-agent setup costs ~$5,541/yr before infrastructure.",
    featured: false,
    features: [
      "Unlimited build configurations",
      { text: "Only 3 build agents included", ok: false },
      { text: "+$359/yr per additional agent", ok: false },
      { text: "10-agent setup: ~$5,541/yr", ok: false },
      { text: "Cloud: $45/mo base + $15/committer", warn: true },
    ],
  },
];

const featureRows = [
  { cat: "Pricing & licensing" },
  { feat: "License cost", bn: "$0 forever", tc: "$0 / $2,351+/yr", win: "bn" },
  { feat: "Per-seat fees", bn: "None", tc: "$15/committer", win: "bn" },
  { feat: "Agent fees", bn: "None", tc: "$359/yr each", win: "bn" },
  { cat: "Setup & operations" },
  { feat: "Setup time", bn: "< 5 minutes", tc: "Hours to days", win: "bn" },
  { feat: "RAM requirements", bn: "Low (no JVM)", tc: "High — JVM overhead", win: "bn" },
  { feat: "Plugin management", bn: "Not needed", tc: "400+ plugins", win: "tie" },
  { cat: "Platform & build support" },
  { feat: "Windows / MSBuild", bn: "Native, built-in", tc: "Native, built-in", win: "tie" },
  { feat: "VSTest / NUnit / xUnit", bn: "Built-in", tc: "Built-in", win: "tie" },
  { feat: "Apple Silicon (M-series)", bn: "Native", tc: "Available", win: "bn" },
  { feat: "Docker / Kubernetes", bn: "Built-in, canary", tc: "Plugin-based", win: "bn" },
  { feat: "Build chains / DAG", bn: "Coming v1.2.0", tc: "Advanced chains", win: "tc" },
  { cat: "Security & access" },
  { feat: "SSO providers (free)", bn: "5 built-in", tc: "JetBrains only", win: "bn" },
  { feat: "RBAC", bn: "System + project", tc: "Granular", win: "tie" },
  { feat: "Secrets (AES-256)", bn: "Built-in", tc: "Built-in", win: "tie" },
  { feat: "Data stays on-prem", bn: "Always", tc: "On-prem version", win: "tie" },
  { cat: "Developer experience" },
  { feat: "Pipeline config language", bn: "UI + YAML (simple)", tc: "Kotlin DSL + XML", win: "bn" },
  { feat: "Real-time log streaming", bn: "<30ms", tc: "Available", win: "tie" },
  { feat: "Interactive demo sandbox", bn: "Dojo — live", tc: "Not available", win: "bn" },
  { feat: "AI-assisted features", bn: "v1.2.0 roadmap", tc: "Limited", win: "bn" },
];

export default function ComparisonTable() {
  return (
    <section className={styles.section} id="comparison-table">
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="badge-alt" style={{ marginBottom: "10px", display: "inline-flex" }}>
            Pricing breakdown
          </span>
          <h2 className={styles.sectionTitle}>What you actually pay</h2>
          <p className={styles.sectionSub}>
            TeamCity has three pricing tiers with meaningful hard limits at every level.
            BuildNinja has one tier — permanently free — with no caps anywhere.
          </p>
        </motion.div>

        <motion.div
          className={styles.pricingGrid}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {pricingData.map((p, i) => (
            <div key={i} className={`${styles.pc} ${p.featured ? styles.pcFeatured : ""}`}>
              {p.featured && <span className={styles.pcEyebrow}>Best value</span>}
              <div className={styles.pcPlan}>{p.plan}</div>
              <div className={styles.pcAmount}>{p.amount}{p.sup && <span className={styles.pcSup}>{p.sup}</span>}</div>
              <div className={styles.pcPeriod}>{p.period}</div>
              <p className={styles.pcDesc}>{p.desc}</p>
              <div className={styles.pcDiv} />
              <ul className={styles.pcList}>
                {p.features.map((f, j) => {
                  const label = typeof f === "string" ? f : f.text;
                  const ok = typeof f === "string" ? true : f.ok ?? true;
                  const warn = typeof f === "string" ? false : f.warn;
                  return (
                    <li key={j} className={styles.pcItem}>
                      <span className={`${styles.fi} ${ok ? styles.fiG : warn ? styles.fiA : styles.fiR}`}>
                        {ok ? <Check size={14} /> : warn ? "⚠" : <X size={14} />}
                      </span>
                      {label}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className={styles.costTitle}>Real monthly cost — 25 developers, 10 build agents</h3>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Cost item</th>
                  <th className={styles.thBn}>BuildNinja</th>
                  <th>TeamCity Cloud</th>
                  <th>TeamCity Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={styles.featName}>License / subscription</td><td className={styles.tdBn}>$0</td><td className={styles.cross}>~$360/mo</td><td className={styles.cross}>~$462/mo</td></tr>
                <tr><td className={styles.featName}>Build agent fees</td><td className={styles.tdBn}>$0</td><td>Included in credits</td><td className={styles.cross}>~$299/mo</td></tr>
                <tr><td className={styles.featName}>Infrastructure (VPS)</td><td className={styles.tdBn}>~$60–120/mo</td><td>Included</td><td>~$60–120/mo</td></tr>
                <tr className={styles.total}><td className={styles.featName}>Total monthly</td><td className={`${styles.tdBn} ${styles.totalBn}`}>~$60–120</td><td className={styles.totalTc}>~$360</td><td className={styles.totalTc}>~$821</td></tr>
              </tbody>
            </table>
          </div>
          <p className={styles.costNote}>BuildNinja costs 3× to 7× less than TeamCity for a mid-size team — and that gap widens as team size grows.</p>
        </motion.div>

        <motion.div
          className={styles.featureSection}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className={styles.sectionTitle}>Head-to-head feature breakdown</h2>
          <p className={styles.sectionSub}>
            A full-spectrum comparison across pricing, setup, platform support, security, and developer experience.
          </p>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th style={{ width: "38%" }}>Feature</th>
                  <th style={{ width: "22%" }} className={styles.thBn}>BuildNinja</th>
                  <th style={{ width: "22%" }}>TeamCity</th>
                  <th style={{ width: "18%" }}>Winner</th>
                </tr>
              </thead>
              <tbody>
                {featureRows.map((r, i) => {
                  if (r.cat) {
                    return (
                      <tr key={i} className={styles.catRow}>
                        <td colSpan={4}>{r.cat}</td>
                      </tr>
                    );
                  }
                  return (
                    <tr key={i}>
                      <td className={styles.featName}>{r.feat}</td>
                      <td className={styles.tdBn}>{r.bn}</td>
                      <td>{r.tc}</td>
                      <td>
                        <span className={`${styles.winTag} ${r.win === "bn" ? styles.winBn : r.win === "tc" ? styles.winTc : styles.winTie}`}>
                          {r.win === "bn" ? "BuildNinja" : r.win === "tc" ? "TeamCity" : "Tie"}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
