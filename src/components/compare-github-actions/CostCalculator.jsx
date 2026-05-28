'use client';
import React, { useState } from 'react';
import { Circle, Sword, DollarSign } from 'lucide-react';
import s from './CostCalculator.module.css';


export default function CostCalculator() {
  const [activeTab, setActiveTab] = useState('t5');

  return (
    <section className={s.section} id="cost-calculator">
      <div className={s.container}>
        <span className="badge-alt" style={{ marginBottom: '10px' }}>Real Cost Math</span>
        <h2 className="section-title" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', marginBottom: '14px' }}>
          Actual Monthly Bills — 3 Team Sizes
        </h2>
        <p className="section-subtitle">
          Based on 100 builds/day, 8 minutes average, 5-day working week. GitHub Actions pricing as of May 2026.
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
                <span className={s.costTool}><Sword aria-label="BuildNinja" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /> BuildNinja</span>
                <span className={s.costBadgeRec}>RECOMMENDED</span>
              </div>
              <div className={s.costLine}><span className={s.clLabel}>Build compute fee</span><span className={`${s.clVal} ${s.g}`}>$0.00</span></div>
              <div className={s.costLine}><span className={s.clLabel}>Orchestration fee</span><span className={`${s.clVal} ${s.g}`}>$0.00</span></div>
              <div className={s.costLine}><span className={s.clLabel}>Per-seat cost (5 users)</span><span className={`${s.clVal} ${s.g}`}>$0.00</span></div>
              <div className={s.costLine}><span className={s.clLabel}>Server — Hetzner CX11 (2vCPU/2GB)</span><span className={s.clVal}>$6/mo</span></div>
              <div className={s.costLine}><span className={s.clLabel}>Storage (50GB SSD)</span><span className={s.clVal}>$2/mo</span></div>
              <div className={`${s.costBox} ${s.bnBox}`}>
                <div className={`${s.costBoxNum} ${s.or}`}>$8/mo</div>
                <div className={s.costBoxSub}>Total · Unlimited builds · 5 users · Never changes</div>
              </div>
            </div>
            <div className={s.costCard}>
              <div className={s.costHead}><span className={s.costTool}><Circle aria-label="GitHub Actions" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /> GitHub Actions</span></div>
              <div className={s.costLine}><span className={s.clLabel}>Free minutes (2,000/mo)</span><span className={s.clVal}>Included</span></div>
              <div className={s.costLine}>
                <span className={s.clLabel}>Build usage: ~8,000 min/mo<br/><small>40 builds/day × 8 min × 25 days</small></span>
                <span className={`${s.clVal} ${s.r}`}>6,000 billable min</span>
              </div>
              <div className={s.costLine}><span className={s.clLabel}>Linux @ $0.008/min</span><span className={`${s.clVal} ${s.r}`}>$48/mo</span></div>
              <div className={s.costLine}><span className={s.clLabel}>GitHub Team plan (5 users)</span><span className={`${s.clVal} ${s.r}`}>$21/mo</span></div>
              <div className={`${s.costBox} ${s.ghBox}`}>
                <div className={`${s.costBoxNum} ${s.rd}`}>$69/mo</div>
                <div className={s.costBoxSub}>Total · Grows with every build</div>
              </div>
            </div>
          </div>
          <div className={s.calloutGood}>
            <span className={s.calloutIco}><DollarSign aria-label="Pricing" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span>
            <p><strong>Savings with BuildNinja: ~$61/month ($732/year)</strong> for a 5-person team at this build volume. That's a flight to an engineering conference, or 6 months of additional tooling budget.</p>
          </div>
        </div>

        {/* 20 person */}
        <div className={`${s.calcPane} ${activeTab === 't20' ? s.active : ''}`}>
          <div className={s.costGrid}>
            <div className={`${s.costCard} ${s.featured}`}>
              <div className={s.costHead}>
                <span className={s.costTool}><Sword aria-label="BuildNinja" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /> BuildNinja</span>
                <span className={s.costBadgeRec}>RECOMMENDED</span>
              </div>
              <div className={s.costLine}><span className={s.clLabel}>Build compute fee</span><span className={`${s.clVal} ${s.g}`}>$0.00</span></div>
              <div className={s.costLine}><span className={s.clLabel}>Self-hosted orchestration fee</span><span className={`${s.clVal} ${s.g}`}>$0.00</span></div>
              <div className={s.costLine}><span className={s.clLabel}>Per-seat cost (20 users)</span><span className={`${s.clVal} ${s.g}`}>$0.00</span></div>
              <div className={s.costLine}><span className={s.clLabel}>Server — Hetzner CX21 (3vCPU/4GB)</span><span className={s.clVal}>$12/mo</span></div>
              <div className={s.costLine}><span className={s.clLabel}>Storage (100GB SSD)</span><span className={s.clVal}>$5/mo</span></div>
              <div className={`${s.costBox} ${s.bnBox}`}>
                <div className={`${s.costBoxNum} ${s.or}`}>$17/mo</div>
                <div className={s.costBoxSub}>Total · Unlimited builds · 20 users · Flat forever</div>
              </div>
            </div>
            <div className={s.costCard}>
              <div className={s.costHead}><span className={s.costTool}><Circle aria-label="GitHub Actions" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /> GitHub Actions</span></div>
              <div className={s.costLine}><span className={s.clLabel}>Free minutes (2,000/mo)</span><span className={s.clVal}>Included</span></div>
              <div className={s.costLine}>
                <span className={s.clLabel}>Build usage: ~24,000 min/mo<br/><small>100 builds/day × 8 min × 25 days</small></span>
                <span className={`${s.clVal} ${s.r}`}>22,000 billable min</span>
              </div>
              <div className={s.costLine}><span className={s.clLabel}>Linux hosted @ $0.008/min</span><span className={`${s.clVal} ${s.r}`}>$176/mo</span></div>
              <div className={s.costLine}><span className={s.clLabel}>GitHub Team plan (20 users)</span><span className={`${s.clVal} ${s.r}`}>$84/mo</span></div>
              <div className={`${s.costBox} ${s.ghBox}`}>
                <div className={`${s.costBoxNum} ${s.rd}`}>$260/mo</div>
                <div className={s.costBoxSub}>Total · Grows every month builds increase</div>
              </div>
            </div>
          </div>
          <div className={s.calloutGood}>
            <span className={s.calloutIco}><DollarSign aria-label="Pricing" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span>
            <p><strong>Savings with BuildNinja: ~$243/month ($2,916/year)</strong> for a 20-person team. Add self-hosted runner orchestration fees ($0.002/min × 24,000 min = $48/mo) if using self-hosted GH runners — that's $3,492/year in BuildNinja savings.</p>
          </div>
        </div>

        {/* 50 person */}
        <div className={`${s.calcPane} ${activeTab === 't50' ? s.active : ''}`}>
          <div className={s.costGrid}>
            <div className={`${s.costCard} ${s.featured}`}>
              <div className={s.costHead}>
                <span className={s.costTool}><Sword aria-label="BuildNinja" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /> BuildNinja</span>
                <span className={s.costBadgeRec}>RECOMMENDED</span>
              </div>
              <div className={s.costLine}><span className={s.clLabel}>Build compute fee</span><span className={`${s.clVal} ${s.g}`}>$0.00</span></div>
              <div className={s.costLine}><span className={s.clLabel}>Self-hosted orchestration fee</span><span className={`${s.clVal} ${s.g}`}>$0.00</span></div>
              <div className={s.costLine}><span className={s.clLabel}>Per-seat cost (50 users)</span><span className={`${s.clVal} ${s.g}`}>$0.00</span></div>
              <div className={s.costLine}><span className={s.clLabel}>Server — Hetzner CX31 (4vCPU/8GB)</span><span className={s.clVal}>$24/mo</span></div>
              <div className={s.costLine}><span className={s.clLabel}>Storage (200GB SSD)</span><span className={s.clVal}>$10/mo</span></div>
              <div className={`${s.costBox} ${s.bnBox}`}>
                <div className={`${s.costBoxNum} ${s.or}`}>$34/mo</div>
                <div className={s.costBoxSub}>Total · Unlimited builds · 50 users · Predictable</div>
              </div>
            </div>
            <div className={s.costCard}>
              <div className={s.costHead}><span className={s.costTool}><Circle aria-label="GitHub Actions" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /> GitHub Actions</span></div>
              <div className={s.costLine}>
                <span className={s.clLabel}>Build usage: ~60,000 min/mo</span>
                <span className={`${s.clVal} ${s.r}`}>58,000 billable min</span>
              </div>
              <div className={s.costLine}><span className={s.clLabel}>Linux hosted @ $0.008/min</span><span className={`${s.clVal} ${s.r}`}>$464/mo</span></div>
              <div className={s.costLine}><span className={s.clLabel}>GitHub Enterprise (50 users @ $21)</span><span className={`${s.clVal} ${s.r}`}>$1,050/mo</span></div>
              <div className={s.costLine}><span className={s.clLabel}>Self-hosted orchestration (if applicable)</span><span className={`${s.clVal} ${s.r}`}>+$120/mo</span></div>
              <div className={`${s.costBox} ${s.ghBox}`}>
                <div className={`${s.costBoxNum} ${s.rd}`}>$1,514–1,634/mo</div>
                <div className={s.costBoxSub}>Total at 50 users with enterprise needs</div>
              </div>
            </div>
          </div>
          <div className={s.calloutGood}>
            <span className={s.calloutIco}><DollarSign aria-label="Pricing" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span>
            <p><strong>Savings with BuildNinja: $1,480–1,600/month ($17,760–19,200/year)</strong> for a 50-person engineering team. At this scale, BuildNinja pays for a junior engineer's salary in CI/CD savings alone.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
