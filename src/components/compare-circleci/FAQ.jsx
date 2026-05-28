"use client";

import React, { useState } from 'react';
import s from './FAQ.module.css';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "Is BuildNinja a free CircleCI alternative?",
      a: "Yes. BuildNinja is free to self-host with unlimited builds and no seat-based limits. You pay only for the server infrastructure you run it on — no per-minute billing, no credit system, no surprise invoices at the end of the month. A $30/month cloud instance handles a team of 10–20 developers running 50+ builds daily."
    },
    {
      q: "Does BuildNinja support self-hosted deployment without Kubernetes?",
      a: "Yes — and this is a core advantage over CircleCI. BuildNinja runs on any Linux server via a single Docker command: docker run buildninja/server. No Kubernetes, no Helm charts, no cloud provider account required. CircleCI's self-hosted \"Server\" edition requires a full Kubernetes cluster and is only available on enterprise contracts."
    },
    {
      q: "How does BuildNinja pricing compare to CircleCI for growing teams?",
      a: "CircleCI uses a compute-credit model that scales with both build volume and team size. A 20-person team running 100 builds/day might pay $300–450/month. With BuildNinja, you pay your server infrastructure cost (typically $30–120/month) regardless of how many builds or users you have. The larger your team grows, the greater the savings — with a 200-person team, BuildNinja could save $3,000–6,000/month versus CircleCI."
    },
    {
      q: "Can I migrate from CircleCI to BuildNinja without rewriting all my pipelines?",
      a: "Most CircleCI pipelines translate to BuildNinja YAML with minimal changes — both use YAML-based pipeline definitions with similar structural concepts (jobs, steps, environments). The main difference is BuildNinja doesn't use orbs; integrations are configured directly in pipeline YAML or via webhooks. Most teams complete migration of a standard setup in 1–3 hours. Complex multi-workflow setups may take 1–2 days."
    },
    {
      q: "Does BuildNinja work for HIPAA or GDPR-compliant pipelines?",
      a: "Yes — and this is precisely why regulated industries choose BuildNinja over CircleCI. With BuildNinja self-hosted, your source code, build artifacts, and logs never leave your infrastructure. You control the encryption, access policies, and audit trail. CircleCI can provide compliance documentation (SOC2 Type II) but your data still transits and is processed on CircleCI's servers — which many regulated industries cannot allow."
    },
    {
      q: "What integrations does BuildNinja support vs CircleCI?",
      a: "BuildNinja supports GitHub, GitLab, Bitbucket, Docker, Kubernetes, AWS, Azure, SSH-based deployments, MSBuild, VSTest, and webhook-based notifications. CircleCI has a larger ecosystem via its orbs marketplace (1,000+ integrations). For the vast majority of teams — running Git-based workflows with standard cloud deployments — BuildNinja covers all required integrations. If you depend on a very specific CircleCI orb, check compatibility before migrating."
    },
    {
      q: "Is BuildNinja open source?",
      a: "BuildNinja uses an open-core model: the core CI/CD engine is available to self-host for free with no license cost. Advanced features (SSO, multi-tenant management, enterprise audit logs, and the upcoming AI Intelligence module) are part of the commercial Growth Edition. CircleCI is a fully proprietary SaaS product with no open-source component."
    }
  ];

  return (
    <section className={s.section}>
      <div className={s.container}>
        <span className="badge-alt" style={{ marginBottom: '10px' }}>Frequently Asked Questions</span>
        <h2 className="section-title" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', marginBottom: '14px' }}>
          BuildNinja vs CircleCI — Common Questions
        </h2>

        <div className={s.faqList}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className={`${s.faqItem} ${isOpen ? s.open : ''}`}>
                <button className={s.faqQ} onClick={() => toggleFaq(index)} aria-expanded={isOpen}>
                  {faq.q}
                  <span className={s.faqArr}>+</span>
                </button>
                <div className={s.faqA}>
                  {faq.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
