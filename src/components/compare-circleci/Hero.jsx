import React from 'react';
import Link from 'next/link';
import s from './Hero.module.css';

export default function Hero() {
  return (
    <header className={s.hero} role="banner">
      <div className={s.heroInner}>
        <div className="badge-alt" style={{ marginBottom: '20px' }}>
          Honest Comparison · Updated May 2026
        </div>
        
        <h1 className={`${s.heroTitle} ${s.fadeUp}`}>
          BuildNinja vs <em>CircleCI</em><br />
          Which CI/CD Tool Wins in 2026?
        </h1>
        
        <p className={`${s.heroSub} ${s.fadeUp}`}>
          Unlimited builds vs 6,000 credits. No seat pricing vs per-minute billing. True self-hosted vs SaaS-only. We compared every feature — honestly.
        </p>

        <div className={`${s.heroBadges} ${s.fadeUp}`}>
          <span className={s.heroBadge}>
            <span className={`${s.dot} ${s.dotGreen}`}></span>
            BuildNinja: Unlimited builds included
          </span>
          <span className={s.heroBadge}>
            <span className={`${s.dot} ${s.dotOrange}`}></span>
            CircleCI: ~300 min/mo free, then pay-per-credit
          </span>
        </div>

        <div className={`${s.heroCtas} ${s.fadeUp}`}>
          <Link href="/install" className={s.btnPrimary}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            Start BuildNinja Free
          </Link>
          <a href="#comparison-table" className={s.btnSecondary}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2" />
            </svg>
            Jump to Comparison Table
          </a>
        </div>
      </div>
    </header>
  );
}
