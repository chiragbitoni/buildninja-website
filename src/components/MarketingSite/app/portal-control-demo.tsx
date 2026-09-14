
'use client';

import { useState } from 'react';
import { Activity, ArrowRight, BrainCircuit, Check, Gauge, Layers, RotateCcw, Scale, ShieldCheck, Sparkles } from 'lucide-react';

type QualityKey = 'economy' | 'balanced' | 'best';

const qualitySettings = {
  economy: {
    name: 'Economy',
    signal: 'Lowest credit use',
    description: 'Fast, concise help for routine questions and quick checks.',
    tasks: ['Quick log checks', 'Simple configuration questions'],
    sampleCost: 6000,
    depth: 1,
    Icon: Gauge,
  },
  balanced: {
    name: 'Balanced',
    signal: 'Recommended default',
    description: 'More context for everyday build investigations and reviews.',
    tasks: ['Build investigations', 'Configuration reviews'],
    sampleCost: 16000,
    depth: 2,
    Icon: Scale,
  },
  best: {
    name: 'Best',
    signal: 'Deepest analysis',
    description: 'The most reasoning depth for complex failures and change risk.',
    tasks: ['Complex failures', 'Code-change risk'],
    sampleCost: 42000,
    depth: 3,
    Icon: BrainCircuit,
  },
} as const;

const formatCredits = (value: number) => value.toLocaleString('en-US');

