"use client";
import styles from "./TempCTABanner.module.css";

export default function TempCTABanner() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Stop paying per build. Start owning your CI/CD.
        </h2>
        <p className={styles.subtitle}>
          Deploy in 5 minutes. Run unlimited builds. Pay nothing.
        </p>
        <a href="/install" className={styles.cta}>
          Deploy BuildNinja free
        </a>
        <p className={styles.note}>
          No credit card. No account required. Just Docker.
        </p>
      </div>
    </section>
  );
}
