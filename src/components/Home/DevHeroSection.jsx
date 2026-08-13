"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import styles from "./DevHeroSection.module.css";
import { useRouter } from "next/navigation";
import { siteConfig } from "@/config/site";
import { Clock3, DollarSign, Infinity, Server } from "lucide-react";
import posthog from "posthog-js";

const BuildNinjaDemo = dynamic(() => import("./BuildNinjaDemo"), { ssr: false });
const Typewriter = ({ texts }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    const handleType = () => {
      const fullText = texts[currentTextIndex];
      setCurrentText(
        isDeleting
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1)
      );

      setSpeed(isDeleting ? 40 : 100);

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    };

    const timer = setTimeout(handleType, speed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, speed, texts, currentTextIndex]);

  return (
    <span className={styles.typewriter}>
      {currentText}
      <span className={styles.cursor}>|</span>
    </span>
  );
};

const demoBorderCards = [
  { label: "Platform cost", value: "$0", icon: DollarSign, accent: "accentRose" },
  { label: "Setup time", value: "Under 5 min", icon: Clock3, accent: "accentAmber" },
  { label: "Build limits", value: "Unlimited", icon: Infinity, accent: "accentViolet" },
  { label: "Data location", value: "Your servers", icon: Server, accent: "accentCyan" },
];

export default function DevHeroSection() {
  const orb1 = useRef(null);
  const orb2 = useRef(null);
  const router = useRouter();

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
      {/* Gradient orbs */}
      <div ref={orb1} className={styles.orb1} />
      <div ref={orb2} className={styles.orb2} />

      {/* Grid overlay */}
      <div className={styles.grid} />

      {/* Bottom fade */}
      <div className={styles.bottomFade} />

      {/* Hero content: text left, video right */}
      <div className={styles.heroContent}>
        <div className={styles.copy}>
          <div className={styles.heroBadge} onClick={() => { router.push("/install"); }} data-cursor-grow>
            <span className={styles.badgeDot} />
            {siteConfig.version} is Live - {siteConfig.upcomingVersion} is coming soon with AI Features
          </div>

          <h1 className={styles.heading}>
            Free Self-Hosted CI/CD.<br /><span className={styles.headingGradient}>
              Unlimited builds
            </span><br />
            <span className={styles.headingGradient}>
              No credits.
            </span>
          </h1>
          <p className={styles.subtext}>
            BuildNinja is a self-hosted CI/CD platform that runs on your own servers. No build credits. No seat limits. No vendor lock-in. Deploy with a single Docker command in under 5 minutes.
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

        <img
          src="/resources/Home/Motion/Pipeline.svg"
          alt="BuildNinja Pipeline"
          className={styles.pipelineImg}
        />
      </div>

      {/* Dashboard with border-draw reveal */}
      <div className={styles.dashWrap}>
        <div className={styles.dashBorderBox}>
          {/* Interactive Demo Hint */}
          <div className={styles.interactiveHint}>
            {/* <span className={styles.hintDot} /> */}
            <svg className={styles.hintCursor} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 3l14 9-7 1-4 7-3-17z" />
            </svg>
            <span className={styles.hintTextFull}>Interactive Demo - <span className={styles.hintTextBlack}>Click Around to Explore</span></span>
            <span className={styles.hintTextMobile}>Interactive Demo - <span className={styles.hintTextBlack}>Click to Explore</span></span>
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

            {/* Top edge - draws rightward from top-left, fades to transparent halfway */}
            <line
              className={styles.borderTop}
              x1="1" y1="1"
              x2="580" y2="1"
            />

            {/* Left edge - draws downward from top-left, fades to transparent halfway */}
            <line
              className={styles.borderLeft}
              x1="1" y1="1"
              x2="1" y2="300"
            />
          </svg>


          {/* Glow behind border */}
          <div className={styles.dashGlow} />

          {/* Actual dashboard */}
          <div className={styles.dashInner} data-nosnippet>
            <div className={styles.demoWrap}>
              <div className={styles.demoBorderCards} aria-hidden="true">
                {demoBorderCards.map((card) => (
                  <div key={card.label} className={styles.demoBorderCard}>
                    <div className={styles.demoBorderCardTop}>
                      <span className={`${styles.demoBorderCardIcon} ${styles[card.accent]}`}>
                        <card.icon size={12} strokeWidth={2.2} />
                      </span>
                      <span className={styles.demoBorderCardLabel}>{card.label}</span>
                    </div>
                    <span className={styles.demoBorderCardValue}>{card.value}</span>
                  </div>
                ))}
              </div>
              <BuildNinjaDemo />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
