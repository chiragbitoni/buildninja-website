import type { ReactNode } from 'react';
import { ArrowDown, ArrowRight, FileCheck2, FileText } from 'lucide-react';
import { legalDocumentMarkdown } from './data/legal-documents';
import { PageMotion } from './page-motion';
import { SiteLink } from './site-context';

export const legalPages = {
  'privacy-policy': { title: 'Privacy Policy', seo: 'BuildNinja Privacy Policy | GrapeCity India', description: 'How GrapeCity India collects, uses, protects, and manages personal information connected with BuildNinja websites, accounts, products, and support.' },
  'terms-of-service': { title: 'Terms of Service', seo: 'BuildNinja Terms of Service | GrapeCity India', description: 'The rules that govern access to and use of BuildNinja websites, accounts, products, and services.' },
  eula: { title: 'End User License Agreement', seo: 'BuildNinja End User License Agreement | GrapeCity India', description: 'The complete license terms for installing and using BuildNinja software.' },
  'refund-and-cancellation-policy': { title: 'Refund & Cancellation Policy', seo: 'BuildNinja Refund and Cancellation Policy', description: 'The policy for BuildNinja purchases, cancellations, failed transactions, eligible refunds, and Kenzo Credit purchases.' },
  'kenzo-ai-terms': { title: 'kenzoAI Terms', seo: 'kenzoAI Terms | BuildNinja', description: 'The complete terms governing the AI service used by supported BuildNinja features and Dojo.' },
  'kenzo-ai-data-policy': { title: 'kenzoAI Data Policy', seo: 'kenzoAI Data Policy | BuildNinja', description: 'How information submitted through supported BuildNinja AI features and Dojo is processed.' },
} as const;

export type LegalRoute = keyof typeof legalPages;

const legalNavigation: Array<[LegalRoute, string]> = [
  ['privacy-policy', 'Privacy Policy'], ['terms-of-service', 'Terms of Service'], ['eula', 'EULA'],
  ['refund-and-cancellation-policy', 'Refund & Cancellation'], ['kenzo-ai-terms', 'kenzoAI Terms'], ['kenzo-ai-data-policy', 'kenzoAI Data Policy'],
];

