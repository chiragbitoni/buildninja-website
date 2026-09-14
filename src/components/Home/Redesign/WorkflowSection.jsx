"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, GitBranch, Terminal } from "lucide-react";
import { Section } from "@/components/Marketing/Section";
import styles from "./WorkflowSection.module.css";

const pipeline = [
  ["01", "Checkout source", "Git repository"],
  ["02", "Install dependencies", "npm ci"],
  ["03", "Build and test", "npm run build && npm test"],
  ["04", "Collect artifacts", "Ready for the next step"],
];

const changedFiles = [
  ["src/build/runner.ts", "+18", "Modified"],
  ["tests/runner.test.ts", "+6", "Added"],
  ["package.json", "±2", "Modified"],
];

export default function WorkflowSection() {
  return (
    <Section as="section" id="story-build" className={styles.section} space="standard" padX>
      <div className={styles.heading}>
        <p className={styles.eyebrow}>Your build workflow</p>
        <h2>Stop reacting to failures.<br /><span>Manage the next release with confidence.</span></h2>
        <p className={styles.lead}>
          When build context is scattered, releases wait, investigations repeat, and developers lose time administering CI/CD. BuildNinja brings the pipeline, its changes, and the evidence into one shared workflow.
        </p>
      </div>
      <div className={styles.storyGrid}>
        <motion.article
          className={styles.story}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <div className={styles.visual}>
            <div className={styles.visualHeader}><span><GitBranch size={14} /> storefront-api</span><span>main · on push</span></div>
            <div className={styles.pipeline}>
              {pipeline.map(([number, title, detail], index) => (
                <div className={styles.pipelineStep} key={number}>
                  <span className={styles.number}>{number}</span>
                  <div><b>{title}</b><code>{detail}</code></div>
                  {index < 3 ? <Check className={styles.check} size={15} /> : <span className={styles.pending}>Ready</span>}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.storyCopy}>
            <span><Terminal size={14} /> Configure the steps</span>
            <h3>One place for the work behind a release.</h3>
            <p>Use commands, scripts, SSH, MSBuild, VSTest, and reusable parameters to define the pipeline your project needs.</p>
          </div>
        </motion.article>

        <motion.article
          className={styles.story}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          <div className={`${styles.visual} ${styles.changeVisual}`}>
            <div className={styles.visualHeader}><span><GitBranch size={14} /> Source changes</span><span>Build #248</span></div>
            <div className={styles.changeSummary}><span className={styles.commitMark}>C</span><div><b>Refine build runner</b><small>Commit 94b7a1 · 3 files changed</small></div><span className={styles.status}>Build passed</span></div>
            <div className={styles.fileList}>
              {changedFiles.map(([file, changes, status]) => <div key={file}><code>{file}</code><span>{changes}</span><small>{status}</small></div>)}
            </div>
          </div>
          <div className={styles.storyCopy}>
            <span><GitBranch size={14} /> Follow the source changes</span>
            <h3>Know what changed before you investigate.</h3>
            <p>Inspect Git changes and build history alongside the run they triggered, so the team can connect a result with its source.</p>
          </div>
        </motion.article>
      </div>
      <Link href="/features" className={styles.moreLink}>Explore all features <ArrowRight size={15} aria-hidden="true" /></Link>
    </Section>
  );
}