export function KenzoControlDemo() {
  const [quality, setQuality] = useState<QualityKey>('balanced');
  const [appLimit, setAppLimit] = useState(200000);
  const [resetFrequency, setResetFrequency] = useState('Monthly');
  const [appUsed, setAppUsed] = useState(70000);
  const [poolConsumed, setPoolConsumed] = useState(125000);
  const [runId, setRunId] = useState(0);
  const setting = qualitySettings[quality];
  const totalPool = 500000;
  const poolRemaining = Math.max(0, totalPool - poolConsumed);
  const appRemaining = Math.max(0, appLimit - appUsed);
  const appAtLimit = appRemaining === 0;
  const poolEmpty = poolRemaining === 0;

  function selectLimit(value: number) {
    setAppLimit(value);
    setAppUsed((current) => Math.min(current, value));
  }

  function runSample() {
    if (appAtLimit || poolEmpty) return;
    const consumed = Math.min(setting.sampleCost, appRemaining, poolRemaining);
    setAppUsed((current) => current + consumed);
    setPoolConsumed((current) => current + consumed);
    setRunId((current) => current + 1);
  }

  function resetSample() {
    setAppUsed(70000);
    setPoolConsumed(125000);
    setRunId(0);
  }

  return (
    <div className="developer-console kenzo-control-demo" aria-label="Interactive example of kenzoAI quality and credit controls">
      <div className="developer-console-top">
        <span><Sparkles size={16}/><b>kenzoAI</b><i>Portal</i></span>
        <small><i/>INTERACTIVE SAMPLE</small>
      </div>
      <div className="developer-console-layout">
        <nav aria-label="Sample kenzoAI portal navigation">
          <span>CONSOLE</span>
          <div className="kenzo-nav-item"><Gauge size={15}/><span>Overview</span></div>
          <div className="kenzo-nav-item is-active"><Layers size={15}/><span>Applications</span></div>
          <div className="kenzo-nav-item"><Activity size={15}/><span>Usage analytics</span></div>
          <div className="developer-console-account"><ShieldCheck size={14}/><span>Sample workspace</span></div>
        </nav>

        <div className="developer-console-main">
          <div className="kenzo-demo-breadcrumb"><span>Applications</span><ArrowRight size={11}/><b>BuildNinja production</b><i>ACTIVE</i></div>
          <div className="developer-console-heading">
            <div><small>APPLICATION CONTROLS</small><h2>Quality and usage limits</h2><p>One application. Three quality settings. Two levels of credit control.</p></div>
            <span className="kenzo-demo-app-icon">BN</span>
          </div>

          <div className="kenzo-credit-flow" aria-label="Credits flow from the account pool through the application allowance to the selected quality setting">
            <div>
              <span>ACCOUNT POOL</span>
              <strong>{formatCredits(poolRemaining)}</strong>
              <small>credits remaining</small>
              <meter aria-label="Sample account credit pool" min={0} max={totalPool} value={poolRemaining}/>
            </div>
            <ArrowRight size={14}/>
            <div className={appAtLimit ? 'is-stopped' : ''}>
              <span>APP ALLOWANCE</span>
              <strong>{formatCredits(appRemaining)}</strong>
              <small>of {formatCredits(appLimit)} left</small>
              <meter aria-label="Sample application allowance" min={0} max={appLimit} value={appRemaining}/>
            </div>
            <ArrowRight size={14}/>
            <div className="kenzo-flow-quality">
              <span>REQUEST QUALITY</span>
              <strong>{setting.name}</strong>
              <small>{setting.signal}</small>
              <div className="kenzo-depth-bars" aria-label={`${setting.name} has depth level ${setting.depth} of 3`}>{[1,2,3].map(level => <i key={level} className={level <= setting.depth ? 'active' : ''}/>)}</div>
            </div>
            {runId > 0 && <span key={runId} className="kenzo-flow-pulse" aria-hidden="true"/>}
          </div>

          <section className="kenzo-quality-control" aria-labelledby="quality-control-title">
            <div className="kenzo-control-title"><div><span>01</span><h3 id="quality-control-title">Choose the analysis depth</h3></div><small>Same supported AI features</small></div>
            <div className="kenzo-quality-options" aria-label="Sample quality setting">
              {(Object.keys(qualitySettings) as QualityKey[]).map((key) => {
                const item = qualitySettings[key];
                const Icon = item.Icon;
                return <button type="button" key={key} aria-pressed={quality === key} onClick={() => setQuality(key)}>
                  <span><Icon size={15}/>{quality === key && <Check size={12}/>}</span>
                  <b>{item.name}</b><small>{item.signal}</small>
                </button>;
              })}
            </div>
            <div className="kenzo-quality-explainer" aria-live="polite"><p>{setting.description}</p><div>{setting.tasks.map(task => <span key={task}>{task}</span>)}</div></div>
          </section>

          <section className="kenzo-limit-control" aria-labelledby="limit-control-title">
            <div className="kenzo-control-title"><div><span>02</span><h3 id="limit-control-title">Set the application guardrail</h3></div><small>10,000 credit minimum</small></div>
            <div className="kenzo-limit-grid">
              <div><span className="kenzo-field-label">Max credits</span><div aria-label="Sample maximum credits">{[100000,200000,500000].map(value => <button type="button" key={value} aria-pressed={appLimit === value} onClick={() => selectLimit(value)}>{formatCredits(value)}</button>)}</div></div>
              <div><span className="kenzo-field-label">Reset frequency</span><div aria-label="Sample reset frequency">{['Manual','Daily','Weekly','Monthly'].map(value => <button type="button" key={value} aria-pressed={resetFrequency === value} onClick={() => setResetFrequency(value)}>{value}</button>)}</div></div>
            </div>
          </section>

          <div className={`kenzo-sample-action ${appAtLimit || poolEmpty ? 'is-stopped' : ''}`}>
            <div>
              <b>{appAtLimit ? 'Application allowance reached' : poolEmpty ? 'Account balance reached zero' : `${setting.name} is ready`}</b>
              <small>{appAtLimit ? `Requests from this app pause until its allowance resets or the limit changes.` : poolEmpty ? 'AI requests pause until credits are added.' : `Run an illustrative request using ${formatCredits(setting.sampleCost)} sample credits.`}</small>
            </div>
            <button type="button" onClick={runSample} disabled={appAtLimit || poolEmpty}>{appAtLimit || poolEmpty ? 'Request paused' : 'Run sample'}<ArrowRight size={13}/></button>
            <button type="button" className="kenzo-reset-sample" onClick={resetSample} aria-label="Reset interactive sample"><RotateCcw size={13}/></button>
          </div>
          <p className="kenzo-control-note"><ShieldCheck size={13}/><span><b>Two controls, two jobs.</b> The app limit contains one integration. The account pool pays for every application. Resetting an app allowance never returns credits to the account pool.</span></p>
          <p className="kenzo-demo-disclaimer">Illustrative request values only. Actual credit use varies with the selected quality setting, input context, and response size.</p>
        </div>
      </div>
    </div>
  );
}
