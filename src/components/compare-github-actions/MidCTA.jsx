import React from 'react';
import Link from 'next/link';
import s from './MidCTA.module.css';

export default function MidCTA() {
  return (
    <div className={s.container}>
      <div className={s.recBlock}>
        <div className={s.recCopy}>
          <h3>Paying per build-minute on your own hardware?</h3>
          <p>Switch to BuildNinja. Run unlimited builds on your infrastructure - $0 per build. 5-minute setup.</p>
        </div>
        <Link href="/install" className={s.recBtn}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
          Deploy BuildNinja Free
        </Link>
      </div>
    </div>
  );
}
