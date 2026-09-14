import Link from "next/link";
import { ArrowRight, ArrowUpRight, KeyRound } from "lucide-react";
import { Section } from "@/components/Marketing/Section";
import styles from "./DeveloperPortalSection.module.css";

const portalUrl = "https://preview-kenzoai.buildninja.io/";

export default function DeveloperPortalSection() {
  return (
    <Section as="section" className={styles.section} space="none" padX>
      <div className={styles.callout}>
        <div className={styles.icon}><KeyRound size={19} aria-hidden="true" /></div>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>AI access and usage</p>
          <h2>One place for your AI connection.</h2>
          <p>Create credentials, set application limits, and follow usage in the kenzoAI Developer Portal.</p>
        </div>
        <div className={styles.actions}>
          <a href={portalUrl} target="_blank" rel="noopener noreferrer">Open developer portal <ArrowUpRight size={14} aria-hidden="true" /></a>
          <Link href="/features">How AI works in BuildNinja <ArrowRight size={14} aria-hidden="true" /></Link>
        </div>
      </div>
    </Section>
  );
}
