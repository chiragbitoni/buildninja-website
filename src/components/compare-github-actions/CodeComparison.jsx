'use client';
import React, { useState } from 'react';
import { CheckCircle2, AlertTriangle, Pin, Check } from 'lucide-react';
import s from './CodeComparison.module.css';


export default function CodeComparison() {
  const [copiedId, setCopiedId] = useState(null);

  const copyCode = (id, text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  const bnCode = `# BuildNinja - clean YAML, Git-provider agnostic
name: Node.js Production Pipeline
on: [push, pull_request]

stages:
  - name: Install
    image: node:20-alpine
    run: npm ci
    cache:
      key: node-\${{ checksum "package-lock.json" }}
      paths: [node_modules/]

  - name: Lint
    run: npm run lint

  - name: Test
    run: npm test -- --coverage
    parallel: true

  - name: Build
    run: npm run build
    artifacts:
      paths: [dist/]

  - name: Deploy to Production
    run: ./deploy.sh production
    only: [main]
    env:
      DEPLOY_KEY: \${{ secrets.DEPLOY_KEY }}

# [<Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} />] 24 lines · No marketplace dependencies
# [<Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} />] Works with GitHub, GitLab, Bitbucket
# [<Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} />] $0 per run - unlimited`;

  const ghCode = `# GitHub Actions - GitHub-only, verbose syntax
name: Node.js Production Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  install-and-test:
      runs-on: ubuntu-latest  # $0.006/min
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run lint
      - run: npm test -- --coverage

  build-and-deploy:
    needs: install-and-test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20', cache: 'npm' }
      - run: npm ci
      - run: npm run build
      - run: ./deploy.sh production
        env:
          DEPLOY_KEY: \${{ secrets.DEPLOY_KEY }}

# [!] 36 lines · Marketplace dependencies
# [!] GitHub repositories only
# [!] ~$0.006/min per job run`;

  return (
    <section className={s.section}>
      <div className={s.container}>
        <span className="badge-alt" style={{ marginBottom: '10px' }}>Pipeline Syntax Side-by-Side</span>
        <h2 className="section-title" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', marginBottom: '14px' }}>
          Same Pipeline - BuildNinja vs GitHub Actions YAML
        </h2>
        <p className="section-subtitle">
          Both pipelines do the same thing: build, test, and deploy a Node.js app. See which syntax you prefer.
        </p>

        <div className={s.codeGrid}>
          {/* BuildNinja */}
          <div className={s.codeBlock}>
            <div className={s.codeHdr}>
              <div className={s.codeHdrL}>
                <div className={s.codeDots}>
                  <div className={`${s.cd} ${s.cdR}`}></div><div className={`${s.cd} ${s.cdA}`}></div><div className={`${s.cd} ${s.cdG}`}></div>
                </div>
                <span className={s.codeFile}>.buildninja.yaml</span>
                <span className={`${s.codeLabel} ${s.bn}`}>BuildNinja</span>
              </div>
              <button 
                className={`${s.codeCopyBtn} ${copiedId === 'c1' ? s.copied : ''}`} 
                onClick={() => copyCode('c1', bnCode)}
              >
                {copiedId === 'c1' ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <pre className={s.codePre} id="c1">
<span className={s.cm}># BuildNinja - clean YAML, Git-provider agnostic</span>{'\n'}
<span className={s.kw}>name</span>: <span className={s.str}>Node.js Production Pipeline</span>{'\n'}
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
{'  '}- <span className={s.kw}>name</span>: <span className={s.str}>Lint</span>{'\n'}
{'    '}<span className={s.kw}>run</span>: <span className={s.str}>npm run lint</span>{'\n'}
{'\n'}
{'  '}- <span className={s.kw}>name</span>: <span className={s.str}>Test</span>{'\n'}
{'    '}<span className={s.kw}>run</span>: <span className={s.str}>npm test -- --coverage</span>{'\n'}
{'    '}<span className={s.kw}>parallel</span>: <span className={s.val}>true</span>{'\n'}
{'\n'}
{'  '}- <span className={s.kw}>name</span>: <span className={s.str}>Build</span>{'\n'}
{'    '}<span className={s.kw}>run</span>: <span className={s.str}>npm run build</span>{'\n'}
{'    '}<span className={s.kw}>artifacts</span>:{'\n'}
{'      '}<span className={s.kw}>paths</span>: [dist/]{'\n'}
{'\n'}
{'  '}- <span className={s.kw}>name</span>: <span className={s.str}>Deploy to Production</span>{'\n'}
{'    '}<span className={s.kw}>run</span>: <span className={s.str}>./deploy.sh production</span>{'\n'}
{'    '}<span className={s.kw}>only</span>: [main]{'\n'}
{'    '}<span className={s.kw}>env</span>:{'\n'}
{'      '}<span className={s.kw}>DEPLOY_KEY</span>: <span className={s.str}>${`{{ secrets.DEPLOY_KEY }}`}</span>{'\n'}
{'\n'}
<span className={s.cm}># <CheckCircle2 aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /> 24 lines · No marketplace dependencies{'\n'}
# <CheckCircle2 aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /> Works with GitHub, GitLab, Bitbucket{'\n'}
# <CheckCircle2 aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /> $0 per run - unlimited</span>{'\n'}
            </pre>
          </div>

          {/* GitHub Actions */}
          <div className={s.codeBlock}>
            <div className={s.codeHdr}>
              <div className={s.codeHdrL}>
                <div className={s.codeDots}>
                  <div className={`${s.cd} ${s.cdR}`}></div><div className={`${s.cd} ${s.cdA}`}></div><div className={`${s.cd} ${s.cdG}`}></div>
                </div>
                <span className={s.codeFile}>.github/workflows/main.yml</span>
                <span className={`${s.codeLabel} ${s.gh}`}>GitHub Actions</span>
              </div>
              <button 
                className={`${s.codeCopyBtn} ${copiedId === 'c2' ? s.copied : ''}`} 
                onClick={() => copyCode('c2', ghCode)}
              >
                {copiedId === 'c2' ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <pre className={s.codePre} id="c2">
<span className={s.cm}># GitHub Actions - GitHub-only, verbose syntax</span>{'\n'}
<span className={s.kw}>name</span>: <span className={s.str}>Node.js Production Pipeline</span>{'\n'}
{'\n'}
<span className={s.kw}>on</span>:{'\n'}
{'  '}<span className={s.kw}>push</span>:{'\n'}
{'    '}<span className={s.kw}>branches</span>: [main]{'\n'}
{'  '}<span className={s.kw}>pull_request</span>:{'\n'}
{'    '}<span className={s.kw}>branches</span>: [main]{'\n'}
{'\n'}
<span className={s.kw}>jobs</span>:{'\n'}
{'  '}<span className={s.kw}>install-and-test</span>:{'\n'}
{'    '}<span className={s.kw}>runs-on</span>: <span className={s.str}>ubuntu-latest</span>  <span className={s.cm}># $0.006/min</span>{'\n'}
{'    '}<span className={s.kw}>steps</span>:{'\n'}
{'      '}- <span className={s.kw}>uses</span>: <span className={s.str}>actions/checkout@v4</span>{'\n'}
{'      '}- <span className={s.kw}>uses</span>: <span className={s.str}>actions/setup-node@v4</span>{'\n'}
{'        '}<span className={s.kw}>with</span>:{'\n'}
{'          '}<span className={s.kw}>node-version</span>: <span className={s.str}>'20'</span>{'\n'}
{'          '}<span className={s.kw}>cache</span>: <span className={s.str}>'npm'</span>{'\n'}
{'      '}- <span className={s.kw}>run</span>: <span className={s.str}>npm ci</span>{'\n'}
{'      '}- <span className={s.kw}>run</span>: <span className={s.str}>npm run lint</span>{'\n'}
{'      '}- <span className={s.kw}>run</span>: <span className={s.str}>npm test -- --coverage</span>{'\n'}
{'\n'}
{'  '}<span className={s.kw}>build-and-deploy</span>:{'\n'}
{'    '}<span className={s.kw}>needs</span>: install-and-test{'\n'}
{'    '}<span className={s.kw}>runs-on</span>: <span className={s.str}>ubuntu-latest</span>{'\n'}
{'    '}<span className={s.kw}>if</span>: <span className={s.str}>github.ref == 'refs/heads/main'</span>{'\n'}
{'    '}<span className={s.kw}>steps</span>:{'\n'}
{'      '}- <span className={s.kw}>uses</span>: <span className={s.str}>actions/checkout@v4</span>{'\n'}
{'      '}- <span className={s.kw}>uses</span>: <span className={s.str}>actions/setup-node@v4</span>{'\n'}
{'        '}<span className={s.kw}>with</span>: {`{`} <span className={s.kw}>node-version</span>: <span className={s.str}>'20'</span>, <span className={s.kw}>cache</span>: <span className={s.str}>'npm'</span> {`}`}{'\n'}
{'      '}- <span className={s.kw}>run</span>: <span className={s.str}>npm ci</span>{'\n'}
{'      '}- <span className={s.kw}>run</span>: <span className={s.str}>npm run build</span>{'\n'}
{'      '}- <span className={s.kw}>run</span>: <span className={s.str}>./deploy.sh production</span>{'\n'}
{'        '}<span className={s.kw}>env</span>:{'\n'}
{'          '}<span className={s.kw}>DEPLOY_KEY</span>: <span className={s.str}>${`{{ secrets.DEPLOY_KEY }}`}</span>{'\n'}
{'\n'}
<span className={s.cm}># <AlertTriangle aria-label="Warning" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /> 36 lines · Marketplace dependencies{'\n'}
# <AlertTriangle aria-label="Warning" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /> GitHub repositories only{'\n'}
# <AlertTriangle aria-label="Warning" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /> ~$0.006/min per job run</span>{'\n'}
            </pre>
          </div>
        </div>

        <div className={s.calloutInfo}>
          <span className={s.calloutIco}><Pin aria-label="Key difference" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span>
          <p>
            <strong>Key syntax difference:</strong> GitHub Actions requires <code style={{ fontSize: '12px', background: 'transparent' }}>uses: actions/checkout@v4</code> and <code style={{ fontSize: '12px', background: 'transparent' }}>uses: actions/setup-node@v4</code> marketplace actions for basic tasks. BuildNinja uses standard Docker images directly - no marketplace dependency, no action version pinning, no supply-chain risk from third-party actions.
          </p>
        </div>
      </div>
    </section>
  );
}
