'use client';
import { SiteLink } from './site-context';

import { ArrowRight, ArrowUpRight, Boxes, Check, CircleCheck, Code2, GitBranch, LockKeyhole, Search, Server, ShieldCheck, Sparkles, Terminal, Workflow } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { ProductAISection } from "./ai-experience";
import { HeritageSection } from "./trust-sections";
import { SetupBadge, StackBackdrop, ToolConnections } from './product-visuals';
import { FeatureProductPreview } from './product-previews';
import { DeveloperPortalCallout } from './developer-page';

export function SectionLabel({children}:{children:React.ReactNode}) {
  return <div className="section-label"><span/>{children}</div>;
}

export function ProductImage({name,alt,compact=false}:{name:string;alt:string;compact?:boolean}) {
  if(name==='dashboard-overview'||name==='project-members'||name==='project-changes') return <div className="product-image custom-product-preview" role="group" aria-label={alt}><FeatureProductPreview kind={name} compact={compact}/></div>;
  return <div className="product-image"><img className="image-light" src={`/${name}-light.png`} alt={alt} loading="lazy"/><img className="image-dark" src={`/${name}-dark.png`} alt={alt} loading="lazy"/></div>;
}

export function AISection(){ return <><ProductAISection/><DeveloperPortalCallout/></>; }

export function FeatureBento() {
 return <BentoGrid className="feature-bento">
  <BentoGridItem className="ac-bento-item feature-wide" header={<><GlowingEffect disabled={false} spread={32} proximity={30} borderWidth={2} className="buildninja-glow"/><div className="bento-art"><div className="pipeline-mini"><div className="mini-toolbar"><GitBranch size={14}/> storefront-api <span>main</span></div>{[['Check out source','Git repository'],['Install dependencies','npm ci'],['Build & test','npm run build && npm test']].map((x,i)=><div className="pipeline-step" key={x[0]}><span>{i+1}</span><div><b>{x[0]}</b><code>{x[1]}</code></div><CircleCheck size={17}/></div>)}<div className="pipeline-result"><span className="live-dot"/> Build completed <span>2m 34s</span></div></div></div></>} icon={<Workflow size={18}/>} title={"Automate the repeatable work."} description={<p>Connect your Git repository, configure the steps, and set triggers for code changes or a schedule.</p>}/>
  <BentoGridItem className="ac-bento-item " header={<><GlowingEffect disabled={false} spread={32} proximity={30} borderWidth={2} className="buildninja-glow"/><div className="bento-art status-art"><div className="status-stack">{[['storefront-api','#248','Needs attention'],['desktop-client','#816','Passed'],['documentation','#124','Passed']].map((x,i)=><div key={x[0]}><span className={i===0?'status-mark warning':'status-mark'}>{i===0?'!':<Check size={12}/>}</span><div><b>{x[0]}</b><small>{x[1]} · {x[2]}</small></div><ArrowUpRight size={15}/></div>)}</div></div></>} icon={<Search size={18}/>} title={"See what needs attention."} description={<p>Follow build results, activity, agents, and queues in one shared workspace.</p>}/>
  <BentoGridItem className="ac-bento-item " header={<><GlowingEffect disabled={false} spread={32} proximity={30} borderWidth={2} className="buildninja-glow"/><div className="bento-art"><div className="agent-stack">{[['Linux','linux-agent-01'],['Windows','windows-agent-01'],['macOS','mac-agent-01']].map(x=><div key={x[0]}><Server size={19}/><div><b>{x[0]}</b><small>{x[1]}</small></div><span className="live-dot"/></div>)}</div></div></>} icon={<Server size={18}/>} title={"Your infrastructure. Your choice."} description={<p>Run builds on compatible Windows, Linux, and macOS agents in environments you manage.</p>}/>
  <BentoGridItem className="ac-bento-item feature-wide" header={<><GlowingEffect disabled={false} spread={32} proximity={30} borderWidth={2} className="buildninja-glow"/><div className="bento-art screenshot-art"><ProductImage name="project-members" alt="BuildNinja project membership and access controls" compact/></div></>} icon={<LockKeyhole size={18}/>} title={"Keep the team in the workflow."} description={<p>Bring project membership and permissions into the same place as your builds.</p>}/>
 </BentoGrid>;
}

const steps = [
 {id:'setup',n:'01',title:'Set up BuildNinja.',body:'Choose an installation method and connect a build agent.',heading:'Choose your environment',lines:['BuildNinja Server','Windows · Linux · macOS · Docker','Connect your database and build agents','Your environment is ready for a project.'],href:'/install',action:'Explore installation'},
 {id:'connect',n:'02',title:'Connect your repository.',body:'Add the steps and triggers your project needs.',heading:'Bring your existing workflow',lines:['GitHub · GitLab · Bitbucket','Repository → storefront-api','Branch → main','Trigger → on push','Steps → install · build · test'],href:'/features',action:'Explore the workflow'},
 {id:'run',n:'03',title:'Run and understand.',body:'Check the result, inspect the details, and decide what comes next.',heading:'Follow the build',lines:['✓ Source checked out','✓ Dependencies installed','✓ Application built','✓ Tests passed','Artifacts ready for your next step.'],href:'/dojo',action:'Try a sample project'},
];

