import React from 'react';
import s from './CodeComparison.module.css';
import { CheckCircle2, AlertTriangle } from 'lucide-react';


export default function CodeComparison() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <span className="badge-alt" style={{ marginBottom: '10px' }}>Pipeline Syntax Comparison</span>
        <h2 className="section-title" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', marginBottom: '14px' }}>
          Side-by-Side: Node.js CI Pipeline
        </h2>
        <p className="section-subtitle">
          Both accomplish the same thing — build, test, and deploy a Node.js application. See which is simpler.
        </p>

        <div className={s.codeCompare}>
          <div className={s.codeBlock}>
            <div className={`${s.codeHeader} ${s.codeHeaderBn}`}>BUILDNINJA · .buildninja.yml</div>
            <pre className={s.pre}>
<span className={s.cm}># BuildNinja pipeline — clean YAML, no plugins</span>{'\n'}
<span className={s.kw}>name</span>: <span className={s.str}>Node.js CI Pipeline</span>{'\n'}
<span className={s.kw}>on</span>: [push, pull_request]{'\n'}
{'\n'}
<span className={s.kw}>stages</span>:{'\n'}
{'  '}- <span className={s.kw}>name</span>: <span className={s.str}>Install</span>{'\n'}
{'    '}<span className={s.kw}>image</span>: <span className={s.str}>node:20-alpine</span>{'\n'}
{'    '}<span className={s.kw}>run</span>: <span className={s.str}>npm ci</span>{'\n'}
{'    '}<span className={s.kw}>cache</span>:{'\n'}
{'      '}<span className={s.kw}>key</span>: <span className={s.str}>node-${`{{ checksum "package-lock.json" }}`}</span>{'\n'}
{'      '}<span className={s.kw}>paths</span>: [node_modules/]{'\n'}
{'\n'}
{'  '}- <span className={s.kw}>name</span>: <span className={s.str}>Lint &amp; Test</span>{'\n'}
{'    '}<span className={s.kw}>run</span>: |{'\n'}
{'      '}<span className={s.str}>npm run lint</span>{'\n'}
{'      '}<span className={s.str}>npm test -- --coverage</span>{'\n'}
{'    '}<span className={s.kw}>parallel</span>: <span className={s.val}>true</span>{'\n'}
{'\n'}
{'  '}- <span className={s.kw}>name</span>: <span className={s.str}>Build</span>{'\n'}
{'    '}<span className={s.kw}>run</span>: <span className={s.str}>npm run build</span>{'\n'}
{'    '}<span className={s.kw}>artifacts</span>:{'\n'}
{'      '}<span className={s.kw}>paths</span>: [dist/]{'\n'}
{'\n'}
{'  '}- <span className={s.kw}>name</span>: <span className={s.str}>Deploy Staging</span>{'\n'}
{'    '}<span className={s.kw}>run</span>: <span className={s.str}>./deploy.sh staging</span>{'\n'}
{'    '}<span className={s.kw}>only</span>: [main]{'\n'}
{'    '}<span className={s.kw}>env</span>:{'\n'}
{'      '}<span className={s.kw}>DEPLOY_KEY</span>: <span className={s.str}>${`{{ secrets.DEPLOY_KEY }}`}</span>{'\n'}
{'\n'}
<span className={s.cm}># <CheckCircle2 aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /> 28 lines. Zero plugins. Done.</span>{'\n'}
            </pre>
          </div>

          <div className={s.codeBlock}>
            <div className={`${s.codeHeader} ${s.codeHeaderCi}`}>CIRCLECI · .circleci/config.yml</div>
            <pre className={s.pre}>
<span className={s.cm}># CircleCI pipeline — requires orbs + contexts</span>{'\n'}
<span className={s.kw}>version</span>: <span className={s.val}>2.1</span>{'\n'}
{'\n'}
<span className={s.kw}>orbs</span>:{'\n'}
{'  '}<span className={s.kw}>node</span>: <span className={s.str}>circleci/node@5.0.0</span>{'\n'}
{'  '}<span className={s.kw}>aws-cli</span>: <span className={s.str}>circleci/aws-cli@3.0.0</span>{'\n'}
{'\n'}
<span className={s.kw}>jobs</span>:{'\n'}
{'  '}<span className={s.kw}>install-and-test</span>:{'\n'}
{'    '}<span className={s.kw}>docker</span>:{'\n'}
{'      '}- <span className={s.kw}>image</span>: <span className={s.str}>cimg/node:20.0</span>{'\n'}
{'    '}<span className={s.kw}>steps</span>:{'\n'}
{'      '}- <span className={s.str}>checkout</span>{'\n'}
{'      '}- <span className={s.str}>node/install-packages</span>:{'\n'}
{'          '}<span className={s.kw}>pkg-manager</span>: <span className={s.str}>npm</span>{'\n'}
{'      '}- <span className={s.kw}>run</span>: <span className={s.str}>npm run lint</span>{'\n'}
{'      '}- <span className={s.kw}>run</span>: <span className={s.str}>npm test -- --coverage</span>{'\n'}
{'      '}- <span className={s.str}>store_artifacts</span>:{'\n'}
{'          '}<span className={s.kw}>path</span>: <span className={s.str}>coverage</span>{'\n'}
{'\n'}
{'  '}<span className={s.kw}>build-and-deploy</span>:{'\n'}
{'    '}<span className={s.kw}>docker</span>:{'\n'}
{'      '}- <span className={s.kw}>image</span>: <span className={s.str}>cimg/node:20.0</span>{'\n'}
{'    '}<span className={s.kw}>steps</span>:{'\n'}
{'      '}- <span className={s.str}>checkout</span>{'\n'}
{'      '}- <span className={s.str}>node/install-packages</span>{'\n'}
{'      '}- <span className={s.kw}>run</span>: <span className={s.str}>npm run build</span>{'\n'}
{'      '}- <span className={s.kw}>run</span>: <span className={s.str}>./deploy.sh staging</span>{'\n'}
{'\n'}
<span className={s.kw}>workflows</span>:{'\n'}
{'  '}<span className={s.kw}>main</span>:{'\n'}
{'    '}<span className={s.kw}>jobs</span>:{'\n'}
{'      '}- <span className={s.str}>install-and-test</span>{'\n'}
{'      '}- <span className={s.str}>build-and-deploy</span>:{'\n'}
{'          '}<span className={s.kw}>requires</span>: [install-and-test]{'\n'}
{'          '}<span className={s.kw}>filters</span>:{'\n'}
{'            '}<span className={s.kw}>branches</span>: {'{'} <span className={s.kw}>only</span>: <span className={s.str}>main</span> {'}'}{'\n'}
{'\n'}
<span className={s.cm}># <AlertTriangle aria-label="Warning" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /> Requires 2 orbs, context setup,</span>{'\n'}
<span className={s.cm}># and credit consumption per run.</span>{'\n'}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
