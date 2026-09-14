
'use client';

import { ArrowRight, ArrowUpRight, Check, GitBranch, Layers, LayoutDashboard, Play, Server, ShieldCheck, Sparkles, Terminal, Users } from 'lucide-react';
import { useState } from 'react';
import { AnimatedHeading, AnimatedPipeline, AnimatedAIStory, AnimatedAgentNetwork, AnimatedToolStrip, useScenePlayback } from './animation-scenes';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DashboardDemo } from './dashboard-preview';
import { FeatureProductPreview } from './product-previews';
import { ProductAISection } from './ai-experience';
import { DeveloperPortalCallout } from './developer-page';
import { SiteLink } from './site-context';
import { GettingStarted } from './sections';
import { PageMotion } from './page-motion';
import catalog from './data/edition-entitlements.json';
import faqCategories from './data/faqs.json';
import { env } from '@/lib/config/env';
import { describeKenzoPlans, formatPlanPrice, getPlanOrderUrl } from '@/services/plans/plans';

function CenteredHeading({ label, title, emphasis, description }: { label:string; title:string; emphasis:string; description:string }) {
  return <div className="cf-centered cf-reveal"><span className="cf-pill"><Layers size={12}/>{label}</span><AnimatedHeading title={title} emphasis={emphasis}/><p>{description}</p></div>;
}

function PricingOverview({ plansData }) {
  const activePlans = plansData?.byProduct?.BuildNinja || [];
  const cycles = ['Monthly', 'Yearly', '2-Years', '3-Years'];
  const accountUrl = env.MY_ACCOUNT || 'https://myaccount.grapehub.io';
  const lowestKenzoPlan = [...(plansData?.byProduct?.KenzoAI || [])]
    .filter(plan => Number(plan.price) > 0)
    .sort((a, b) => Number(a.price) - Number(b.price))[0];
  const growthPlan = activePlans.find(plan => Number(plan.price) === 0 && String(plan.name || '').toLowerCase().includes('growth'));
  const growthOrderUrl = getPlanOrderUrl(growthPlan, accountUrl);

  return <section className="cf-pricing" id="editions"><CenteredHeading label="Plans & credits" title="Choose the edition that fits." emphasis="Keep every cost clear." description="Growth is free. Shogun removes the published platform limits with a one-time payment for the selected term. AI uses separate prepaid credits."/><Tabs defaultValue="0" className="cf-price-tabs"><TabsList className="cf-term-tabs" aria-label="Compare Shogun license terms">{catalog.shogunTerms.map((term,i)=><TabsTrigger value={String(i)} key={term.label}>{term.label}</TabsTrigger>)}</TabsList>{catalog.shogunTerms.map((term,i)=>{const shogunPlan=activePlans.find(plan=>plan.billingCycle===cycles[i]&&Number(plan.price)>0);const shogunPrice=Number(shogunPlan?.price??term.price);const shogunOrderUrl=getPlanOrderUrl(shogunPlan,accountUrl);return <TabsContent value={String(i)} key={term.label}><div className="cf-price-grid"><article><span className="cf-mini-eyebrow">FREE PLATFORM EDITION</span><h3>Growth</h3><p>Use the full BuildNinja workflow within the published limits.</p><div className="cf-price">Free<small>Free edition · no license term or renewal</small></div><SiteLink className="button button-secondary" href={growthOrderUrl}>Choose Growth<ArrowUpRight size={14}/></SiteLink><ul>{['10 users, projects, and configurations','10 agents and concurrent builds','30-day build history','1 supported SSO provider'].map(value=><li key={value}><Check size={13}/>{value}</li>)}</ul></article><article className="cf-price-featured"><span className="cf-mini-eyebrow">PUBLISHED LIMITS REMOVED</span><h3>Shogun</h3><p>Remove the published limits on users, projects, agents, concurrent builds, and history, with all 5 supported SSO providers.</p><div className="cf-price">${shogunPrice.toLocaleString('en-US')}<span> / {term.period}</span><small>USD · One-time payment · {term.validity}</small></div><SiteLink className="button" href={shogunOrderUrl}>Choose Shogun<ArrowUpRight size={14}/></SiteLink><ul>{['Unlimited users, projects, and configurations','Unlimited agents and concurrent builds','Unlimited build history','All 5 supported SSO providers'].map(value=><li key={value}><Check size={13}/>{value}</li>)}</ul></article><article><span className="cf-mini-eyebrow">PLANNING A LARGER ROLLOUT?</span><h3>Enterprise</h3><p>Talk through your organization’s needs.</p><div className="cf-price cf-price-talk">Let’s talk.<small>Deployment, procurement, and support</small></div><SiteLink className="button button-secondary" href="/contact">Talk to the team<ArrowRight size={14}/></SiteLink><ul>{['Discuss your deployment requirements','Plan your rollout with our team','Explore procurement and support'].map(value=><li key={value}><Check size={13}/>{value}</li>)}</ul></article></div></TabsContent>})}</Tabs><div className="cf-credit-note"><span><Sparkles size={16}/><b>BuildNinja comes with AI.</b> {lowestKenzoPlan ? `Prepaid credit top-ups from ${formatPlanPrice(lowestKenzoPlan)}.` : 'Explore prepaid AI credit options.'}</span><SiteLink href="/pricing#kenzo-ai-credits">View all credit options<ArrowRight size={14}/></SiteLink></div></section>;
}

