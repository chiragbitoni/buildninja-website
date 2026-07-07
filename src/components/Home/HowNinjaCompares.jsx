"use client";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import styles from "./HowNinjaCompares.module.css";

const rows = [
  { feature: "Monthly cost (200 builds/day)", bn: { icon: true, text: "Server infra only" }, cc: { tag: "cost", text: "~$800\u20131,200/mo" }, ga: { tag: "cost", text: "~$300\u2013450/mo" }, jen: { icon: true, text: "Server infra only" } },
  { feature: "Build pricing model", bn: { icon: true, text: "No credits - unlimited" }, cc: { icon: false, text: "Per credit consumed" }, ga: { icon: false, text: "Per compute minute" }, jen: { icon: true, text: "Free (self-hosted)" } },
  { feature: "Per-seat fees", bn: { icon: true, text: "None" }, cc: { icon: false, text: "Scales with team" }, ga: { icon: false, text: "Scales with team" }, jen: { icon: true, text: "None" } },
  { feature: "Self-hosted setup", bn: { icon: true, text: "1 Docker command" }, cc: { icon: false, text: "K8s + enterprise plan" }, ga: { icon: false, text: "Runner required" }, jen: { text: "Complex - war file + plugins", neutral: true } },
  { feature: "Setup time", bn: { icon: true, text: "Under 5 minutes" }, cc: { text: "Minutes (SaaS sign-up)", neutral: true }, ga: { text: "Minutes (SaaS sign-up)", neutral: true }, jen: { icon: false, text: "Hours to days" } },
  { feature: "Data sovereignty / on-premise", bn: { icon: true, text: "Full - your servers" }, cc: { icon: false, text: "SaaS cloud only" }, ga: { icon: false, text: "GitHub cloud" }, jen: { icon: true, text: "Full (self-managed)" } },
  { feature: "Air-gapped / no internet", bn: { icon: true, text: "Supported" }, cc: { icon: false, text: "Not possible" }, ga: { icon: false, text: "Not possible" }, jen: { icon: true, text: "Supported" } },
  { feature: "Modern UI + dashboards", bn: { icon: true, text: "Built-in, no plugins" }, cc: { icon: true, text: "Built-in" }, ga: { icon: true, text: "Built-in" }, jen: { icon: false, text: "Plugin-dependent" } },
  { feature: "AI build intelligence", bn: { tag: "warn", text: "Coming v1.2.0" }, cc: { text: "Limited", neutral: true }, ga: { text: "Limited", neutral: true }, jen: { icon: false, text: "Not available" } },
  { feature: "Interactive sandbox (no install)", bn: { icon: true, text: "Live Dojo" }, cc: { icon: false, text: "Not available" }, ga: { icon: false, text: "Not available" }, jen: { icon: false, text: "Not available" } },
];

function CellContent({ data }) {
  if (data?.tag === "free") return <span className={styles.tagFree}>{data.text}</span>;
  if (data?.tag === "cost") return <span className={styles.tagCost}>{data.text}</span>;
  if (data?.tag === "warn") return <span className={styles.tagWarn}>{data.text}</span>;
  if (data?.icon === true) return <span className={styles.check}><Check size={14} /> {data.text}</span>;
  if (data?.icon === false) return <span className={styles.cross}><X size={14} /> {data.text}</span>;
  return <span className={data?.neutral ? styles.neutral : ""}>{data?.text || ""}</span>;
}

export default function HowNinjaCompares() {
  return (
    <section className={styles.section}>
      <div className={styles.ambientGlow} />
      <div className={styles.gridOverlay} />

      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.eyebrow}>How BuildNinja compares</span>
          <h2 className={styles.title}>BuildNinja vs CircleCI, Jenkins, and GitHub Actions</h2>
          <p className={styles.lead}>
            Every major CI/CD tool charges more as your team or build volume grows. BuildNinja doesn&apos;t. Here&apos;s how the pricing models compare for a team running 200 builds per day.
          </p>
        </motion.div>

        <motion.div
          className={styles.tableWrap}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col" className={styles.th}>Feature</th>
                <th scope="col" className={`${styles.th} ${styles.thBn}`}>BuildNinja</th>
                <th scope="col" className={styles.th}>CircleCI</th>
                <th scope="col" className={styles.th}>GitHub Actions</th>
                <th scope="col" className={styles.th}>Jenkins</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i}>
                  <td className={`${styles.td} ${styles.tdFeature}`}>{row.feature}</td>
                  <td className={`${styles.td} ${styles.tdBn}`}><CellContent data={row.bn} /></td>
                  <td className={styles.td}><CellContent data={row.cc} /></td>
                  <td className={styles.td}><CellContent data={row.ga} /></td>
                  <td className={`${styles.td} ${i === rows.length - 1 ? styles.tdLast : ""}`}><CellContent data={row.jen} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.p
          className={styles.note}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          * Cost estimates based on publicly listed pricing for a 50-person team running 200 builds/day at 6 minutes average duration. CircleCI Performance plan at $15/user/mo + credit overages. GitHub Actions Team plan at $4/user/mo + compute overage. BuildNinja and Jenkins are self-hosted — server infrastructure cost only.
        </motion.p>
      </div>
    </section>
  );
}
