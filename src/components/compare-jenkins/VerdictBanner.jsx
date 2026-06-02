import React from 'react';
import { Zap, Wrench, CheckCircle2 } from 'lucide-react';
import s from './VerdictBanner.module.css';

export default function VerdictBanner() {
  return (
    <div className={s.verdictBanner} role="region" aria-labelledby="verdict-heading">
      <h2 id="verdict-heading" className="sr-only">Quick Verdict</h2>
      
      <div className={s.verdictGrid}>
        
        <div className={`${s.verdictCol} ${s.ninjaCol}`}>
          <div className={`${s.toolLogo} ${s.ninja}`}>
            <Zap size={24} fill="currentColor" /> BuildNinja
          </div>
          <div className={s.toolTagline}>Modern self-hosted CI/CD, v1.1.0</div>
          <div className={`${s.verdictScore} ${s.ninja}`}>
            91<span className={s.scoreMax}>/100</span>
          </div>
          <div className={s.verdictLabel}>Overall Score</div>
          <div className={`${s.verdictPill} ${s.winner}`}>
            <CheckCircle2 size={14} /> Recommended for modern teams
          </div>
        </div>
        
        <div className={s.verdictCenter}>
          <div className={s.vsBadge}>VS</div>
        </div>
        
        <div className={`${s.verdictCol} ${s.jenkinsCol}`}>
          <div className={`${s.toolLogo} ${s.jenkins}`}>
            <Wrench size={24} /> Jenkins
          </div>
          <div className={s.toolTagline}>Open source, since 2011</div>
          <div className={`${s.verdictScore} ${s.jenkins}`}>
            64<span className={s.scoreMaxJenkins}>/100</span>
          </div>
          <div className={s.verdictLabel}>Overall Score</div>
          <div className={`${s.verdictPill} ${s.challenger}`}>
            Powerful but complex
          </div>
        </div>
        
      </div>
    </div>
  );
}
