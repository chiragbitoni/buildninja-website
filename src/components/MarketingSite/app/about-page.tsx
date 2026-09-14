'use client';

import { ArrowRight, ArrowUpRight, BookOpenCheck, CheckCircle2, Globe2, Headphones, ShieldCheck, Workflow } from 'lucide-react';
import { SiteLink } from './site-context';

const principles = [
  {Icon:Workflow,title:'Keep the evidence together.',body:'Bring steps, logs, source changes, and results into the same build workflow so the next investigation starts with context.'},
  {Icon:ShieldCheck,title:'Let AI assist the decision.',body:'Use build intelligence to explain and prioritize signals while your team reviews the evidence and decides what changes.'},
  {Icon:Globe2,title:'Run where your software lives.',body:'Keep the CI/CD platform and build agents on infrastructure your team controls across Windows, Linux, macOS, Docker, and Kubernetes.'},
  {Icon:Headphones,title:'Keep support close.',body:'Back the product with practical documentation and direct help from people who understand the workflow.'},
];

const milestones = [
  {year:'2000',era:'THE FOUNDATION',title:'Testing and developer support',body:'GrapeCity India began with component testing and technical support for software used by developers in the United States.'},
  {year:'2002–04',era:'GLOBAL PRODUCT WORK',title:'Localization, quality, and long-term partnerships',body:'The team expanded into Japanese-market localization testing, ComponentOne product quality, and a 13-year LeadTools partnership.'},
  {year:'2010–17',era:'DEEPER OWNERSHIP',title:'Support, installers, and documentation',body:'Work grew across ActiveReports, Wijmo, ActiveReports Server, ComponentOne installer development, and product documentation.'},
  {year:'2020',era:'PRODUCT QUALITY AT SCALE',title:'Automation, manual, and localization testing',body:'The team tested the Wijmo component suite across US and Japanese markets with connected quality practices.'},
  {year:'2023',era:'FULL RELEASE RESPONSIBILITY',title:'Product engineering and release cycles',body:'GrapeCity India took complete ownership of Wijmo component development and releases.'},
  {year:'2025',era:'BUILDNINJA BETA',title:'The BuildNinja beta launches',body:'Near the end of 2025, BuildNinja launched in beta, bringing the team’s self-hosted CI/CD work into a product teams could begin using and evaluating.'},
  {year:'TODAY',era:'BUILDNINJA',title:'That experience now shapes the build workflow',body:'BuildNinja brings self-hosted CI/CD, product visibility, documentation, support, and built-in AI into one product.'},
];

export function AboutPage(){
  return <main className="about-v2" id="main-content">
    <section className="about-hero">
      <div className="about-hero-copy"><span className="page-kicker">GRAPECITY INDIA · SINCE 2000</span><h1>Experience behind<br/><span>every build.</span></h1><p>Your team has software to ship. BuildNinja is shaped by people who have spent more than two decades testing, engineering, documenting, and supporting developer products.</p><div className="page-actions"><SiteLink className="button" href="/features">Explore BuildNinja<ArrowRight size={15}/></SiteLink><SiteLink className="button button-secondary" href="/contact">Talk to our team</SiteLink></div></div>
      <div className="about-proof-board" aria-label="GrapeCity India experience"><div className="about-proof-brand"><span>BUILT AND SUPPORTED BY</span><p><a href="https://www.grapecity.in/" target="_blank" rel="noreferrer"><img src="/brand/grapecity.svg" alt="GrapeCity"/> India</a></p></div><div className="about-proof-number"><strong>25+</strong><span>years of developer-tools experience</span></div><div className="about-proof-statement"><span>EXPERIENCE CARRIED INTO THE PRODUCT</span><strong>Engineering, quality, documentation, and support working as one release discipline.</strong></div><div className="about-proof-footer"><span><CheckCircle2 size={14}/>Self-hosted control</span><span><CheckCircle2 size={14}/>Build evidence in context</span><span><CheckCircle2 size={14}/>People-backed support</span></div></div>
    </section>

    <section className="about-intro"><div><span className="page-kicker">WHY BUILDNINJA</span><h2>Turn build evidence into release confidence.</h2></div><div><p>Release teams should spend their time shipping, not piecing together logs, configuration changes, and failed checks.</p><p>BuildNinja brings that evidence into one workflow, then uses practical build intelligence to help teams understand what changed and decide what to do next.</p><SiteLink className="text-button" href="/features">See how BuildNinja works<ArrowRight size={14}/></SiteLink></div></section>

    <section className="about-company-context" id="company"><div className="about-company-context-media"><div className="about-company-image-grid"><img src="/brand/grapecity-india-campus-clear.png" alt="Front entrance of the GrapeCity India office in Noida" loading="lazy"/><img src="https://static.wixstatic.com/media/81da1e_d9002574bf084d68b9f5515839754473~mv2.jpg/v1/fill/w_980,h_491,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/81da1e_d9002574bf084d68b9f5515839754473~mv2.jpg" alt="GrapeCity India team outside the Noida office" loading="lazy"/></div><span>GRAPECITY INDIA · NOIDA</span></div><div><span className="page-kicker">THE PEOPLE BEHIND THE PRODUCT</span><h2>A company built around developer tools.</h2><p>GrapeCity India’s engineering, testing, documentation, and support work has grown alongside the products it helps teams use. BuildNinja carries that practical experience into the release workflow.</p><a className="text-button" href="https://www.grapecity.in/" target="_blank" rel="noreferrer">Visit GrapeCity India<ArrowUpRight size={14}/></a></div></section>

    <section className="about-principles"><div className="about-section-heading"><span className="page-kicker">HOW EXPERIENCE SHAPES BUILDNINJA</span><h2>Build intelligence grounded in the work.</h2><p>Each product choice starts with the evidence, infrastructure, and people involved in getting software released.</p></div><div className="about-principle-grid">{principles.map(({Icon,title,body},i)=><article key={title}><span>0{i+1}</span><Icon size={20}/><h3>{title}</h3><p>{body}</p></article>)}</div></section>

    <section className="about-timeline"><div className="about-timeline-intro"><span className="page-kicker">OUR STORY</span><h2>A short history of the work behind BuildNinja.</h2><p>These milestones show how product quality, support, documentation, and engineering experience came together.</p></div><div className="about-timeline-list">{milestones.map((item,i)=><article key={item.year}><div><strong>{item.year}</strong></div><span>{item.era}</span><h3>{item.title}</h3><p>{item.body}</p>{i===milestones.length-1?<SiteLink href="/features">See the product experience<ArrowUpRight size={14}/></SiteLink>:null}</article>)}</div></section>

    <section className="about-confidence"><BookOpenCheck size={25}/><div><span className="page-kicker">WHAT THAT MEANS FOR YOUR TEAM</span><h2>A clearer workflow, backed by people.</h2><p>Use BuildNinja to automate the repeatable work, keep build evidence together, and understand the next step. Use our documentation and support when your team needs a hand.</p></div><div><SiteLink className="button" href="/dojo">Try the live sandbox<ArrowRight size={15}/></SiteLink><SiteLink className="text-button" href="/contact">Talk to the team<ArrowRight size={14}/></SiteLink></div></section>
  </main>;
}
