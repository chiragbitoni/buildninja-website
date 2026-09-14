"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import posthog from "posthog-js";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { Section } from "@/components/Marketing/Section";
import styles from "./FinalCtaSection.module.css";

export default function FinalCtaSection() {
  const sceneRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sceneRef, offset: ["start end", "end start"] });
  const upperY = useTransform(scrollYProgress, [0, 1], ["-14%", "14%"]);
  const lowerY = useTransform(scrollYProgress, [0, 1], ["12%", "-12%"]);

  return (
    <Section as="section" className={styles.section} space="standard" padX>
      <div className={styles.scene} ref={sceneRef}>
        <motion.div className={`${styles.rule} ${styles.ruleOne}`} style={{ y: reduceMotion ? 0 : upperY }} aria-hidden="true" />
        <motion.div className={`${styles.rule} ${styles.ruleTwo}`} style={{ y: reduceMotion ? 0 : lowerY }} aria-hidden="true" />
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className={styles.eyebrow}><Sparkles size={13} aria-hidden="true" /> Your next build starts here</p>
          <h2>Give your next build<br /><span>a clearer path.</span></h2>
          <p>Bring pipelines, build visibility, and build intelligence into one workflow.</p>
          <div className={styles.actions}>
            <Link href="/install" onClick={() => posthog.capture("cta_get_started_clicked")}>Get Started <ArrowRight size={16} aria-hidden="true" /></Link>
            <Link href="/dojo" onClick={() => posthog.capture("cta_sandbox_clicked")}>Try the live sandbox <ArrowUpRight size={15} aria-hidden="true" /></Link>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
