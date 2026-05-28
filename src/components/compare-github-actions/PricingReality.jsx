import React from 'react';
import { Lightbulb } from 'lucide-react';
import s from './PricingReality.module.css';

export default function PricingReality() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <span className="badge-alt" style={{ marginBottom: '10px' }}>2026 Pricing Reality</span>
        <h2 className="section-title" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', marginBottom: '14px' }}>
          What GitHub's March 2026 Pricing Change Actually Costs You
        </h2>
        <p className="section-subtitle">
          GitHub reduced hosted runner prices by up to 39% — but added a $0.002/min charge for self-hosted runners. Here's what a real 20-person team actually pays each month.
        </p>

        <div className={s.prGrid}>
          {/* BuildNinja */}
          <div className={`${s.prCard} ${s.prCardBn}`}>
            <div className={s.prCardLogo}>
              <span className={`${s.dot} ${s.dotBn}`}></span> BuildNinja
            </div>
            <div className={s.costRow}>
              <span className={s.costLabel}>Per build fee</span>
              <span className={`${s.costValue} ${s.costValueGood}`}>$0.00</span>
            </div>
            <div className={s.costRow}>
              <span className={s.costLabel}>Self-hosted orchestration fee</span>
              <span className={`${s.costValue} ${s.costValueGood}`}>$0.00 — never</span>
            </div>
            <div className={s.costRow}>
              <span className={s.costLabel}>Per-seat license cost</span>
              <span className={`${s.costValue} ${s.costValueGood}`}>$0.00</span>
            </div>
            <div className={s.costRow}>
              <span className={s.costLabel}>100 builds/day × 8 min avg</span>
              <span className={`${s.costValue} ${s.costValueGood}`}>Unlimited — $0</span>
            </div>
            <div className={s.costRow}>
              <span className={s.costLabel}>Server infra (Hetzner CX21)</span>
              <span className={s.costValue}>~$12/mo</span>
            </div>
            <div className={s.costRow}>
              <span className={s.costLabel}>Storage (100GB SSD)</span>
              <span className={s.costValue}>~$5/mo</span>
            </div>
            <div className={`${s.prTotal} ${s.prTotalBnBg}`}>
              <div className={`${s.prTotalVal} ${s.prTotalValOrange}`}>~$17/mo</div>
              <div className={s.prTotalLbl}>Total · Unlimited builds · 20 users · Flat forever</div>
            </div>
          </div>

          {/* GitHub Actions */}
          <div className={`${s.prCard} ${s.prCardGh}`}>
            <div className={s.prCardLogo}>
              <span className={`${s.dot} ${s.dotGh}`}></span> GitHub Actions
            </div>
            <div className={s.costRow}>
              <span className={s.costLabel}>Free Linux minutes/mo (private)</span>
              <span className={`${s.costValue} ${s.costValueWarn}`}>2,000 min</span>
            </div>
            <div className={s.costRow}>
              <span className={s.costLabel}>100 builds/day × 8 min = 24,000 min/mo</span>
              <span className={s.costValue}>Billable: 22,000 min</span>
            </div>
            <div className={s.costRow}>
              <span className={s.costLabel}>GitHub-hosted Linux @ $0.008/min</span>
              <span className={`${s.costValue} ${s.costValueBad}`}>$176/mo</span>
            </div>
            <div className={s.costRow}>
              <span className={s.costLabel}>Self-hosted runner orchestration fee @ $0.002/min</span>
              <span className={`${s.costValue} ${s.costValueBad}`}>+ $44/mo</span>
            </div>
            <div className={s.costRow}>
              <span className={s.costLabel}>Self-hosted infra (own server)</span>
              <span className={`${s.costValue} ${s.costValueBad}`}>+ $12–40/mo</span>
            </div>
            <div className={s.costRow}>
              <span className={s.costLabel}>GitHub Team plan (20 users)</span>
              <span className={`${s.costValue} ${s.costValueBad}`}>+ $84/mo</span>
            </div>
            <div className={`${s.prTotal} ${s.prTotalGhBg}`}>
              <div className={`${s.prTotalVal} ${s.prTotalValRed}`}>$316–440/mo</div>
              <div className={s.prTotalLbl}>Total · Grows with every build and every hire</div>
            </div>
          </div>
        </div>

        <div className={`${s.callout} ${s.calloutWarn}`}>
          <span className={s.calloutIco}><Lightbulb aria-label="Idea" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span>
          <p>
            <strong>The self-hosted trap:</strong> Many teams chose GitHub Actions self-hosted runners specifically to avoid per-minute costs. As of March 2026, those runners now incur a $0.002/min platform fee — on top of your own server costs. BuildNinja has no orchestration fee. Your hardware, your builds, your bill ends at the server.
          </p>
        </div>
      </div>
    </section>
  );
}
