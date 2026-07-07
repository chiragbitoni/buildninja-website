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
      a: "Yes. BuildNinja can be self-hosted without per-user limits, build-minute quotas, or credit-based billing. Unlike traditional CI/CD platforms that charge based on usage, BuildNinja gives you full control over how and where you run your CI/CD infrastructure."
    },
    {
      q: "Does BuildNinja support self-hosted deployment without Kubernetes?",
      a: "Yes. BuildNinja can be deployed with a simple Docker-based setup and does not require Kubernetes. This makes it straightforward to get started and maintain compared to solutions that depend on more complex deployment environments."
    },
    {
      q: "How does BuildNinja pricing compare to CircleCI for growing teams?",
      a: "CircleCI uses a usage-based pricing model that scales with build activity and team growth. BuildNinja uses a self-hosted approach that avoids build-minute quotas and credit-based billing. As teams grow, many organizations prefer BuildNinja because costs are not directly tied to CI/CD usage."
    },
    {
      q: "Can I migrate from CircleCI to BuildNinja without rewriting all my pipelines?",
      a: "Most CircleCI pipelines translate to BuildNinja YAML with minimal changes - both use YAML-based pipeline definitions with similar structural concepts (jobs, steps, environments). The main difference is BuildNinja doesn't use orbs; integrations are configured directly in pipeline YAML or via webhooks. Most teams complete migration of a standard setup in 1–3 hours. Complex multi-workflow setups may take 1–2 days."
    },
    {
      q: "What integrations does BuildNinja support vs CircleCI?",
      a: "BuildNinja supports GitHub, GitLab, Bitbucket, Docker, Kubernetes, AWS, Azure, SSH-based deployments, MSBuild, VSTest, and webhook-based notifications. CircleCI has a larger ecosystem via its orbs marketplace (1,000+ integrations). For the vast majority of teams - running Git-based workflows with standard cloud deployments - BuildNinja covers all required integrations. If you depend on a very specific CircleCI orb, check compatibility before migrating."
    },
    {
      q: "Is BuildNinja open source?",
      a: "BuildNinja uses an open-core model: the core CI/CD engine is available to self-host for free with no license cost. Advanced features (SSO, multi-tenant management, enterprise audit logs, and the upcoming AI Intelligence module) are part of the commercial Growth Edition. CircleCI is a fully proprietary SaaS product with no open-source component."
    }
  ];

  return (
    <section className={s.section}>
      <div className={s.container}>
        <span className="badge-alt" style={{ marginBottom: '10px' }}>Common Questions</span>
        <h2 className="section-title" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)' }}>
          BuildNinja vs CircleCI - Common Questions
        </h2>

        <div className={s.faqCol}>
          {faqs.map((faq, index) => (
            <div key={index} className={`${s.faqItem} ${openIndex === index ? s.open : ''}`}>
              <button
                className={s.faqQ}
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
              >
                {faq.q}
                <span className={s.faqIcon}>+</span>
              </button>
              <div className={s.faqA}>{faq.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
