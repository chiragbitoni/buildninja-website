'use client';
import { SiteLink, useSiteVersion } from './site-context';

import { ArrowRight, ArrowUpRight, ChevronDown, Facebook, Instagram, Linkedin, Menu, Moon, Sun, X as CloseIcon, Youtube } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import { ResizableNavbar } from '@/components/ui/resizable-navbar';
import { AskAISection } from './trust-sections';
import { BrandLogo } from './brand-logo';
import { AnnouncementBar } from './announcement-bar';
import { env } from '@/lib/config/env';

const supportEmailLink = `mailto:${env.SUPPORT_CC_EMAIL}`;

const navigation = [
  ['Features', '/features'],
  ['Install', '/install'],
  ['Pricing', '/pricing'],
  ['kenzoAI', '/kenzo-ai'],
  ['Compare', '/compare'],
  ['Dojo', '/dojo'],
] as const;

function isCurrentNavigationPath(pathname: string | null, href: string) {
  const currentPath = pathname?.replace(/\/+$/, '') || '/';
  const linkPath = href.replace(/\/+$/, '') || '/';
  return currentPath === linkPath || (linkPath !== '/' && currentPath.startsWith(`${linkPath}/`));
}

function GithubMark({ size = 18 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.77 2.72 1.26 3.38.96.1-.75.4-1.26.74-1.55-2.57-.3-5.27-1.29-5.27-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.05 0 0 .97-.31 3.16 1.18A10.98 10.98 0 0 1 12 6.11c.98 0 1.95.13 2.87.39 2.2-1.49 3.16-1.18 3.16-1.18.63 1.58.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.71 5.39-5.29 5.68.42.36.79 1.07.79 2.16v3.25c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z"/></svg>;
}

function XMark({ size = 18 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"/></svg>;
}

function FooterSocialLinks() {
  return <div className="footer-social-links" aria-label="BuildNinja social links">
    <a href="https://www.linkedin.com/showcase/build-ninja/" target="_blank" rel="noopener noreferrer" aria-label="BuildNinja on LinkedIn"><Linkedin size={18}/></a>
    <a href="https://www.instagram.com/buildninja.io/?next=%2Fbuildninja.io%2F" target="_blank" rel="noopener noreferrer" aria-label="BuildNinja on Instagram"><Instagram size={18}/></a>
    <a href="https://www.facebook.com/GrapeCityIndiaPvtLtd" target="_blank" rel="noopener noreferrer" aria-label="BuildNinja on Facebook"><Facebook size={18}/></a>
    <a href="https://www.youtube.com/@BuildNinja_CICD" target="_blank" rel="noopener noreferrer" aria-label="BuildNinja on YouTube"><Youtube size={19}/></a>
    <a href="https://x.com/BuildNinjaHQ" target="_blank" rel="noopener noreferrer" aria-label="BuildNinja on X"><XMark size={17}/></a>
    <a href="https://github.com/BuildNinja-CICD" target="_blank" rel="noopener noreferrer" aria-label="BuildNinja on GitHub"><GithubMark size={18}/></a>
  </div>;
}

export function SiteHeader() {
  const isVersionTwo = useSiteVersion() === '/v2';
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const dark = mounted && resolvedTheme === 'dark';
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const resourceMenuRef = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      if (resourceMenuRef.current?.open) {
        resourceMenuRef.current.open = false;
        resourceMenuRef.current.querySelector('summary')?.focus();
      }
      if (open) {
        setOpen(false);
        menuToggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open]);
  function toggleTheme() {
    setTheme(dark ? 'light' : 'dark');
  }
  return <>
    <AnnouncementBar />
    <header className="site-header"><ResizableNavbar>
      <SiteLink className="brand" href="/" aria-label="BuildNinja home"><BrandLogo/></SiteLink>
      <nav className={open ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">
        {navigation.map(([label, href]) => {
          const isActive = isCurrentNavigationPath(pathname, href);
          return <SiteLink key={href} href={href} className={isActive ? 'is-active' : undefined} aria-current={isActive ? 'page' : undefined} onClick={() => setOpen(false)}>{label}</SiteLink>;
        })}
        <details className="resource-menu" ref={resourceMenuRef}><summary className={isCurrentNavigationPath(pathname, '/resources') ? 'is-active' : undefined} aria-current={isCurrentNavigationPath(pathname, '/resources') ? 'page' : undefined}>Resources <ChevronDown size={13} /></summary><div className="resource-menu-panel">
          <section><span>LEARN</span><SiteLink href={`${env.DOCUMENTATION_URL.replace(/\/+$/,'')}/overview`}><b>Documentation</b><ArrowUpRight size={13}/></SiteLink><SiteLink href="/faq" onClick={() => setOpen(false)}><b>FAQs</b></SiteLink><SiteLink href="/blog" onClick={() => setOpen(false)}><b>Blog</b></SiteLink></section>
          <section><span>USE & SUPPORT</span><SiteLink href="/dojo" onClick={() => setOpen(false)}><b>Live sandbox</b></SiteLink><a href={`${env.DOCUMENTATION_URL.replace(/\/+$/,'')}/category/release-notes`} onClick={() => setOpen(false)}><b>What’s new</b></a><SiteLink href="/support" onClick={() => setOpen(false)}><b>Support</b></SiteLink></section>
          <footer><SiteLink href="/resources" onClick={() => setOpen(false)}>View all resources <ArrowRight size={12}/></SiteLink></footer>
        </div></details>
      </nav>
      <div className="nav-actions">
        {isVersionTwo?<a className="github-link" href="https://github.com/BuildNinja-CICD" target="_blank" rel="noopener noreferrer" aria-label="BuildNinja on GitHub"><GithubMark/></a>:null}
        <button className="icon-button" onClick={toggleTheme} aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}>{dark ? <Sun size={17} /> : <Moon size={17} />}</button>
        <SiteLink className="nav-account" href={env.MY_ACCOUNT}>My Account</SiteLink>
        <SiteLink className="button button-small" href="/install">Get Started <ArrowRight size={15} /></SiteLink>
        <button ref={menuToggleRef} className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <CloseIcon /> : <Menu />}</button>
      </div>
    </ResizableNavbar></header>
  </>;
}

