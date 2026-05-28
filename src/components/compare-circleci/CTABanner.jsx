import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import s from './CTABanner.module.css';

export default function CTABanner() {
  return (
    <section className={s.ctaSection}>
      <div className={s.ctaInner}>
        <h2 className={s.ctaTitle}>Ready to stop paying for <em>every build?</em></h2>
        <p className={s.ctaSub}>
          Join engineering teams who switched from CircleCI to BuildNinja and cut their CI/CD costs by 60–80% while gaining full data control. No credit card. No seat limits. No surprises.
        </p>
        <div className={s.ctaBtns}>
          <Link href="/install" className={s.btnPrimary}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            Deploy BuildNinja Free
          </Link>
          <Link href="/dojo" className={s.btnSecondary}>
            Try the Dojo Sandbox <ArrowRight aria-label="Right Arrow" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} />
          </Link>
        </div>
        <p className={s.ctaNote}>
          Self-hosted in 5 minutes · Unlimited builds · No seat pricing · Cancel anytime
        </p>
      </div>
    </section>
  );
}
