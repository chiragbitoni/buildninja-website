"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import posthog from "posthog-js";
import styles from "./PipelineHeroSection.module.css";

export default function PipelineHeroSection() {
  const router = useRouter();

  return (
    <section className={styles.section}>
      <div className={styles.orb} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.copy}>
          <div className={styles.badge}>Visual Pipeline Control</div>

          <h2 className={styles.heading}>
            Design CI/CD flows your team can
            <span className={styles.headingAccent}> understand at a glance.</span>
          </h2>

          <p className={styles.subtext}>
            BuildNinja keeps your delivery process visible and structured, so teams can
            move from source to deployment without wrestling with fragile pipeline sprawl.
          </p>

          <div className={styles.actions}>
            <a
              href="/features"
              className={styles.primaryCta}
              onClick={() => {
                posthog.capture("pipeline_section_features_clicked");
                router.push("/features");
              }}
            >
              Explore features
            </a>
            <a
              href="/dojo"
              className={styles.secondaryCta}
              onClick={() => {
                posthog.capture("pipeline_section_dojo_clicked");
                router.push("/dojo");
              }}
            >
              Open live sandbox
            </a>
          </div>

          <div className={styles.points}>
            <div className={styles.point}>Clear execution flow</div>
            <div className={styles.point}>Fewer hidden moving parts</div>
            <div className={styles.point}>Built for growing teams</div>
          </div>
        </div>

        <Image
          src="/resources/Home/Motion/Pipeline.svg"
          alt="BuildNinja pipeline visualization"
          width={1200}
          height={900}
          className={styles.visual}
          priority={false}
        />
      </div>
    </section>
  );
}