const groups = [
  ['Product', [['Features','/features'],['kenzoAI','/kenzo-ai'],['Pricing','/pricing'],['kenzoAI Portal','/kenzo-ai-portal'],['Compare','/compare'],['Install','/install'],['Dojo','/dojo'],['FAQs','/faq']]],
  ['Resources', [['Documentation',`${env.DOCUMENTATION_URL.replace(/\/+$/,'')}/overview`],['Getting Started',`${env.DOCUMENTATION_URL.replace(/\/+$/,'')}/category/getting-started`],['Tutorials',`${env.DOCUMENTATION_URL.replace(/\/+$/,'')}/category/quick-setup-guide`],['Licensing',`${env.DOCUMENTATION_URL.replace(/\/+$/,'')}/category/licensing`],['Release Notes',`${env.DOCUMENTATION_URL.replace(/\/+$/,'')}/category/release-notes`]]],
  ['Company', [['About Us','/about'],['Blog','/blog'],['Contact','/contact'],['Support','/support'],['Partners','/partners']]],
  ['Legal', [['Privacy Policy','/privacy-policy'],['Terms of Service','/terms-of-service'],['EULA','/eula'],['Refund & Cancellation','/refund-and-cancellation-policy'],['AI Terms','/kenzo-ai-terms'],['AI Data Policy','/kenzo-ai-data-policy']]],
] as const;

const v2LegalLinks = [['Privacy Policy','/privacy-policy'],['Terms of Service','/terms-of-service'],['EULA','/eula'],['Refund & Cancellation','/refund-and-cancellation-policy'],['kenzoAI Terms','/kenzo-ai-terms'],['kenzoAI Data Policy','/kenzo-ai-data-policy']] as const;

export function SiteFooter() {
  const isVersionTwo = useSiteVersion() === '/v2';
  const footerGroups = isVersionTwo ? groups.map(([title, links]) => title === 'Product'
    ? [title, links.filter(([label]) => label !== 'kenzoAI Portal')]
    : title === 'Legal' ? [title, v2LegalLinks] : [title, links]) : groups;
  return <><AskAISection/><footer className="footer"><div className="footer-glow" />
    <div className={'footer-top'+(isVersionTwo?' footer-top-compact':'')}><div className="footer-identity"><BrandLogo/>{isVersionTwo?<p>Self-hosted CI/CD with AI built in.<br/>Built and supported by GrapeCity India.</p>:<><h2>Give your next build<br />a clearer path.</h2><p>Self-hosted CI/CD with AI built in.</p><SiteLink className="button" href="/install">Get Started <ArrowRight size={15} /></SiteLink></>}<FooterSocialLinks/></div>
      <div className="footer-groups">{footerGroups.map(([title, links]) => <div key={title}><h3>{title}</h3>{links.map(([label,href])=><SiteLink href={href} key={label}>{label}</SiteLink>)}</div>)}</div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} BuildNinja. All rights reserved.</span><div><SiteLink href={supportEmailLink}>{env.SUPPORT_CC_EMAIL}</SiteLink></div></div>
  </footer></>;
}
