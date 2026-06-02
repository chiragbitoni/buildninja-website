import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import s from './CTABanner.module.css';

export default function CTABanner() {
  return (
    <section className={s.ctaSection}>
      <div className={s.ctaInner}>
        <div className={s.heroBadge}>Free to start · No credit card</div>
        <h2 className={s.ctaTitle}>Ready to leave <em>Jenkins behind?</em></h2>
        <p className={s.ctaSub}>
          Deploy BuildNinja in 5 minutes on your own servers. No seat limits. No cloud dependency. No YAML nightmares.
        </p>
        <div className={s.ctaBtns}>
          <Link href="/install" className={s.btnPrimary}>
            Get Started Free <ArrowRight size={16} />
          </Link>
          <Link href="/dojo" className={s.btnOutline}>
            Try the Live Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
