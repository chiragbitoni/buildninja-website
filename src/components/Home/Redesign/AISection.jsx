"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Bot, FileCode2, GitBranch, MessageSquareText, SearchCheck, Sparkles } from "lucide-react";
import { Section } from "@/components/Marketing/Section";
import styles from "./AISection.module.css";

const workflows = [
  { icon: SearchCheck, path: "Build results / Execution logs", title: "Find the useful signal in the log.", description: "Open a completed build’s Execution Logs and choose Analyze Logs. Review the reported error and inspect its context, then continue the investigation in AI chat." },
  { icon: FileCode2, path: "Configuration details", title: "Understand the configuration before changing it.", description: "Choose Explain Config to explore the execution steps, parameters, and dependencies in the selected configuration." },
  { icon: GitBranch, path: "Build results / AI analysis", title: "Go from the risk summary to the affected file.", description: "Filter findings by severity and compare problematic code with suggested fixes. Treat the risk estimate as guidance to review with build evidence." },
  { icon: MessageSquareText, path: "AI side panel", title: "Keep the investigation in context.", description: "Ask follow-up questions in the same build or configuration, review conversation history, and stop an active request when needed." },
  { icon: Bot, path: "Execution steps / AI Runner", title: "Bring change analysis into the build workflow.", description: "Configure credentials, quality, failure thresholds, and server-error behavior for code-change analysis in your workflow." },
];

export default function AISection() {
  return (
    <Section as="section" id="ai-built-in" className={styles.section} space="standard" padX tint>
      <div className={styles.heading}>
        <p className={styles.eyebrow}><Sparkles size={13} aria-hidden="true" /> Built-in AI</p>
        <h2>BuildNinja comes <span>with AI.</span></h2>
        <p>Understand a failed build, explore a configuration, and review code-change insights in the workflow you already use.</p>
      </div>
      <div className={styles.workflows}>
        {workflows.map(({ icon: Icon, path, title, description }, index) => (
          <motion.article
            key={path}
            className={styles.workflow}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.45, delay: Math.min(index * 0.055, 0.22) }}
          >
            <div className={styles.cardHeading}><span>0{index + 1}</span><Icon size={17} aria-hidden="true" /></div>
            <p className={styles.path}>{path}</p>
            <h3>{title}</h3>
            <p className={styles.description}>{description}</p>
            <Link href="/dojo" className={styles.action}>Try it in Dojo <ArrowRight size={13} aria-hidden="true" /></Link>
          </motion.article>
        ))}
      </div>
      <div className={styles.note}>
        <p>AI guidance supports your review. Your team decides what to change. AI requests use a separate credit balance; at zero, new requests pause. An AI Runner step can affect the build result according to its configured failure threshold and server-error policy.</p>
        <Link href="/pricing">See AI credits <ArrowRight size={14} aria-hidden="true" /></Link>
      </div>
    </Section>
  );
}
