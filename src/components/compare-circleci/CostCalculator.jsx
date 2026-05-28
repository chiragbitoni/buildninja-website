import React from 'react';
import { Circle, Sword, Lightbulb } from 'lucide-react';
import s from './CostCalculator.module.css';


export default function CostCalculator() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <span className="badge-alt" style={{ marginBottom: '10px' }}>Real Cost Breakdown</span>
        <h2 className="section-title" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', marginBottom: '14px' }}>
          What a 20-Person Team Actually Pays
        </h2>
        <p className="section-subtitle">
          Based on 100 builds/day at an average of 8 minutes each. These are real numbers, not cherry-picked scenarios.
        </p>

        <div className={s.calcGrid}>
          <div className={`${s.calcPanel} ${s.calcPanelFeatured}`}>
            <div className={s.calcHead}>
              <span className={s.calcLogo}><Sword aria-label="BuildNinja" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /> BuildNinja</span>
              <span className={s.calcBadgeRecommend}>Recommended</span>
            </div>
            <div className={s.costLine}><span>Build compute</span><span>$0 /mo</span></div>
            <div className={s.costLine}><span>Per-seat cost (20 users)</span><span>$0 /mo</span></div>
            <div className={s.costLine}><span>t3.xlarge server (AWS)</span><span>~$120 /mo</span></div>
            <div className={s.costLine}><span>Storage (100GB EBS)</span><span>~$10 /mo</span></div>
            <div className={s.costLine}><span>BuildNinja license</span><span>$0 /mo (free tier)</span></div>
            <div className={s.costTotal}>
              <div className={`${s.costTotalVal} ${s.costTotalValOrange}`}>~$130/mo</div>
              <div className={s.costTotalLbl}>Total · Supports <strong>unlimited builds + unlimited users</strong></div>
            </div>
          </div>

          <div className={s.calcPanel}>
            <div className={s.calcHead}>
              <span className={s.calcLogo}><Circle aria-label="GitHub Actions" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /> CircleCI</span>
            </div>
            <div className={s.costLine}><span>100 builds × 8 min = 800 min/day</span><span>24,000 min/mo</span></div>
            <div className={s.costLine}><span>Free credit allowance</span><span>−300 min</span></div>
            <div className={s.costLine}><span>Billable: 23,700 min @ ~$0.006/min</span><span>~$142 /mo</span></div>
            <div className={s.costLine}><span>Performance plan (medium resource class)</span><span>+$15/user/mo</span></div>
            <div className={s.costLine}><span>20 users on Scale plan</span><span>~$300 /mo</span></div>
            <div className={s.costTotal}>
              <div className={`${s.costTotalVal} ${s.costTotalValBlue}`}>~$442/mo</div>
              <div className={s.costTotalLbl}>Total · Cost grows with every new hire and build</div>
            </div>
          </div>
        </div>

        <div className={s.insightBox}>
          <span style={{ fontSize: '24px' }}><Lightbulb aria-label="Idea" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span>
          <p>
            <strong>The compounding advantage:</strong> As your team grows from 20 to 50 to 200 people, CircleCI's bill scales proportionally. BuildNinja's server cost stays flat — or grows by a few dollars for a larger instance. A 200-person engineering team could realistically save $3,000–6,000/month by switching.
          </p>
        </div>
      </div>
    </section>
  );
}