export function GettingStarted({chapterLabel='HOW IT WORKS',sectionId}:{chapterLabel?:string;sectionId?:string}={}){
 return <section id={sectionId} className="section getting-started"><div className="section-heading centered"><SectionLabel>{chapterLabel}</SectionLabel><h2>Three steps to <span>a working build.</span></h2><p>Start with one project. Make the workflow your own.</p></div>
 <Tabs defaultValue="setup" orientation="vertical" className="setup-explorer"><TabsList className="setup-tabs" aria-label="Getting started steps">{steps.map(x=><TabsTrigger value={x.id} key={x.id}><span>{x.n}</span><div><h3>{x.title}</h3><p>{x.body}</p></div><ArrowRight size={17}/></TabsTrigger>)}</TabsList><div className="setup-output">{steps.map(x=><TabsContent value={x.id} key={x.id}><div className="setup-preview-layer"><SetupBadge step={x.id}/><div className="setup-terminal"><div className="source-title"><Terminal size={16}/><b>{x.heading}</b></div><div>{x.lines.map((line,i)=><p key={line}><span>{String(i+1).padStart(2,'0')}</span>{line}</p>)}</div><SiteLink href={x.href}>{x.action}<ArrowUpRight size={15}/></SiteLink></div></div></TabsContent>)}</div></Tabs>
 </section>;
}

const comparisons=[['GitHub Actions','Keep your code on GitHub while exploring a dedicated, self-hosted home for CI/CD.','github-actions'],['CircleCI','Compare deployment models, operating responsibility, and the costs that actually change.','circleci'],['Jenkins','Evaluate an integrated product beside the flexibility and maintenance of your Jenkins setup.','jenkins'],['TeamCity','Compare two self-hosted approaches using the agent capacity and workflow your team needs.','teamcity']];

export default function HomeSections(){
 return <>
 <section className="section problem-section"><div><SectionLabel>YOUR TEAM HAS SOFTWARE TO SHIP</SectionLabel><h2>A failed build should not<br/><span>take over the day.</span></h2></div><div><p>A failed run can pull the team away from planned work. Someone has to find the right logs, understand the configuration, and work out what to try next.</p><strong>BuildNinja brings those everyday tasks into one shared workflow.</strong></div></section>
 <GettingStarted/>
 <section className="section capability-section"><div className="section-heading centered"><SectionLabel>BUILT FOR YOUR DAILY WORKFLOW</SectionLabel><h2>A clearer path <span>from code to build.</span></h2><p>Automate the build. Keep the team informed. Stay in control.</p></div><FeatureBento/><div className="center-action"><SiteLink className="text-button" href="/features">Explore all features <ArrowRight size={16}/></SiteLink></div></section>
 <AISection/>
 <section className="section control-section"><div className="split-heading"><div><SectionLabel>RUN CI/CD YOUR WAY</SectionLabel><h2>Your infrastructure.<br/><span>Your build workflow.</span></h2></div><p>Choose where your server and agents run. Keep repository choice open and bring the build tools your team already uses.</p></div><ToolConnections/></section>
 <section className="section comparison-section"><div className="split-heading"><div><SectionLabel>FIND THE RIGHT FIT</SectionLabel><h2>Choose how<br/><span>your team delivers.</span></h2></div><p>Compare hosting, daily operations, migration work, and the costs that will actually change.</p></div><div className="comparison-grid">{comparisons.map((x,i)=><SiteLink href={'/compare/buildninja-vs-'+x[2]} key={x[0]}><span>0{i+1} / COMPARISON</span><h3>BuildNinja vs {x[0]} <ArrowUpRight size={19}/></h3><p>{x[1]}</p><em>Read the comparison <ArrowRight size={15}/></em></SiteLink>)}</div></section>
 <HeritageSection/>
 <section className="section faq-teaser"><div><SectionLabel>QUESTIONS BEFORE YOU START?</SectionLabel><h2>Clear answers.<br/><span>Before the next build.</span></h2><SiteLink className="text-button" href="/faq">Read all FAQs <ArrowRight size={15}/></SiteLink></div><div>{[['Can I try BuildNinja before installing it?','Yes. Dojo lets you explore sample projects and build workflows in a browser.'],['Does BuildNinja include AI?','Yes. BuildNinja comes with AI. Eligible accounts can claim free credits, with prepaid top-ups available when needed.'],['Does AI usage affect my builds?','AI requests use a separate credit balance. A zero balance pauses AI requests. If you add an AI Runner step, its configured threshold and error policy can affect the build result.']].map(x=><details key={x[0]}><summary>{x[0]}<span>+</span></summary><p>{x[1]}</p></details>)}</div></section>
 <section className="final-cta stack-cta"><StackBackdrop/><SectionLabel>YOUR NEXT BUILD STARTS HERE</SectionLabel><h2>Give your next build<br/><span>a clearer path.</span></h2><p>Bring pipelines, build visibility, and build intelligence into one workflow.</p><div><SiteLink className="button" href="/install">Get Started <ArrowRight size={16}/></SiteLink><SiteLink className="button button-secondary" href="/dojo">Try the live sandbox</SiteLink></div></section>
 </>;
}
