'use client';
import React, { useState } from 'react';
import { DollarSign } from 'lucide-react';
import s from './CostCalculator.module.css';


export default function CostCalculator() {
  const [activeTab, setActiveTab] = useState('t5');

  return (
    <section className={s.section} id="cost-calculator">
      <div className={s.container}>
        <span className="badge-alt" style={{ marginBottom: '10px' }}>Real Cost Math</span>
        <h2 className="section-title" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', marginBottom: '14px' }}>
          Actual Monthly Bills - 3 Team Sizes
        </h2>
        <p className="section-subtitle" style={{ margin: '0', textAlign: 'left', width: '100%' }}>
          Based on 100 builds/day, 8 minutes average, 5-day working week. GitHub Actions pricing shown for comparison.
        </p>

        <div className={s.calcTabs}>
          <button className={`${s.ctab} ${activeTab === 't5' ? s.active : ''}`} onClick={() => setActiveTab('t5')}>5-person team</button>
          <button className={`${s.ctab} ${activeTab === 't20' ? s.active : ''}`} onClick={() => setActiveTab('t20')}>20-person team</button>
          <button className={`${s.ctab} ${activeTab === 't50' ? s.active : ''}`} onClick={() => setActiveTab('t50')}>50-person team</button>
        </div>

        {/* 5 person */}
        <div className={`${s.calcPane} ${activeTab === 't5' ? s.active : ''}`}>
          <div className={s.costGrid}>
            <div className={`${s.costCard} ${s.featured}`}>
              <div className={s.costHead}>
                <span className={s.costTool}><img src="/resources/logo-buildninja.svg" alt="BuildNinja" className={s.calcLogoBn} /></span>
                <span className={s.costBadgeRec}>RECOMMENDED</span>
              </div>
              <div className={s.costLine}><span className={s.clLabel}>Build compute fee</span><span className={`${s.clVal} ${s.g}`}>$0.00</span></div>
              <div className={s.costLine}><span className={s.clLabel}>Orchestration fee</span><span className={`${s.clVal} ${s.g}`}>$0.00</span></div>
              <div className={s.costLine}><span className={s.clLabel}>Per-seat cost (5 users)</span><span className={`${s.clVal} ${s.g}`}>$0.00</span></div>
              <div className={s.costLine}><span className={s.clLabel}>Your own server infrastructure</span><span className={s.clVal}>$6–50/mo</span></div>
              <div className={`${s.costBox} ${s.bnBox}`}>
                <div className={`${s.costBoxNum} ${s.or}`}>$6–50/mo</div>
                <div className={s.costBoxSub}>Total · Unlimited builds · 5 users · Never changes</div>
              </div>
            </div>
            <div className={s.costCard}>
              <div className={s.costHead}><span className={s.costTool}><img src="/resources/github-actions-logo.svg" alt="GitHub Actions" className={s.calcLogoGh} /></span></div>
              <div className={s.costLine}><span className={s.clLabel}>Free minutes (2,000/mo)</span><span className={s.clVal}>Included</span></div>
              <div className={s.costLine}>
                <span className={s.clLabel}>Build usage: ~8,000 min/mo<br /><small>40 builds/day × 8 min × 25 days</small></span>
                <span className={`${s.clVal} ${s.r}`}>6,000 billable min</span>
              </div>
              <div className={s.costLine}><span className={s.clLabel}>Linux @ $0.006/min</span><span className={`${s.clVal} ${s.r}`}>$36/mo</span></div>
              <div className={s.costLine}><span className={s.clLabel}>GitHub Team plan (5 users)</span><span className={`${s.clVal} ${s.r}`}>$20/mo</span></div>
              <div className={`${s.costBox} ${s.ghBox}`}>
                <div className={`${s.costBoxNum} ${s.rd}`}>$56/mo</div>
                <div className={s.costBoxSub}>Total · Grows with every build</div>
              </div>
            </div>
          </div>
          <div className={s.calloutGood}>
            <span className={s.calloutIco}><DollarSign aria-label="Pricing" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span>
            <p><strong>Savings with BuildNinja: up to $50/month ($600/year)</strong> for a 5-person team at this build volume. That's a flight to an engineering conference, or 6 months of additional tooling budget.</p>
          </div>
        </div>

        {/* 20 person */}
        <div className={`${s.calcPane} ${activeTab === 't20' ? s.active : ''}`}>
          <div className={s.costGrid}>
            <div className={`${s.costCard} ${s.featured}`}>
              <div className={s.costHead}>
                <span className={s.costTool}><img src="/resources/logo-buildninja.svg" alt="BuildNinja" className={s.calcLogoBn} /></span>
                <span className={s.costBadgeRec}>RECOMMENDED</span>
              </div>
              <div className={s.costLine}><span className={s.clLabel}>Build compute fee</span><span className={`${s.clVal} ${s.g}`}>$0.00</span></div>
              <div className={s.costLine}><span className={s.clLabel}>Self-hosted orchestration fee</span><span className={`${s.clVal} ${s.g}`}>$0.00</span></div>
              <div className={s.costLine}><span className={s.clLabel}>Per-seat cost (20 users)</span><span className={`${s.clVal} ${s.g}`}>$0.00</span></div>
              <div className={s.costLine}><span className={s.clLabel}>Your own server infrastructure</span><span className={s.clVal}>$10–50/mo</span></div>
              <div className={`${s.costBox} ${s.bnBox}`}>
                <div className={`${s.costBoxNum} ${s.or}`}>$10–50/mo</div>
                <div className={s.costBoxSub}>Total · Unlimited builds · 20 users </div>
              </div>
            </div>
            <div className={s.costCard}>
              <div className={s.costHead}><span className={s.costTool}><img src="/resources/github-actions-logo.svg" alt="GitHub Actions" className={s.calcLogoGh} /></span></div>
              <div className={s.costLine}><span className={s.clLabel}>Free minutes (2,000/mo)</span><span className={s.clVal}>Included</span></div>
              <div className={s.costLine}>
                <span className={s.clLabel}>Build usage: ~24,000 min/mo<br /><small>100 builds/day × 8 min × 25 days</small></span>
                <span className={`${s.clVal} ${s.r}`}>22,000 billable min</span>
              </div>
              <div className={s.costLine}><span className={s.clLabel}>Linux hosted @ $0.006/min</span><span className={`${s.clVal} ${s.r}`}>$132/mo</span></div>
              <div className={s.costLine}><span className={s.clLabel}>GitHub Team plan (20 users)</span><span className={`${s.clVal} ${s.r}`}>$80/mo</span></div>
              <div className={`${s.costBox} ${s.ghBox}`}>
                <div className={`${s.costBoxNum} ${s.rd}`}>$212/mo</div>
                <div className={s.costBoxSub}>Total · Grows every month builds increase</div>
              </div>
            </div>
          </div>
          <div className={s.calloutGood}>
            <span className={s.calloutIco}><DollarSign aria-label="Pricing" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span>
            <p><strong>Savings with BuildNinja: up to $202/month ($2,424/year)</strong> for a 20-person team. No per-seat or per-minute fees - just your own infrastructure.</p>
          </div>
        </div>

        {/* 50 person */}
        <div className={`${s.calcPane} ${activeTab === 't50' ? s.active : ''}`}>
          <div className={s.costGrid}>
            <div className={`${s.costCard} ${s.featured}`}>
              <div className={s.costHead}>
                <span className={s.costTool}><img src="/resources/logo-buildninja.svg" alt="BuildNinja" className={s.calcLogoBn} /></span>
                <span className={s.costBadgeRec}>RECOMMENDED</span>
              </div>
              <div className={s.costLine}><span className={s.clLabel}>Build compute fee</span><span className={`${s.clVal} ${s.g}`}>$0.00</span></div>
              <div className={s.costLine}><span className={s.clLabel}>Self-hosted orchestration fee</span><span className={`${s.clVal} ${s.g}`}>$0.00</span></div>
              <div className={s.costLine}><span className={s.clLabel}>Per-seat cost (50 users)</span><span className={`${s.clVal} ${s.g}`}>$0.00</span></div>
              <div className={s.costLine}><span className={s.clLabel}>Your own server infrastructure</span><span className={s.clVal}>$20–100/mo</span></div>
              <div className={`${s.costBox} ${s.bnBox}`}>
                <div className={`${s.costBoxNum} ${s.or}`}>$20–100/mo</div>
                <div className={s.costBoxSub}>Total · Unlimited builds · 50 users · Predictable</div>
              </div>
            </div>
            <div className={s.costCard}>
              <div className={s.costHead}><span className={s.costTool}><img src="/resources/github-actions-logo.svg" alt="GitHub Actions" className={s.calcLogoGh} /></span></div>
              <div className={s.costLine}>
                <span className={s.clLabel}>Build usage: ~60,000 min/mo</span>
                <span className={`${s.clVal} ${s.r}`}>58,000 billable min</span>
              </div>
              <div className={s.costLine}><span className={s.clLabel}>Linux hosted @ $0.006/min</span><span className={`${s.clVal} ${s.r}`}>$348/mo</span></div>
              <div className={s.costLine}><span className={s.clLabel}>GitHub Enterprise (50 users @ $21)</span><span className={`${s.clVal} ${s.r}`}>$1,050/mo</span></div>
              <div className={`${s.costBox} ${s.ghBox}`}>
                <div className={`${s.costBoxNum} ${s.rd}`}>$1,398/mo</div>
                <div className={s.costBoxSub}>Total at 50 users with enterprise needs</div>
              </div>
            </div>
          </div>
          <div className={s.calloutGood}>
            <span className={s.calloutIco}><DollarSign aria-label="Pricing" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span>
            <p><strong>Savings with BuildNinja: up to $1,378/month ($16,536/year)</strong> for a 50-person engineering team. At this scale, BuildNinja pays for a junior engineer's salary in CI/CD savings alone.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
