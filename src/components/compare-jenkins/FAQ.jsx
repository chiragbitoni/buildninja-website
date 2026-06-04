'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import s from './FAQ.module.css';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (idx) => {
    if (openIdx === idx) {
      setOpenIdx(null);
    } else {
      setOpenIdx(idx);
    }
  };

  const faqs = [
    {
      q: "Is BuildNinja really free for unlimited users?",
      a: "Yes. BuildNinja's core self-hosted edition supports unlimited users, unlimited projects, and unlimited builds at no per-seat cost. A paid Growth Edition exists for teams that want additional support SLAs and enterprise features, but the free tier is genuinely full-featured for most teams."
    },
    {
      q: "Can BuildNinja replace Jenkins for complex enterprise pipelines?",
      a: "For most CI/CD workflows - build, test, static analysis, Docker publish, deploy - yes. If your Jenkins setup relies heavily on niche plugins (mainframe deployment, SAP integration, etc.) or extremely complex Groovy scripting, you should evaluate BuildNinja carefully in a proof-of-concept before committing to migration."
    },
    {
      q: "Does BuildNinja work with GitHub Actions or GitLab CI?",
      a: "BuildNinja is a separate self-hosted CI/CD platform - not a wrapper around GitHub Actions or GitLab CI. It connects to your GitHub, GitLab, or Bitbucket repos but runs builds on your own infrastructure, giving you full control over compute costs and data."
    },
    {
      q: "How does BuildNinja handle secrets and credentials?",
      a: "Since BuildNinja is self-hosted, your secrets never leave your own infrastructure. Credentials are stored encrypted on your servers. There's no third-party cloud that can access your build environment or secrets."
    },
    {
      q: "What does the migration from Jenkins look like in practice?",
      a: "Most teams run BuildNinja in parallel with Jenkins for 1–2 weeks. You replicate your key pipelines, validate outputs match, then cut over webhooks and decommission Jenkins. For standard pipelines, the actual migration work takes 1–3 days. Complex enterprise setups with hundreds of jobs may take 1–2 weeks."
    },
    {
      q: "Is Jenkins being discontinued?",
      a: "No. Jenkins is actively maintained as of 2025 and has a large, healthy open-source community. It's not going away. However, it's also not receiving significant UI/UX modernization or new architectural features - it's in maintenance mode for its core architecture. The cloud-native CI/CD world has largely moved on to newer platforms."
    }
  ];

  return (
    <section id="faq" className={s.section}>
      <div className={s.container}>
        <div className={s.sectionLabel}>FAQ</div>
        <h2 className={s.sectionTitle}>Common Questions</h2>
        <p className={s.sectionDesc}>
          Questions we hear from teams evaluating a Jenkins alternative.
        </p>

        <div className={s.faqList} role="list">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className={`${s.faqItem} ${isOpen ? s.open : ''}`} role="listitem">
                <div 
                  className={s.faqQ} 
                  role="button" 
                  tabIndex="0" 
                  aria-expanded={isOpen}
                  onClick={() => toggle(idx)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggle(idx);
                    }
                  }}
                >
                  {faq.q}
                  <ChevronDown size={16} className={`${s.faqArrow} ${isOpen ? s.rotated : ''}`} />
                </div>
                <div className={s.faqA} aria-hidden={!isOpen}>
                  <p>{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