function CommonQuestions({ plansData }) {
  const ids=['what-is-buildninja','cloud-or-self-hosted','can-i-try-it-before-installing','does-buildninja-include-ai','what-credit-packs-are-available','what-happens-when-my-ai-balance-reaches-zero'];
  const plansSummary = describeKenzoPlans(plansData?.byProduct?.KenzoAI || []);
  const questions=faqCategories.flatMap(group=>group.faqs).filter(faq=>ids.includes(faq.id)).map(faq=>faq.id==='what-credit-packs-are-available'?{...faq,answer:plansSummary}:faq);
  return <section className="cf-faq"><div className="cf-faq-heading"><span className="cf-mini-eyebrow">CLEAR ANSWERS</span><h2>Before your<br/>next build.</h2><p>Get familiar with the workflow, installation, and AI credits.</p><SiteLink className="text-button" href="/faq">Explore all FAQs<ArrowRight size={15}/></SiteLink></div><div className="cf-faq-list">{questions.map(faq=><details key={faq.id}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}</div></section>;
}

const homeStructuredData = {
  '@context':'https://schema.org',
  '@graph':[
    {'@type':'WebSite',name:'BuildNinja',url:'https://www.buildninja.io/'},
    {'@type':'SoftwareApplication',name:'BuildNinja',url:'https://www.buildninja.io/',applicationCategory:'DeveloperApplication',operatingSystem:'Windows, Linux, macOS, Docker',description:'A self-hosted CI/CD platform for DevOps and engineering teams with pipeline automation, build visibility, and kenzoAI build intelligence.',featureList:['GitHub, GitLab, and Bitbucket integrations','Build and scheduled triggers','Windows, Linux, and macOS build agents','Docker and Kubernetes workflows','Commands, scripts, SSH, MSBuild, and VSTest','Build dashboards, history, logs, and artifacts','Single sign-on and project access controls','kenzoAI log, configuration, and code-change analysis']},
  ],
};

function HeroWorkspace() {
  const tour = useScenePlayback(72000);
  const [selected, setSelected] = useState<string | null>(null);
  const ids = ['dashboard', 'workflow', 'ai', 'team'];
  const active = selected ?? (tour.reduced ? 'dashboard' : ids[Math.min(3, Math.floor(tour.time / 18000))]);
  const stopTour = () => { setSelected(active); tour.setPaused(true); };
  return <div ref={tour.ref} className="cf-tour" data-scene-playing={tour.playing}>
    <div className="cf-tour-controls"><span><i/>INTERACTIVE PRODUCT TOUR</span></div>
    <Tabs value={active} onValueChange={value => { setSelected(String(value)); tour.setPaused(true); }} className="cf-workspace-tabs" id="product-demo"><TabsList className="cf-workspace-tablist" aria-label="Explore the BuildNinja workspace">{[{id:'dashboard',Icon:LayoutDashboard,label:'Build visibility'},{id:'workflow',Icon:GitBranch,label:'Build workflow'},{id:'ai',Icon:Sparkles,label:'Build intelligence'},{id:'team',Icon:Users,label:'Team access'}].map(({id,Icon,label}) => <TabsTrigger value={id} key={id}><Icon size={16}/>{label}{!selected && active === id ? <span className="cf-tour-progress" style={{ transform: `scaleX(${(tour.time % 18000) / 18000})` }}/> : null}</TabsTrigger>)}</TabsList><div className="cf-hero-stage" onPointerDownCapture={stopTour} onFocusCapture={stopTour}><TabsContent value="dashboard"><div className="cf-preview-caption"><span><i/>BUILDNINJA WORKSPACE</span><span>Explore the interactive sample</span></div><DashboardDemo/></TabsContent><TabsContent value="workflow"><div className="cf-focused-preview"><AnimatedPipeline/></div></TabsContent><TabsContent value="ai"><div className="cf-hero-ai"><div><span className="cf-pill"><Sparkles size={13}/>AI in your workflow</span><h3>The log is long.<br/>Your next step<br/>can be clearer.</h3><p>Bring the failure, its context, and the explanation into one conversation.</p><SiteLink className="text-button" href="/features#ai-built-in">Explore built-in AI<ArrowRight size={15}/></SiteLink></div><AnimatedAIStory compact/></div></TabsContent><TabsContent value="team"><div className="cf-hero-ai"><div><span className="cf-pill"><ShieldCheck size={13}/>Project access</span><h3>Give everyone<br/>the right access.</h3><p>Keep project membership and permissions in the same place as your builds.</p></div><FeatureProductPreview kind="project-members"/></div></TabsContent></div></Tabs></div>;
}

export function MarketingHome({ plansData }) {
  return <main id="main-content" className="cf-home"><PageMotion/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(homeStructuredData)}}/>
    <section className="cf-hero"><div className="cf-hero-copy"><SiteLink className="cf-pill cf-announcement" href="/#ai-built-in"><span className="cf-signal-dot"/>BuildNinja comes with AI<ArrowRight size={13}/></SiteLink><AnimatedHeading as="h1" title="Understand your builds." emphasis="Ship with confidence."/><p>BuildNinja is a self-hosted CI/CD platform for DevOps and engineering teams. Automate pipelines, see what changed, and use kenzoAI to investigate build failures on infrastructure you manage.</p><div className="cf-hero-actions"><SiteLink className="button" href="/install">Get Started<ArrowRight size={16}/></SiteLink><SiteLink className="button button-secondary" href="/dojo"><Play size={14}/>Try the live sandbox</SiteLink></div><div className="cf-hero-proof"><span><Check size={12}/>Free to start</span><span><Check size={12}/>Self-hosted</span><span><Check size={12}/>AI built in</span></div></div><HeroWorkspace/></section>
    <AnimatedToolStrip/>
    <section className="cf-early-trust" aria-label="Built and supported by GrapeCity India"><div><span className="cf-mini-eyebrow">BUILT AND SUPPORTED BY</span><p><img src="/brand/grapecity.svg" alt="GrapeCity"/> India</p></div><strong>25+ years of developer tools experience.</strong><span>Practical help from the people behind BuildNinja during business hours.</span><SiteLink href="/about">Why teams can rely on us<ArrowRight size={14}/></SiteLink></section>
    <section className="cf-workflow" id="story-build"><CenteredHeading label="Your build workflow" title="Stop reacting to failures." emphasis="Manage the next release with confidence." description="When build context is scattered, releases wait, investigations repeat, and developers lose time administering CI/CD. BuildNinja brings the pipeline, its changes, and the evidence into one shared workflow."/><div className="cf-story-row"><div className="cf-story-rail"><div><span className="cf-mini-eyebrow">FROM SOURCE TO BUILD</span><h3>Make the workflow<br/>repeatable.</h3><p>Connect GitHub, GitLab, or Bitbucket; configure build steps and triggers; and keep artifacts with the run.</p><SiteLink className="cf-learn-link" href="/features">Explore the build workflow<ArrowRight size={14}/></SiteLink></div></div><div className="cf-story-panels"><article><div className="cf-story-art cf-reveal"><AnimatedPipeline/></div><div className="cf-story-caption"><span><Terminal size={14}/>Configure the steps</span><h4>One place for the work behind a release.</h4><p>Use commands, scripts, SSH, MSBuild, VSTest, and reusable parameters to define the pipeline your project needs.</p></div></article><article><div className="cf-story-art cf-change-art cf-reveal"><FeatureProductPreview kind="project-changes"/></div><div className="cf-story-caption"><span><GitBranch size={14}/>Follow the source changes</span><h4>Know what changed before you investigate.</h4><p>Inspect Git changes and build history alongside the run they triggered, so the team can connect a result with its source.</p></div></article></div></div></section>
    <div className="cf-signal-strip" aria-hidden="true"/>
    <ProductAISection chapterLabel="BUILT-IN AI"/>
    <DeveloperPortalCallout/>
    <section className="cf-control" id="story-infrastructure"><CenteredHeading label="Your infrastructure" title="Choose where you build." emphasis="Keep your team connected." description="Run the BuildNinja server and compatible build agents on Windows, Linux, macOS, or Docker, then manage project access in the same CI/CD workflow."/><div className="cf-story-row cf-story-reverse"><div className="cf-story-rail"><div><span className="cf-mini-eyebrow">BUILT AROUND YOUR TEAM</span><h3>Your stack.<br/>Your environment.<br/>One workflow.</h3><p>Keep repository choice open and bring your existing DevOps tools into one self-hosted workflow.</p><SiteLink className="cf-learn-link" href="/install">Explore installation<ArrowRight size={14}/></SiteLink></div></div><div className="cf-story-panels"><article><div className="cf-story-art cf-network-art"><AnimatedAgentNetwork/></div><div className="cf-story-caption"><span><Server size={14}/>Connect your environment</span><h4>From your repository to your build agents.</h4><p>Work with GitHub, GitLab, and Bitbucket, then run configured steps on compatible Windows, Linux, and macOS agents.</p></div></article><article><div className="cf-story-art cf-member-art cf-reveal"><FeatureProductPreview kind="project-members"/></div><div className="cf-story-caption"><span><Users size={14}/>Bring the team into the workflow</span><h4>Keep access understandable.</h4><p>Manage project membership and permissions in the same place as your builds. Choose the access each teammate needs.</p></div></article></div></div></section>
    <GettingStarted chapterLabel="GET STARTED" sectionId="getting-started"/>
    <section className="cf-comparisons"><div><span className="cf-mini-eyebrow">FIND THE RIGHT FIT</span><h2>Make the choice<br/>with a clearer picture.</h2><p>Compare deployment models, operating responsibility, and the costs that actually change.</p></div><div>{[['Jenkins','jenkins'],['GitHub Actions','github-actions'],['TeamCity','teamcity'],['CircleCI','circleci']].map(([name,slug])=><SiteLink key={slug} href={'/compare/buildninja-vs-'+slug}><span>BuildNinja vs</span><b>{name}</b><ArrowUpRight size={18}/></SiteLink>)}</div></section>
    <PricingOverview plansData={plansData}/>
    <CommonQuestions plansData={plansData}/>
    <section className="cf-final"><div className="cf-final-grid" aria-hidden="true"/><span className="cf-pill"><Sparkles size={13}/>Your next build starts here</span><h2>Give your next build<br/><span>a clearer path.</span></h2><p>Bring pipelines, build visibility, and build intelligence into one workflow.</p><div><SiteLink className="button" href="/install">Get Started<ArrowRight size={16}/></SiteLink><SiteLink className="button button-secondary" href="/dojo">Try the live sandbox<ArrowUpRight size={16}/></SiteLink></div></section>
  </main>;
}
