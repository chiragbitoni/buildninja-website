import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import s from './CTABanner.module.css';

export default function CTABanner() {
  return (
    <section className={s.ctaSection}>
      <div className={s.ctaInner}>
        <h2>Stop paying <em>per build-minute</em>.<br />Own your CI/CD.</h2>
        <p>Engineering teams switch to BuildNinja to escape GitHub's per-minute billing and regain control over their pipelines. Self-hosted, unlimited builds.</p>
        <div className={s.ctaBtns}>
          <Link href="/install" className={s.btnPrimary}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
            Deploy BuildNinja Free
          </Link>
          <Link href="/dojo" className={s.btnOutline}>
            Try the Dojo Sandbox <ArrowRight aria-label="Right Arrow" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} />
          </Link>
        </div>
        <p className={s.ctaNote}>
          <span className={s.ctaBadge}>5-minute setup</span>
          <span className={s.ctaBadge}>No card required</span>
          <span className={s.ctaBadge}>No orchestration tax</span>
          <span className={s.ctaBadge}>Cancel anytime</span>
        </p>
      </div>
    </section>
  );
}