function sectionId(value: string) {
  return value.toLowerCase().replace(/[*_`]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function localLegalHref(href: string) {
  try {
    const url = new URL(href);
    if (url.hostname === 'www.buildninja.io' && legalNavigation.some(([route]) => url.pathname === `/${route}`)) return url.pathname;
  } catch { return href; }
  return href;
}

function InlineText({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  const expression = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|`[^`]+`)/g;
  let cursor = 0;
  let match: RegExpExecArray | null;
  while ((match = expression.exec(text)) !== null) {
    if (match.index > cursor) parts.push(text.slice(cursor, match.index).replace(/\\([\[\]])/g, '$1'));
    const token = match[0];
    const key = `${match.index}-${token}`;
    if (token.startsWith('[')) {
      const link = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (link) {
        const href = localLegalHref(link[2]);
        parts.push(href.startsWith('/') ? <SiteLink key={key} href={href}>{link[1]}</SiteLink> : <a key={key} href={href} target="_blank" rel="noopener noreferrer">{link[1]}</a>);
      }
    } else if (token.startsWith('**')) parts.push(<strong key={key}>{token.slice(2, -2)}</strong>);
    else parts.push(<code key={key}>{token.slice(1, -1)}</code>);
    cursor = expression.lastIndex;
  }
  if (cursor < text.length) parts.push(text.slice(cursor).replace(/\\([\[\]])/g, '$1'));
  return <>{parts}</>;
}

function LegalDocument({ markdown }: { markdown: string }) {
  const lines = markdown.replace(/\r/g, '').split('\n');
  const blocks: ReactNode[] = [];
  let paragraph: string[] = [];
  let key = 0;
  const flushParagraph = () => {
    if (!paragraph.length) return;
    blocks.push(<p key={`p-${key++}`}><InlineText text={paragraph.join(' ')} /></p>);
    paragraph = [];
  };
  for (let index = 0; index < lines.length; index += 1) {
    const trimmed = lines[index].trim();
    if (!trimmed) { flushParagraph(); continue; }
    const heading = trimmed.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      flushParagraph();
      if (heading[1].length === 1) continue;
      const label = heading[2].replace(/\*\*/g, '');
      const id = sectionId(label);
      if (heading[1].length === 2) blocks.push(<h2 id={id} key={`h-${key++}`}><InlineText text={label}/></h2>);
      else if (heading[1].length === 3) blocks.push(<h3 id={id} key={`h-${key++}`}><InlineText text={label}/></h3>);
      else blocks.push(<h4 id={id} key={`h-${key++}`}><InlineText text={label}/></h4>);
      continue;
    }
    const bullet = trimmed.match(/^[-*+]\s+(.+)$/);
    if (bullet) {
      flushParagraph(); const items: string[] = [];
      while (index < lines.length) { const item = lines[index].trim().match(/^[-*+]\s+(.+)$/); if (!item) break; items.push(item[1]); index += 1; }
      index -= 1; blocks.push(<ul key={`ul-${key++}`}>{items.map((item, itemIndex) => <li key={itemIndex}><InlineText text={item}/></li>)}</ul>); continue;
    }
    const numbered = trimmed.match(/^\d+\.\s+(.+)$/);
    if (numbered) {
      flushParagraph(); const items: string[] = [];
      while (index < lines.length) { const item = lines[index].trim().match(/^\d+\.\s+(.+)$/); if (!item) break; items.push(item[1]); index += 1; }
      index -= 1; blocks.push(<ol key={`ol-${key++}`}>{items.map((item, itemIndex) => <li key={itemIndex}><InlineText text={item}/></li>)}</ol>); continue;
    }
    if (/^---+$/.test(trimmed)) { flushParagraph(); blocks.push(<hr key={`hr-${key++}`}/>); continue; }
    paragraph.push(trimmed);
  }
  flushParagraph();
  return <div className="legal-document-body">{blocks}</div>;
}

export function LegalPage({ route }: { route: LegalRoute }) {
  const page = legalPages[route];
  const markdown = legalDocumentMarkdown[route];
  const outline = markdown.split('\n').flatMap(line => {
    const match = line.trim().match(/^##\s+(.+)$/);
    if (!match) return [];
    const label = match[1].replace(/\*\*/g, '');
    return [{ label, id: sectionId(label) }];
  });
  return <main className="legal-v2" id="main-content"><PageMotion/>
    <section className="legal-hero"><div><span className="page-kicker">LEGAL DOCUMENTS</span><h1>{page.title}</h1><p>{page.description}</p></div><div className="legal-source-card"><FileCheck2 size={24}/><span>FULL DOCUMENT</span><strong>Read the complete text here.</strong><p>This maintained legal document is published directly inside the BuildNinja website.</p><a className="button button-secondary" href="#legal-document">Start reading<ArrowDown size={15}/></a></div></section>
    <section className="legal-document-layout" id="legal-document"><aside><div className="legal-sidebar-sticky"><span>LEGAL INDEX</span><nav aria-label="Legal documents">{legalNavigation.map(([href,label])=><SiteLink key={href} href={`/${href}`} aria-current={href===route?'page':undefined}>{label}<ArrowRight size={12}/></SiteLink>)}</nav>{outline.length ? <div className="legal-outline"><span>ON THIS PAGE</span>{outline.map(item => <a key={item.id} href={`#${item.id}`}>{item.label}</a>)}</div> : null}</div></aside><article><div className="legal-document-mark"><FileText size={22}/><span>COMPLETE LEGAL TEXT</span></div><LegalDocument markdown={markdown}/></article></section>
    <section className="legal-contact"><div><span className="page-kicker">QUESTIONS ABOUT THIS DOCUMENT?</span><h2>Contact the BuildNinja team.</h2><p>Tell us which clause, purchase, or account your question concerns so it reaches the right person.</p></div><SiteLink className="button" href="/contact">Contact us<ArrowRight size={15}/></SiteLink></section>
  </main>;
}
