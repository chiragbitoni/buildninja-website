"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faDollarSign, faServer, faClock } from "@fortawesome/free-solid-svg-icons";
import styles from "./TrustStats.module.css";

function AnimatedValue({ raw, isInView }) {
  const match = raw.match(/^([$£€¥]?)([\d,.]+)([xX%a-zA-Z+]*)$/);
  const prefix = match?.[1] || "";
  const suffix = match?.[3] || "";
  const isDecimal = match?.[2]?.includes(".");
  const target = match ? parseFloat(match[2].replace(/,/g, "")) : 0;
  const [displayed, setDisplayed] = useState(isDecimal ? "0.00" : "0");
  const raf = useRef(null);
  const startTime = useRef(null);

  useEffect(() => {
    if (!isInView) {
      setDisplayed(isDecimal ? "0.00" : "0");
      startTime.current = null;
      return;
    }
    const duration = 3000;
    const step = (ts) => {
      if (!startTime.current) startTime.current = ts;
      const p = Math.min((ts - startTime.current) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const cur = target * eased;
      setDisplayed(isDecimal ? cur.toFixed(2) : Math.floor(cur).toString());
      if (p < 1) raf.current = requestAnimationFrame(step);
    };
    raf.current = requestAnimationFrame(step);
    return () => { if (raf.current) cancelAnimationFrame(raf.current); };
  }, [isInView, target, isDecimal]);

  return <>{prefix}{displayed}{suffix}</>;
}

const stats = [
  { value: "3.4x", label: "Faster build times", sub: "vs. shared cloud runners", icon: faRocket },
  { value: "$0", label: "Per-build cost", sub: "Truly unlimited pipelines", icon: faDollarSign },
  { value: "99.97%", label: "Pipeline uptime", sub: "Your infrastructure, your SLA", icon: faServer },
  { value: "14min", label: "Avg. setup time", sub: "From install to first build", icon: faClock },
];

export default function TrustStats() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        <motion.div
          className={styles.statsStrip}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((s, i) => (
            <div key={i} className={styles.statItem}>
              <div className={styles.statIcon}>
                <FontAwesomeIcon icon={s.icon} />
              </div>
              <div className={styles.statContent}>
                <div className={styles.statValue}>
                  <AnimatedValue raw={s.value} isInView={isInView} />
                </div>
                <div className={styles.statLabel}>{s.label}</div>
                <div className={styles.statSub}>{s.sub}</div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={styles.title}>Numbers that build confidence</h2>
          <p className={styles.subtitle}>Real impact from teams that made the switch to self-hosted CI/CD.</p>
        </motion.div>
      </div>
    </section>
  );
}
