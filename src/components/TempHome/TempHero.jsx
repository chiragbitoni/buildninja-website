"use client";
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import styles from "./TempHero.module.css";

const DOCKER_CMD = "docker pull buildninja/buildninja && docker run -p 8080:8080 buildninja/buildninja";

export default function TempHero() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(DOCKER_CMD);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = DOCKER_CMD;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };
  return (
    <header className={styles.section}>
      <div className={`${styles.glow} ${styles.glow1}`} aria-hidden="true" />
      <div className={`${styles.glow} ${styles.glow2}`} aria-hidden="true" />
      <div className={styles.container}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          v1.1.0 live — AI features coming in v1.2.0
        </div>

        <h1 className={styles.title}>
          Free Self-Hosted CI/CD.<br />
          <span className={styles.titleAccent}>Unlimited builds.</span> No credits.
        </h1>

        <p className={styles.desc}>
          BuildNinja is a self-hosted CI/CD platform that runs on your own servers. No build credits. No seat limits. No vendor lock-in. Deploy with a single Docker command in under 5 minutes — and run as many builds as your team needs, forever free.
        </p>

        <div className={styles.actions}>
          <a href="/install" className={styles.btnPrimary}>
            Deploy free in 5 minutes
          </a>
          <a href="/dojo" className={styles.btnSecondary}>
            Try live sandbox — no install
          </a>
        </div>

        <div className={styles.installBlock}>
          <span className={styles.installLabel}>Quick start</span>
          <code className={styles.installCode}>{DOCKER_CMD}</code>
          <button className={styles.copyBtn} onClick={handleCopy} aria-label="Copy to clipboard">
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>

        <div className={styles.stats}>
          <div>
            <div className={`${styles.statValue} ${styles.statValueAccent}`}>$0</div>
            <div className={styles.statLabel}>Platform cost, forever</div>
          </div>
          <div className={styles.statDivider} />
          <div>
            <div className={`${styles.statValue} ${styles.statValueDefault}`}>Unlimited</div>
            <div className={styles.statLabel}>Builds per day</div>
          </div>
          <div className={styles.statDivider} />
          <div>
            <div className={`${styles.statValue} ${styles.statValueDefault}`}>Unlimited</div>
            <div className={styles.statLabel}>Users & projects</div>
          </div>
          <div className={styles.statDivider} />
          <div>
            <div className={`${styles.statValue} ${styles.statValueDefault}`}>&lt; 5 min</div>
            <div className={styles.statLabel}>Setup time</div>
          </div>
          <div className={styles.statDivider} />
          <div>
            <div className={`${styles.statValue} ${styles.statValueDefault}`}>25+</div>
            <div className={styles.statLabel}>Years delivery expertise</div>
          </div>
        </div>
      </div>
    </header>
  );
}
