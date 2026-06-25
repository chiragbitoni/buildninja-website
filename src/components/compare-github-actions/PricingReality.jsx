import React from 'react';
import { Lightbulb } from 'lucide-react';
import s from './PricingReality.module.css';

export default function PricingReality() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <span className="badge-alt" style={{ marginBottom: '10px' }}>Pricing Reality</span>
        <h2 className="section-title" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', marginBottom: '14px' }}>
          What GitHub's Pricing Change Actually Costs You
        </h2>
        <p className="section-subtitle" style={{ margin: '0 auto' }}>
          GitHub hosted runner and per-seat fees add up quickly. Here's what a real 20-person team actually pays each month compared to BuildNinja.
        </p>

        <div className={s.prGrid}>
          {/* BuildNinja */}
          <div className={`${s.prCard} ${s.prCardBn}`}>
            <div className={s.prCardLogo}>
              <img src="/resources/logo-buildninja.svg" alt="BuildNinja" className={s.logoBn} />
            </div>
            <div className={s.costRow}>
              <span className={s.costLabel}>Per build fee</span>
              <span className={`${s.costValue} ${s.costValueGood}`}>$0.00</span>
            </div>
            <div className={s.costRow}>
              <span className={s.costLabel}>Self-hosted orchestration fee</span>
              <span className={`${s.costValue} ${s.costValueGood}`}>$0.00</span>
            </div>
            <div className={s.costRow}>
              <span className={s.costLabel}>Per-seat license cost</span>
              <span className={`${s.costValue} ${s.costValueGood}`}>$0.00</span>
            </div>
            <div className={s.costRow}>
              <span className={s.costLabel}>100 builds/day × 8 min avg</span>
              <span className={`${s.costValue} ${s.costValueGood}`}>Unlimited - $0</span>
            </div>
            <div className={s.costRow}>
              <span className={s.costLabel}>Your own server infrastructure</span>
              <span className={s.costValue}>~$10–50/mo</span>
            </div>
            <div className={`${s.prTotal} ${s.prTotalBnBg}`}>
              <div className={`${s.prTotalVal} ${s.prTotalValOrange}`}>~$10–50/mo</div>
              <div className={s.prTotalLbl}>Total · Unlimited builds · 20 users </div>
            </div>
          </div>

          {/* GitHub Actions */}
          <div className={`${s.prCard} ${s.prCardGh}`}>
            <div className={s.prCardLogo}>
              <img src="/resources/github-actions-logo.svg" alt="GitHub Actions" className={s.logoGh} />
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
              <span className={s.costLabel}>GitHub-hosted Linux @ $0.006/min</span>
              <span className={`${s.costValue} ${s.costValueBad}`}>$132/mo</span>
            </div>
            <div className={s.costRow}>
              <span className={s.costLabel}>Self-hosted runner minutes</span>
              <span className={s.costValue}>Free</span>
            </div>
            <div className={s.costRow}>
              <span className={s.costLabel}>GitHub Team plan (20 users)</span>
              <span className={`${s.costValue} ${s.costValueBad}`}>+ $80/mo</span>
            </div>
            <div className={`${s.prTotal} ${s.prTotalGhBg}`}>
              <div className={`${s.prTotalVal} ${s.prTotalValRed}`}>$212/mo</div>
              <div className={s.prTotalLbl}>Total · Grows with every build and every hire</div>
            </div>
          </div>
        </div>

        <div className={`${s.callout} ${s.calloutWarn}`}>
          <span className={s.calloutIco}><Lightbulb aria-label="Idea" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span>
          <p>
            BuildNinja has no per-seat or per-minute fees. Your hardware, your builds, your bill ends at the server.
          </p>
        </div>
      </div>
    </section>
  );
}
