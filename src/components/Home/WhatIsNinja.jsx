"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Copy, Check } from "lucide-react";
import { faDocker } from "@fortawesome/free-brands-svg-icons";
import {
  faDollarSign,
  faClock,
  faInfinity,
  faServer,
  faCodeBranch,
  faMicrochip,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./WhatIsNinja.module.css";
import posthog from "posthog-js";

const cards = [
  { label: "Platform cost", value: "$0 - no credits, no seats, no tiers", sub: "You pay only for the server you choose to run it on", icon: faDollarSign },
  { label: "Setup time", value: "Under 5 minutes", sub: "Single Docker command. No Kubernetes required.", icon: faClock },
  { label: "Build limits", value: "Unlimited builds, unlimited parallelism", sub: "Run 10 or 10,000 builds a day - no throttling", icon: faInfinity },
  { label: "Data location", value: "Your servers, your data", sub: "No third-party cloud processes your builds or source code", icon: faServer },
  { label: "VCS integrations", value: "GitHub, GitLab, Bitbucket + any Git host", sub: "Native OAuth 2.0, OIDC, and SSH tunnel support", icon: faCodeBranch },
  { label: "Operating systems", value: "Linux, Windows, macOS, Docker, Kubernetes", sub: "Build agents run on any platform your team uses", icon: faMicrochip },
];

const DOCKER_CMD = "docker pull grapehub/buildninja-server";

const ease = [0.25, 0.1, 0.25, 1];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

export default function WhatIsNinja() {
  const [dockerCopied, setDockerCopied] = useState(false);

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

          <div className={styles.asideCol}>
            {cards.map((card, i) => (
              <motion.div
                key={i}
                className={styles.asideCard}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
              >
                <div className={styles.asideCardIcon}>
                  <FontAwesomeIcon icon={card.icon} />
                </div>
                <div className={styles.asideCardBody}>
                  <span className={styles.asideCardLabel}>{card.label}</span>
                  <span className={styles.asideCardVal}>{card.value}</span>
                  <p className={styles.asideCardSub}>{card.sub}</p>
                </div>
                <div className={styles.cardGlow} />
              </motion.div>
            ))}
          </div>
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
