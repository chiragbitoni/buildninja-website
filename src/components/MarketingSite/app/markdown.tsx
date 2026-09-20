'use client';
import { SiteLink } from './site-context';

import React, { FormEvent, useEffect, useState } from 'react';
import { Activity, ArrowRight, CheckCircle2, Clock3, PlayCircle, Search, Send, Sparkles } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useTheme } from 'next-themes';
import { PhoneInput } from 'react-international-phone';
import posthog from 'posthog-js';
import { getCookie } from '@/lib/tracking/cookies';
import { sendContactEmail, sendPartnershipEmail, sendSupportEmail } from '@/services/email/sendEmail';
import { ProductImage, AISection } from './sections';
import { PageMotion } from './page-motion';
import { FeatureCatalogue } from './feature-catalogue';
import { CodeBlock } from '@/components/ui/code-block';
import { StackBackdrop, ToolConnections } from './product-visuals';
import { DeveloperPage } from './developer-page';
import { KenzoPage } from './kenzo-page';
import { AboutPage } from './about-page';
import { HeritageSection } from './trust-sections';
import { useMarketingMotion, useScenePlayback } from './animation-scenes';

type PageRecord = { title: string; seo: string; description: string; content: string };

type Block =
  | { type:'heading'; level:number; text:string }
  | { type:'p'; text:string }
  | { type:'list'; ordered:boolean; items:string[] }
  | { type:'table'; rows:string[][] }
  | { type:'code'; text:string; lang:string };

function getDojoUtmData() {
  let utmData: Record<string, string> = {};
  const rawUtm = getCookie('gh_utm');
  if (rawUtm) {
    try {
      const parsed = JSON.parse(rawUtm);
      utmData = {
        utm_source: parsed.source || '',
        utm_medium: parsed.medium || '',
        utm_campaign: parsed.campaign || '',
        utm_content: parsed.content || '',
      };
    } catch {}
  }
  if (!utmData.utm_source) {
    const params = new URLSearchParams(window.location.search);
    utmData = {
      utm_source: params.get('utm_source') || '',
      utm_medium: params.get('utm_medium') || '',
      utm_campaign: params.get('utm_campaign') || '',
      utm_content: params.get('utm_content') || '',
    };
  }
  return utmData;
}

function trackDojoClick(eventName: string) {
  posthog.capture(eventName, getDojoUtmData());
}

