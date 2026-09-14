'use client';

import { useId, useState, type CSSProperties, type FormEvent } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowRight, Check, ChevronDown, Code2, GitBranch, KeyRound, Plus, RotateCcw, ShieldCheck, Sparkles, TriangleAlert } from 'lucide-react';

const qualities = [
  { name: 'Economy', detail: 'Lighter credit use' },
  { name: 'Balanced', detail: 'Depth and efficiency' },
  { name: 'Best', detail: 'More detailed analysis' },
] as const;

export function AIRunnerDemo() {
  const id = useId();
  const reducedMotion = useReducedMotion();
  const [name, setName] = useState('AI Code Diff Analysis');
  const [directory, setDirectory] = useState('');
  const [quality, setQuality] = useState('Balanced');
  const [threshold, setThreshold] = useState(80);
  const [errorPolicy, setErrorPolicy] = useState('fail');
  const [added, setAdded] = useState(false);
  const [scenario, setScenario] = useState('risk');
  const stepName = name.trim() || 'AI Runner';
  const sampleRisk = 75;
  const fails = scenario === 'error' ? errorPolicy === 'fail' : sampleRisk > threshold;

  function changed() { setAdded(false); }
  function addStep(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setAdded(true); }
  function reset() {
    setName('AI Code Diff Analysis'); setDirectory(''); setQuality('Balanced');
    setThreshold(80); setErrorPolicy('fail'); setAdded(false); setScenario('risk');
  }

  return <div className="runner-demo">
    <div className="runner-workspace"><div><img src="/brand/buildninja-mark.svg" width="20" height="23" alt="" /><strong>Doc_build</strong><span>/ Execution steps</span></div><span><GitBranch size={12} />main</span></div>
    <form onSubmit={addStep} className="runner-editor">
      <div className="runner-editor-heading"><span className="runner-app-icon"><Sparkles size={23} /></span><div><span>ADD EXECUTION STEP</span><h4>AI Runner</h4><p>Bring code-change analysis into your build.</p></div><span className="runner-step-label">STEP 02</span></div>

      <div className="runner-field-pair">
        <label htmlFor={id+'-name'}>Step name<input id={id+'-name'} value={name} maxLength={64} placeholder="AI Runner" onChange={e => { setName(e.target.value); changed(); }} /></label>
        <label htmlFor={id+'-directory'}>Working directory <span>Optional</span><input id={id+'-directory'} value={directory} maxLength={120} placeholder="Repository checkout" onChange={e => { setDirectory(e.target.value); changed(); }} /></label>
      </div>

      <details className="runner-credentials"><summary><KeyRound size={15} /><span>App credentials</span><small>Sample values</small><ChevronDown size={14} /></summary><div><label htmlFor={id+'-key'}>App Key<input id={id+'-key'} value="demo-app-key" readOnly /></label><label htmlFor={id+'-secret'}>App Secret<input id={id+'-secret'} type="password" value="demo-secret-example" readOnly autoComplete="off" /></label><p>The product uses your App Key and App Secret. This example uses sample values.</p></div></details>

      <fieldset className="runner-quality"><legend>Model tier</legend><div>{qualities.map((q, i) => <button type="button" key={q.name} aria-pressed={quality === q.name} onClick={() => { setQuality(q.name); changed(); }}><span className="runner-tier-bars" aria-hidden="true">{[0, 1, 2].map(bar => <i key={bar} data-on={bar <= i} />)}</span><span><b>{q.name}</b><small>{q.detail}</small></span>{quality === q.name ? <Check size={13} /> : null}</button>)}</div></fieldset>

      <div className="runner-policy-grid">
        <div className="runner-threshold"><div><label htmlFor={id+'-threshold'}>Failure percentage threshold</label><output htmlFor={id+'-threshold'}>{threshold}<span>%</span></output></div><input id={id+'-threshold'} type="range" min="0" max="100" step="1" value={threshold} style={{ '--runner-range': threshold+'%' } as CSSProperties} onChange={e => { setThreshold(Number(e.target.value)); changed(); }} /><div className="runner-range-scale"><span>0%</span><span>50%</span><span>100%</span></div><p>Fail this step when estimated build risk is <strong>above {threshold}%.</strong></p></div>
        <div className="runner-error-policy"><div><label htmlFor={id+'-error'}>If the AI service has an error</label><p>Choose how this step should respond.</p></div><select id={id+'-error'} value={errorPolicy} onChange={e => { setErrorPolicy(e.target.value); changed(); }}><option value="fail">Fail on server error</option><option value="ignore">Ignore server error</option></select></div>
      </div>

      <div className="runner-editor-actions"><span><ShieldCheck size={14} />You're in control of this step.</span><button className="runner-add-button" type="submit" disabled={added}>{added ? <Check size={14} /> : <Plus size={14} />}{added ? 'Step added' : 'Add sample step'}</button></div>
    </form>

    <div className="runner-pipeline-preview"><div className="runner-preview-heading"><span>YOUR BUILD WORKFLOW</span><button type="button" onClick={reset} title="Reset the example"><RotateCcw size={12} />Reset</button></div><div className="runner-pipeline"><div className="runner-pipeline-node"><span><GitBranch size={14} /></span><div><small>01</small><b>Checkout</b></div></div><ArrowRight className="runner-connector" size={15} /><motion.div key={added ? 'added' : 'draft'} initial={{ opacity: reducedMotion ? 1 : 0.5, y: reducedMotion ? 0 : 5 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reducedMotion ? 0 : .22 }} className={'runner-pipeline-node runner-insert'+(added?' is-added':'')}><span>{added ? <Sparkles size={15} /> : <Plus size={15} />}</span><div><small>{added ? '02 · '+quality : '02 · NEW STEP'}</small><b title={stepName}>{added ? stepName : 'AI Runner'}</b></div>{added ? <Check size={13} /> : null}</motion.div><ArrowRight className="runner-connector" size={15} /><div className="runner-pipeline-node"><span><Code2 size={14} /></span><div><small>03</small><b>Build & test</b></div></div></div>

      <AnimatePresence initial={false}>{added ? <motion.div key="runner-result" className="runner-sample-outcome" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: reducedMotion ? 0 : .22 }}><div><span>TRY A SAMPLE OUTCOME</span><div role="group" aria-label="Sample AI Runner outcome"><button type="button" aria-pressed={scenario==='risk'} onClick={() => setScenario('risk')}>75% risk estimate</button><button type="button" aria-pressed={scenario==='error'} onClick={() => setScenario('error')}>Service error</button></div></div><p className={fails ? 'runner-outcome-fail' : 'runner-outcome-continue'} role="status">{fails ? <TriangleAlert size={16} /> : <Check size={16} />}<span><b>{fails ? 'This AI Runner step fails.' : scenario === 'error' ? 'Continue past the AI service error.' : 'The risk threshold is not exceeded.'}</b><span>{scenario === 'error' ? errorPolicy === 'fail' ? 'Your selected policy marks the step as failed.' : 'Your selected policy lets subsequent steps continue.' : sampleRisk > threshold ? 'The sample estimate of 75% is above your '+threshold+'% threshold.' : 'The sample estimate of 75% is not above your '+threshold+'% threshold. Review findings alongside your normal build checks.'}</span></span></p></motion.div> : null}</AnimatePresence>
      {added ? <p className="runner-applied-directory">Analysis directory <code>{directory.trim() || 'Repository checkout'}</code></p> : null}<p className="runner-demo-note" role="status">{added ? stepName+' added to this example.' : 'Choose your settings, then add the step to the example.'}<span>Interactive preview only.</span></p>
    </div>
  </div>;
}
