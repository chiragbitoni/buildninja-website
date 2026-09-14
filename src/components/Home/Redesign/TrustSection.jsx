import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Globe2, Layers3, Server, Tag, UsersRound } from "lucide-react";
import { Section } from "@/components/Marketing/Section";
import styles from "./TrustSection.module.css";

const proof = [
  { icon: Globe2, title: "Global developer tools experience", detail: "A team with a history of helping developers build software." },
  { icon: Layers3, title: "An integrated build workflow", detail: "Pipelines, agents, logs, and build intelligence in one product." },
  { icon: Tag, title: "Clear cost categories", detail: "Platform edition, infrastructure, and optional AI credits." },
  { icon: Server, title: "Your infrastructure", detail: "Choose where your server and build agents run." },
];

export default function TrustSection() {
  return (
    <Section as="section" className={styles.section} space="standard" padX tint>
      <div className={styles.content}>
        <div className={styles.brand}>
          <p className={styles.eyebrow}>Built and supported by</p>
          <div className={styles.logoLine}>
            <Image src="/resources/Grapecity.svg" width={174} height={31} alt="GrapeCity" />
            <span>India</span>
          </div>
          <h2>25+ years of developer tools experience.</h2>
          <p className={styles.support}>Practical help from the people behind BuildNinja during business hours.</p>
          <div className={styles.actions}>
            <Link href="/support"><UsersRound size={15} aria-hidden="true" /> Email support</Link>
            <Link href="/about">Meet the team <ArrowRight size={14} aria-hidden="true" /></Link>
          </div>
        </div>
        <div className={styles.proofGrid}>
          {proof.map(({ icon: Icon, title, detail }) => (
            <article key={title} className={styles.proofItem}>
              <Icon size={17} aria-hidden="true" />
              <div><h3>{title}</h3><p>{detail}</p></div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
