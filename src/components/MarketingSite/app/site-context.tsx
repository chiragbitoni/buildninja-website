
'use client';

import { MarketingMotion } from './animation-scenes';
import { createContext, useContext, type ComponentProps, type ReactNode } from 'react';

const VersionContext = createContext('');
const routes = new Set(['', 'features', 'pricing', 'kenzo-ai', 'kenzo-ai-portal', 'install', 'dojo', 'compare', 'faq', 'resources', 'blog', 'about', 'contact', 'support', 'partners', 'privacy-policy', 'terms-of-service', 'eula', 'refund-and-cancellation-policy', 'kenzo-ai-terms', 'kenzo-ai-data-policy', 'compare/buildninja-vs-github-actions', 'compare/buildninja-vs-circleci', 'compare/buildninja-vs-jenkins', 'compare/buildninja-vs-teamcity']);

export function versionedHref(href: string | undefined, base: string) {
  if (!href || !href.startsWith('/') || href.startsWith('//')) return href;
  const path = href.split(/[?#]/)[0];
  if (!routes.has(path.replace(/^\/|\/$/g, ''))) return href;
  return href;
}

export function SiteLink({ href, ...props }: ComponentProps<'a'>) {
  const base = useContext(VersionContext);
  return <a {...props} href={versionedHref(href, base)}/>;
}

export function useSiteVersion() {
  return useContext(VersionContext);
}

export function MarketingShell({ children }: { children: ReactNode }) {
  return <VersionContext.Provider value="/v2"><div className="marketing-site"><MarketingMotion>{children}</MarketingMotion></div></VersionContext.Provider>;
}
