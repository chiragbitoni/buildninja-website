'use client';

import { ArrowRight } from 'lucide-react';
import { SiteLink } from './site-context';
import posthog from 'posthog-js';
import { getCookie } from '@/lib/tracking/cookies';

function getDojoUtmData() {
  const rawUtm = getCookie('gh_utm');
  if (rawUtm) {
    try {
      const parsed = JSON.parse(rawUtm);
      return {
        utm_source: parsed.source || '',
        utm_medium: parsed.medium || '',
        utm_campaign: parsed.campaign || '',
        utm_content: parsed.content || '',
      };
    } catch {}
  }

  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get('utm_source') || '',
    utm_medium: params.get('utm_medium') || '',
    utm_campaign: params.get('utm_campaign') || '',
    utm_content: params.get('utm_content') || '',
  };
}

export function AnnouncementBar() {
  return <aside className="announcement-bar" aria-label="Product announcement">
    <div className="announcement-bar-inner">
      <span className="announcement-label">NEW</span>
      <p>Kenzo AI is now live in BuildNinja. Forecast failures, analyze logs, and explain build configurations.</p>
      <SiteLink
        className="announcement-cta"
        href="/dojo"
        onClick={() => posthog.capture('banner_dojo_clicked', getDojoUtmData())}
      >
        Try it in Dojo <ArrowRight size={14} />
      </SiteLink>
    </div>
  </aside>;
}
