"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
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
  { num: 25, suffix: "+", label: "Years of Innovation" },
  { num: 500, suffix: "+", label: "Global Enterprises" },
  { num: 99, suffix: "%", label: "Uptime Achieved" },
  { num: 10, suffix: "K+", label: "Engineers Empowered" },
];

export default function TrustBanner() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.ambientGlow} />
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.leftCol}>
            <span className={styles.badge}>Our Heritage</span>
            <h2 className={styles.title}>
              Built by <span className={styles.highlight}>GrapeHub India</span>
            </h2>
            <p className={styles.desc}>
              Backed by GrapeHub&apos;s 25+ years of global developer tools expertise. Support means direct access to actual engineers during business hours &mdash; not chatbots.
            </p>
          </div>

          <div className={styles.rightCol}>
            <div className={styles.trustGrid}>
              {trustPoints.map((point, i) => (
                <motion.div
                  key={i}
                  className={styles.trustItem}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <span className={styles.trustNumber}>
                    <AnimatedNumber value={point.num} isInView={isInView} />
                    {point.suffix}
                  </span>
                  <span className={styles.trustLabel}>{point.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
