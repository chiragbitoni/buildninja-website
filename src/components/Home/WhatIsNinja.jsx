"use client";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faClock,
  faInfinity,
  faServer,
  faCodeBranch,
  faMicrochip,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./WhatIsNinja.module.css";

const cardAccents = [
  "var(--color-primary)",
  "var(--color-info)",
  "var(--color-success)",
  "var(--color-warning)",
  "var(--color-primary-alt)",
  "var(--color-info-alt)",
];

const cards = [
  { label: "Platform cost", value: "$0 - no credits, no seats, no tiers", sub: "You pay only for the server you choose to run it on", icon: faDollarSign },
  { label: "Setup time", value: "Under 5 minutes", sub: "Single Docker command. No Kubernetes required.", icon: faClock },
  { label: "Build limits", value: "Unlimited builds, unlimited parallelism", sub: "Run 10 or 10,000 builds a day - no throttling", icon: faInfinity },
  { label: "Data location", value: "Your servers, your data", sub: "No third-party cloud processes your builds or source code", icon: faServer },
  { label: "VCS integrations", value: "GitHub, GitLab, Bitbucket + any Git host", sub: "Native OAuth 2.0, OIDC, and SSH tunnel support", icon: faCodeBranch },
  { label: "Operating systems", value: "Linux, Windows, macOS, Docker, Kubernetes", sub: "Build agents run on any platform your team uses", icon: faMicrochip },
];

const ease = [0.25, 0.1, 0.25, 1];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

export default function WhatIsNinja() {
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
          className={styles.topRow}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease, delay: 0.1 }}
        >
          <div className={styles.contentCol}>
            <p className={styles.prose}>
              BuildNinja is a continuous integration and continuous deployment (CI/CD) platform that engineering teams install on their own servers. Unlike cloud-based CI/CD tools such as CircleCI or GitHub Actions - which charge per build credit, per seat, or per compute minute - BuildNinja has no usage fees. You run it on infrastructure you already control, and it costs nothing beyond the server itself.
            </p>
            <p className={styles.prose} style={{ marginBottom: 0 }}>
              The platform is built by GrapeCity, a software company with over 25 years of experience in developer tooling. BuildNinja was designed to solve a specific problem: most self-hosted CI/CD tools either require deep DevOps expertise to configure (Jenkins), or lock you into expensive enterprise contracts (CircleCI Server). BuildNinja deploys with a single Docker command, runs on any Linux, Windows, or macOS server, and works in isolated environments with no internet requirement.
            </p>
          </div>

          <div className={styles.videoCol}>
            <div className={styles.browserMockup}>
              <div className={styles.videoAspect}>
                <iframe
                  src="https://www.youtube.com/embed/XLcMnvfpwBw?rel=0&modestbranding=1"
                  title="BuildNinja - Self Hosted CI/CD"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            <div className={styles.videoLabel}>
              <Play size={12} />
              See BuildNinja in action (3 min overview)
            </div>
          </div>
        </motion.div>

        <motion.div
          className={styles.extendedContent}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease, delay: 0.2 }}
        >
          <p className={styles.prose}>
            For teams in regulated industries - healthcare, finance, defence, government - BuildNinja&apos;s self-hosted architecture means source code and build artefacts never leave your infrastructure. There is no third-party cloud processing your builds. This makes BuildNinja one of the few CI/CD solutions that satisfies data sovereignty, air-gap, and on-premise compliance requirements without a six-figure enterprise contract.
          </p>
          <p className={styles.prose} style={{ marginBottom: 0 }}>
            BuildNinja integrates natively with GitHub, GitLab, and Bitbucket for version control, supports Docker and Kubernetes for deployment, and includes role-based access control, AES-256 secret encryption, and SSO via OAuth 2.0 and OIDC out of the box. An upcoming suite of AI features - including build failure prediction and intelligent configuration analysis - is in active development as part of the BuildNinja Intelligence roadmap.
          </p>
        </motion.div>

        <motion.div
          className={styles.bottomGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {cards.map((card, i) => (
            <motion.div key={i} className={styles.stat} variants={itemVariants}>
              <div className={styles.statRow}>
                <div className={styles.statIcon} style={{ "--stat-accent": cardAccents[i] }}>
                  <FontAwesomeIcon icon={card.icon} />
                </div>
                <span className={styles.statValue} style={{ "--stat-accent": cardAccents[i] }}>{card.value}</span>
              </div>
              <p className={styles.statLabel}>{card.sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
