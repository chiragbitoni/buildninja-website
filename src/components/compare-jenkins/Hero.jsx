import React from 'react';
import Link from 'next/link';
import s from './Hero.module.css';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <header className={s.hero}>
      <div className={s.breadcrumb} aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <ChevronRight size={14} className={s.breadcrumbSep} />
        <span>Compare</span>
        <ChevronRight size={14} className={s.breadcrumbSep} />
        <span>BuildNinja vs Jenkins</span>
      </div>
      
      <div className={s.heroBadge}>Updated May 2025 · Honest Comparison</div>
      
      <h1>
        <span className={s.highlight}>BuildNinja</span> vs Jenkins:<br />
        Which CI/CD Platform Wins?
      </h1>
      
      <p className={s.heroSub}>
        A fair, detailed breakdown of both tools — setup time, performance, maintenance burden, plugin ecosystem, and total cost of ownership.
      </p>
      
      <div className={s.heroMeta} role="list">
        <span role="listitem">Feature-by-feature comparison</span>
        <span role="listitem">Real setup benchmarks</span>
        <span role="listitem">Migration guide included</span>
        <span role="listitem">No affiliate bias</span>
      </div>
    </header>
  );
}
