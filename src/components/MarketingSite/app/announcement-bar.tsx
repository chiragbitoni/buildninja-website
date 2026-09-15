'use client';

import { ArrowRight } from 'lucide-react';
import { SiteLink } from './site-context';

export function AnnouncementBar() {
  return <aside className="announcement-bar" aria-label="Product announcement">
    <div className="announcement-bar-inner">
      <span className="announcement-label">NEW</span>
      <p>Kenzo AI is now live in BuildNinja. Forecast failures, analyze logs, and explain build configurations.</p>
      <SiteLink className="announcement-cta" href="/dojo">Try it in Dojo <ArrowRight size={14} /></SiteLink>
    </div>
  </aside>;
}
