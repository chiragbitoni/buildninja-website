"use client";
import { useEffect, useRef } from "react";
import BuildNinjaDemo from "./BuildNinjaDemo";
import NetworkBackground from "@/components/ui/NetworkBackground";
import styles from "./HeroSection.module.css";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { openVideo } from "@/redux/slice/videoPopupSlice";
import { siteConfig } from "@/config/site";

export default function HeroSection() {
  const orb1 = useRef(null);
  const orb2 = useRef(null);
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    let t = 0;
    const tick = () => {
      t += 0.006;
      if (orb1.current) orb1.current.style.transform = `translate(${Math.sin(t) * 16}px, ${Math.cos(t * 0.7) * 20}px)`;
      if (orb2.current) orb2.current.style.transform = `translate(${Math.cos(t * 0.8) * 18}px, ${Math.sin(t * 1.1) * 16}px)`;
      requestAnimationFrame(tick);
    };
    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className={styles.hero}>
      <NetworkBackground />

      {/* Gradient orbs */}
      <div ref={orb1} className={styles.orb1} />
      <div ref={orb2} className={styles.orb2} />

      {/* Grid overlay */}
      <div className={styles.grid} />

      {/* Bottom fade */}
      <div className={styles.bottomFade} />

      {/* Hero copy — each child has its own animation class */}
      <div className={styles.copy}>

        <div className={styles.heroBadge} onClick={() => { router.push("/install"); }}>
          <span className={styles.badgeDot} />
          {siteConfig.version} is Live, with AI build analysis.
        </div>

        <h1 className={styles.heading}>
          Powerful Features,<br />
          <span className={styles.headingGradient}> Without the Maintenance Burden.</span>
        </h1>

        <p className={styles.subtext}>
          All the capabilities you need, none of the plugin chaos. Self-hosted CI/CD that deploys in minutes — no per-seat pricing, no DevOps PhD required.
        </p>

        <div className={styles.ctas}>
          <a className={styles.ctaPrimary} onClick={() => { router.push("/install") }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Try BuildNinja Free
          </a>
          <a className={styles.ctaSecondary} onClick={() => { dispatch(openVideo({ videoId: process.env.NEXT_PUBLIC_YOUTUBE_VIDEO_ID, title: "BuildNinja", ctaText: "Self Hosted CI/CD That Just Works", link: "https://buildninja.grapehub.io/docs/category/getting-started" })) }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            See the 3-Minute Demo
          </a>
          <a className={styles.ctaTertiary} onClick={() => { router.push("/dojo") }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Try The Dojo
          </a>
        </div>
      </div>

      {/* Dashboard with border-draw reveal */}
      <div className={styles.dashWrap}>
        <div className={styles.dashBorderBox}>
          {/* Interactive Demo Hint */}
          <div className={styles.interactiveHint}>
            <span className={styles.hintDot} />
            <svg className={styles.hintCursor} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 3l14 9-7 1-4 7-3-17z" />
            </svg>
            Interactive Demo — Click Around to Explore
          </div>

          {/* SVG border that draws itself */}
          <svg className={styles.borderSvg} viewBox="0 0 1160 600" preserveAspectRatio="none">
            <defs>
              <linearGradient id="borderGradH" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--color-text)" stopOpacity="0.55" />
                <stop offset="100%" stopColor="var(--color-text)" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="borderGradV" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="var(--color-text)" stopOpacity="0.55" />
                <stop offset="100%" stopColor="var(--color-text)" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Top edge — draws rightward from top-left, fades to transparent halfway */}
            <line
              className={styles.borderTop}
              x1="1" y1="1"
              x2="580" y2="1"
            />

            {/* Left edge — draws downward from top-left, fades to transparent halfway */}
            <line
              className={styles.borderLeft}
              x1="1" y1="1"
              x2="1" y2="300"
            />
          </svg>


          {/* Glow behind border */}
          <div className={styles.dashGlow} />

          {/* Actual dashboard */}
          <div className={styles.dashInner}>
            <BuildNinjaDemo />
          </div>
        </div>
      </div>
    </section>
  );
}
