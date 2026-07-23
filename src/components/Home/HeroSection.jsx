"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import NetworkBackground from "@/components/ui/NetworkBackground";
import styles from "./HeroSection.module.css";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { openVideo } from "@/redux/slice/videoPopupSlice";
import { siteConfig } from "@/config/site";
import { Play } from "lucide-react";
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
      {/* <NetworkBackground /> */}

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
            BuildNinja is a self-hosted CI/CD platform that runs on your own servers. No build credits. No seat limits. No vendor lock-in. Deploy with a single Docker command in under 5 minutes - and run as many builds as your team needs, forever free.
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
          <div className={styles.browserMockup}>
            <div className={styles.videoAspect}>
              <iframe
                src="https://www.youtube.com/embed/jpKKjmirbkA?autoplay=1&mute=1&loop=1&playlist=jpKKjmirbkA&rel=0&modestbranding=1"
                title="BuildNinja - Self Hosted CI/CD"
                frameBorder="0"
                allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
          <div className={styles.videoLabel}>
            <Play size={12} />
            See BuildNinja in action (3 min overview)
          </div>
        </div>
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
            <BuildNinjaDemo />
          </div>
        </div>
      </div>

    </section>
  );
}

