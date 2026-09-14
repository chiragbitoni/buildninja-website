"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, Play } from "lucide-react";
import posthog from "posthog-js";
import { Section } from "@/components/Marketing/Section";
import styles from "./HeroSection.module.css";

const BuildNinjaDemo = dynamic(() => import("../BuildNinjaDemo"), { ssr: false });

const platforms = ["Windows", "Linux", "macOS", "Docker"];

export default function HeroSection() {
  return (
    <Section as="section" id="home" className={styles.section} space="hero" padX>
      <div className={styles.inner}>
        <motion.div
          className={styles.copy}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className={styles.eyebrow}>Self-hosted CI/CD · Build intelligence built in</p>
          <h1>Understand your builds.<br /><span>Ship with confidence.</span></h1>
          <p className={styles.description}>
            Automate pipelines, see what changed, and use AI to understand failures and code-change risks. BuildNinja brings the workflow together on infrastructure you manage.
          </p>
          <div className={styles.actions}>
            <Link href="/install" className={styles.primaryAction} onClick={() => posthog.capture("hero_deploy_clicked")}>
              Get Started <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link href="/dojo" className={styles.secondaryAction} onClick={() => posthog.capture("hero_sandbox_clicked")}>
              <Play size={14} aria-hidden="true" /> Try the live sandbox
            </Link>
          </div>
          <div className={styles.platforms} aria-label="Supported installation platforms">
            {platforms.map((platform) => <span key={platform}><Check size={13} aria-hidden="true" />{platform}</span>)}
          </div>
        </motion.div>

        <motion.div
          className={styles.demo}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.demoHeading}>
            <div>
              <p className={styles.demoEyebrow}>Interactive product preview</p>
              <h2>See where your builds stand.</h2>
            </div>
            <span className={styles.sampleTag}><i /> Sample data</span>
          </div>
          <p className={styles.demoDescription}>
            Explore projects, check agent availability, and see what is waiting in the queue. Use the sidebar to move between the workspace views.
          </p>
          <div className={styles.demoSurface} data-nosnippet>
            <BuildNinjaDemo />
          </div>
          <p className={styles.caption}>
            Product preview based on the documented BuildNinja layout. Projects, activity, and metrics shown are sample data.
          </p>
          <Link href="/dojo" className={styles.demoLink}>Try a workflow in Dojo <ArrowRight size={14} aria-hidden="true" /></Link>
        </motion.div>
      </div>
    </Section>
  );
}
