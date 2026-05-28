import React from 'react';
import { Zap, DollarSign, Target, BookOpen, Search, Rocket } from 'lucide-react';
import Link from 'next/link';
import s from './ExploreLinks.module.css';


export default function ExploreLinks() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <span className="badge-alt" style={{ marginBottom: '10px' }}>Explore BuildNinja</span>
        <h2 className="section-title" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', marginBottom: '14px' }}>
          Learn more about BuildNinja
        </h2>

        <div className={s.linksGrid}>
          <Link href="/features" className={s.linkCard}>
            <div className={s.linkIcon} style={{ background: 'var(--color-info-subtle)' }}><Zap aria-label="Lightning bolt" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></div>
            <div>
              <div className={s.linkCardTitle}>Features Overview</div>
              <div className={s.linkCardSub}>Explore all BuildNinja CI/CD features in detail</div>
            </div>
          </Link>
          <Link href="/pricing" className={s.linkCard}>
            <div className={s.linkIcon} style={{ background: 'var(--color-success-bg)' }}><DollarSign aria-label="Pricing" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></div>
            <div>
              <div className={s.linkCardTitle}>Pricing Plans</div>
              <div className={s.linkCardSub}>See the full pricing comparison — free vs Growth Edition</div>
            </div>
          </Link>
          <Link href="/install" className={s.linkCard}>
            <div className={s.linkIcon} style={{ background: 'var(--color-primary-subtle)' }}><Rocket aria-label="Rocket" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></div>
            <div>
              <div className={s.linkCardTitle}>Install BuildNinja</div>
              <div className={s.linkCardSub}>Get your self-hosted CI/CD running in 5 minutes</div>
            </div>
          </Link>
          <Link href="/dojo" className={s.linkCard}>
            <div className={s.linkIcon} style={{ background: 'var(--color-demo-accent-bg)' }}><Target aria-label="Target" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></div>
            <div>
              <div className={s.linkCardTitle}>Try the Dojo Sandbox</div>
              <div className={s.linkCardSub}>Run actual CI/CD builds without installing anything</div>
            </div>
          </Link>
          <Link href="/docs/overview" className={s.linkCard}>
            <div className={s.linkIcon} style={{ background: 'var(--color-warning-bg)' }}><BookOpen aria-label="Guide" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></div>
            <div>
              <div className={s.linkCardTitle}>Documentation</div>
              <div className={s.linkCardSub}>Setup guides, YAML reference, and pipeline tutorials</div>
            </div>
          </Link>
          <Link href="/" className={s.linkCard}>
            <div className={s.linkIcon} style={{ background: 'var(--color-info-bg)' }}><Search aria-label="Search" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></div>
            <div>
              <div className={s.linkCardTitle}>Other Comparisons</div>
              <div className={s.linkCardSub}>BuildNinja vs Jenkins, GitHub Actions, and more</div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
