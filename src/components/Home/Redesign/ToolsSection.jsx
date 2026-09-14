"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "@/components/Marketing/SectionMotion";
import styles from "./ToolsSection.module.css";

const tools = [
  "GitHub", "GitLab", "Bitbucket", "Google", "Microsoft Entra ID", "Docker",
  "Kubernetes", "Command Line", "Script Runner", "SSH", "MSBuild", "VSTest",
];

function ToolRun({ duplicate = false }) {
  return (
    <div className={styles.toolRun} aria-hidden={duplicate || undefined}>
      {tools.map((tool) => <span key={tool}>{tool}</span>)}
    </div>
  );
}

export default function ToolsSection() {
  return (
    <AnimatedSection as="section" className={styles.section} space="standard" padX label="Supported tools animation">
      <div className={styles.header}>
        <div>
          <p className={styles.eyebrow}>An open workflow</p>
          <h2>Works with the tools behind your release.</h2>
        </div>
        <Link href="/features" className={styles.link}>See how the pieces fit <ArrowUpRight size={15} aria-hidden="true" /></Link>
      </div>
      <div className={styles.marquee} aria-label={`Supported tools: ${tools.join(", ")}`}>
        <div className={styles.track}>
          <ToolRun />
          <ToolRun duplicate />
        </div>
      </div>
      <div className={styles.categories}>
        <span>Repositories</span><span>Identity</span><span>Build machines</span><span>Execution and deployment</span>
      </div>
    </AnimatedSection>
  );
}
