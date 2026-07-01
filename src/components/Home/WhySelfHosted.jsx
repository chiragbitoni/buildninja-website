"use client";
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

const reasons = [
  { icon: faDollarSign, title: "Cost that doesn't scale with usage", text: "SaaS CI/CD tools charge per build minute or per credit. As your team ships faster, your CI/CD bill grows in lockstep. With BuildNinja, the server cost is fixed — run 100 builds or 10,000, the price stays the same. Self-hosted typically costs 80–90% less than comparable SaaS plans." },
  { icon: faShieldHalved, title: "Data sovereignty for regulated industries", text: "Healthcare, financial services, defence, and government teams cannot send source code to third-party cloud infrastructure. BuildNinja runs entirely within your perimeter, meeting HIPAA, SOC 2, and FedRAMP compliance requirements without a six-figure enterprise contract." },
  { icon: faWrench, title: "No vendor lock-in or credit exhaustion", text: "Cloud CI/CD platforms can change pricing, discontinue features, or experience outages that halt your pipeline. When CircleCI changed its credit model in 2023, thousands of teams scrambled. With BuildNinja on your infrastructure, your CI/CD is independent of any vendor's business decisions." },
  { icon: faGlobe, title: "Air-gapped and offline environments", text: "Some engineering environments have no internet access by design — classified government systems, industrial control networks, highly secure financial infrastructure. SaaS CI/CD tools fundamentally cannot operate here. BuildNinja runs fully offline once deployed." },
  { icon: faBolt, title: "Faster builds on hardware you spec", text: "Cloud CI/CD runs on shared compute you cannot directly optimise. If you need more CPU or memory, you pay more per build. With BuildNinja, you choose your build hardware — provision exactly what your workloads need." },
  { icon: faGear, title: "Full control without DevOps overhead", text: "Jenkins offered self-hosted CI/CD but required extensive plugin management, manual upgrades, and deep Groovy scripting knowledge. BuildNinja offers the same infrastructure control with a fraction of the operational overhead — one Docker command replaces weeks of configuration." },
];

export default function WhySelfHosted() {
  return (
    <section className={styles.section}>
      <div className={styles.ambientGlow} />
      <div className={styles.gridOverlay} />

      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Why self-hosted CI/CD?</span>
          <h2 className={styles.title}>
            Six reasons engineering teams choose self-hosted over SaaS
          </h2>
          <p className={styles.lead}>
            Cloud-based CI/CD tools are convenient until they&apos;re not. Growing teams
            consistently hit the same walls: cost, compliance, control, and credit
            limits. Self-hosted CI/CD eliminates all of them.
          </p>
        </div>

        <div className={styles.carouselOuter}>
          <div className={styles.carouselInner}>
            {reasons.map((r, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.cardIcon}>
                  <FontAwesomeIcon icon={r.icon} />
                </div>
                <h3 className={styles.cardTitle}>{r.title}</h3>
                <p className={styles.cardText}>{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
