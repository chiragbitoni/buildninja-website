'use client';
import { SiteLink } from './site-context';
import type { ReactNode } from 'react';
import { GitBranch, Check, Server, ShieldCheck, Terminal, Bell, Package, Play, Workflow, ArrowRight, Layers, LockKeyhole } from 'lucide-react';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { FeatureProductPreview } from './product-previews';
import { useMarketingMotion } from './animation-scenes';
import { env } from '@/lib/config/env';

const icons=[Workflow,GitBranch,Package,Layers,Server,LockKeyhole,ShieldCheck,Terminal,Bell,Server];
const demoVideos = [
 {id:'5wFDALkVM0Y',label:'Watch build automation demo'},
 {id:'YOpVrKIF8wE',label:'Watch Git integration demo'},
 {id:'NJHpySRbJNs',label:'Watch artifacts and deployment demo'},
 {id:'Pjl3muKtmhE',label:'Watch dashboard demo'},
 {id:'MnvaPLguA6c',label:'Watch agent management demo'},
 {id:'C-Ln6bbGo2E',label:'Watch access management demo'},
 {id:'O5-JHWbqzyQ',label:'Watch SSO demo'},
 {id:'IOd9CmP6G4c',label:'Watch pipeline runners demo'},
 {id:'2OuADSNMEoc',label:'Watch notifications demo'},
 {id:'zOW9BCYQkxk',label:'Watch installation demo'},
];
const chapters = [
 {number:'01',label:'BUILD WORKFLOW',title:'A clearer path from code to build.',description:'Connect your repository, configure the steps, and keep the outputs your project needs.',items:[0,1,7,2],href:'/install',action:'Set up your first project'},
 {number:'02',label:'BUILD VISIBILITY',title:'See what needs attention.',description:'Follow results, inspect a run, and keep the right people informed.',items:[3,8],href:'/#product-demo',action:'Explore the interactive dashboard'},
 {number:'03',label:'INFRASTRUCTURE & ACCESS',title:'Your infrastructure. Your choice.',description:'Choose compatible build environments and bring your team into the workflow.',items:[4,5,6,9],href:'/install',action:'Explore installation'},
];
function MiniRow({label,detail,icon:Icon=Check}:{label:string;detail:string;icon?:typeof Check}) {
 return <div className="catalogue-mini-row"><span><Icon size={15}/></span><div><b>{label}</b><small>{detail}</small></div><span className="live-dot"/></div>;
}
function Visual({index}:{index:number}) {
 if(index===3||index===5)return <div className="catalogue-product-preview"><FeatureProductPreview kind={index===3?'dashboard-overview':'project-members'} compact/></div>;
 if(index===0)return <div className="catalogue-mini"><div className="mini-toolbar"><GitBranch size={14}/> main <span>ON PUSH</span></div>{[['Checkout source','Connect your repository'],['Build & test','Run configured steps'],['Keep the output','Store build artifacts']].map(x=><MiniRow key={x[0]} label={x[0]} detail={x[1]}/>)}</div>;
 if(index===1)return <div className="repository-visual"><div>{['GitHub','GitLab','Bitbucket'].map(x=><span key={x}><GitBranch size={19}/>{x}</span>)}</div><div className="repo-connector"/><div className="repo-destination"><Workflow size={20}/> BuildNinja <span>Connected workflow</span></div></div>;
 if(index===2)return <div className="catalogue-mini"><div className="mini-toolbar"><Package size={14}/> Build artifacts <span>#248</span></div><MiniRow label="application.zip" detail="Packaged build output" icon={Package}/><MiniRow label="test-results.xml" detail="Results for this run" icon={Package}/><div className="artifact-route">Build <ArrowRight size={13}/> Store <ArrowRight size={13}/> Deliver</div></div>;
 if(index===4||index===9)return <div className="catalogue-mini os-options">{['Windows','Linux','macOS'].map(x=><MiniRow key={x} label={x} detail={index===4?'Compatible build agent':'Server and agent setup'} icon={Server}/>)}</div>;
 if(index===6)return <div className="catalogue-mini"><div className="mini-toolbar"><ShieldCheck size={15}/> Team sign-in</div><MiniRow label="Google" detail="Your workspace identity" icon={ShieldCheck}/><MiniRow label="Microsoft Entra ID" detail="Your organization account" icon={ShieldCheck}/></div>;
 if(index===7)return <div className="runner-preview"><div><Terminal size={14}/> Configured build steps</div><code><span>01</span> npm ci</code><code><span>02</span> npm run build</code><code><span>03</span> npm test</code><p>Commands · Scripts · SSH · .NET</p></div>;
 return <div className="notification-preview"><span><Bell size={20}/></span><div><small>BUILD UPDATE</small><b>Production pipeline completed</b><p>storefront-api · main</p><div><Check size={13}/> Passed <span>View build →</span></div></div></div>;
}

export function FeatureCatalogue({items}:{items:{title:string;description:ReactNode}[]}) {
 const enhanced=useMarketingMotion().enabled;
 const featureChapters=enhanced?chapters.map(chapter=>chapter.number==='02'?{...chapter,label:'BUILD NOTIFICATIONS',title:'Keep the right people informed.',description:'Send useful build updates through your configured email service, with enough context for the team to respond.',items:[8],href:`${env.DOCUMENTATION_URL.replace(/\/+$/,'')}/manage-projects-and-builds/configure-build-notification-settings`,action:'Explore notification settings'}:chapter):chapters;
 return <div className="feature-catalogue">{featureChapters.map(chapter=><section className={'feature-chapter chapter-'+chapter.number} key={chapter.number} aria-labelledby={'chapter-'+chapter.number}>
  <div className="story-rail"><div className="story-rail-inner"><span className="chapter-label">{chapter.number} / {chapter.label}</span><h3 id={'chapter-'+chapter.number}>{chapter.title}</h3><p>{chapter.description}</p><SiteLink className="text-button" href={chapter.href}>{chapter.action}<ArrowRight size={15}/></SiteLink></div></div>
  <BentoGrid className="chapter-panels">{chapter.items.map(index=>{const item=items[index];if(!item)return null;const Icon=icons[index]||Workflow;const demo=demoVideos[index];return <BentoGridItem key={item.title} headingTag="h4" className={'ac-bento-item catalogue-card '+(index===3?'catalogue-overview':'')}
    title={item.title} description={<>{item.description}{demo?<SiteLink className="feature-demo-link" href={`https://www.youtube.com/watch?v=${demo.id}`} target="_blank" rel="noreferrer"><Play size={13}/> {demo.label}</SiteLink>:null}</>}
    icon={<Icon size={18}/>}
    header={<><GlowingEffect disabled={false} borderWidth={2} spread={30} proximity={25} className="buildninja-glow"/><div className={'catalogue-art catalogue-art-'+index}><Visual index={index}/></div></>}/>;})}</BentoGrid>
 </section>)}</div>;
}
