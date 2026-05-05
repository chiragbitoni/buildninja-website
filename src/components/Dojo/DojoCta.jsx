"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./Dojo.module.css";
import Link from "next/link";
import posthog from "posthog-js";
import { getCookie } from "@/lib/tracking/cookies";

export default function DojoCta() {
  const handleDojoClick = () => {
    const rawUtm = getCookie("gh_utm");
    let utmData = {};
    
    if (rawUtm) {
        try {
            const parsed = JSON.parse(rawUtm);
            utmData = {
                utm_source: parsed.source || "",
                utm_medium: parsed.medium || "",
                utm_campaign: parsed.campaign || "",
                utm_content: parsed.content || "",
            };
        } catch(e) {}
    }
    
    if (!utmData.utm_source) {
        const params = new URLSearchParams(window.location.search);
        utmData = {
            utm_source: params.get("utm_source") || "",
            utm_medium: params.get("utm_medium") || "",
            utm_campaign: params.get("utm_campaign") || "",
            utm_content: params.get("utm_content") || "",
        };
    }

    posthog.capture("cta_dojo_clicked", {
        ...utmData,
    });
  };

  return (
    <section className={`${styles.section} ${styles.ctaSection}`}>
      <motion.div 
        className={styles.ctaCard}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className={styles.ctaTitle}>The Dojo Awaits, Ninja</h2>
        <p className={styles.ctaText}>
          Step into the sandbox, experiment with build pipelines, and master the 
          core features of BuildNinja in minutes.
        </p>
        <Link href={process.env.NEXT_PUBLIC_DOJO_URL} className={styles.enterBtn} onClick={handleDojoClick} target="_blank" rel="noopener noreferrer">
          Launch Dojo Now
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </Link>
      </motion.div>
    </section>
  );
}
