"use client";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import styles from "./ComparisonTable.module.css";

const pricingData = [
  {
    plan: "BuildNinja - Growth Edition",
    amount: "$0",
    period: "No credit card required",
    sup: "",
    desc: "Free with zero feature gating, no seat limits, and no time restriction. Every feature included from day one.",
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
    plan: "TeamCity - Professional",
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
    plan: "TeamCity - Enterprise",
    amount: "$2,399",
    period: "on-premises server license /yr",
    sup: "/yr",
    desc: "License includes 3 build agents. A 10-agent setup costs ~$4,912/yr before infrastructure.",
    featured: false,
    features: [
      "Unlimited build configurations",
      { text: "3 build agents included", ok: false },
      { text: "+$359/yr per additional agent", ok: false },
      { text: "10-agent setup: ~$4,912/yr", ok: false },
      { text: "Cloud: $45/mo base + $15/committer", warn: true },
    ],
  },
];

const featureRows = [
  { cat: "Pricing & licensing" },
  { feat: "License cost", bn: "$0 forever", tc: "$0 / $2,399+/yr", win: "bn" },
  { feat: "Per-seat fees", bn: "None", tc: "$15/committer", win: "bn" },
  { feat: "Agent fees", bn: "None", tc: "$359/yr each", win: "bn" },
  { cat: "Setup & operations" },
  { feat: "Setup time", bn: "< 5 minutes", tc: "Hours to days", win: "bn" },
  { feat: "RAM requirements", bn: "Low (no JVM)", tc: "High - JVM overhead", win: "bn" },
  { feat: "Plugin management", bn: "Most features built in", tc: "Large plugin ecosystem", win: "tie" },
  { cat: "Platform & build support" },
  { feat: "Windows / MSBuild", bn: "Native, built-in", tc: "Native, built-in", win: "tie" },
  { feat: "VSTest / NUnit / xUnit", bn: "Built-in", tc: "Built-in", win: "tie" },
  { feat: "Apple Silicon (M-series)", bn: "Native", tc: "Supported on macOS build agents", win: "tie" },
  { feat: "Docker / Kubernetes", bn: "Built-in, canary", tc: "Plugin-based", win: "tie" },
  { feat: "Build chains / DAG", bn: "Coming v1.2.0", tc: "Advanced chains", win: "tc" },
  { cat: "Security & access" },
  { feat: "SSO providers (free)", bn: "Native OAuth login: GitHub, GitLab, Bitbucket, Microsoft", tc: "Enterprise SSO via SAML 2.0, LDAP, Microsoft Entra ID", win: "tie" },
  { feat: "RBAC", bn: "System + project", tc: "Granular", win: "tie" },
  { feat: "Secrets (AES-256)", bn: "Built-in", tc: "Built-in", win: "tie" },
  { feat: "Data stays on-prem", bn: "Always", tc: "On-prem version", win: "tie" },
  { cat: "Developer experience" },
  { feat: "Pipeline config language", bn: "UI + YAML (simple)", tc: "Kotlin DSL + XML", win: "tie" },
  { feat: "Real-time log streaming", bn: "<30ms", tc: "Available", win: "tie" },
  { feat: "Interactive demo sandbox", bn: "Dojo - live", tc: "Not available", win: "bn" },
  { feat: "AI-assisted features", bn: "v1.2.0 roadmap", tc: "Limited", win: "tie" },
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
            BuildNinja has one tier - free - with no caps anywhere.
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
              <div className={styles.pcHead}>
                <div className={styles.pcPlan}>{p.plan}</div>
                {p.featured && <span className={styles.pcEyebrow}>Best value</span>}
              </div>
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
          <h3 className={styles.costTitle}>Real monthly cost - 25 developers, 10 build agents</h3>
            <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Cost item</th>
                  <th className={styles.thBn}>
                    <span className={styles.thHeaderInner}>
                      <img src="/resources/logo-buildninja.svg" alt="BuildNinja" className={styles.logoBn} />
                      <span className={styles.recBadge}>★ RECOMMENDED</span>
                    </span>
                  </th>
                  <th>TeamCity Cloud</th>
                  <th>TeamCity Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={styles.featName}>License / subscription</td><td className={styles.tdBn}>$0</td><td className={styles.cross}>~$360/mo ($15 × 24 users)</td><td className={styles.cross}>~$200/mo (Enterprise license)</td></tr>
                <tr><td className={styles.featName}>Build agent fees</td><td className={styles.tdBn}>$0</td><td>Included in credits</td><td className={styles.cross}>~$209/mo (7 additional × $359 ÷ 12)</td></tr>
                <tr><td className={styles.featName}>Server infrastructure</td><td className={styles.tdBn}>~$60–120/mo</td><td>Included</td><td>~$60–120/mo</td></tr>
                <tr className={styles.total}><td className={styles.featName}>Total monthly cost</td><td className={`${styles.tdBn} ${styles.totalBn}`}>~$60–120</td><td className={styles.totalTc}>~$360</td><td className={styles.totalTc}>~$469–529</td></tr>
              </tbody>
            </table>
          </div>
          <p className={styles.costNote}>BuildNinja costs about 4×–8× less than TeamCity Enterprise for a mid-size team - and that gap widens as team size grows.</p>
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
                  <th style={{ width: "31%" }} className={styles.thBn}>
                    <span className={styles.thHeaderInner}>
                      <img src="/resources/logo-buildninja.svg" alt="BuildNinja" className={styles.logoBn} />
                      <span className={styles.recBadge}>★ RECOMMENDED</span>
                    </span>
                  </th>
                  <th style={{ width: "31%" }}><img src="/resources/teamcity-logo.svg" alt="TeamCity" className={styles.logoTc} /></th>
                </tr>
              </thead>
              <tbody>
                {featureRows.map((r, i) => {
                  if (r.cat) {
                    return (
                      <tr key={i} className={styles.catRow}>
                        <td colSpan={3}>{r.cat}</td>
                      </tr>
                    );
                  }
                  const bnWins = r.win === "bn";
                  const tcWins = r.win === "tc";
                  const isTie = r.win === "tie";
                  return (
                    <tr key={i}>
                      <td className={styles.featName}>{r.feat}</td>
                      <td className={styles.tdBn}>
                        {bnWins && <Check size={14} className={styles.icWin} />}
                        {tcWins && <X size={14} className={styles.icLose} />}
                        {isTie && <Check size={14} className={styles.icTie} />}
                        {" "}{r.bn}
                        {bnWins && <span className={`${styles.winTag} ${styles.winBn}`}>BN Wins</span>}
                      </td>
                      <td>
                        {tcWins && <Check size={14} className={styles.icWin} />}
                        {bnWins && <X size={14} className={styles.icLose} />}
                        {isTie && <Check size={14} className={styles.icTie} />}
                        {" "}{r.tc}
                        {tcWins && <span className={`${styles.winTag} ${styles.winTc}`}>TeamCity Wins</span>}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className={styles.legend}>
            <span><Check size={14} className={styles.icWin} style={{ verticalAlign: 'middle' }} /> Winner</span>
            <span><X size={14} className={styles.icLose} style={{ verticalAlign: 'middle' }} /> Not best</span>
            <span><span className={`${styles.winTag} ${styles.winBn}`}>BN Wins</span> BuildNinja advantage</span>
            <span><span className={`${styles.winTag} ${styles.winTc}`}>TeamCity Wins</span> TeamCity advantage</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
