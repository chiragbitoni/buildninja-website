"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Copy, Check } from "lucide-react";
import { faDocker } from "@fortawesome/free-brands-svg-icons";
import {
  faDollarSign,
  faShieldHalved,
  faWrench,
  faGlobe,
  faBolt,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./WhatIsNinja.module.css";
import posthog from "posthog-js";

const benefits = [
  { icon: faDollarSign, title: "Fixed cost, no usage fees" },
  { icon: faShieldHalved, title: "Data stays on your servers" },
  { icon: faWrench, title: "No vendor lock-in" },
  { icon: faGlobe, title: "Works air-gapped & offline" },
  { icon: faBolt, title: "Faster on your hardware" },
  { icon: faGear, title: "One Docker command to start" },
];

const DOCKER_CMD = "docker pull grapehub/buildninja-server";

const ease = [0.25, 0.1, 0.25, 1];

export default function WhatIsNinja() {
  const [dockerCopied, setDockerCopied] = useState(false);
  const [proseExpanded, setProseExpanded] = useState(false);

  const handleDockerCopy = async () => {
    posthog.capture("docker_command_copied");
    try {
      await navigator.clipboard.writeText(DOCKER_CMD);
      setDockerCopied(true);
      setTimeout(() => setDockerCopied(false), 2000);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = DOCKER_CMD;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setDockerCopied(true);
      setTimeout(() => setDockerCopied(false), 2000);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.ambientGlow} />
      <div className={styles.gridOverlay} />

      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease }}
        >
          <span className={styles.eyebrow}>What is BuildNinja?</span>
          <h2 className={styles.title}>
            Self-hosted CI/CD built for teams who own their infrastructure
          </h2>
        </motion.div>

        <motion.div
          className={styles.grid}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease, delay: 0.1 }}
        >
          <div className={styles.proseCol}>
            <div className={`${styles.proseClamp} ${proseExpanded ? styles.proseExpanded : ''}`}>
              <p>
                BuildNinja is a continuous integration and continuous deployment (CI/CD) platform that engineering teams install on their own servers. Unlike cloud-based CI/CD tools such as CircleCI or GitHub Actions - which charge per build credit, per seat, or per compute minute - BuildNinja has no usage fees. You run it on infrastructure you already control, and it costs nothing beyond the server itself.
              </p>
              <p>
                The platform is built by GrapeCity, a software company with over 25 years of experience in developer tooling. BuildNinja was designed to solve a specific problem: most self-hosted CI/CD tools either require deep DevOps expertise to configure (Jenkins), or lock you into expensive enterprise contracts (CircleCI Server). BuildNinja deploys with a single Docker command, runs on any Linux, Windows, or macOS server, and works in isolated environments with no internet requirement.
              </p>
              <p>
                For teams in regulated industries - healthcare, finance, defence, government - BuildNinja&apos;s self-hosted architecture means source code and build artefacts never leave your infrastructure. There is no third-party cloud processing your builds. This makes BuildNinja one of the few CI/CD solutions that satisfies data sovereignty, air-gap, and on-premise compliance requirements without a six-figure enterprise contract.
              </p>
              <p style={{ marginBottom: 0 }}>
                BuildNinja integrates natively with GitHub, GitLab, and Bitbucket for version control, supports Docker and Kubernetes for deployment, and includes role-based access control, AES-256 secret encryption, and SSO via OAuth 2.0 and OIDC out of the box. An upcoming suite of AI features - including build failure prediction and intelligent configuration analysis - is in active development as part of the BuildNinja Intelligence roadmap.
              </p>
            </div>
            <button
              className={styles.readMoreBtn}
              onClick={() => setProseExpanded((prev) => !prev)}
            >
              {proseExpanded ? 'Show less' : 'Read more'}
              <svg
                className={`${styles.readMoreChev} ${proseExpanded ? styles.chevUp : ''}`}
                width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>
        </motion.div>

        <motion.div
          className={styles.benefitsGrid}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease, delay: 0.2 }}
        >
          {benefits.map((b, i) => (
            <div key={i} className={styles.benefitCard}>
              <span className={styles.benefitIcon}>
                <FontAwesomeIcon icon={b.icon} />
              </span>
              <span className={styles.benefitTitle}>{b.title}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          className={styles.dockerStrip}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className={styles.dockerLabel}>Quick start</span>
          <span className={styles.dockerIcon}><FontAwesomeIcon icon={faDocker} /></span>
          <code className={styles.dockerCode}>{DOCKER_CMD}</code>
          <button className={styles.dockerCopyBtn} onClick={handleDockerCopy} aria-label="Copy to clipboard">
            {dockerCopied ? <Check size={14} /> : <Copy size={14} />}
            {dockerCopied ? "Copied" : "Copy"}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
