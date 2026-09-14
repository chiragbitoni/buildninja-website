"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Section } from "@/components/Marketing/Section";
import { comparisons } from "./homeContent";
import styles from "./ComparisonSection.module.css";

export default function ComparisonSection() {
  return (
    <Section as="section" id="compare" className={styles.section} space="standard" padX>
      <div className={styles.heading}>
        <p className={styles.eyebrow}>Find the right fit</p>
        <h2>Choose the CI/CD workflow<br /><span>that fits your team.</span></h2>
        <p>Compare hosting, daily operations, migration work, and the costs that will actually change.</p>
      </div>
      <div className={styles.fitNote}><Check size={15} aria-hidden="true" /><p>A self-hosted platform with project, agent, and build management together.</p><Link href="/features">Explore BuildNinja <ArrowRight size={14} aria-hidden="true" /></Link></div>
      <div className={styles.comparisons}>
        {comparisons.map((item, index) => (
          <motion.article
            className={styles.comparison}
            key={item.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
          >
            <span className={styles.number}>0{index + 1} / COMPARISON</span>
            <h3>BuildNinja vs {item.name}</h3>
            <p>{item.description}</p>
            <Link href={`/compare/buildninja-vs-${item.slug}`}>Read the comparison <ArrowUpRight size={14} aria-hidden="true" /></Link>
          </motion.article>
        ))}
      </div>
      <p className={styles.note}>Compare the workflow, responsibilities, and costs that will change for your team.</p>
    </Section>
  );
}
