import React from 'react';
import { Check, Circle, ArrowRight, Sword, Zap } from 'lucide-react';
import Link from 'next/link';
import s from './Recommendation.module.css';

export default function Recommendation() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <span className="badge-alt" style={{ marginBottom: '10px' }}>Honest Recommendation</span>
        <h2 className="section-title" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)' }}>
          Which tool is right for your team?
        </h2>

        <div className={s.recGrid}>
          {/* Choose BuildNinja */}
          <div className={`${s.recCard} ${s.recCardBn}`}>
            <div className={s.recIcon}><Sword aria-label="BuildNinja" size={20} color="currentColor" /></div>
            <h3 className={s.recTitle}>Choose BuildNinja if you…</h3>
            <ul className={s.recList}>
              <li className={s.recListItem}>
                <span className={s.recListIconBn}><Check size={14} color="currentColor" /></span>
                <span className={s.recListItemBn}>Want unlimited builds without watching a credit meter</span>
              </li>
              <li className={s.recListItem}>
                <span className={s.recListIconBn}><Check size={14} color="currentColor" /></span>
                <span className={s.recListItemBn}>Require data sovereignty (HIPAA, GDPR, financial compliance)</span>
              </li>
              <li className={s.recListItem}>
                <span className={s.recListIconBn}><Check size={14} color="currentColor" /></span>
                <span className={s.recListItemBn}>Are migrating from Jenkins and want simplicity, not new complexity</span>
              </li>
              <li className={s.recListItem}>
                <span className={s.recListIconBn}><Check size={14} color="currentColor" /></span>
                <span className={s.recListItemBn}>Need to run CI/CD in an air-gapped or offline environment</span>
              </li>
              <li className={s.recListItem}>
                <span className={s.recListIconBn}><Check size={14} color="currentColor" /></span>
                <span className={s.recListItemBn}>Have a growing team where per-seat costs are becoming a problem</span>
              </li>
              <li className={s.recListItem}>
                <span className={s.recListIconBn}><Check size={14} color="currentColor" /></span>
                <span className={s.recListItemBn}>Prefer owning your infrastructure rather than renting capacity</span>
              </li>
            </ul>
            <Link href="/install" className={s.btnPrimary}>
              <Zap size={14} color="currentColor" />
              Start Free — No Card Needed
            </Link>
          </div>

          {/* Choose CircleCI */}
          <div className={`${s.recCard} ${s.recCardAlt}`}>
            <div className={s.recIcon}><Circle aria-label="CircleCI" size={20} color="currentColor" /></div>
            <h3 className={s.recTitle}>CircleCI may be better if you…</h3>
            <ul className={s.recList}>
              <li className={s.recListItem}>
                <span className={s.recListIconAlt}><ArrowRight size={14} color="currentColor" /></span>
                <span className={s.recListItemAlt}>Need zero infrastructure management (fully managed SaaS)</span>
              </li>
              <li className={s.recListItem}>
                <span className={s.recListIconAlt}><ArrowRight size={14} color="currentColor" /></span>
                <span className={s.recListItemAlt}>Rely heavily on CircleCI's orbs ecosystem (1,000+ integrations)</span>
              </li>
              <li className={s.recListItem}>
                <span className={s.recListIconAlt}><ArrowRight size={14} color="currentColor" /></span>
                <span className={s.recListItemAlt}>Have an enterprise contract with SLA guarantees already in place</span>
              </li>
              <li className={s.recListItem}>
                <span className={s.recListIconAlt}><ArrowRight size={14} color="currentColor" /></span>
                <span className={s.recListItemAlt}>Build volume is low enough that credits rarely run out</span>
              </li>
              <li className={s.recListItem}>
                <span className={s.recListIconAlt}><ArrowRight size={14} color="currentColor" /></span>
                <span className={s.recListItemAlt}>Need CircleCI's advanced mobile (iOS/Android) build infrastructure</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
