import React from 'react';
import { Check, ArrowRight, Zap } from 'lucide-react';
import Link from 'next/link';
import s from './Recommendation.module.css';


export default function Recommendation() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <span className="badge-alt" style={{ marginBottom: '10px' }}>Honest Recommendation</span>
        <h2 className="section-title" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)' }}>
          Which tool is genuinely right for your team?
        </h2>

        <div className={s.recGrid}>
          {/* Choose BuildNinja */}
          <div className={`${s.recCard} ${s.recCardBn}`}>
            <div className={s.recIcon}><img src="/resources/logo-buildninja.svg" alt="BuildNinja" className={s.recLogoBn} /></div>
            <h3 className={s.recTitle}>Choose BuildNinja if you…</h3>
            <ul className={s.recList}>
              <li className={s.recListItem}>
                <span className={s.recListIconBn}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span>
                <span className={s.recListItemBn}>Are hitting GitHub Actions build-minute limits every month</span>
              </li>
              <li className={s.recListItem}>
                <span className={s.recListIconBn}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span>
                <span className={s.recListItemBn}>Use or plan to use GitLab or Bitbucket alongside GitHub</span>
              </li>
              <li className={s.recListItem}>
                <span className={s.recListIconBn}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span>
                <span className={s.recListItemBn}>Need data sovereignty - code cannot leave your network</span>
              </li>
              <li className={s.recListItem}>
                <span className={s.recListIconBn}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span>
                <span className={s.recListItemBn}>Are affected by the self-hosted runner fee change</span>
              </li>
              <li className={s.recListItem}>
                <span className={s.recListIconBn}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span>
                <span className={s.recListItemBn}>Have a growing team where per-seat GitHub costs compound</span>
              </li>
              <li className={s.recListItem}>
                <span className={s.recListIconBn}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span>
                <span className={s.recListItemBn}>Work in regulated industries (HIPAA, GDPR, air-gapped)</span>
              </li>
              <li className={s.recListItem}>
                <span className={s.recListIconBn}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span>
                <span className={s.recListItemBn}>Want predictable flat CI/CD costs that don't scale with builds</span>
              </li>
            </ul>
            <Link href="/install" className={s.btnPrimary}>
              <Zap size={14} color="currentColor" />
              Start Free - No Card Needed
            </Link>
          </div>

          {/* Choose GitHub Actions */}
          <div className={`${s.recCard} ${s.recCardGh}`}>
            <div className={s.recIcon}><img src="/resources/github-actions-logo.svg" alt="GitHub Actions" className={s.recLogoGh} /></div>
            <h3 className={s.recTitle}>GitHub Actions may suit you if…</h3>
            <ul className={s.recList}>
              <li className={s.recListItem}>
                <span className={s.recListIconGh}><ArrowRight aria-label="Right Arrow" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span>
                <span className={s.recListItemGh}>You exclusively use GitHub and never plan to migrate away</span>
              </li>
              <li className={s.recListItem}>
                <span className={s.recListIconGh}><ArrowRight aria-label="Right Arrow" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span>
                <span className={s.recListItemGh}>Your build volume stays well within the 2,000 free minutes/month</span>
              </li>
              <li className={s.recListItem}>
                <span className={s.recListIconGh}><ArrowRight aria-label="Right Arrow" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span>
                <span className={s.recListItemGh}>You rely heavily on GitHub's marketplace actions ecosystem</span>
              </li>
              <li className={s.recListItem}>
                <span className={s.recListIconGh}><ArrowRight aria-label="Right Arrow" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span>
                <span className={s.recListItemGh}>You want zero infrastructure to manage whatsoever</span>
              </li>
              <li className={s.recListItem}>
                <span className={s.recListIconGh}><ArrowRight aria-label="Right Arrow" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span>
                <span className={s.recListItemGh}>You need macOS builds (GitHub's macOS runners are hard to replicate)</span>
              </li>
              <li className={s.recListItem}>
                <span className={s.recListIconGh}><ArrowRight aria-label="Right Arrow" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span>
                <span className={s.recListItemGh}>GitHub Copilot integration is a core workflow requirement</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
