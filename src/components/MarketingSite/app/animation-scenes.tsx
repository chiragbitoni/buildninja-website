
'use client';

import { createContext, useContext, useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { motion, MotionConfig, useInView, useScroll } from 'motion/react';
import { ArrowRight, Check, CheckCheck, Circle, FileCode2, GitBranch, LoaderCircle, Monitor, Package, Server, ShieldCheck, Sparkles, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MotionSettings = createContext({ enabled: false, suspended: false, reduced: true });
export const useMarketingMotion = () => useContext(MotionSettings);

/** Keeps timed scenes in sync with visibility and reduced-motion preferences. */
export function MarketingMotion({ children }: { children: ReactNode }) {
  const [reduced, setReduced] = useState(false);
  const [hidden, setHidden] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(preference.matches);
    update();
    preference.addEventListener('change', update);
    return () => preference.removeEventListener('change', update);
  }, []);
  useEffect(() => {
    const update = () => setHidden(document.hidden);
    update();
    document.addEventListener('visibilitychange', update);
    return () => document.removeEventListener('visibilitychange', update);
  }, []);
  useEffect(() => {
    const node = root.current;
    if (!node) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => entry.target.setAttribute('data-cf-visible', String(entry.isIntersecting)));
    }, { threshold: 0.08 });
    const seen = new WeakSet<Element>();
    const observe = () => node.querySelectorAll('.cf-story-art, .cf-tools, .cf-signal-strip, .cf-final, .setup-output, .documented-product-frame, .feature-preview, .refined-dashboard').forEach(el => {
      if (!seen.has(el)) { seen.add(el); observer.observe(el); }
    });
    observe();
    const additions = new MutationObserver(observe);
    additions.observe(node, { childList: true, subtree: true });
    return () => { observer.disconnect(); additions.disconnect(); };
  }, []);
  const stopped = hidden || Boolean(reduced);
  return <MotionSettings.Provider value={{ enabled: true, suspended: stopped, reduced: Boolean(reduced) }}>
    <MotionConfig reducedMotion="user">
      <div ref={root} className="cf-motion-root" data-motion={stopped ? 'paused' : 'playing'} data-reduced={Boolean(reduced)}>
        <motion.div className="cf-reading-progress" style={{ scaleX: scrollYProgress }} aria-hidden="true"/>
        {children}
      </div>
    </MotionConfig>
  </MotionSettings.Provider>;
}

/** Advance only while the scene is visible and motion is allowed. No network calls. */
export function useScenePlayback(duration = 16000) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.12 });
  const { suspended, reduced } = useMarketingMotion();
  const [paused, setPaused] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const playing = inView && !suspended && !paused;
  useEffect(() => {
    if (!playing) return;
    let previous = performance.now();
    const interval = window.setInterval(() => {
      const now = performance.now();
      const delta = Math.min(now - previous, 160);
      previous = now;
      setElapsed(value => (value + delta) % duration);
    }, 80);
    return () => window.clearInterval(interval);
  }, [playing, duration]);
  return { ref, time: reduced ? duration - 800 : elapsed, playing, reduced, setPaused };
}

function WindowBar({ title, Icon = Terminal }: { title: string; Icon?: typeof Terminal }) {
  return <div className="cf-window-title"><span><i/><i/><i/></span><Icon size={13}/><b>{title}</b><em>SAMPLE</em></div>;
}

function SceneCaption({ label }: { label: string }) {
  return <div className="cf-scene-caption"><span><i aria-hidden="true"/>{label}</span></div>;
}

const pipelineSteps = [
  { name: 'Checkout source', command: 'git checkout main', end: 2100 },
  { name: 'Restore dependencies', command: 'npm ci', end: 4400 },
  { name: 'Build & test', command: 'npm run build && npm test', end: 7100 },
  { name: 'Collect artifacts', command: 'application.zip', end: 9500 },
];

