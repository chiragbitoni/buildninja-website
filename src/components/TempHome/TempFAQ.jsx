"use client";
import { useState } from "react";
import styles from "./TempFAQ.module.css";

const faqs = [
  { q: "Is BuildNinja really free?", a: "Yes. BuildNinja is free with no usage fees, no per-build credits, and no per-seat charges. You self-host it on your own server or cloud infrastructure — a VPS, bare-metal server, or cloud VM you already manage. The platform itself has no cost. The only expense is the server you choose to run it on, which you control completely." },
  { q: "How is BuildNinja different from CircleCI?", a: "CircleCI is a SaaS platform that charges per build credit and per seat. As your team grows and builds more frequently, your CircleCI bill grows proportionally. BuildNinja is self-hosted and has no platform fees — you run it on infrastructure you control. CircleCI's self-hosted \"server\" option requires Kubernetes and an enterprise contract; BuildNinja deploys with a single Docker command and requires no Kubernetes expertise." },
  { q: "How is BuildNinja different from Jenkins?", a: "Jenkins is a powerful but operationally complex open-source CI/CD tool. It requires significant DevOps expertise to install, configure, and maintain — including managing a plugin ecosystem, resolving conflicts, and writing Groovy pipeline scripts. BuildNinja offers the same self-hosted control and infrastructure independence as Jenkins but deploys in under 5 minutes with a single Docker command, includes a modern web UI without plugins, and requires no Groovy knowledge." },
  { q: "Can I run BuildNinja in an air-gapped or offline environment?", a: "Yes. BuildNinja is designed to operate fully offline once deployed. There is no phone-home requirement, no cloud dependency, and no external service calls required for normal operation. This makes BuildNinja suitable for air-gapped networks in classified, industrial, or highly secure financial environments where no internet connectivity is available or permitted." },
  { q: "Does BuildNinja work with GitHub, GitLab, and Bitbucket?", a: "Yes. BuildNinja has native integrations with GitHub, GitLab, Bitbucket, and any self-hosted Git server. It supports OAuth 2.0 and OIDC for single sign-on authentication, and connects to version control systems via SSH tunnels with zero-trust architecture. Webhook-driven build triggers fire within seconds of a code push to any connected repository." },
  { q: "Is BuildNinja suitable for HIPAA or financial compliance requirements?", a: "BuildNinja's self-hosted architecture means your build data and source code never touch a third-party cloud. This makes it well-suited for teams in regulated industries — healthcare, finance, defence, government — where data sovereignty and on-premise processing requirements are mandated. Combined with AES-256 encryption for secrets, role-based access control, and SSO support, BuildNinja provides the security infrastructure that compliance-sensitive teams require." },
  { q: "What are the minimum server requirements to run BuildNinja?", a: "BuildNinja runs on any modern Linux, Windows, or macOS server with Docker installed. For small teams running up to 50 builds per day, a 2 vCPU / 4 GB RAM server is sufficient. For teams running 200+ builds per day with parallel execution, an 8 vCPU / 16 GB RAM server is recommended. BuildNinja's agent architecture lets you distribute build load across multiple machines as your team grows." },
];

export default function TempFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.eyebrow}>Frequently asked questions</span>
        <h2 className={styles.title}>Common questions about BuildNinja</h2>

        <div className={styles.list}>
          {faqs.map((faq, i) => (
            <div key={i} className={`${styles.item} ${i === 0 ? styles.itemFirst : ""}`}>
              <button
                className={styles.trigger}
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <span>{faq.q}</span>
                <span className={`${styles.triggerIcon} ${openIndex === i ? styles.triggerIconOpen : ""}`}>
                  +
                </span>
              </button>
              {openIndex === i && (
                <div className={styles.answer}>
                  <p className={styles.answerText}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
