'use client';
import { SiteLink } from './site-context';
import { useState } from 'react';
import { ArrowRight, Check, CheckCircle2, Server, ShieldCheck, Sparkles, Users, Wallet } from 'lucide-react';
import catalog from './data/edition-entitlements.json';
import { DeveloperPortalCallout } from './developer-page';
import { StackBackdrop } from './product-visuals';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { useMarketingMotion } from './animation-scenes';
import { env } from '@/lib/config/env';
import { formatPlanPrice, getPlanOrderUrl } from '@/services/plans/plans';
import { EnterpriseIcon, ShogunIcon } from '@/components/Pricing/Sections/PricingHero/PricingIcons';

const qualityTiers=[
 {name:'Economy',creditUse:'Lowest credit use',body:'Routine build-log questions, quick configuration checks, and concise follow-up.'},
 {name:'Balanced',creditUse:'Recommended default',body:'Everyday investigations with a practical balance of useful detail and credit use.'},
 {name:'Best',creditUse:'Highest credit use',body:'Complex failures, larger context, and detailed code-change review.'},
];
const dimensions=[['Users','users'],['Projects','Projects'],['Build configurations','Configurations'],['Concurrent builds','Concurrent Builds'],['Registered build agents','Build Agents'],['Build history retention','Build History Retention'],['SSO providers','SSO Integrations']];
function allowance(index:number,key:string){const e=catalog.editions[index];const n=key==='users'?e.users:e.features[key as keyof typeof e.features];return n>=999999?'Unlimited':key==='Build History Retention'?n+' days':String(n);}
const included: [string,string[]][]=[['Build workflow',['Native Git and repository caching','Git and scheduled triggers','Commands, scripts, SSH, MSBuild, and VSTest','Reusable parameters and configuration']],['Visibility & outputs',['Dashboard and build history','Execution logs, search, and export','Git Changes and build artifacts','Configured email notifications']],['Infrastructure & access',['Self-hosted server and agents','Windows, Linux, and macOS agents','Project and configuration permissions','Supported SSO connections']],['AI in your workflow',['Build log analysis','Configuration explanations','Contextual AI chat','AI Runner and build analysis reports']]];
function EditionGrapeMark({variant}:{variant:'growth'|'shogun'}){
 return <span className={'edition-grape-mark '+variant} aria-hidden="true">{variant==='growth'?<ShogunIcon color="var(--color-info)"/>:<EnterpriseIcon/>}</span>;
}

function getCreditFeature(plan) {
  return (Array.isArray(plan?.features) ? plan.features : []).find(
    feature => String(feature.featureName || '').trim().toLowerCase() === 'credits'
  );
}

function formatKenzoFeature(feature) {
  const name = String(feature.featureName || '');
  const value = String(feature.value ?? '');
  switch (name.trim().toLowerCase()) {
    case 'model tiers': return `${value} model tiers`;
    case 'audit logs duration': return `${value} days of audit logs`;
    case 'max api keys': return `${value} API keys`;
    default: return `${name}: ${value}`;
  }
}

function KenzoCreditsSection({ plans, accountUrl }) {
  const freePlan = plans.find(plan => Number(plan.price) === 0);
  const paidPlans = plans
    .filter(plan => Number(plan.price) > 0)
    .sort((a, b) => Number(a.price) - Number(b.price));
  const freeCredits = getCreditFeature(freePlan);

  return <section className="commercial-section credits-section" id="kenzo-ai-credits">
    <div className="commercial-heading"><span>02 / AI WHEN YOU NEED IT</span><h2>Prepaid credits.<br/>A balance you control.</h2><p>No recurring AI subscription, no per-seat AI fee, and no automatic overage billing.</p></div>
    {freePlan ? <div className="free-credit-banner"><Sparkles size={23}/><div><h3>{freePlan.name}</h3><p>{freeCredits ? `${Number(freeCredits.value).toLocaleString('en-US')} credits included. ` : ''}The free plan can be claimed once per user.</p></div><SiteLink href={getPlanOrderUrl(freePlan, accountUrl)}>Claim free plan<ArrowRight size={15}/></SiteLink></div> : <p className="commercial-note">A free KenzoAI plan is not currently available.</p>}
    {paidPlans.length ? <div className="credit-grid">{paidPlans.map(plan => {
      const creditFeature = getCreditFeature(plan);
      const planFeatures = (Array.isArray(plan.features) ? plan.features : []).filter(feature =>
        feature.featureType !== 5 &&
        String(feature.featureName || '').trim().toLowerCase() !== 'credits' &&
        feature.value !== null && feature.value !== undefined
      );
      return <article className="credit-card pricing-glow-card" key={plan.id || plan.name}>
        <GlowingEffect disabled={false} proximity={80} spread={32} borderWidth={1}/>
        <span>KENZOAI CREDIT TOP-UP</span>
        <h3>{plan.name}</h3>
        <strong>{formatPlanPrice(plan)}</strong>
        {creditFeature ? <p>{Number(creditFeature.value).toLocaleString('en-US')} credits added per purchase</p> : <p>Credits are added to your account balance</p>}
        <SiteLink className="button button-secondary" href={getPlanOrderUrl(plan, accountUrl)}>Buy top-up<ArrowRight size={14}/></SiteLink>
        {planFeatures.length ? <ul>{planFeatures.map(feature => <li key={feature.featureId || feature.featureName}>{formatKenzoFeature(feature)}</li>)}</ul> : null}
      </article>;
    })}</div> : <p className="commercial-note">KenzoAI credit top-ups are not currently available.</p>}
    {paidPlans.length ? <p className="commercial-note">You can purchase a paid top-up more than once; each purchase adds credits to your account balance. Applicable taxes and the total are shown at checkout.</p> : null}
    <aside className="enterprise-enquiry credit-enquiry"><div><span className="edition-tag">CUSTOM AI CREDITS</span><h3>Need a larger credit allocation?</h3><p>Tell us about your expected AI usage and procurement needs. We’ll help you plan a custom credit allocation for your team.</p></div><SiteLink className="button button-secondary" href="/contact">Talk about custom credits<ArrowRight size={15}/></SiteLink></aside>
  </section>;
}