export function AnimatedPipeline() {
  const scene = useScenePlayback(15500);
  const completed = pipelineSteps.filter(step => scene.time >= step.end).length;
  const done = completed === 4;
  const active = pipelineSteps[Math.min(completed, 3)];
  return <div ref={scene.ref} className="cf-motion-scene cf-run-scene" data-scene-playing={scene.playing}>
    <SceneCaption label="Illustrated build workflow"/>
    <div className="cf-run-stage">
      <div className="cf-run-terminal"><WindowBar title="storefront-api / execution logs"/>
        <div className="cf-terminal-lines"><p><span>$</span> {done ? 'Build sequence finished' : active.command}<i className="cf-caret"/></p>
          {pipelineSteps.map((step, i) => <p key={step.name} data-line-ready={i <= completed}><span>{String(i + 1).padStart(2, '0')}</span>{i < completed ? '✓' : '›'} {step.name}<small>{i < completed ? 'complete' : i === completed ? 'in progress' : 'queued'}</small></p>)}
        </div>
      </div>
      <div className="cf-run-front"><div className="cf-run-heading"><span><GitBranch size={16}/>Release workflow</span><code>main</code></div>
        <div className="cf-run-progress" aria-hidden="true"><i style={{ width: `${completed * 25}%` }}/></div>
        <div className="cf-run-steps">{pipelineSteps.map((step, i) => <div key={step.name} data-step-state={i < completed ? 'done' : i === completed ? 'active' : 'waiting'}><span>{i < completed ? <Check size={13}/> : i === completed ? <LoaderCircle size={13} className="cf-spin"/> : <Circle size={11}/>}</span><div><b>{step.name}</b><code>{step.command}</code></div><small>{i < completed ? 'Done' : i === completed ? 'Running' : 'Queued'}</small></div>)}</div>
      </div>
      <div className="cf-complete-toast" data-ready={done}><span><CheckCheck size={18}/></span><div><b>Build completed</b><small>Artifacts ready to inspect · sample run</small></div><Package size={18}/></div>
    </div>
  </div>;
}

const analysisText = 'The compiler cannot resolve PageModel. The RazorPages namespace is commented out in the changed file. Review the import before the next build.';

export function AnimatedAIStory({ compact = false }: { compact?: boolean }) {
  const scene = useScenePlayback(19000);
  const [inspect, setInspect] = useState<boolean | null>(null);
  const analyzing = scene.time >= 2400;
  const review = scene.time >= 10000;
  const text = analysisText.slice(0, Math.max(0, Math.floor((scene.time - 3000) / 33)));
  const open = inspect ?? review;
  return <div ref={scene.ref} className={'cf-motion-scene cf-ai-sequence' + (compact ? ' cf-ai-sequence-compact' : '')} data-scene-playing={scene.playing}>
    <SceneCaption label="Illustrated AI investigation"/>
    <div className="cf-ai-sequence-stage">
      <div className="cf-evidence-terminal"><WindowBar title="Doc_build / build #15"/>
        <div className="cf-evidence-code"><p><span>01</span>dotnet build Docs.Site.csproj</p><p className="cf-error-evidence"><span>02</span>error CS0246: PageModel could not be found</p><p><span>03</span>Build failed. Exit code: 1</p></div>
        <div className="cf-evidence-scan" aria-hidden="true"/>
      </div>
      <div className="cf-ai-answer-card" data-ready={analyzing}>
        <div className="cf-ai-answer-head"><span><Sparkles size={17}/></span><div><b>BuildNinja AI</b><small>Log + changed file context</small></div><span className="cf-analysis-status">{review ? 'Ready to review' : 'Analyzing'}</span></div>
        <div className="cf-typed-answer"><span className="sr-only">{analysisText}</span><p aria-hidden="true">{text}<i className="cf-caret" data-finished={text === analysisText}/></p></div>
        <Button className="cf-evidence-button" variant="ghost" size="sm" onClick={() => { setInspect(!open); scene.setPaused(true); }}><FileCode2 size={13}/>{open ? 'Hide sample file context' : 'Inspect file context'}<ArrowRight size={13}/></Button>
        <div className="cf-review-diff" data-ready={open}><div><FileCode2 size={12}/><b>HelloWorld.cshtml.cs</b><span>SUGGESTED CHANGE</span></div><code className="cf-diff-old">− // using Microsoft.AspNetCore.Mvc.RazorPages;</code><code className="cf-diff-new">+ using Microsoft.AspNetCore.Mvc.RazorPages;</code></div>
        <div className="cf-review-note"><ShieldCheck size={12}/>Your team reviews and tests the change.</div>
      </div>
    </div>
    <div className="cf-ai-sequence-steps" aria-hidden="true">{['Find the error', 'Understand the context', 'Review the evidence'].map((label, i) => <span key={label} data-current={i === (review ? 2 : analyzing ? 1 : 0)}><i>{i + 1}</i>{label}</span>)}</div>
  </div>;
}

