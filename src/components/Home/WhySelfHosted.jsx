"use client";
import { motion } from "framer-motion";
import styles from "./WhySelfHosted.module.css";

const ease = [0.25, 0.1, 0.25, 1];

const reasons = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 17h6v-6" /><path d="m22 17-8.5-8.5-5 5L2 7" />
      </svg>
    ),
    title: "Cost that doesn't scale with usage",
    text: "Most CI/CD tools charge per minute, per concurrent build, and per user. At scale, those pennies become a budget line item. BuildNinja runs entirely on your infrastructure - no usage limits, no surprise bills.",
    size: "large",
    theme: "coral",
    comparison: { saas: "$2,847", self: "$0" },
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "Data sovereignty for regulated environments",
    text: "Healthcare, financial services, defense, and government projects require source code and build artifacts never leave your network. SOC-2, FedRAMP, and healthcare compliance without the paperwork headache.",
    size: "medium",
    theme: "dark",
    tags: ["SOC 2 Type II", "FedRAMP", "HIPAA", "ISO 27001"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4" /><path d="m21 2-9.6 9.6" /><circle cx="7.5" cy="15.5" r="5.5" />
      </svg>
    ),
    title: "No vendor lock-in or credit headaches",
    text: "Cloud CI/CD platforms can change pricing overnight, sunset features, or force migrations. With BuildNinja on your infrastructure, your CI/CD is independent of any vendor's business decisions.",
    size: "small",
    theme: "sage",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Faster builds with dedicated runners",
    text: "SaaS providers throttle shared runners. With self-hosted infrastructure, your build times drop by 60-80% with dedicated CPU, RAM, and NVMe storage tuned to your workload.",
    size: "small",
    theme: "sand",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z" />
      </svg>
    ),
    title: "Works with your existing tools",
    text: "Connect to GitHub, GitLab, Bitbucket, or Gitea. Deploy to Kubernetes, ECS, bare metal, or edge locations. Use your existing Docker registries and secrets managers.",
    size: "small",
    theme: "white",
  },
  {
    icon: null,
    title: "Want a fully managed option?",
    text: "Get all the benefits of self-hosted with none of the operational burden. Our team manages the infrastructure while you keep full data control.",
    size: "full",
    theme: "gradient",
    cta: "Talk to Sales",
  },
];

export default function WhySelfHosted() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease }}
        >
          <span className={styles.eyebrow}>Why Self-Hosted</span>
          <h2 className={styles.title}>
            Why engineering teams <span className={styles.titleGradient}>choose self-hosted</span> over SaaS
          </h2>
          <p className={styles.subtitle}>
            Cloud CI/CD tools are convenient until they are not. Growing teams consistently hit the same walls - cost, compliance, and build bloat.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              className={`${styles.card} ${styles[`card_${r.size}`]} ${styles[`theme_${r.theme}`]}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease, delay: i * 0.05 }}
            >
              {r.theme === "gradient" ? (
                <div className={styles.ctaContent}>
                  <div>
                    <h3 className={styles.ctaTitle}>{r.title}</h3>
                    <p className={styles.ctaText}>{r.text}</p>
                  </div>
                  <a href="/contact" className={styles.ctaBtn}>
                    {r.cta}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                </div>
              ) : (
                <>
                  {r.icon && <div className={styles.cardIcon}>{r.icon}</div>}
                  <h3 className={styles.cardTitle}>{r.title}</h3>
                  <p className={styles.cardText}>{r.text}</p>
                  {r.comparison && (
                    <div className={styles.comparison}>
                      <div className={styles.comparisonCard}>
                        <span className={styles.comparisonLabel}>Typical SaaS monthly</span>
                        <span className={styles.comparisonValue}>{r.comparison.saas}</span>
                      </div>
                      <svg className={styles.comparisonArrow} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                      </svg>
                      <div className={`${styles.comparisonCard} ${styles.comparisonHighlight}`}>
                        <span className={styles.comparisonLabel}>BuildNinja monthly</span>
                        <span className={styles.comparisonValueWhite}>{r.comparison.self}<span className={styles.comparisonSuffix}>, plus your infra</span></span>
                      </div>
                    </div>
                  )}
                  {r.tags && (
                    <div className={styles.tags}>
                      {r.tags.map((t) => (
                        <span key={t} className={styles.tag}>{t}</span>
                      ))}
                    </div>
                  )}
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