export function PricingPage({ plansData }) {
  const [term, setTerm] = useState(0);
  const activePlans = plansData?.byProduct?.BuildNinja || [];
  const kenzoPlans = plansData?.byProduct?.KenzoAI || [];
  const cycles = ['Monthly', 'Yearly', '2-Years', '3-Years'];
  const liveShogun = activePlans.find(plan => plan.billingCycle === cycles[term] && Number(plan.price) > 0);
  const liveGrowth = activePlans.find(plan => Number(plan.price) === 0 && String(plan.name || '').toLowerCase().includes('growth'));
  const shogun = { ...catalog.shogunTerms[term], price: Number(liveShogun?.price ?? catalog.shogunTerms[term].price) };
  const accountUrl = env.MY_ACCOUNT || 'https://myaccount.grapehub.io';
  const growthOrderUrl = getPlanOrderUrl(liveGrowth, accountUrl);
  const shogunOrderUrl = getPlanOrderUrl(liveShogun, accountUrl);
  const enhanced = useMarketingMotion().enabled;
  return <main className="pricing-page" id="main-content"><section className="commercial-hero"><span className="page-kicker">PLATFORM EDITIONS + OPTIONAL AI CREDITS</span><h1>Build on your terms.<br/><span>Know what you pay for.</span></h1><p>Choose the capacity your team needs. BuildNinja comes with AI—use prepaid credits when you need its help.</p><div className="pricing-jump"><SiteLink className="button" href="#editions">Compare editions</SiteLink><SiteLink className="button button-secondary" href="#kenzo-ai-credits">Explore AI credits<ArrowRight size={14}/></SiteLink></div></section>
 <section className="commercial-section edition-section" id="editions"><div className="commercial-heading"><span>01 / YOUR CI/CD PLATFORM</span><h2>{enhanced?'Choose the edition that fits.':'Start with your team’s needs.'}</h2><p>{enhanced?'Growth is free. Shogun removes the published platform limits with a one-time payment for the selected term. AI uses separate prepaid credits.':'Growth and Shogun run on infrastructure you manage. AI credits are separate from your platform capacity.'}</p></div><div className="edition-cards"><article className="pricing-glow-card"><GlowingEffect disabled={false} proximity={90} spread={34} borderWidth={1}/>{enhanced?<EditionGrapeMark variant="growth"/>:null}<span className="edition-tag">{enhanced?'FREE PLATFORM EDITION':'FOR GETTING STARTED'}</span><h3>Growth</h3><p>{enhanced?'Use the full BuildNinja workflow within the published limits.':'Bring a first team and its build workflow together.'}</p><div className="edition-price">Free<small>{enhanced?'Free edition · no license term or renewal':'Free license key · renew when its term expires'}</small></div><SiteLink className="button button-secondary" href={growthOrderUrl}>{enhanced?'Choose Growth':'Start with Growth'}<ArrowRight size={15}/></SiteLink><ul>{['10 users, projects, and configurations','10 agents and concurrent builds','30-day build history','1 supported SSO provider','Access to AI with available credits'].map(x=><li key={x}><Check size={15}/>{x}</li>)}</ul></article><article className="shogun-card pricing-glow-card"><GlowingEffect disabled={false} proximity={100} spread={38} borderWidth={1}/>{enhanced?<EditionGrapeMark variant="shogun"/>:null}<span className="edition-tag">{enhanced?'PUBLISHED LIMITS REMOVED':'FOR A LARGER BUILD WORKFLOW'}</span><h3>Shogun</h3><p>{enhanced?'Remove the published limits on users, projects, agents, concurrent builds, and history, with all 5 supported SSO providers.':'Give growing teams room for more projects and build capacity.'}</p><div className="shogun-term-selector" role="group" aria-label="Shogun license term">{catalog.shogunTerms.map((t,i)=><button type="button" key={t.label} aria-pressed={term===i} onClick={()=>setTerm(i)}>{t.label}</button>)}</div><div className="edition-price shogun-price" aria-live="polite">${shogun.price.toLocaleString('en-US')}<span> / {shogun.period}</span><small>USD · One-time payment for the selected term</small></div><p className="shogun-license-term">License valid for {shogun.validity}. No per-seat fee.</p><SiteLink className="button" href={shogunOrderUrl}>Buy Shogun<ArrowRight size={15}/></SiteLink><ul>{['Unlimited users, projects, and configurations','Unlimited agents and concurrent builds','Unlimited build history','All 5 supported SSO providers','Access to AI with available credits'].map(x=><li key={x}><Check size={15}/>{x}</li>)}</ul></article></div>
 <aside className="enterprise-enquiry"><div><span className="edition-tag">ENTERPRISE</span><h3>Let’s talk.</h3><p>Planning a larger rollout? Discuss your deployment, procurement, and support requirements with our team.</p></div><SiteLink className="button button-secondary" href="/contact">Talk about Enterprise<ArrowRight size={15}/></SiteLink></aside><div className="edition-table" id="compare-entitlements"><div className="edition-table-title"><span className="chapter-label">SIDE-BY-SIDE ALLOWANCES</span><h3>Compare platform entitlements.</h3><p>{enhanced?'Choose your Shogun term above; the license details and allowances below update with it.':'Choose your Shogun term above; the price and license details below update with it.'}</p></div><div className="comparison-stage pricing-glow-card"><GlowingEffect disabled={false} proximity={110} spread={42} borderWidth={1}/><div className="comparison-plan-strip"><div><span>PLATFORM</span><strong>Choose the room your workflow needs.</strong></div><div className="growth-summary"><span>GROWTH</span><strong>Free</strong><small>{enhanced?'Published limits apply':'For a first team'}</small></div><div className="shogun-summary"><span>SHOGUN</span><strong>${shogun.price.toLocaleString('en-US')}</strong><small>per {shogun.period} · selected term</small></div></div><div className="comparison-proof"><span><Server size={15}/>Runs on your infrastructure</span><span><ShieldCheck size={15}/>No per-seat Shogun fee</span><span><Sparkles size={15}/>AI available with credits</span></div><div className="table-wrap"><table><thead><tr><th>Platform allowance</th><th><span className="plan-dot growth-dot"/>Growth</th><th><span className="plan-dot shogun-dot"/>Shogun</th></tr></thead><tbody>{!enhanced&&<tr className="comparison-emphasis"><th scope="row">Platform price (USD)</th><td><strong className="value-pill">Free</strong></td><td><strong className="value-pill value-pill-accent">${shogun.price.toLocaleString('en-US')} / {shogun.period}</strong></td></tr>}<tr><th scope="row">License term</th><td>{enhanced?'No license term or renewal':'Free key · regenerate when the term expires'}</td><td>{shogun.validity}</td></tr>{dimensions.map(([label,key])=><tr key={key}><th scope="row">{label}</th><td>{allowance(0,key)}</td><td className="shogun-value">{allowance(1,key)}</td></tr>)}<tr><th scope="row">AI feature access</th><td><span className="included-value"><Check size={13}/>With available credits</span></td><td><span className="included-value"><Check size={13}/>With available credits</span></td></tr><tr><th scope="row">Hosting</th><td>Your infrastructure</td><td>Your infrastructure</td></tr></tbody></table></div></div><p className="commercial-note comparison-note">“Unlimited” is the edition allowance. Actual throughput depends on agents, machine capacity, and build requirements. AI credits do not increase edition limits.</p></div></section>
 <section className="commercial-section included-section"><div className="commercial-heading"><span>WHAT YOU CAN BUILD WITH</span><h2>The everyday workflow, together.</h2></div><div className="included-grid">{included.map(([title,features])=><article className="pricing-glow-card" key={String(title)}><GlowingEffect disabled={false} proximity={70} spread={28} borderWidth={1}/><h3>{title}</h3><ul>{(features as string[]).map(f=><li key={f}><CheckCircle2 size={14}/>{f}</li>)}</ul></article>)}</div><p className="commercial-note">Feature use remains subject to the selected edition, supported release, setup, and available AI credits.</p></section>
 <KenzoCreditsSection plans={kenzoPlans} accountUrl={accountUrl}/>
 <section className="commercial-section quality-section"><div className="quality-story"><div className="quality-heading"><span className="chapter-label">CHOOSE YOUR ANALYSIS DEPTH</span><h3>One balance. Three quality settings.</h3><p>Every setting works across the same supported AI features. Your choice changes the depth of analysis and the credits used for that request—not which features you can access.</p></div><div className="quality-grid">{qualityTiers.map((tier,i)=><article className={i===1?'recommended':''} key={tier.name}><div className="quality-tier-top"><span>0{i+1}</span>{i===1&&<span className="quality-recommended">RECOMMENDED</span>}</div><h3>{tier.name}</h3><strong>{tier.creditUse}</strong><p>{tier.body}</p></article>)}</div><aside className="quality-evidence"><ShieldCheck size={24}/><strong>100+</strong><div><span>QUALITY EVALUATIONS</span><h3>Tested across representative CI/CD scenarios.</h3><p>Evaluation runs cover build logs, configuration questions, and code-change analysis to check usefulness, evidence quality, and safe handling of uncertain answers.</p></div></aside></div></section>
 <DeveloperPortalCallout/>
 <section className="commercial-section cost-model"><div className="commercial-heading"><span>UNDERSTAND THE WHOLE COST</span><h2>Three parts. Clear responsibilities.</h2></div><div>{[{Icon:Users,title:'Platform edition',body:'Your edition determines user, configuration, agent, retention, and SSO allowances.'},{Icon:Server,title:'Your infrastructure',body:'You provide the server, database, agents, storage, network, and the tools your builds use.'},{Icon:Wallet,title:'Optional AI usage',body:'AI requests use prepaid credits. A zero balance pauses AI requests; it does not add an automatic charge.'}].map(({Icon,title,body})=><article key={title}><Icon size={24}/><h3>{title}</h3><p>{body}</p></article>)}</div></section>
 <section className="commercial-section pricing-questions"><div className="commercial-heading"><span>PRICING QUESTIONS</span><h2>Know before you choose.</h2></div>{[['How is Shogun priced?','Choose a one-time license payment: $199 for one month, $1,599 for one year, $2,499 for two years, or $3,199 for three years. The platform price is not per seat. AI credits and infrastructure are separate.'],['What if my team needs an Enterprise arrangement?','Contact our team to discuss your deployment, procurement, and support requirements. Enterprise enquiries are separate from the published Shogun plans.'],['What if I need more than the listed credit packs?','Talk to our team about your expected AI usage and procurement needs. We can help you plan a custom credit allocation.'],['Does every user need an AI subscription?','No. The launch AI model uses prepaid credits without a recurring AI subscription or per-seat AI fee.'],['Does buying credits expand my platform edition?','No. Credits fund supported AI requests. Platform allowances and infrastructure capacity are separate.'],['What happens when the balance reaches zero?','New AI requests pause until credits are available. There is no automatic overage charge. If an AI Runner has been configured to fail on analysis errors, that explicit step policy can affect its build result.'],['When do purchased credits expire?','Purchased credits are valid for 12 months. The earliest-expiring credits are used first.'],['Are failed AI requests charged?','Provider-side failures do not consume credits. Invalid requests that still run model inference are charged normally. See the AI terms for details.'],['Does Dojo use my credits?','Dojo uses its own shared allowance. When it is exhausted, the sandbox shows when AI access resets.'],['Can I upgrade my edition?','Yes. Obtain the appropriate license in My Account and follow the activation instructions for your installation.'],['Where can I check refunds and purchase terms?','Review the refund and cancellation policy and the AI terms before purchasing. Your checkout confirms the applicable taxes and total.']].map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}<div className="pricing-policy-links"><SiteLink href="/faq">All questions →</SiteLink><SiteLink href="/kenzo-ai-terms">AI terms</SiteLink><SiteLink href="/refund-and-cancellation-policy">Refund policy</SiteLink></div></section><section className="page-end stack-cta"><StackBackdrop/><span>START WITH YOUR NEXT BUILD</span><h2>A clearer workflow starts with one project.</h2><div><SiteLink className="button" href="/install">Get Started<ArrowRight size={15}/></SiteLink><SiteLink className="text-button" href="/contact">Talk to the team</SiteLink></div></section></main>;}