const repositories = ['GitHub', 'GitLab', 'Bitbucket'];
const agents = ['Linux', 'Windows', 'macOS'];
const inputPaths = ['M110 70 C230 70 210 180 320 180', 'M110 180 L320 180', 'M110 290 C230 290 210 180 320 180'];
  const outputPaths = ['M320 180 C430 180 415 70 530 70', 'M320 180 L530 180', 'M320 180 C430 180 415 290 530 290'];

export function AnimatedAgentNetwork() {
  const scene = useScenePlayback(12000);
  const current = Math.min(2, Math.floor(scene.time / 4000));
  return <div ref={scene.ref} className="cf-motion-scene cf-agent-network" data-scene-playing={scene.playing}>
    <SceneCaption label="Illustrated repository-to-agent routing"/>
    <div className="cf-network-stage">
      <svg className="cf-network-wires" viewBox="0 0 640 360" preserveAspectRatio="none" aria-hidden="true">{[...inputPaths, ...outputPaths].map((path, i) => <g key={path}><path d={path}/><path className="cf-travelling-beam" d={path} pathLength="1" style={{ '--beam-delay': `${(i % 3) * -1.6}s` } as CSSProperties}/></g>)}</svg>
      <div className="cf-orbit-rings" aria-hidden="true"><i/><i/><i/></div>
      <div className="cf-network-sources">{repositories.map((name, i) => <div key={name} data-current={i === current}><GitBranch size={18}/><b>{name}</b><small>Repository</small></div>)}</div>
      <div className="cf-network-center"><span><img src="/brand/buildninja-mark.svg" alt=""/></span><b>BuildNinja</b><small>Configured workflow</small></div>
      <div className="cf-network-agents">{agents.map((name, i) => <div key={name} data-current={i === current}><Monitor size={17}/><div><b>{name} agent</b><small>{i === current ? 'Running sample step' : 'Available'}</small></div><i/></div>)}</div>
    </div>
    <div className="cf-agent-job"><span><Terminal size={13}/>{repositories[current]}<ArrowRight size={12}/>{agents[current]} agent</span><div><i key={current}/></div><small>Sample routing · your repositories and infrastructure</small></div>
  </div>;
}

export function AnimatedToolStrip() {
  const tools = [{ Icon: GitBranch, label: 'GitHub' }, { Icon: FileCode2, label: 'GitLab' }, { Icon: GitBranch, label: 'Bitbucket' }, { Icon: Server, label: 'Docker' }, { Icon: Server, label: 'Kubernetes' }, { Icon: ShieldCheck, label: 'Google SSO' }, { Icon: Terminal, label: '.NET' }, { Icon: Terminal, label: 'SSH' }];
  return <section className="cf-tools cf-tool-marquee"><p>YOUR REPOSITORY. YOUR TOOLS. ONE BUILD WORKFLOW.</p><div className="cf-marquee-window"><div className="cf-marquee-track">{[0, 1].map(copy => <div key={copy} className="cf-marquee-group" aria-hidden={copy === 1 ? true : undefined}>{tools.map(({ Icon, label }) => <span key={label}><Icon size={22}/>{label}</span>)}</div>)}</div></div></section>;
}

export function AnimatedHeading({ title, emphasis, as = 'h2' }: { title: string; emphasis: string; as?: 'h1' | 'h2' }) {
  const Tag = as;
  return <Tag className="cf-animated-heading" aria-label={`${title} ${emphasis}`}><span className="cf-heading-line" aria-hidden="true">{title.split(' ').map((word, i) => <span key={i} style={{ '--word-delay': `${i * 65}ms` } as CSSProperties}>{word}{' '}</span>)}</span><br/><span className="cf-heading-emphasis" aria-hidden="true">{emphasis.split(' ').map((word, i) => <span key={i} style={{ '--word-delay': `${240 + i * 65}ms` } as CSSProperties}>{word}{' '}</span>)}</span></Tag>;
}
