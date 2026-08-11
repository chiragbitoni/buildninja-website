"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Building2, Globe2, Shield, Users, CheckCircle2 } from "lucide-react";
import styles from "./TrustBanner.module.css";

function AnimatedNumber({ value, isInView }) {
  const [displayed, setDisplayed] = useState(0);
  const raf = useRef(null);
  const startTime = useRef(null);

  useEffect(() => {
    if (!isInView) {
      setDisplayed(0);
      startTime.current = null;
      return;
    }
    const duration = 3000;
    const start = 0;

    const step = (timestamp) => {
      if (!startTime.current) startTime.current = timestamp;
      const elapsed = timestamp - startTime.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayed(Math.floor(start + (value - start) * eased));
      if (progress < 1) raf.current = requestAnimationFrame(step);
    };

    raf.current = requestAnimationFrame(step);
    return () => { if (raf.current) cancelAnimationFrame(raf.current); };
  }, [isInView, value]);

  return <span>{displayed}</span>;
}

const trustPoints = [
  { num: 25, suffix: "+", label: "Years of Innovation", icon: Building2, tone: "rose", desc: "of engineering pedigree" },
  { num: 500, suffix: "+", label: "Global Enterprises", icon: Globe2, tone: "amber", desc: "trust the platform" },
  { num: 99, suffix: "%", label: "Uptime Achieved", icon: Shield, tone: "violet", desc: "on your infra" },
  { num: 10, suffix: "K+", label: "Engineers Empowered", icon: Users, tone: "cyan", desc: "across the globe" },
];

export default function TrustBanner() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.gridOverlay} />
      <div className={styles.orb1} />
      <div className={styles.orb2} />

      <div className={styles.container}>
        <motion.div
          className={styles.panel}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.panelInner}>
            <div className={styles.leftCol}>
              <span className={styles.badge}>
                <span className={styles.badgeDot} />
                Our Heritage
              </span>
              <h2 className={styles.title}>
                Built by <span className={styles.highlight}>Grapecity India</span>
              </h2>
              <p className={styles.desc}>
                Backed by Grapecity&apos;s 25+ years of global developer tools
                expertise. Support means direct access to actual engineers during
                business hours &mdash; not chatbots.
              </p>
              <div className={styles.chipRow}>
                <span className={styles.chip}>
                  <CheckCircle2 size={14} className={styles.chipCheck} />
                  Direct engineer support
                </span>
                <span className={styles.chip}>
                  <Users size={14} className={styles.chipUsers} />
                  No chatbots, ever
                </span>
              </div>
            </div>

            <div className={styles.statGrid}>
              {trustPoints.map((point, i) => {
                const Icon = point.icon;
                return (
                  <motion.div
                    key={i}
                    className={styles.statCard}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.12 + i * 0.08, duration: 0.5 }}
                  >
                    <div className={`${styles.statIcon} ${styles[point.tone]}`}>
                      <Icon size={18} />
                    </div>
                    <span className={styles.statNumber}>
                      <AnimatedNumber value={point.num} isInView={isInView} />
                      {point.suffix}
                    </span>
                    <span className={styles.statLabel}>{point.label}</span>
                    <span className={styles.statDesc}>{point.desc}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}