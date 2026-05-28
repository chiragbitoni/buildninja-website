import React from 'react';
import { CheckCircle2, Clock, ArrowRight } from 'lucide-react';
import s from './MigrationGuide.module.css';


export default function MigrationGuide() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <span className="badge-alt" style={{ marginBottom: '10px' }}>Migration Guide</span>
        <h2 className="section-title" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', marginBottom: '14px' }}>
          Switching from GitHub Actions to BuildNinja in 4 Steps
        </h2>
        <p className="section-subtitle">
          Most teams complete the migration in under 2 hours. You keep using GitHub for source code — just run your builds somewhere better.
        </p>

        <div className={s.migGrid}>
          <div className={s.migCard}>
            <div className={s.migNum}>01</div>
            <h4>Install BuildNinja</h4>
            <p>One Docker command on any Linux server. <code style={{ fontSize: '11px', background: 'transparent' }}>docker run -d -p 8080:8080 buildninja/server</code> — that's your CI/CD server.</p>
            <span className={s.migTime}><Clock aria-label="Time" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /> 5 min</span>
          </div>
          <div className={s.migCard}>
            <div className={s.migNum}>02</div>
            <h4>Connect Your GitHub Repos</h4>
            <p>OAuth connection to GitHub. BuildNinja sets up webhooks automatically. Your repos still live on GitHub — only the build runner changes.</p>
            <span className={s.migTime}><Clock aria-label="Time" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /> 3 min</span>
          </div>
          <div className={s.migCard}>
            <div className={s.migNum}>03</div>
            <h4>Convert Workflow Files</h4>
            <p>Translate <code style={{ fontSize: '11px', background: 'transparent' }}>.github/workflows/*.yml</code> to <code style={{ fontSize: '11px', background: 'transparent' }}>.buildninja.yml</code>. Concepts map 1:1 — jobs <ArrowRight aria-label="Right Arrow" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /> stages, steps <ArrowRight aria-label="Right Arrow" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /> run. Most pipelines convert in 30 min.</p>
            <span className={s.migTime}><Clock aria-label="Time" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /> 30–60 min</span>
          </div>
          <div className={s.migCard}>
            <div className={s.migNum}>04</div>
            <h4>Disable GitHub Actions Billing</h4>
            <p>Disable GitHub Actions workflows once BuildNinja is running. Your per-minute GitHub bill drops to zero. PR checks post back to GitHub automatically.</p>
            <span className={s.migTime}><Clock aria-label="Time" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /> 10 min</span>
          </div>
        </div>

        <div className={s.calloutGood}>
          <span className={s.calloutIco}><CheckCircle2 aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span>
          <p>
            <strong>Your GitHub stays the same:</strong> Repositories, pull requests, code review, Issues, GitHub Pages — all unchanged. BuildNinja only replaces the CI/CD execution layer. Your developers won't notice the difference except for seeing a different dashboard for build results.
          </p>
        </div>
      </div>
    </section>
  );
}
