import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import s from './ComparePortal.module.css';

export default function ComparePortal() {
  const comparisons = [
    {
      title: "BuildNinja vs GitHub Actions",
      badge: "SaaS vs Self-Hosted",
      desc: "Compare GitHub's per-minute pricing and runner concurrency limits against BuildNinja's self-hosted, unlimited parallel build engine.",
      href: "/compare/buildninja-vs-github-actions",
      icon: <img src="/resources/githubactions.svg" alt="GitHub Actions" className={s.logoImg} />,
      points: [
        "No runner concurrency limits",
        "Save 70%+ on monthly DevOps bills",
        "Keep code & build caches on your own servers",
        "Zero-config Docker native environment"
      ]
    },
    {
      title: "BuildNinja vs CircleCI",
      badge: "Seat Pricing vs Free",
      desc: "Stop paying for user seats and concurrent build containers. BuildNinja lets your entire engineering team build concurrently without tier gates.",
      href: "/compare/buildninja-vs-circleci",
      icon: <img src="/resources/Circleci.svg" alt="CircleCI" className={s.logoImg} />,
      points: [
        "Unlimited users on all tiers",
        "Full hardware utilization and sovereignty",
        "Simple self-hosted YAML configurations",
        "Fast local setup in under 5 minutes"
      ]
    },
    {
      title: "BuildNinja vs Jenkins",
      badge: "Modern vs Legacy",
      desc: "Escape Jenkins plugin dependency nightmares and Java/Groovy setup complexity. Clean YAML pipelines meet a premium visual builder UI.",
      href: "/compare/buildninja-vs-jenkins",
      icon: <img src="/resources/jenkins.svg" alt="Jenkins" className={s.logoImg} />,
      points: [
        "Zero-downtime unified platform updates",
        "No complex Groovy DSL codebase required",
        "Out-of-the-box SSO, OAuth & runner nodes",
        "A modern UI your developers will love"
      ]
    }
  ];

  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.hero}>
          <span className="badge-alt" style={{ marginBottom: '16px' }}>CI/CD Alternatives</span>
          <h1 className={s.title}>
            How BuildNinja Compares to <span className={s.highlight}>Other Platforms</span>
          </h1>
          <p className={s.subtitle}>
            An honest, feature-by-feature breakdown of setup time, scalability, maintenance overhead, and total cost of ownership.
          </p>
        </div>

        <div className={s.grid} role="list">
          {comparisons.map((c, idx) => (
            <Link key={idx} href={c.href} className={s.card} role="listitem">
              <div className={s.cardGlow} />
              <div className={s.cardContent}>
                <div className={s.cardHeader}>
                  <div className={s.iconWrapper}>
                    {c.icon}
                  </div>
                  <span className={s.badge}>{c.badge}</span>
                </div>
                
                <h2 className={s.cardTitle}>{c.title}</h2>
                <p className={s.cardDesc}>{c.desc}</p>
                
                <ul className={s.featureList}>
                  {c.points.map((pt, pIdx) => (
                    <li key={pIdx} className={s.featureItem}>
                      <CheckCircle2 size={15} className={s.checkIcon} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                
                <span className={s.cardLink}>
                  <span className={s.cardLinkText}>View Full Comparison</span>
                  <ArrowRight size={16} className={s.arrow} />
                </span>
              </div>

              <div className={s.cardOverlay}>
                <div className={s.overlayInner}>
                  <h3 className={s.overlayTitle}>{c.title}</h3>
                  <span className={s.overlayCta}>
                    View Full Comparison
                    <ArrowRight size={20} className={s.overlayArrow} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
