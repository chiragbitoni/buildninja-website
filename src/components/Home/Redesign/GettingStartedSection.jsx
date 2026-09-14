"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check, GitBranch, Play, Server } from "lucide-react";
import { Section } from "@/components/Marketing/Section";
import styles from "./GettingStartedSection.module.css";

const steps = [
  { title: "Set up BuildNinja.", description: "Choose an installation method and connect a build agent.", visual: "Server · Windows · Linux · macOS", href: "/install", action: "Explore installation", icon: Server },
  { title: "Connect your repository.", description: "Add the steps and triggers your project needs.", visual: "GitHub · GitLab · Bitbucket", href: "/features", action: "Explore the workflow", icon: GitBranch },
  { title: "Run and understand.", description: "Check the result, inspect the details, and decide what comes next.", visual: "Build passed · Results ready", href: "/dojo", action: "Try a sample project", icon: Play },
];

export default function GettingStartedSection() {
  return (
    <Section as="section" id="getting-started" className={styles.section} space="standard" padX tint>
      <div className={styles.heading}>
        <p className={styles.eyebrow}>Get started</p>
        <h2>Start with one project.</h2>
        <p>Three steps to a working build. Start with one project and make the workflow your own.</p>
      </div>
      <div className={styles.steps}>
        {steps.map(({ title, description, visual, href, action, icon: Icon }, index) => (
          <motion.article
            className={styles.step}
            key={title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.07 }}
          >
            <div className={styles.stepTop}><span>0{index + 1}</span><Icon size={17} aria-hidden="true" /></div>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className={styles.preview}><Check size={13} aria-hidden="true" /><span>{visual}</span></div>
            <Link href={href}>{action} <ArrowUpRight size={14} aria-hidden="true" /></Link>
          </motion.article>
        ))}
      </div>
      <Link href="https://www.buildninja.io/docs/category/quick-setup-guide" className={styles.docsLink} target="_blank" rel="noreferrer">
        Read the setup guide <ArrowRight size={14} aria-hidden="true" />
      </Link>
    </Section>
  );
}
