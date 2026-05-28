import React from 'react';
import { DollarSign, Wrench, Sword, Monitor, Github, Gift } from 'lucide-react';
import Link from 'next/link';
import s from './RelatedPages.module.css';

export default function RelatedPages() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <span className="badge-alt" style={{ marginBottom: '10px' }}>Explore More</span>
        <h2 className="section-title" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)' }}>
          Related guides and comparisons
        </h2>

        <div className={s.relGrid}>
          <Link href="/compare/buildninja-vs-circleci" className={s.relCard}>
            <div className={s.relIcon} style={{ background: 'var(--color-primary-subtle)' }}><Sword aria-label="Versus" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></div>
            <div>
              <div className={s.relTitle}>BuildNinja vs CircleCI</div>
              <div className={s.relSub}>Credit system vs unlimited builds. Full honest comparison with cost calculator.</div>
            </div>
          </Link>
          <Link href="/compare/jenkins-alternative" className={s.relCard}>
            <div className={s.relIcon} style={{ background: 'var(--color-info-subtle)' }}><Wrench aria-label="Configuration" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></div>
            <div>
              <div className={s.relTitle}>Best Jenkins Alternatives 2026</div>
              <div className={s.relSub}>Migrating from Jenkins? Compare all options including BuildNinja.</div>
            </div>
          </Link>
          <Link href="/self-hosted-ci-cd" className={s.relCard}>
            <div className={s.relIcon} style={{ background: 'var(--color-success-bg)' }}><Monitor aria-label="Self-hosted" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></div>
            <div>
              <div className={s.relTitle}>Complete Guide to Self-Hosted CI/CD</div>
              <div className={s.relSub}>Self-hosted vs cloud, cost breakdown, compliance guide for 2026.</div>
            </div>
          </Link>
          <Link href="/integrations/github" className={s.relCard}>
            <div className={s.relIcon} style={{ background: 'var(--color-border)' }}><Github aria-label="GitHub" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></div>
            <div>
              <div className={s.relTitle}>BuildNinja + GitHub Setup Guide</div>
              <div className={s.relSub}>Connect GitHub repos and run your first build in 5 minutes.</div>
            </div>
          </Link>
          <Link href="/blog/how-to-set-up-ci-cd-for-free" className={s.relCard}>
            <div className={s.relIcon} style={{ background: 'var(--color-warning-bg)' }}><Gift aria-label="Free" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></div>
            <div>
              <div className={s.relTitle}>How to Set Up CI/CD for Free</div>
              <div className={s.relSub}>Step-by-step: free pipeline in 15 minutes. No credit card.</div>
            </div>
          </Link>
          <Link href="/pricing" className={s.relCard}>
            <div className={s.relIcon} style={{ background: 'var(--color-success-bg)' }}><DollarSign aria-label="Pricing" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></div>
            <div>
              <div className={s.relTitle}>BuildNinja Pricing</div>
              <div className={s.relSub}>Free tier vs Growth Edition — full feature breakdown.</div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
