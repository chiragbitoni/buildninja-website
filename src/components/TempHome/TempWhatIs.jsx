"use client";
import styles from "./TempWhatIs.module.css";

const cards = [
  { label: "Platform cost", value: "$0 — no credits, no seats, no tiers", sub: "You pay only for the server you choose to run it on" },
  { label: "Setup time", value: "Under 5 minutes", sub: "Single Docker command. No Kubernetes required." },
  { label: "Build limits", value: "Unlimited builds, unlimited parallelism", sub: "Run 10 or 10,000 builds a day — no throttling" },
  { label: "Data location", value: "Your servers, your data", sub: "No third-party cloud processes your builds or source code" },
  { label: "VCS integrations", value: "GitHub, GitLab, Bitbucket + any Git host", sub: "Native OAuth 2.0, OIDC, and SSH tunnel support" },
  { label: "Operating systems", value: "Linux, Windows, macOS, Docker, Kubernetes", sub: "Build agents run on any platform your team uses" },
];

export default function TempWhatIs() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div>
            <span className={styles.eyebrow}>What is BuildNinja?</span>
            <h2 className={styles.title}>
              Self-hosted CI/CD built for teams who own their infrastructure
            </h2>
            <p className={styles.prose} style={{ marginTop: 20 }}>
              BuildNinja is a continuous integration and continuous deployment (CI/CD) platform that engineering teams install on their own servers. Unlike cloud-based CI/CD tools such as CircleCI or GitHub Actions — which charge per build credit, per seat, or per compute minute — BuildNinja has no usage fees. You run it on infrastructure you already control, and it costs nothing beyond the server itself.
            </p>
            <p className={styles.prose}>
              The platform is built by GrapeCity, a software company with over 25 years of experience in developer tooling. BuildNinja was designed to solve a specific problem: most self-hosted CI/CD tools either require deep DevOps expertise to configure (Jenkins), or lock you into expensive enterprise contracts (CircleCI Server). BuildNinja deploys with a single Docker command, runs on any Linux, Windows, or macOS server, and works in isolated environments with no internet requirement.
            </p>
            <p className={styles.prose}>
              For teams in regulated industries — healthcare, finance, defence, government — BuildNinja&apos;s self-hosted architecture means source code and build artefacts never leave your infrastructure. There is no third-party cloud processing your builds. This makes BuildNinja one of the few CI/CD solutions that satisfies data sovereignty, air-gap, and on-premise compliance requirements without a six-figure enterprise contract.
            </p>
            <p className={styles.prose} style={{ marginBottom: 0 }}>
              BuildNinja integrates natively with GitHub, GitLab, and Bitbucket for version control, supports Docker and Kubernetes for deployment, and includes role-based access control, AES-256 secret encryption, and SSO via OAuth 2.0 and OIDC out of the box. An upcoming suite of AI features — including build failure prediction and intelligent configuration analysis — is in active development as part of the BuildNinja Intelligence roadmap.
            </p>
          </div>

          <div className={styles.aside}>
            {cards.map((card, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.cardLabel}>{card.label}</div>
                <div className={styles.cardValue}>{card.value}</div>
                <div className={styles.cardSub}>{card.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
