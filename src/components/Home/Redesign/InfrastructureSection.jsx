"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, GitBranch, KeyRound, Server, ShieldCheck, UsersRound } from "lucide-react";
import { Section } from "@/components/Marketing/Section";
import styles from "./InfrastructureSection.module.css";

const agents = ["Windows agent", "Linux agent", "macOS agent"];

export default function InfrastructureSection() {
  return (
    <Section as="section" id="story-infrastructure" className={styles.section} space="standard" padX>
      <div className={styles.heading}>
        <p className={styles.eyebrow}>Your infrastructure</p>
        <h2>Choose where you build.<br /><span>Keep your team connected.</span></h2>
        <p>Run the BuildNinja server and compatible agents on Windows, Linux, macOS, or Docker, then manage project access in the same CI/CD workflow.</p>
      </div>
      <div className={styles.storyGrid}>
        <motion.article
          className={styles.story}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.network} aria-label="Repository connected through BuildNinja to compatible build agents">
            <div className={styles.node}><GitBranch size={18} /><b>Your repository</b><small>GitHub · GitLab · Bitbucket</small></div>
            <div className={styles.connector}><span /></div>
            <div className={`${styles.node} ${styles.server}`}><Server size={19} /><b>BuildNinja</b><small>Your server · Your workflow</small></div>
            <div className={styles.agentList}>
              {agents.map((agent) => <div key={agent}><span className={styles.agentDot} /><span>{agent}</span><small>Compatible tools</small></div>)}
            </div>
          </div>
          <div className={styles.storyCopy}>
            <span><Server size={14} /> Connect your environment</span>
            <h3>Your stack. Your environment. One workflow.</h3>
            <p>Keep repository choice open and bring your existing DevOps tools into a self-hosted workflow.</p>
            <Link href="/install">Explore installation <ArrowRight size={14} aria-hidden="true" /></Link>
          </div>
        </motion.article>

        <motion.article
          className={styles.story}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <div className={styles.access}>
            <div className={styles.accessHeader}><ShieldCheck size={16} /><span>Project access</span><small>Members</small></div>
            {[
              ["AM", "Alex Morgan", "Project manager", "Admin"],
              ["JL", "Jordan Lee", "Software engineer", "Developer"],
              ["SC", "Sam Chen", "Quality assurance", "Viewer"],
            ].map(([initials, name, role, access]) => (
              <div className={styles.member} key={name}>
                <span className={styles.avatar}>{initials}</span><div><b>{name}</b><small>{role}</small></div><span className={styles.permission}>{access}</span>
              </div>
            ))}
            <div className={styles.accessFoot}><UsersRound size={14} /><span>Access managed with the project</span><KeyRound size={14} /></div>
          </div>
          <div className={styles.storyCopy}>
            <span><UsersRound size={14} /> Bring the team into the workflow</span>
            <h3>Keep project access understandable.</h3>
            <p>Manage project membership and permissions in the same place as your builds. Choose the access each teammate needs.</p>
            <Link href="/features">Explore project access <ArrowRight size={14} aria-hidden="true" /></Link>
          </div>
        </motion.article>
      </div>
    </Section>
  );
}
