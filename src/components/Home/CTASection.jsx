"use client";
import { openVideo } from "@/redux/slice/videoPopupSlice";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "./CTASection.module.css";

export default function CTASection() {
  const dispatch = useDispatch();
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const orbY1 = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <section className={styles.section} ref={containerRef}>
      {/* Decorative background grid and orbs */}
      <div className={styles.grid} aria-hidden="true" />
      <motion.div className={`${styles.orb} ${styles.orb1}`} style={{ y: orbY1 }} aria-hidden="true" />
      <motion.div className={`${styles.orb} ${styles.orb2}`} style={{ y: orbY2 }} aria-hidden="true" />

      <div className={styles.container}>
        <motion.div 
          className={styles.contentBox}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        >
          {/* Shimmer overlay */}
          <div className={styles.shimmer} />

          {/* SVG Animated Border */}
          <svg className={styles.borderSvg} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <motion.rect
              x="0.5" y="0.5" width="99" height="99" rx="2.8"
              className={styles.borderPath}
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.3 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
            />
          </svg>

          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Stop Fighting Your CI/CD.
            <span className={styles.titleGradient}>Automate Your Intelligence.</span>
          </motion.h2>
          
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Deploy elite build pipelines that think, optimize, and scale. Join the high-velocity teams moving to BuildNinja.
          </motion.p>

          <motion.div 
            className={styles.actions}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Link href="/install" className={styles.btnPrimary}>
              Try BuildNinja Free
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <button 
              className={styles.btnSecondary}
              onClick={() => {
                dispatch(openVideo({ 
                  videoId: process.env.NEXT_PUBLIC_YOUTUBE_VIDEO_ID, 
                  title: "BuildNinja", 
                  ctaText: "Self Hosted CI/CD That Just Works",
                  link: "/docs"
                }));
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              Watch 3-Minute Demo
            </button>
          </motion.div>

          {/* Guarantee Grid */}
          <motion.div 
            className={styles.guarantee}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className={styles.guaranteeHeader}>
              <span>🛡️</span>
              <span>Enterprise Grade Guarantee</span>
            </div>
            
            <div className={styles.guaranteeItem}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>30-day full trial license, no credit card required</span>
            </div>
            
            <div className={styles.guaranteeItem}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Cancel anytime, keep control of your self-hosted setup</span>
            </div>

            <div className={styles.guaranteeItem}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Deploy in minutes via Docker or bare-metal CLI</span>
            </div>

            <div className={styles.guaranteeItem}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Direct engineer-to-engineer technical support</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
