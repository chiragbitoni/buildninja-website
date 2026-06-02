import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import s from './DecisionGuide.module.css';

export default function DecisionGuide() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.sectionLabel}>Decision Guide</div>
        <h2 className={s.sectionTitle}>Which Tool is Right for You?</h2>
        <p className={s.sectionDesc}>
          Be honest about your team's situation. Both tools can run CI/CD pipelines — the question is which is right for your constraints.
        </p>

        <div className={s.decisionGrid}>
          
          <div className={s.migrationBox}>
            <h3 className={s.chooseNinja}>Choose BuildNinja if…</h3>
            <ul className={s.featureList}>
              <li><Check size={16} className={s.iconWin} /> You want to be running builds in under 10 minutes</li>
              <li><Check size={16} className={s.iconWin} /> You don't have a dedicated DevOps engineer</li>
              <li><Check size={16} className={s.iconWin} /> You want unlimited users without per-seat costs</li>
              <li><Check size={16} className={s.iconWin} /> You're a growing startup or mid-size dev team</li>
              <li><Check size={16} className={s.iconWin} /> You want modern UX and low maintenance overhead</li>
              <li><Check size={16} className={s.iconWin} /> You're looking for a Jenkins replacement that just works</li>
              <li><Check size={16} className={s.iconWin} /> You want to run CI/CD on your own servers, not cloud</li>
            </ul>
          </div>

          <div className={`${s.migrationBox} ${s.migrationBoxAlt}`}>
            <h3 className={s.chooseJenkins}>Stick with Jenkins if…</h3>
            <ul className={s.featureListAlt}>
              <li><ArrowRight size={16} className={s.iconMuted} /> You have a large existing Jenkins investment (pipelines, plugins, scripts)</li>
              <li><ArrowRight size={16} className={s.iconMuted} /> You require a very specific plugin that only Jenkins has</li>
              <li><ArrowRight size={16} className={s.iconMuted} /> Your org runs extremely complex, highly customized pipelines</li>
              <li><ArrowRight size={16} className={s.iconMuted} /> You have a dedicated Jenkins admin who knows it well</li>
              <li><ArrowRight size={16} className={s.iconMuted} /> You need a platform with 14+ years of community answers</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
