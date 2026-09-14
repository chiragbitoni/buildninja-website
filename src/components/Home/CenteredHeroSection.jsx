"use client";
import dynamic from "next/dynamic";
import styles from "./CenteredHeroSection.module.css";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { siteConfig } from "@/config/site";
import posthog from "posthog-js";
import { AnimatedSection, useSectionMotion } from "@/components/Marketing/SectionMotion";

const BuildNinjaDemo = dynamic(() => import("./BuildNinjaDemo"), { ssr: false });

function HeroAmbient() {
  const orb1 = useRef(null);
  const orb2 = useRef(null);
  const { playing } = useSectionMotion();

  useEffect(() => {
    if (!playing) return;
    let t = 0;
    let id;
    const tick = () => {
      t += 0.006;
      if (orb1.current) orb1.current.style.transform = `translate(${Math.sin(t) * 16}px, ${Math.cos(t * 0.7) * 20}px)`;
      if (orb2.current) orb2.current.style.transform = `translate(${Math.cos(t * 0.8) * 18}px, ${Math.sin(t * 1.1) * 16}px)`;
      id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [playing]);

  return <>
    <div ref={orb1} className={styles.orb1} />
    <div ref={orb2} className={styles.orb2} />
  </>;
}

export default function CenteredHeroSection() {
  const router = useRouter();

  return (
    <AnimatedSection as="section" space="hero" className={styles.section} label="Hero animation">
      <HeroAmbient />
      <div className={styles.grid} />
      <div className={styles.bottomFade} />

      <div className={styles.inner}>
        <div className={styles.copy}>
          <div className={styles.heroBadge} onClick={() => { router.push("/install"); }} data-cursor-grow>
            <span className={styles.badgeDot} />
            {siteConfig.version} is Live
            {/* - {siteConfig.upcomingVersion} is coming soon with AI Features */}
          </div>

          <h1 className={styles.heading}>
            Self-Hosted CI/CD.<br /><span className={styles.headingGradient}>
              Start Free, Scale Without Limits.
            </span>
          </h1>
          <p className={styles.subtext}>
            Self-hosted CI/CD platform for DevOps teams who want full control. Deploy in under 5 minutes with one Docker command. Growth Edition is free (up to 10 users, agents, configs); Shogun Edition unlocks unlimited pipelines, SSO - no per-seat billing, no vendor lock-in.
          </p>
          <div className={styles.ctas}>
            <a href="/install" className={styles.ctaPrimary} onClick={() => { posthog.capture("hero_deploy_clicked"); router.push("/install") }} data-cursor-grow>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Deploy free in 5 minutes
            </a>
            <a href="/dojo" className={styles.ctaSecondary} onClick={() => { posthog.capture("hero_sandbox_clicked"); router.push("/dojo") }} data-cursor-grow>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              Try live sandbox - no install
            </a>
          </div>
        </div>

        <div className={styles.demoWrap}>
          <div className={styles.demoSurface} data-nosnippet>
            <BuildNinjaDemo />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
