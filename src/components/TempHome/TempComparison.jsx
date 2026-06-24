"use client";
import styles from "./TempComparison.module.css";

const rows = [
  { feature: "Monthly cost (200 builds/day)", bn: { tag: "free", text: "$0 — always" }, cc: { tag: "cost", text: "~$450–600/mo" }, ga: { tag: "cost", text: "~$300–450/mo" }, jen: { tag: "warn", text: "Server cost only" } },
  { feature: "Build pricing model", bn: { icon: "check", text: "No credits — unlimited" }, cc: { icon: "cross", text: "Per credit consumed" }, ga: { icon: "cross", text: "Per compute minute" }, jen: { icon: "check", text: "Free (self-hosted)" } },
  { feature: "Per-seat fees", bn: { icon: "check", text: "None" }, cc: { icon: "cross", text: "Scales with team" }, ga: { icon: "cross", text: "Scales with team" }, jen: { icon: "check", text: "None" } },
  { feature: "Self-hosted setup", bn: { icon: "check", text: "1 Docker command" }, cc: { icon: "cross", text: "K8s + enterprise plan" }, ga: { icon: "cross", text: "Runner required" }, jen: { text: "Complex — war file + plugins", neutral: true } },
  { feature: "Setup time", bn: { icon: "check", text: "Under 5 minutes" }, cc: { text: "Minutes (SaaS sign-up)", neutral: true }, ga: { text: "Minutes (SaaS sign-up)", neutral: true }, jen: { icon: "cross", text: "Hours to days" } },
  { feature: "Data sovereignty / on-premise", bn: { icon: "check", text: "Full — your servers" }, cc: { icon: "cross", text: "SaaS cloud only" }, ga: { icon: "cross", text: "GitHub cloud" }, jen: { icon: "check", text: "Full (self-managed)" } },
  { feature: "Air-gapped / no internet", bn: { icon: "check", text: "Supported" }, cc: { icon: "cross", text: "Not possible" }, ga: { icon: "cross", text: "Not possible" }, jen: { icon: "check", text: "Supported" } },
  { feature: "Modern UI + dashboards", bn: { icon: "check", text: "Built-in, no plugins" }, cc: { icon: "check", text: "Built-in" }, ga: { icon: "check", text: "Built-in" }, jen: { icon: "cross", text: "Plugin-dependent" } },
  { feature: "AI build intelligence", bn: { tag: "warn", text: "Coming v1.2.0" }, cc: { text: "Limited", neutral: true }, ga: { text: "Limited", neutral: true }, jen: { icon: "cross", text: "Not available" } },
  { feature: "Interactive sandbox (no install)", bn: { icon: "check", text: "Live Dojo" }, cc: { icon: "cross", text: "Not available" }, ga: { icon: "cross", text: "Not available" }, jen: { icon: "cross", text: "Not available" } },
];

function CellContent({ data }) {
  if (data?.tag === "free") return <span className={styles.tagFree}>{data.text}</span>;
  if (data?.tag === "cost") return <span className={styles.tagCost}>{data.text}</span>;
  if (data?.tag === "warn") return <span className={styles.tagWarn}>{data.text}</span>;
  if (data?.icon === "check") return <><span className={styles.check}>✓</span> {data.text}</>;
  if (data?.icon === "cross") return <><span className={styles.cross}>✗</span> {data.text}</>;
  return <span className={data?.neutral ? styles.neutral : ""}>{data?.text || ""}</span>;
}

export default function TempComparison() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.eyebrow}>How BuildNinja compares</span>
        <h2 className={styles.title}>BuildNinja vs CircleCI, Jenkins, and GitHub Actions</h2>
        <p className={styles.lead}>
          Every major CI/CD tool charges more as your team or build volume grows. BuildNinja doesn&apos;t. Here&apos;s how the pricing models compare for a team running 200 builds per day.
        </p>

        <div className={styles.tableWrap}>
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
        </div>

        <p className={styles.note}>
          * Cost estimates based on publicly listed pricing for a 50-person team running 200 builds/day at 6 minutes average duration. CircleCI medium resource class at 10 credits/min on Performance plan. GitHub Actions Linux runners at $0.008/min. BuildNinja: $0 platform cost — server cost at your discretion.
        </p>
      </div>
    </section>
  );
}
