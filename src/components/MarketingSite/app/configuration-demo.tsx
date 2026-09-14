
'use client';

import { useEffect, useState } from 'react';
import {
  Archive,
  Check,
  ChevronRight,
  FileKey,
  GitBranch,
  Info,
  ListChecks,
  MonitorCog,
  Settings2,
  Sparkles,
  X,
} from 'lucide-react';
import { useMarketingMotion } from './animation-scenes';

const configurationSections = [
  { id: 'basic', label: 'Basic Information', icon: Info },
  { id: 'vcs', label: 'VCS Settings', icon: GitBranch },
  { id: 'steps', label: 'Execution Steps', icon: ListChecks },
  { id: 'artifacts', label: 'Artifacts', icon: Archive },
  { id: 'agents', label: 'Agent Criteria', icon: MonitorCog },
  { id: 'parameters', label: 'Parameters', icon: FileKey },
] as const;

type SectionId = (typeof configurationSections)[number]['id'];

function SectionDetails({ section }: { section: SectionId }) {
  if (section === 'basic') return <div className="config-detail-card config-detail-basic"><span>BUILD CONFIGURATION NAME</span><strong>Doc_build</strong><small>Build, test, and publish the documentation site.</small></div>;
  if (section === 'vcs') return <div className="config-detail-card"><div className="config-card-head"><span>VCS ROOT</span><b>Connection verified <Check size={11}/></b></div><div className="config-field-grid"><p><small>Provider</small><strong>GitHub</strong></p><p><small>Repository</small><strong>docs-site</strong></p><p><small>Branch</small><strong><GitBranch size={11}/> main</strong></p><p><small>Repository cache</small><strong>Enabled</strong></p></div></div>;
  if (section === 'steps') return <div className="config-detail-card"><div className="config-card-head"><span>EXECUTION STEPS</span><b>Runs in order</b></div><div className="config-execution-list">{[
    ['01', 'Restore packages', 'dotnet restore'],
    ['02', 'Build', 'dotnet build --configuration Release --no-restore'],
    ['03', 'Test', 'dotnet test --configuration Release --no-build'],
    ['04', 'Publish site', 'dotnet publish --configuration Release --no-build'],
  ].map(([number, name, command]) => <div key={number}><span>{number}</span><p><b>{name}</b><code>{command}</code></p><ChevronRight size={13}/></div>)}</div></div>;
  if (section === 'artifacts') return <div className="config-detail-card"><div className="config-card-head"><span>ARTIFACT RULE</span><b>1 output</b></div><div className="config-artifact-row"><Archive size={19}/><p><strong>site-output</strong><code>publish/**</code></p><span>On success</span></div></div>;
  if (section === 'agents') return <div className="config-detail-card"><div className="config-card-head"><span>AGENT REQUIREMENTS</span><b>Both must match</b></div><div className="config-rule-list"><p><span>system.os</span><b>equals</b><strong>Linux</strong></p><p><span>dotnet.sdk</span><b>at least</b><strong>8</strong></p></div></div>;
  return <div className="config-detail-card"><div className="config-card-head"><span>BUILD PARAMETERS</span><b>3 values</b></div><div className="config-parameter-list"><p><b>BUILD_CONFIGURATION</b><code>Release</code><span>ENV</span></p><p><b>DOCS_ENV</b><code>production</code><span>ENV</span></p><p><b>PACKAGE_FEED_TOKEN</b><code>••••••••••••</code><span>PROTECTED</span></p></div></div>;
}

export function ConfigurationExplainDemo() {
  const { suspended, reduced } = useMarketingMotion();
  const [time, setTime] = useState(0);
  const [paused, setPaused] = useState(false);
  const [manualSection, setManualSection] = useState<SectionId | null>(null);
  const [manualExplain, setManualExplain] = useState(false);
  const playing = !suspended && !paused;
  useEffect(() => {
    if (!playing) return;
    let previous = performance.now();
    const interval = window.setInterval(() => {
      const now = performance.now();
      const delta = Math.min(now - previous, 160);
      previous = now;
      setTime(value => (value + delta) % 12000);
    }, 80);
    return () => window.clearInterval(interval);
  }, [playing]);
  const autoSection: SectionId = time < 1200 ? 'basic' : time < 2500 ? 'vcs' : time < 3900 ? 'steps' : time < 4700 ? 'parameters' : time < 5300 ? 'agents' : 'steps';
  const selected = manualSection ?? autoSection;
  const explanationRequested = manualSection !== null ? manualExplain : reduced || time >= 3600;
  const answerReady = manualExplain || (manualSection === null && (reduced || time >= 4600));
  const progress = Math.min(100, Math.max(7, (time / 4600) * 100));

  const chooseSection = (id: SectionId) => {
    setManualSection(id);
    setManualExplain(false);
    setPaused(true);
  };
  const explain = () => {
    setManualSection('steps');
    setManualExplain(true);
    setPaused(true);
  };
  return <div className="config-explain-demo" data-explaining={explanationRequested} data-answer-ready={answerReady} data-scene-playing={playing}>
    <div className="config-demo-topbar">
      <span className="config-product-mark">BN</span>
      <p><small>Projects&nbsp; / &nbsp;Docs Site&nbsp; /</small><b>Doc_build</b></p>
      <span className="config-save-state"><i/> SAVED</span>
    </div>
    <div className="config-demo-body">
      <nav className="config-section-nav" aria-label="Explore sample configuration sections">
        <span>BUILD CONFIGURATION</span>
        {configurationSections.map(({ id, label, icon: Icon }) => <button type="button" key={id} aria-pressed={selected === id} onClick={() => chooseSection(id)}><Icon size={13}/><span>{label}</span><ChevronRight size={11}/></button>)}
      </nav>
      <div className="config-detail-view">
        <div className="config-detail-heading"><div><span>CONFIGURATION DETAILS</span><h4>{configurationSections.find(item => item.id === selected)?.label}</h4></div><button type="button" className="config-explain-button" onClick={explain}><Sparkles size={13}/> Explain Config</button></div>
        <SectionDetails section={selected}/>
        <div className="config-read-progress" aria-hidden="true"><span style={{ width: `${progress}%` }}/><small>{answerReady ? 'Configuration understood' : explanationRequested ? 'kenzoAI is mapping dependencies…' : 'Reading configuration context…'}</small></div>
      </div>
    </div>
    <aside className="config-explanation-panel" aria-live="polite" aria-label="Sample kenzoAI configuration explanation">
      <div className="config-ai-head"><span><Sparkles size={14}/> kenzoAI</span><button type="button" aria-label="Close explanation" onClick={() => { setManualSection('steps'); setManualExplain(false); setPaused(true); }}><X size={14}/></button></div>
      <div className="config-ai-prompt">Explain this configuration.</div>
      {!answerReady ? <div className="config-ai-thinking"><i/><i/><i/><span>Connecting steps and requirements</span></div> : <div className="config-ai-answer">
        <span>CONFIGURATION EXPLANATION</span>
        <h4>A four-step .NET documentation build.</h4>
        <p><b>Doc_build</b> checks out <code>main</code>, restores dependencies, builds and tests in <code>Release</code>, then publishes the site output.</p>
        <div className="config-flow" aria-label="Source, restore, build, test, and publish flow">{['Source', 'Restore', 'Build', 'Test', 'Publish'].map((step, index) => <div key={step}><span>{index + 1}</span><b>{step}</b>{index < 4 ? <i/> : null}</div>)}</div>
        <ul>
          <li><GitBranch size={12}/><span><b>Source</b> GitHub repository · <code>main</code> · cache enabled</span></li>
          <li><ListChecks size={12}/><span><b>Dependency</b> Test reuses the output from the Build step</span></li>
          <li><MonitorCog size={12}/><span><b>Agent match</b> Linux with .NET SDK 8 or later</span></li>
          <li><Archive size={12}/><span><b>Output</b> <code>publish/**</code> is kept after a successful run</span></li>
        </ul>
        <small><Settings2 size={11}/> Explanation only · your team decides what to change.</small>
      </div>}
    </aside>
    <div className="config-demo-controls">
      <span><i/> INTERACTIVE PRODUCT WALKTHROUGH</span>
    </div>
  </div>;
}