function getDojoSandboxUrl() {
  const configuredUrl = (process.env.NEXT_PUBLIC_DOJO_URL || '').trim().replace(/^["']|["']$/g, '');
  return configuredUrl || 'https://dojo.buildninja.io';
}

function blocksFrom(text:string): Block[] {
  const lines=text.replace(/\r/g,'').split('\n');
  const out:Block[]=[]; let i=0;
  const boundary=(line:string)=>!line.trim()||/^#{3,4} /.test(line)||/^(- |\d+\. )/.test(line)||line.startsWith('|')||line.startsWith('~~~');
  while(i<lines.length){
    const line=lines[i];
    if(!line.trim()){i++;continue;}
    const h=line.match(/^(#{3,4})\s+(.+)$/);
    if(h){out.push({type:'heading',level:h[1].length,text:h[2]});i++;continue;}
    if(line.startsWith('~~~')){
      const lang=line.slice(3); const body:string[]=[]; i++;
      while(i<lines.length&&!lines[i].startsWith('~~~')) body.push(lines[i++]);
      i++;out.push({type:'code',text:body.join('\n'),lang});continue;
    }
    if(line.startsWith('|')){
      const rows:string[][]=[];
      while(i<lines.length&&lines[i].startsWith('|')){
        const cells=lines[i].slice(1,-1).split('|').map(v=>v.trim());
        if(!cells.every(v=>/^:?-{3,}:?$/.test(v))) rows.push(cells);
        i++;
      }
      out.push({type:'table',rows});continue;
    }
    if(/^(- |\d+\. )/.test(line)){
      const ordered=/^\d+\. /.test(line); const items:string[]=[];
      while(i<lines.length && (ordered ? /^\d+\. /.test(lines[i]) : /^- /.test(lines[i]))){
        items.push(lines[i].replace(ordered?/^\d+\. /:/^- /,''));i++;
      }
      out.push({type:'list',ordered,items});continue;
    }
    const para=[line];i++;
    while(i<lines.length&&!boundary(lines[i])) para.push(lines[i++]);
    out.push({type:'p',text:para.join(' ')});
  }
  return out;
}

function inline(text:string):React.ReactNode[]{
  const pattern=/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|\`[^\`]+\`)/g;
  const result:React.ReactNode[]=[];let last=0;let m:RegExpExecArray|null;let k=0;
  while((m=pattern.exec(text))){
    if(m.index>last) result.push(text.slice(last,m.index));
    const token=m[0];
    const link=token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if(link) result.push(<SiteLink key={k++} href={localLink(link[2])}>{link[1]}</SiteLink>);
    else if(token.startsWith('**')) result.push(<strong key={k++}>{token.slice(2,-2)}</strong>);
    else result.push(<code key={k++}>{token.slice(1,-1)}</code>);
    last=m.index+token.length;
  }
  if(last<text.length)result.push(text.slice(last));
  return result;
}

const marketingRoutes = new Set(['','features','pricing','kenzo-ai','kenzo-ai-portal','install','dojo','compare','faq','resources','blog','about','contact','support','partners','privacy-policy','terms-of-service','eula','refund-and-cancellation-policy','kenzo-ai-terms','kenzo-ai-data-policy','compare/buildninja-vs-github-actions','compare/buildninja-vs-circleci','compare/buildninja-vs-jenkins','compare/buildninja-vs-teamcity']);
function localLink(href:string) {
  if (!href.startsWith('https://www.buildninja.io/')) return href;
  const url = new URL(href);
  return marketingRoutes.has(url.pathname.replace(/^\/|\/$/g,'')) ? url.pathname+url.search+url.hash : href;
}
function sectionId(title:string) {
  if(title==='BuildNinja comes with AI.')return 'ai-built-in';
  if(title==='Top up on your terms.')return 'kenzo-ai-credits';
  return title.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
}
function cleanCopy(content:string) {
  return content.split('\n').filter(line=>!/^\*\*(?:(?:Primary |Alternative |Video |Guide |Account |Tutorial |Map |Submit |Search |Clear |Copy )?[Aa]ctions?|Alternative|Release labels|Copied state|Search placeholder|No results|Categories|Submitting|Validation[^:]*|Verification message|Success|Error|Edition comparison labels|Breadcrumb|Contents label|Related reading label|Return link):\*\*/.test(line)).join('\n');
}
function BlockList({blocks}:{blocks:Block[]}){
  return <>{blocks.map((b,i)=>{
    if(b.type==='heading') return b.level===3?<h2 key={i}>{inline(b.text)}</h2>:<h3 key={i}>{inline(b.text)}</h3>;
    if(b.type==='p') {
      const product = b.text.match(/^\*\*(Dashboard|Project members|Project changes) image caption:\*\*\s*(.*)/);
      if(product) return <figure key={i}><ProductImage name={product[1]==='Dashboard'?'dashboard-overview':product[1]==='Project members'?'project-members':'project-changes'} alt={product[2]}/><figcaption>{product[2]}</figcaption></figure>;
      return <p key={i}>{inline(b.text)}</p>;
    }
    if(b.type==='list'){const Tag=b.ordered?'ol':'ul';return <Tag key={i}>{b.items.map((x,j)=><li key={j}>{inline(x)}</li>)}</Tag>;}
    if(b.type==='code')return <CodeBlock key={i} filename={b.lang==='yaml'?'configuration.yaml':'Terminal'} language={b.lang==='yaml'?'yaml':'bash'} code={b.text}/>;
    if(b.rows.length<1)return null;
    return <div className="table-wrap" key={i}><table><thead><tr>{b.rows[0].map((x,j)=><th key={j}>{inline(x)}</th>)}</tr></thead><tbody>{b.rows.slice(1).map((row,j)=><tr key={j}>{row.map((x,n)=><td key={n}>{inline(x)}</td>)}</tr>)}</tbody></table></div>;
  })}</>;
}

function splitSections(content:string){
  const pieces=cleanCopy(content).split(/(?=^### )/m).filter(x=>x.trim());
  return pieces.filter(raw=>!/^### (Credit purchase and balance messages|Sandbox messages|Shared article-page copy)/.test(raw)).map(raw=>({raw,blocks:blocksFrom(raw)}));
}

function PageHero({blocks,title,route}:{blocks:Block[];title:string;route:string}) {
 const heading = blocks.find(b=>b.type==='heading');
 const actionBlock=blocks.find(b=>b.type==='p'&&/^\[[^\]]+\]\(/.test(b.text));
 const links: {label:string;href:string;eventName?:string}[]=actionBlock?.type==='p'?[...actionBlock.text.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)].map(m=>({label:m[1],href:localLink(m[2])})):[];
 if(!links.length) links.push({label:route==='partners'?'Discuss a partnership':route==='dojo'?'Open live Dojo':'Get Started',href:route==='partners'?'#enquiry':route==='dojo'?getDojoSandboxUrl():'/install',eventName:route==='dojo'?'hero_dojo_clicked':undefined});
 return <section className="content-hero"><p className="page-kicker">{title}</p><h1>{heading?.type==='heading'?heading.text:title}</h1><BlockList blocks={blocks.filter(b=>b!==heading&&b!==actionBlock)}/><div className="page-actions">{links.slice(0,3).map((x,i)=>x.eventName?<a className={i===0?'button':'button button-secondary'} href={x.href} target="_blank" rel="noopener noreferrer" onClick={()=>trackDojoClick(x.eventName!)} key={x.href}>{x.label}{i===0?<ArrowRight size={15}/>:null}</a>:<SiteLink className={i===0?'button':'button button-secondary'} href={x.href} key={x.href}>{x.label}{i===0?<ArrowRight size={15}/>:null}</SiteLink>)}</div></section>;
}

function SectionBody({blocks,cards=false,visual=false}:{blocks:Block[];cards?:boolean;visual?:boolean}) {
 const subs=blocks.filter(b=>b.type==='heading'&&b.level===4);
 if(!cards||subs.length<2)return <BlockList blocks={blocks}/>;
 const start=blocks.findIndex(b=>b.type==='heading'&&b.level===4);
 const groups:Block[][]=[];
 blocks.slice(start).forEach(b=>{if(b.type==='heading'&&b.level===4)groups.push([b]);else groups.at(-1)?.push(b)});
 return <><BlockList blocks={blocks.slice(0,start)}/>{visual?<FeatureCatalogue items={groups.map(group=>({title:group[0].type==='heading'?group[0].text:'',description:<BlockList blocks={group.slice(1)}/>}))}/>:<div className="detail-card-grid">{groups.map((group,i)=><article className="detail-card" key={i}><BlockList blocks={group}/></article>)}</div>}</>;
}

function ContactBox({kind}:{kind:'contact'|'support'|'partners'}){
  const isPartner = kind === 'partners';
  const labels = isPartner
    ? ['Partnership type', 'Full name', 'Company email', 'Phone', 'Message']
    : ['Full name', 'Work email', 'Subject', 'Details'];
  const [form, setForm] = useState<Record<string, string>>(() => Object.fromEntries(labels.map(label => [label, ''])));
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<'success' | 'error' | 'pending' | null>(null);
  const { resolvedTheme } = useTheme();
  const captchaTheme = resolvedTheme === 'light' ? 'light' : 'dark';

  useEffect(() => {
    if (!isPartner) return;
    const params = new URLSearchParams(window.location.search);
    const utmData = {
      utm_source: params.get('utm_source') || '',
      utm_medium: params.get('utm_medium') || '',
      utm_campaign: params.get('utm_campaign') || '',
      utm_content: params.get('utm_content') || '',
    };
    if (utmData.utm_source) localStorage.setItem('utm_data', JSON.stringify(utmData));
    if (!utmData.utm_source && document.referrer && !localStorage.getItem('utm_data')) {
      localStorage.setItem('utm_data', JSON.stringify({ utm_source: document.referrer, utm_medium: 'referral' }));
    }
    let storedUtm: Record<string, string> = {};
    try {
      storedUtm = JSON.parse(localStorage.getItem('utm_data') || '{}');
    } catch {}
    const attribution = utmData.utm_source ? utmData : storedUtm;
    posthog.capture('partner_page_viewed', {
      page: 'partner-page',
      utm_source: attribution.utm_source || undefined,
      utm_medium: attribution.utm_medium || undefined,
      utm_campaign: attribution.utm_campaign || undefined,
      utm_content: attribution.utm_content || undefined,
    });
  }, [isPartner]);

  function updateField(label: string, value: string) {
    setForm(current => ({ ...current, [label]: value }));
  }

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!captchaToken || submitting) return;
    if (isPartner) {
      const digits = (form.Phone || '').replace(/\D/g, '');
      if (!(form.Phone || '').startsWith('+91') || !/^[6-9]\d{9}$/.test(digits.slice(2))) {
        setStatus('error');
        return;
      }
    }

    setSubmitting(true);
    setStatus('pending');
    try {
      let result;
      if (kind === 'contact') {
        result = await sendContactEmail({ name: form['Full name'], email: form['Work email'], subject: form.Subject, message: form.Details });
      } else if (kind === 'support') {
        result = await sendSupportEmail({ name: form['Full name'], email: form['Work email'], subject: form.Subject, message: form.Details });
      } else {
        result = await sendPartnershipEmail({ name: form['Full name'], email: form['Company email'], phone: form.Phone, partnershipType: form['Partnership type'] });
      }
      if (!result?.success) throw new Error(result?.message || 'The request could not be sent.');
      if (isPartner) {
        const utm = JSON.parse(localStorage.getItem('utm_data') || '{}');
        posthog.capture('partner_form_submitted', {
          page: 'partner-page',
          partnership_type: form['Partnership type'],
          utm_source: utm.utm_source || undefined,
          utm_medium: utm.utm_medium || undefined,
          utm_campaign: utm.utm_campaign || undefined,
          utm_content: utm.utm_content || undefined,
        });
      }
      setStatus('success');
      setForm(Object.fromEntries(labels.map(label => [label, ''])));
      setCaptchaToken(null);
    } catch {
      setStatus('error');
    } finally {
      setSubmitting(false);
    }
  }

  const buttonLabel = kind === 'partners' ? 'Discuss a partnership' : kind === 'support' ? 'Send support request' : 'Send message';
  return <form className="contact-box" onSubmit={submit} aria-busy={submitting}>
    <div className="form-heading"><span>START THE CONVERSATION</span><h2>{kind==='support'?'Tell us where you need help.':kind==='partners'?'Tell us where you see a fit.':'Tell us what your team needs to build.'}</h2></div>
    {status === 'pending' ? <p className="form-status is-pending" role="status" aria-live="polite">Sending your {kind === 'partners' ? 'enquiry' : kind === 'support' ? 'support request' : 'message'}…</p> : null}
    {status === 'success' ? <p className="form-status" role="status" aria-live="polite">{kind === 'partners' ? 'Thanks for sharing your idea. Your enquiry has been received, and we will reply by email.' : kind === 'support' ? 'Thanks. Your support request has been received. We will reply using the email address you provided.' : 'Thanks. Your message has been received. We will reply using the email address you provided.'}</p> : null}
    {status === 'error' ? <p className="form-status is-error" role="alert">{kind === 'partners' ? 'Your enquiry could not be sent. Please check the fields and try again or contact our team.' : kind === 'support' ? 'Your request could not be sent. Please try again or contact our team.' : 'Your message could not be sent. Please try again or email our team.'}</p> : null}
    <div className="form-grid">{labels.map((label, index) => {
      const fullWidth = label === 'Details' || label === 'Message' || label === 'Partnership type' || label === 'Phone';
      if (label === 'Phone') return <label className="field field-wide" key={label}>{label}<PhoneInput defaultCountry="in" value={form[label]} onChange={value => updateField(label, value)} /></label>;
      if (label === 'Partnership type') return <label className="field field-wide" key={label}>{label}<select required value={form[label]} onChange={event => updateField(label, event.target.value)}><option value="" disabled>Please select</option><option>Technology Partner</option><option>Reseller / Channel Partner</option><option>System Integrator</option></select></label>;
      const isLongText = label === 'Details' || label === 'Message';
      return <label className={'field'+(fullWidth?' field-wide':'')} key={label}>{label}{isLongText
        ? <textarea name={label} required rows={5} value={form[label]} onChange={event => updateField(label, event.target.value)} />
        : <input name={label} type={label.toLowerCase().includes('email')?'email':'text'} required value={form[label]} onChange={event => updateField(label, event.target.value)} />}</label>;
    })}</div>
    {kind === 'support' ? <p className="form-note">Relevant error text helps us understand the issue. Remove passwords, tokens, and other sensitive information before sharing it.</p> : null}
    <div className="captcha-container"><div className="captcha-inner"><ReCAPTCHA key={captchaTheme} sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} theme={captchaTheme} onChange={token => setCaptchaToken(token)} onExpired={() => setCaptchaToken(null)} /></div></div>
    <button className="button" type="submit" disabled={submitting || !captchaToken}>{submitting ? 'Sending…' : buttonLabel}<Send size={15}/></button>
    {kind === 'partners' ? <p className="form-note">Your phone number must use a valid Indian number starting with +91.</p> : null}
  </form>;
}

function GithubCalculator(){
  const data={5:['25','5,000','2,000','$12'],20:['100','20,000','17,000','$102'],50:['250','50,000','47,000','$282']} as const;
  const [size,setSize]=useState<keyof typeof data>(20);const d=data[size];
  return <div className="calculator"><div><span>ILLUSTRATIVE COST SCENARIO</span><h2>Explore a team-size preset.</h2><p>Five builds per developer per day, eight minutes per build, 25 build days per month.</p></div><div className="preset-buttons">{([5,20,50] as const).map(n=><button key={n} className={size===n?'active':''} onClick={()=>setSize(n)}>{n} developers</button>)}</div><div className="calc-grid"><div><small>BUILDS / DAY</small><strong>{d[0]}</strong></div><div><small>MINUTES / MONTH</small><strong>{d[1]}</strong></div><div><small>ABOVE ALLOWANCE</small><strong>{d[2]}</strong></div><div className="highlight"><small>HOSTED COMPUTE</small><strong>{d[3]}</strong><em>/month</em></div></div><p className="form-note">GitHub Team, standard Linux 2-core x64 hosted runners at $0.006/minute beyond 3,000 included minutes. This excludes subscriptions, storage, other runner types, AI, taxes, and operating effort.</p></div>
}

function DojoExplorer(){
 const enhanced=useMarketingMotion().enabled;
 const [legacyTab,setLegacyTab]=useState('Node');
 const [sampleId,setSampleId]=useState('lifecycle');
 const legacyText:{[k:string]:string}={Node:'npm ci  →  npm test  →  npm run build',Python:'pip install  →  pytest  →  package',Docker:'docker build  →  test image  →  publish'};
 const samples:{[k:string]:{label:string;short:string;pipeline:string;summary:string;url:string;agent:string}}={
  lifecycle:{label:'CI/CD Lifecycle Demo',short:'Lifecycle',pipeline:'mvn clean  →  compile  →  test  →  package  →  run',summary:'A Maven project that compiles, tests, packages, starts the application, captures logs, and publishes three artifacts.',url:'https://dojo.buildninja.io/projects/00000000-0000-0000-0000-000000000000/config/78ae3c28-ad2a-4861-82c7-6c19638e4d64?tab=overview',agent:'Windows agent'},
  yaml:{label:'CI/CD YAML Flow Demo',short:'YAML flow',pipeline:'pnpm install  →  unit test  →  Playwright  →  build  →  deploy',summary:'A declarative YAML workflow for a Vue application, including tests, a production build, a short deployment, and collected reports.',url:'https://dojo.buildninja.io/projects/00000000-0000-0000-0000-000000000000/config/54b26f0d-b7af-46c9-8914-e89a6d94c65b?tab=overview',agent:'Linux agent'},
  docker:{label:'Docker Playground',short:'Docker',pipeline:'create network  →  start container  →  health check  →  clean up',summary:'An ephemeral Docker environment with deterministic health checks, a short access window, automatic cleanup, and result artifacts.',url:'https://dojo.buildninja.io/projects/00000000-0000-0000-0000-000000000000/config/cf06838c-573e-4fd4-9ce3-9c9a81432ac8?tab=overview',agent:'Docker agent'},
  cmd:{label:'Native CMD Demo',short:'Native CMD',pipeline:'generate metadata  →  validate  →  promote  →  verify',summary:'A Windows CMD pipeline that carries metadata across steps, enforces a quality gate, promotes artifacts, and verifies their integrity.',url:'https://dojo.buildninja.io/projects/00000000-0000-0000-0000-000000000000/config/d3b08ab2-b335-4eee-a7b9-fcc7c46d9b34?tab=overview',agent:'Windows agent'}
 };
 const sample=samples[sampleId];
 const exercises=enhanced
  ?[['Review the configuration','Open Edit Configuration and inspect the repository, execution steps, artifacts, and matching agent','See exactly what the prepared build will run'],['Run the build','Select Run Build and follow the job through checkout and its configured runner steps','Watch the work move from queue to agent'],['Inspect the build evidence','Open a completed build and move through Overview, Execution Logs, Git Changes, and Artifacts','Connect the result to the output that produced it']]
  :[['Run your first build','Open a sample project and select Run','Watch the live log and result'],['Modify a trigger','Edit the Weekly schedule','See the upcoming-build timeline update'],['Simulate runner failure','Take a sample agent offline','See capacity and queue warnings appear']];
 const scene=useScenePlayback(12000);
 const [chosen,setChosen]=useState<number|null>(null);
 const active=chosen??Math.min(2,Math.floor(scene.time/4000));
 const exerciseIcons=[Search,PlayCircle,Activity];
 return <div className={'dojo-explorer'+(enhanced?' dojo-explorer-motion':'')}>
  <div><span>CHOOSE A LIVE DOJO PROJECT</span><h2>Follow a real build from configuration to evidence.</h2>{enhanced?<p className="dojo-intro">Dojo currently includes four prepared projects. This tour follows the same controls and labels you will see in the live sandbox.</p>:null}</div>
  {enhanced?<div className="dojo-project-picker">{Object.entries(samples).map(([id,item])=><button className={sampleId===id?'active':''} onClick={()=>setSampleId(id)} key={id}><span>{item.short}</span><small>{item.agent}</small></button>)}</div>:<div className="preset-buttons">{Object.keys(legacyText).map(x=><button className={legacyTab===x?'active':''} onClick={()=>setLegacyTab(x)} key={x}>{x}</button>)}</div>}
  <div className="dojo-terminal"><div><i/><i/><i/><span>{enhanced?sample.label:`sample-${legacyTab.toLowerCase()} / pipeline`}</span></div><code>{enhanced?sample.pipeline:legacyText[legacyTab]}</code><p>{enhanced?sample.summary:<><b>BuildNinja AI</b> can explain this configuration, analyze a sample failed log, or review potential build risks.</>}</p></div>
  {enhanced?<a className="dojo-open-project" href={sample.url} target="_blank" rel="noopener noreferrer">Open {sample.label} in Dojo <ArrowRight size={14}/></a>:null}
  <div className="dojo-facts"><article><b>{enhanced?'Four prepared projects':'Template projects'}</b><p>{enhanced?'Compare a full lifecycle build, a YAML workflow, an ephemeral Docker environment, and a native CMD pipeline.':'Node, Python, and Docker samples are ready to explore without configuring a repository first.'}</p></article><article><b>Automatic authentication</b><p>No separate login is required. Dojo opens with a temporary sandbox session.</p></article><article><b>Six-hour persistence</b><p>Your sample changes remain available until the next six-hour reset, then the sandbox starts fresh.</p></article></div>
  <div className="dojo-exercises" ref={enhanced?scene.ref:undefined}><span>{enhanced?'YOUR FIRST BUILD, IN THREE STEPS':'SUGGESTED EXERCISES'}</span>{enhanced?<>
   <div className="dojo-exercise-cards">{exercises.map((row,i)=>{const Icon=exerciseIcons[i];return <button type="button" className="dojo-exercise-card" key={row[0]} data-active={active===i} aria-pressed={active===i} onClick={()=>{setChosen(i);scene.setPaused(true)}}><div className="dojo-exercise-visual" aria-hidden="true"><span><Icon size={17}/></span>{i===0?<div className="dojo-mini-build"><i/><i/><i/><i/></div>:i===1?<div className="dojo-mini-timeline"><i/><i/><i/><i/><b>RUN</b></div>:<div className="dojo-mini-results"><i/><i/><i/></div>}</div><small>0{i+1}</small><h3>{row[0]}</h3><p>{row[1]}</p><strong><Activity size={13}/>{row[2]}</strong></button>})}</div>
   <div className="dojo-mission-stage" id="guided-dojo-tour" key={active}>
    <div className="dojo-mission-copy"><span>LIVE PRODUCT TOUR · 0{active+1}</span><h3>{exercises[active][0]}</h3><p>{active===0?`Open ${sample.label}, then use Edit Configuration to see the build definition before running it.`:active===1?'Select Run Build. BuildNinja checks out the repository, assigns a matching agent, and executes the configured steps.':'Open a completed build from History. The result keeps timing, step status, logs, source changes, and downloadable artifacts together.'}</p><ol>{active===0?<><li data-current><CheckCircle2 size={13}/>Open {sample.label}</li><li><Activity size={13}/>Select Edit Configuration</li><li><Clock3 size={13}/>Review VCS, steps, artifacts, and agent criteria</li></>:active===1?<><li data-done><CheckCircle2 size={13}/>Review the build definition</li><li data-current><PlayCircle size={13}/>Select Run Build</li><li><Clock3 size={13}/>Follow checkout and runner steps</li></>:<><li data-done><CheckCircle2 size={13}/>Open History</li><li data-current><Search size={13}/>Select a completed build</li><li><Activity size={13}/>Inspect logs, changes, and artifacts</li></>}</ol></div>
    <div className="dojo-mission-workspace" data-mission={active}><div className="dojo-workspace-top"><span><i/>Dojo / {sample.label}</span><b>{active===0?'Edit Configuration':active===1?'Build running':'Build details'}</b></div>{active===0?<div className="dojo-run-board dojo-config-board"><div><span>VCS Settings</span><b>Repository connected</b></div><div><span>Execution Steps</span><b>Configured</b></div><div><span>Artifacts</span><b>Published on success</b></div><div><span>Agents Criteria</span><b>{sample.agent}</b></div><em><i/>Configuration ready to run</em></div>:active===1?<div className="dojo-schedule-board"><div><span>Queue</span><span>Checkout</span><span>Build</span><span>Test</span><span>Artifacts</span></div><b>{sample.short}</b><i/><small>Executing on a matching {sample.agent.toLowerCase()}</small></div>:<div className="dojo-result-board"><div><span>Overview</span><b>Completed</b></div><div><span>Execution Logs</span><b>Step output</b></div><div><span>Git Changes</span><b>Source context</b></div><div><span>Artifacts</span><b>Downloads</b></div><small><CheckCircle2 size={14}/>Every result stays connected to its evidence</small></div>}</div>
   </div>
   <p className="dojo-motion-note"><i/>{chosen===null?'The preview follows one complete sample build. Choose a step to take control.':'You chose this step. Open Dojo to try it in the live sandbox.'}</p>
  </>:<div className="table-wrap"><table><thead><tr><th>Exercise</th><th>What you do</th><th>What to observe</th></tr></thead><tbody>{exercises.map(row=><tr key={row[0]}>{row.map((cell,i)=><td key={cell}>{i===0?<b>{cell}</b>:cell}</td>)}</tr>)}</tbody></table></div>}</div>
 </div>;
}
function DojoAICallout(){
 return <section className="dojo-ai-invite"><div className="dojo-ai-copy"><span className="page-kicker">TRY AI IN DOJO</span><h2>Ask for help inside the sample workflow.</h2><p>Open a prepared example and try one supported AI action alongside the configuration, log, or report it uses.</p><SiteLink className="button" href="https://www.buildninja.io/dojo"><Sparkles size={15}/>Open Dojo<ArrowRight size={15}/></SiteLink></div><div><div className="dojo-ai-list">{[['01','Explain a configuration','Understand its steps and settings before deciding what to inspect.'],['02','Analyze a failed log','Find errors and possible causes worth investigating.'],['03','Review AI Analysis','Explore severity and file findings from an available sample report.']].map(([n,title,body])=><div key={n}><span>{n}</span><p><strong>{title}</strong>{body}</p></div>)}</div><p className="dojo-ai-note"><Sparkles size={14}/>Dojo uses a shared AI allowance. It does not spend credits from your account.</p></div></section>;
}

function DojoQuestions(){
 const questions=[
  ['Can I try BuildNinja without installing it?','Yes. Dojo opens in your browser with prepared sample projects and a temporary authenticated session.'],
  ['What happens to changes I make?','The sandbox resets every six hours. Download anything you want to keep before the next reset.'],
  ['Does Dojo use my purchased AI credits?','No. AI examples in Dojo use a separate shared allowance and show when access resets if it runs out.'],
  ['What should I do when the sample fits?','Install BuildNinja on your infrastructure, then connect a representative project for your team.']
 ];
 return <section className="dojo-questions" id="know-what-fits-before-you-set-up"><div className="dojo-questions-intro"><span className="page-kicker">BEFORE YOU SET UP</span><h2>Know what stays.<br/>Know what resets.</h2><p>Dojo is for evaluation. The workflow is real enough to explore; the workspace and sample changes are temporary.</p><div><SiteLink className="button button-secondary" href="/install">Get Started<ArrowRight size={14}/></SiteLink><SiteLink className="text-button" href="/pricing">See pricing<ArrowRight size={14}/></SiteLink></div></div><div className="dojo-question-list">{questions.map(([question,answer],i)=><article key={question}><span>0{i+1}</span><div><h3>{question}</h3><p>{answer}</p></div></article>)}</div></section>;
}

type BlogPostRecord = { slug:string; title:string; excerpt?:string; firstPublishedDate?:string; author?:string; minutesToRead?:number };

function BlogPostCopy({post}:{post:BlogPostRecord}){
 const published=post.firstPublishedDate?new Date(post.firstPublishedDate).toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'}):'';
 return <><h3>{post.title}</h3>{post.excerpt?<p>{post.excerpt}</p>:null}<p className="blog-post-meta"><strong>Published:</strong> {published || 'Date unavailable'} · <strong>Author:</strong> {post.author || 'BuildNinja Team'} · <strong>Reading time:</strong> {post.minutesToRead || 5} minutes</p><p><SiteLink href={`/blog/${post.slug}`}>Read the article</SiteLink></p></>;
}

export function ContentPage({page,route,blogPosts=[]}:{page:PageRecord;route:string;blogPosts?:BlogPostRecord[]}){
 const enhanced=useMarketingMotion().enabled;
 if(route==='kenzo-ai')return <KenzoPage/>;
 if(route==='kenzo-ai-portal')return <DeveloperPage/>;
 if(route==='about'&&enhanced)return <AboutPage/>;
 const sections=splitSections(page.content);
 const isForm=(['contact','support','partners'] as string[]).includes(route);
 return <main className={'content-page'+(route==='features'?' features-page':'')} id="main-content"><PageMotion/>
   <div className="content-sections"><PageHero blocks={sections[0].blocks} title={page.title} route={route}/>{sections.slice(1).map((s,i)=>{
    const heading=s.blocks[0];const title=heading.type==='heading'?heading.text:'';
    if(isForm&&/^(Start a conversation|Send a support request|Tell us where you see a fit)/.test(title))return <div id="enquiry" key={i}><ContactBox kind={route as 'contact'|'support'|'partners'}/></div>;
    if(route==='features'&&title==='BuildNinja comes with AI.')return <AISection key={i}/>;
    if(route==='features'&&title==='See the state of your builds before the next status meeting.')return <section className="content-section screenshot-story" id={sectionId(title)} key={i}><div className="story-rail"><div className="story-rail-inner"><span className="chapter-label">A SHARED OVERVIEW</span><BlockList blocks={s.blocks.filter(b=>b.type!=='p'||!b.text.startsWith('**Dashboard image caption:'))}/></div></div><div className="screenshot-story-image"><BlockList blocks={s.blocks.filter(b=>b.type==='p'&&b.text.startsWith('**Dashboard image caption:'))}/></div></section>;
    if(route==='dojo'&&title==='Start with a familiar example.')return <DojoExplorer key={i}/>;
    if(route==='dojo'&&title==='Give yourself a useful first tour.')return null;
    if(route==='dojo'&&enhanced&&title==='Try the AI that comes with BuildNinja.')return <DojoAICallout key={i}/>;
    if(route==='dojo'&&enhanced&&title==='Know what fits before you set up.')return <DojoQuestions key={i}/>;
    if(route==='blog'&&blogPosts.length&&title==='Start with the cost of your next decision.')return <section className="content-section" id={sectionId(title)} key={i}><BlockList blocks={s.blocks.slice(0,1)}/><BlogPostCopy post={blogPosts[0]}/></section>;
    if(route==='blog'&&blogPosts.length&&title==='More from the blog.')return <section className="content-section" id={sectionId(title)} key={i}><BlockList blocks={s.blocks.slice(0,1)}/><div className="detail-card-grid">{blogPosts.slice(1).map(post=><article className="detail-card" key={post.slug}><BlogPostCopy post={post}/></article>)}</div></section>;
    return <section className="content-section" id={sectionId(title)} key={i}>
      {route==='features'&&title==='Work with the stack you already use.'?<><BlockList blocks={s.blocks.slice(0,1)}/><ToolConnections/><BlockList blocks={s.blocks.slice(1)}/></>:<SectionBody blocks={s.blocks} cards={['features','resources','blog','compare','partners'].includes(route)} visual={route==='features'&&title==='Automate the build. Keep the team informed.'}/>}
    </section>;
   })}</div>
   {route==='compare/buildninja-vs-github-actions'?<GithubCalculator/>:null}
   {route==='about'&&!enhanced?<HeritageSection/>:null}
   <section className="page-end stack-cta"><StackBackdrop/><span>READY FOR THE NEXT STEP?</span><h2>Give your next build a clearer path.</h2><div><SiteLink className="button" href="/install">Get Started <ArrowRight size={15}/></SiteLink>{route === 'dojo' ? <a className="text-button" href={getDojoSandboxUrl()} target="_blank" rel="noopener noreferrer" onClick={() => trackDojoClick('cta_dojo_clicked')}>Try the live sandbox</a> : <SiteLink className="text-button" href="/dojo">Try the live sandbox</SiteLink>}</div></section>
 </main>;
}
