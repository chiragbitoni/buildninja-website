"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./Dojo.module.css";
import NetworkBackground from "@/components/ui/NetworkBackground";
import Link from "next/link";

export default function DojoHero() {
  return (
    <section className={`${styles.section} ${styles.hero}`}>
      <NetworkBackground />
      <div className={styles.bottomFade} />
      
      <div className={styles.contentWrap}>
        <motion.div 
          className={styles.badge}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badgeDot} />
          Interactive Sandbox
        </motion.div>

        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Welcome to the Dojo
        </motion.h1>

        <motion.p 
          className={styles.description}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Your instant, private playground for CI/CD automation. Experiment with builds, 
          break configurations, and master BuildNinja in a zero-risk environment.
        </motion.p>

        <motion.div 
          className={styles.heroActions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link href={process.env.NEXT_PUBLIC_DOJO_URL} className={styles.enterBtn}>
            Enter Dojo
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </Link>
          <span className={styles.metaText}>
            No installation required • Resets every 6 hours
          </span>
        </motion.div>
      </div>
    </section>
  );
}
