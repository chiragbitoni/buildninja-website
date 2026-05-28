'use client';
import React, { useState } from 'react';
import s from './FAQ.module.css';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: 'Is BuildNinja a free GitHub Actions alternative?',
      a: 'Yes. BuildNinja is self-hosted and free with unlimited builds. GitHub Actions gives 2,000 free minutes/month for private repos, then charges $0.008–$0.016/min depending on OS. For active teams exceeding that threshold, BuildNinja eliminates per-minute billing entirely — you pay only for your server infrastructure (typically $6–50/month depending on team size).'
    },
    {
      q: 'Why is GitHub Actions charging for self-hosted runners from March 2026?',
      a: 'GitHub introduced a $0.002/min "Actions cloud platform" charge for self-hosted runner usage in private repositories. This fee covers GitHub\'s orchestration layer — job scheduling, routing, and secrets management — even when compute runs on your own hardware. Public repositories remain free, as do GitHub Enterprise Server customers. BuildNinja has no equivalent charge; orchestration is built into the product at no per-minute cost.'
    },
    {
      q: 'Can I still use GitHub as my repository with BuildNinja?',
      a: 'Yes — and this is a key point. BuildNinja only replaces the CI/CD execution layer. Your code stays on GitHub. Pull requests, Issues, code review, GitHub Pages, and everything else remain unchanged. BuildNinja connects via OAuth and posts build status checks back to GitHub PRs, so the developer experience looks the same — builds just run faster, cheaper, and on your own infrastructure.'
    },
    {
      q: 'How long does migrating from GitHub Actions to BuildNinja take?',
      a: 'Most teams complete migration in 1–2 hours. The conceptual model is similar: both use YAML pipeline definitions with stages/jobs, environment variables, caching, and artifacts. The main difference is BuildNinja uses standard Docker images instead of marketplace actions, so steps like `actions/checkout` and `actions/setup-node` are replaced with native Docker image + run commands. BuildNinja\'s migration guide provides translation patterns for the most common GitHub Actions workflows.'
    },
    {
      q: 'Does BuildNinja support macOS builds like GitHub Actions?',
      a: 'BuildNinja currently runs on Linux via Docker containers. macOS builds — which GitHub Actions supports via its macOS runner fleet — are not currently supported in BuildNinja\'s self-hosted model, as macOS virtualisation requires Apple hardware. If macOS builds are critical to your pipeline (iOS apps, for example), GitHub Actions remains the simpler path for that specific workflow. For teams where macOS builds are a small fraction of their pipeline, BuildNinja can handle Linux/Docker builds while GitHub Actions handles macOS-specific jobs.'
    },
    {
      q: 'Is BuildNinja open source?',
      a: 'BuildNinja uses an open-core model. The core CI/CD engine is free to self-host with no license fees. Advanced features — SSO, multi-tenant management, enterprise audit logs, and the upcoming AI Intelligence module — are part of the commercial Growth Edition. GitHub Actions is proprietary, closed-source, and exclusively available as part of GitHub\'s platform.'
    },
    {
      q: 'How does BuildNinja handle GitHub pull request status checks?',
      a: 'BuildNinja posts build status back to GitHub pull requests automatically when connected via OAuth. Each pipeline run posts a "BuildNinja CI" check status to the PR — passing or failing — which can be configured as a required check in your branch protection rules. Developers see build results directly in the GitHub PR interface, as they would with GitHub Actions.'
    }
  ];

  return (
    <section className={s.section}>
      <div className={s.container}>
        <span className="badge-alt" style={{ marginBottom: '10px' }}>Common Questions</span>
        <h2 className="section-title" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)' }}>
          BuildNinja vs GitHub Actions — FAQ
        </h2>

        <div className={s.faqCol}>
          {faqs.map((faq, idx) => (
            <div key={idx} className={`${s.faqItem} ${openIndex === idx ? s.open : ''}`}>
              <button 
                className={s.faqQ} 
                onClick={() => toggleFaq(idx)} 
                aria-expanded={openIndex === idx}
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
