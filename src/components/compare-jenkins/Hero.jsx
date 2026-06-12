import React from 'react';
import s from './Hero.module.css';

export default function Hero() {
  return (
    <header className={s.hero}>
      <div className="badge-alt" style={{ marginBottom: '20px' }}>Honest Comparison</div>
      
      <h1>
        <span className={s.highlight}>BuildNinja</span> vs Jenkins:<br />
        Which CI/CD Platform Wins?
      </h1>
      
      <p className={s.heroSub}>
        A fair, detailed breakdown of both tools - setup time, performance, maintenance burden, plugin ecosystem, and total cost of ownership.
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
