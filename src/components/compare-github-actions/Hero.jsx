import React from 'react';
import Link from 'next/link';
import s from './Hero.module.css';
import { Zap, AlertTriangle } from 'lucide-react';


export default function Hero() {
  return (
    <header className={s.hero} role="banner">
      <div className={s.heroInner}>
        <div className={s.heroBadge}><Zap aria-label="Lightning bolt" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /> Updated May 2026 · New GitHub Pricing in Effect</div>

        <h1 className={s.heroH1}>
          <span className={s.dim}>BuildNinja</span> vs<br />
          <span className={s.accent}>GitHub Actions</span><br />
          The Honest 2026 Comparison
        </h1>

        <p className={s.heroSub}>
          GitHub Actions is deeply embedded in GitHub's ecosystem — but <strong>March 2026 changed the math</strong>. Self-hosted runners now cost $0.002/min even on your own hardware. This page compares every feature, every cost, and every trade-off honestly.
        </p>

        <div className={s.alertBar}>
          <span className={s.alertIcon}><AlertTriangle aria-label="Warning" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} />️</span>
          <p className={s.alertText}>
            <strong>GitHub Actions Pricing Change (March 2026):</strong> GitHub now charges $0.002/min for self-hosted runner usage in private repos — on top of your own infrastructure costs. A team running 500 build-hours/month pays an extra <strong>$60/month</strong> to GitHub just for orchestration, even when builds run on their own servers. BuildNinja has no equivalent charge.
          </p>
        </div>

        <div className={s.heroCtas}>
          <Link href="/install" className={s.btnPrimary}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
            Deploy BuildNinja Free
          </Link>
          <a href="#comparison-table" className={s.btnOutline}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="3" /></svg>
            Jump to Comparison Table
          </a>
        </div>

        <div className={s.heroStats}>
          <div className={s.hsItem}>
            <div className={`${s.hsVal} ${s.hsValOrange}`}>Unlimited</div>
            <div className={s.hsLbl}>BuildNinja builds/mo — no caps</div>
          </div>
          <div className={s.hsItem}>
            <div className={`${s.hsVal} ${s.hsValRed}`}>2,000 min</div>
            <div className={s.hsLbl}>GitHub Actions free (private repos)</div>
          </div>
          <div className={s.hsItem}>
            <div className={`${s.hsVal} ${s.hsValGreen}`}>$0/build</div>
            <div className={s.hsLbl}>BuildNinja per-build cost</div>
          </div>
          <div className={s.hsItem}>
            <div className={`${s.hsVal} ${s.hsValDark}`}>$0.008–.016<span style={{ fontSize: '14px' }}>/min</span></div>
            <div className={s.hsLbl}>GitHub Actions Linux runners</div>
          </div>
        </div>
      </div>
    </header>
  );
}
