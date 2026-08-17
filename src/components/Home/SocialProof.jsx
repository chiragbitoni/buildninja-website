"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faRocket, faDollarSign, faServer, faClock
} from "@fortawesome/free-solid-svg-icons";
import styles from "./SocialProof.module.css";

function AnimatedValue({ raw, isInView }) {
  const match = raw.match(/^([$£€¥]?)([\d,.]+)(\D*)$/);
  const prefix = match?.[1] || "";
  const suffix = match?.[3] || "";
  const isDecimal = match?.[2]?.includes(".");
  const target = match ? parseFloat(match[2].replace(/,/g, "")) : 0;
  const [displayed, setDisplayed] = useState(isDecimal ? "0.00" : "0");
  const raf = useRef(null);
  const startTime = useRef(null);

  useEffect(() => {
    if (!match) return;
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
  }, [isInView, target, isDecimal, match]);

  if (!match) return <>{raw}</>;
  return <>{prefix}{displayed}{suffix}</>;
}

const stats = [
  { value: "5 min", label: "DEPLOYMENT TIME", sub: "Single Docker command", icon: faRocket },
  { value: "Unlimited", label: "BUILD EXECUTIONS", sub: "No build-credit restrictions", icon: faDollarSign },
  { value: "100%", label: "YOUR INFRASTRUCTURE", sub: "Your code, secrets, and artifacts", icon: faServer },
  { value: "No", label: "VENDOR LOCK-IN", sub: "Self-hosted and portable", icon: faClock },
];

export default function SocialProof() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.ambientGlow} />
      <div className={styles.gridOverlay} />
      
      <div className={styles.container}>
        <motion.div 
          className={styles.statsStrip}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
      </div>
    </section>
  );
}
