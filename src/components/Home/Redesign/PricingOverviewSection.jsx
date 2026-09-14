"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Sparkles } from "lucide-react";
import { Section } from "@/components/Marketing/Section";
import styles from "./PricingOverviewSection.module.css";

export default function PricingOverviewSection({ pricing = {} }) {
  const {
    growthName = "Growth",
    growthFeatures = "Get started with the BuildNinja workflow.",
    growthPrice = "Free",
    growthHref = "/pricing",
    paidName = "Shogun",
    paidFeatures = "More room for your team and build capacity.",
    paidPrice = "See current options",
    paidHref = "/pricing",
  } = pricing;

  return (
    <Section as="section" id="editions" className={styles.section} space="standard" padX tint>
      <div className={styles.heading}>
        <p className={styles.eyebrow}>Plans and credits</p>
        <h2>Choose the edition that fits.</h2>
        <p>Keep every cost clear. Your edition covers the CI/CD platform, infrastructure is yours to manage, and AI uses a separate prepaid credit balance.</p>
      </div>
      <div className={styles.plans}>
        <article className={styles.plan}>
          <span className={styles.planEyebrow}>Free platform edition</span>
          <h3>{growthName}</h3>
          <p>Bring a first team and its build workflow together.</p>
          <div className={styles.price}>{growthPrice}<small>Free edition · no per-seat fee</small></div>
          <ul><li><Check size={13} />{growthFeatures}</li><li><Check size={13} />Self-hosted on your infrastructure</li></ul>
          <Link className={styles.secondaryAction} href={growthHref}>Choose {growthName} <ArrowUpRight size={14} aria-hidden="true" /></Link>
        </article>
        <article className={`${styles.plan} ${styles.featured}`}>
          <span className={styles.planEyebrow}>More room to grow</span>
          <h3>{paidName}</h3>
          <p>Give growing teams more projects and build capacity.</p>
          <div className={styles.price}>{paidPrice}<small>Current published option · no per-seat fee</small></div>
          <ul><li><Check size={13} />{paidFeatures}</li><li><Check size={13} />Self-hosted on your infrastructure</li></ul>
          <Link className={styles.primaryAction} href={paidHref}>Explore {paidName} <ArrowUpRight size={14} aria-hidden="true" /></Link>
        </article>
        <article className={styles.plan}>
          <span className={styles.planEyebrow}>Planning a larger rollout?</span>
          <h3>Enterprise</h3>
          <p>Discuss deployment, procurement, and support requirements with our team.</p>
          <div className={styles.price}>Let’s talk.<small>Plan with our team</small></div>
          <ul><li><Check size={13} />Discuss your deployment needs</li><li><Check size={13} />Plan your rollout</li></ul>
          <Link className={styles.secondaryAction} href="/contact">Talk to the team <ArrowRight size={14} aria-hidden="true" /></Link>
        </article>
      </div>
      <div className={styles.creditNote}><p><Sparkles size={15} aria-hidden="true" /><b>BuildNinja comes with AI.</b> Prepaid credit packs are available separately.</p><Link href="/pricing">Compare editions and credits <ArrowRight size={14} aria-hidden="true" /></Link></div>
    </Section>
  );
}
