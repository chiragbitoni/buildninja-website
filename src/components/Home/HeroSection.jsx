"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import styles from "./HeroSection.module.css";
import { useRouter } from "next/navigation";
import { siteConfig } from "@/config/site";
import { Clock3, DollarSign, Infinity, Server } from "lucide-react";
import posthog from "posthog-js";

const BuildNinjaDemo = dynamic(() => import("./BuildNinjaDemo"), { ssr: false });
const demoBorderCards = [
  { label: "Platform cost", value: "$0", icon: DollarSign, accent: styles.accentRose },
  { label: "Setup time", value: "Under 5 min", icon: Clock3, accent: styles.accentAmber },
  { label: "Build limits", value: "Unlimited", icon: Infinity, accent: styles.accentViolet },
  { label: "Data location", value: "Your servers", icon: Server, accent: styles.accentCyan },
];

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

export default function HeroSection() {
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

      {/* Hero content: text left, interactive demo right */}
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
            BuildNinja is a self-hosted CI/CD platform that runs on your own servers. No build credits. No seat limits. No vendor lock-in. Deploy with a single Docker command in under 5 minutes - and run as many builds as your team needs, for free.
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

        <div className={styles.heroVideo}>
          <div className={styles.demoWrap}>
            <div className={styles.demoHint}>
              <svg className={styles.demoHintIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 3l14 9-7 1-4 7-3-17z" />
              </svg>
              <span className={styles.demoHintFull}>Interactive Demo - <span className={styles.demoHintStrong}>Click Around to Explore</span></span>
              <span className={styles.demoHintMobile}>Interactive Demo - <span className={styles.demoHintStrong}>Tap to Explore</span></span>
            </div>
            <div className={styles.demoBorderCards} aria-hidden="true">
              {demoBorderCards.map((card) => (
                <div key={card.label} className={styles.demoBorderCard}>
                  <div className={styles.demoBorderCardTop}>
                    <span className={`${styles.demoBorderCardIcon} ${card.accent}`}>
                      <card.icon size={12} strokeWidth={2.2} />
                    </span>
                    <span className={styles.demoBorderCardLabel}>{card.label}</span>
                  </div>
                  <span className={styles.demoBorderCardValue}>{card.value}</span>
                </div>
              ))}
            </div>
            <div className={styles.demoSurface} data-nosnippet>
              <BuildNinjaDemo />
            </div>
          </div>
          
        </div>
      </div>

    </section>
  );
}

