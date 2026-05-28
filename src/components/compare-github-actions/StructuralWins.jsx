import React from 'react';
import { Lock, Infinity, Hammer } from 'lucide-react';
import s from './StructuralWins.module.css';

export default function StructuralWins() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <span className="badge-alt" style={{ marginBottom: '10px' }}>Why Teams Switch</span>
        <h2 className="section-title" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', marginBottom: '14px' }}>
          Three reasons BuildNinja wins where GitHub Actions can't compete
        </h2>
        <p className="section-subtitle">
          These aren't feature preferences. They're structural differences GitHub cannot change without dismantling their revenue model.
        </p>

        <div className={s.winGrid}>
          <div className={s.winCard}>
            <div className={s.winIcon} style={{ background: 'var(--color-primary-subtle)' }}><Infinity aria-label="Unlimited" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></div>
            <h3>No Per-Build Billing — Ever</h3>
            <p>
              GitHub Actions charges per compute minute from the moment you exceed 2,000 free monthly minutes. BuildNinja runs on your infrastructure with zero per-build fees. Run 10 or 10,000 builds this month — your BuildNinja server cost doesn't change. GitHub's per-minute model is their core revenue stream; they structurally cannot offer unlimited builds without eliminating it.
            </p>
          </div>
          <div className={s.winCard}>
            <div className={s.winIcon} style={{ background: 'var(--color-info-subtle)' }}><Lock aria-label="Security" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></div>
            <h3>True Platform Independence</h3>
            <p>
              GitHub Actions is deeply coupled to GitHub's ecosystem — switching your Git host means rebuilding all your workflows. BuildNinja works with GitHub, GitLab, and Bitbucket interchangeably. It runs on your infrastructure, not Microsoft's. For teams with multi-cloud strategies, compliance requirements, or simply wanting to avoid vendor lock-in, this independence is structural, not cosmetic.
            </p>
          </div>
          <div className={s.winCard}>
            <div className={s.winIcon} style={{ background: 'var(--color-success-bg)' }}><Hammer aria-label="Architecture" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></div>
            <h3>No Orchestration Tax on Your Own Hardware</h3>
            <p>
              GitHub's March 2026 pricing change introduced something unprecedented: charging $0.002/min for self-hosted runners — compute you already pay for, on servers you own. This "orchestration fee" for using GitHub's job scheduling layer applies even when no GitHub compute is consumed. BuildNinja's architecture has no equivalent tax. Install it, run it, and pay nothing to anyone per build.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
