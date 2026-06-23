"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Check, AlertTriangle, Zap, X, DollarSign, Wrench, Link, Lock, TrendingUp, Code, Handshake } from 'lucide-react';
import s from './ComparisonTable.module.css';


export default function ComparisonTable() {
  return (
    <section id="comparison-table" className={s.section}>
      <div className={s.container}>
        <motion.span
          className="badge-alt"
          style={{ marginBottom: '10px' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Full Feature Comparison
        </motion.span>
        <motion.h2
          className="section-title"
          style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', marginBottom: '14px' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          BuildNinja vs CircleCI - Every Feature, Honestly Scored
        </motion.h2>
        <motion.p
          className="section-subtitle"
          style={{ margin: '0 auto' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We've covered 40+ criteria across pricing, setup, CI/CD features, integrations, security, and scalability. No spin, no cherry-picking.
        </motion.p>

        <motion.div
          className={s.tableWrap}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <table className={s.table} aria-label="BuildNinja vs CircleCI feature comparison table">
            <thead>
              <tr>
                <th style={{ width: '34%' }}>Feature / Criterion</th>
                <th className={s.thBn} style={{ width: '33%' }}>
                  <span className={s.thHeaderInner}>
                    <img src="/resources/logo-buildninja.svg" alt="BuildNinja" className={s.logoBn} />
                    <span className={s.recBadge}>★ RECOMMENDED</span>
                  </span>
                </th>
                <th style={{ width: '33%' }}><img src="/resources/circleci-logo.svg" alt="CircleCI" className={s.logoCi} /></th>
              </tr>
            </thead>
            <tbody>
              {/* PRICING & COST */}
              <tr className={s.catRow}><td colSpan="3"><DollarSign aria-label="Pricing" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /> Pricing &amp; Cost Model</td></tr>
              <tr>
                <td>Free tier build minutes</td>
                <td className={s.tdBn}><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> <strong>Unlimited</strong> - no credit system</td>
                <td>Up to ~6,000 build-minutes/mo (30,000 credits)</td>
              </tr>
              <tr>
                <td>Per-seat cost</td>
                <td className={s.tdBn}><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> <strong>$0</strong> - no per-user pricing ever</td>
                <td>Scales with usage; credit-based tiers</td>
              </tr>
              <tr>
                <td>Pricing model</td>
                <td className={s.tdBn}><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Flat infrastructure cost only <span className={`${s.winTag} ${s.winBn}`}>BN Wins</span></td>
                <td>Pay-per-compute-credit system</td>
              </tr>
              <tr>
                <td>Predictable monthly bill</td>
                <td className={s.tdBn}><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Yes - server cost is fixed</td>
                <td><span className={s.partial}><AlertTriangle aria-label="Warning" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Variable - spikes with build activity</td>
              </tr>
              <tr>
                <td>No credit card to start</td>
                <td className={s.tdBn}><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Self-host, no card required</td>
                <td><span className={s.partial}><AlertTriangle aria-label="Warning" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Account required for full access</td>
              </tr>

              {/* SETUP & DEPLOYMENT */}
              <tr className={s.catRow}><td colSpan="3"><Zap aria-label="Lightning bolt" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /> Setup &amp; Deployment</td></tr>
              <tr>
                <td>Self-hosted deployment</td>
                <td className={s.tdBn}><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> <strong>Docker, Kubernetes, or Installer</strong> on Windows, macOS, and Linux <span className={`${s.winTag} ${s.winBn}`}>BN Wins</span></td>
                <td><span className={s.partial}><AlertTriangle aria-label="Warning" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Requires Kubernetes + enterprise contract</td>
              </tr>
              <tr>
                <td>Setup time</td>
                <td className={s.tdBn}><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> <strong>Under 5 minutes</strong></td>
                <td>15–30 minutes (OAuth + orbs config)</td>
              </tr>
              <tr>
                <td>Minimum server requirements</td>
                <td className={s.tdBn}><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> 2 vCPU / 4GB RAM</td>
                <td>Kubernetes cluster (significant overhead)</td>
              </tr>
              <tr>
                <td>Air-gapped / offline support</td>
                <td className={s.tdBn}><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Fully offline after initial pull <span className={`${s.winTag} ${s.winBn}`}>BN Wins</span></td>
                <td><span className={s.cross}><X aria-label="No" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> SaaS-first, requires internet</td>
              </tr>
              <tr>
                <td>Docker-native setup</td>
                <td className={s.tdBn}><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Docker-first architecture</td>
                <td><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Docker executor supported</td>
              </tr>
              <tr>
                <td>Cloud SaaS option</td>
                <td className={s.tdBn}><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Self Hosted - Your infrastructure  your Rules </td>
                <td><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Fully managed SaaS</td>
              </tr>

              {/* CI/CD PIPELINE FEATURES */}
              <tr className={s.catRow}><td colSpan="3"><Wrench aria-label="Configuration" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /> CI/CD Pipeline Features</td></tr>
              <tr>
                <td>Parallel build execution</td>
                <td className={s.tdBn}><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Unlimited parallel builds on your hardware</td>
                <td><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Yes, subject to credit consumption</td>
              </tr>
              <tr>
                <td>Pipeline as code (YAML)</td>
                <td className={s.tdBn}><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Supports YAML configuration - clean, minimal syntax</td>
                <td><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> <code style={{ fontSize: '12px' }}>.circleci/config.yml</code> + orbs</td>
              </tr>
              <tr>
                <td>Build caching</td>
                <td className={s.tdBn}><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Dependency + artifact caching built-in</td>
                <td><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Cache keys and restore keys</td>
              </tr>
              <tr>
                <td>Build agents / runners</td>
                <td className={s.tdBn}><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Unlimited self-hosted build agents <span className={`${s.winTag} ${s.winBn}`}>BN Wins</span></td>
                <td><span className={s.partial}><AlertTriangle aria-label="Warning" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Self-hosted runners limited on free tier</td>
              </tr>
              <tr>
                <td>Environment variables / secrets</td>
                <td className={s.tdBn}><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Encrypted vault, project-scoped</td>
                <td><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Context-based secret management</td>
              </tr>
              <tr>
                <td>Artifact storage</td>
                <td className={s.tdBn}><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> On your own storage - no limits</td>
                <td><span className={s.partial}><AlertTriangle aria-label="Warning" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Subject to plan storage limits</td>
              </tr>
              <tr>
                <td>Pipeline orbs / reusable configs</td>
                <td className={s.tdBn}><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Export & reuse YAML configs via Config Runner</td>
                <td><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Large orbs registry (1,000+ orbs)</td>
              </tr>
              <tr>
                <td>AI-powered pipeline intelligence</td>
                <td className={s.tdBn}><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> BuildNinja Intelligence <span className={`${s.winTag} ${s.winBn}`}>BN Unique</span></td>
                <td><span className={s.partial}><AlertTriangle aria-label="Warning" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> "Autonomous validation" in beta</td>
              </tr>

              {/* INTEGRATIONS */}
              <tr className={s.catRow}><td colSpan="3"><Link aria-label="Integrations" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /> Integrations &amp; Ecosystem</td></tr>
              <tr>
                <td>GitHub integration</td>
                <td className={s.tdBn}><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> VCS repository connection</td>
                <td><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Deep GitHub integration</td>
              </tr>
              <tr>
                <td>GitLab integration</td>
                <td className={s.tdBn}><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> VCS repository connection</td>
                <td><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> GitLab integration supported</td>
              </tr>
              <tr>
                <td>Bitbucket integration</td>
                <td className={s.tdBn}><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> VCS repository connection</td>
                <td><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Bitbucket Cloud + Server</td>
              </tr>
              <tr>
                <td>Kubernetes deployment</td>
                <td className={s.tdBn}><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Native K8s deploy stages</td>
                <td><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> K8s orbs available</td>
              </tr>
              <tr>
                <td>AWS / GCP / Azure deploy</td>
                <td className={s.tdBn}><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> SSH + script + Docker-based deploy</td>
                <td><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Cloud provider orbs</td>
              </tr>
              <tr>
                <td>Docker Hub / private registry</td>
                <td className={s.tdBn}><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Any registry supported</td>
                <td><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Docker + private registry support</td>
              </tr>
              <tr>
                <td>Slack / notification integrations</td>
                <td className={s.tdBn}><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Email notifications</td>
                <td><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Slack orb, email, PagerDuty</td>
              </tr>
              <tr>
                <td>Third-party plugin ecosystem</td>
                <td className={s.tdBn}><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> No plugin chaos</td>
                <td><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> 1,000+ orbs from community</td>
              </tr>

              {/* SECURITY & COMPLIANCE */}
              <tr className={s.catRow}><td colSpan="3"><Lock aria-label="Security" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /> Security &amp; Compliance</td></tr>
              <tr>
                <td>Data sovereignty (code stays on-prem)</td>
                <td className={s.tdBn}><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> <strong>All data stays on your servers</strong> <span className={`${s.winTag} ${s.winBn}`}>BN Wins</span></td>
                <td><span className={s.cross}><X aria-label="No" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Code transits CircleCI's infrastructure</td>
              </tr>
              <tr>
                <td>HIPAA / SOC2 / GDPR support</td>
                <td className={s.tdBn}><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Self-hosted = you control compliance</td>
                <td><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> CircleCI is SOC2 Type II certified</td>
              </tr>
              <tr>
                <td>Role-based access control (RBAC)</td>
                <td className={s.tdBn}><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Granular RBAC built-in</td>
                <td><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Project + org level permissions</td>
              </tr>
              <tr>
                <td>SSO (SAML / OAuth)</td>
                <td className={s.tdBn}><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> SSO via GitHub, GitLab, Google, Microsoft and Bitbucket</td>
                <td><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> SAML SSO on paid plans</td>
              </tr>
              <tr>
                <td>Audit logs</td>
                <td className={s.tdBn}><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Full build and access audit trail</td>
                <td><span className={s.partial}><AlertTriangle aria-label="Warning" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Audit logs on higher tiers only</td>
              </tr>
              <tr>
                <td>Secret encryption (AES-256)</td>
                <td className={s.tdBn}><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> AES-256 encrypted</td>
                <td><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Encrypted context variables</td>
              </tr>
              <tr>
                <td>VPN / private network support</td>
                <td className={s.tdBn}><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Fully compatible - your network, your rules</td>
                <td><span className={s.partial}><AlertTriangle aria-label="Warning" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Requires runner config for private nets</td>
              </tr>

              {/* SCALABILITY */}
              <tr className={s.catRow}><td colSpan="3"><TrendingUp aria-label="Scalability" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /> Scalability &amp; Performance</td></tr>
              <tr>
                <td>Unlimited concurrent builds</td>
                <td className={s.tdBn}><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Limited only by your hardware <span className={`${s.winTag} ${s.winBn}`}>BN Wins</span></td>
                <td><span className={s.partial}><AlertTriangle aria-label="Warning" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Subject to plan concurrency limits</td>
              </tr>
              <tr>
                <td>Horizontal agent scaling</td>
                <td className={s.tdBn}><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Add build agents freely</td>
                <td><span className={s.partial}><AlertTriangle aria-label="Warning" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> More runners = more resource consumption</td>
              </tr>
              <tr>
                <td>Build queue management</td>
                <td className={s.tdBn}><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Priority queue + agent routing</td>
                <td><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Resource class-based routing</td>
              </tr>
              <tr>
                <td>Multi-project support</td>
                <td className={s.tdBn}><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Unlimited projects, no per-project limits</td>
                <td><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Unlimited projects on enterprise plans</td>
              </tr>

              {/* DEVELOPER EXPERIENCE */}
              <tr className={s.catRow}><td colSpan="3"><Code aria-label="Developer Experience" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /> Developer Experience</td></tr>
              <tr>
                <td>Interactive sandbox / demo</td>
                <td className={s.tdBn}><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Dojo - live CI/CD sandbox (unique) <span className={`${s.winTag} ${s.winBn}`}>BN Unique</span></td>
                <td><span className={s.cross}><X aria-label="No" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> No live sandbox - sign-up flow only</td>
              </tr>
              <tr>
                <td>CLI tooling</td>
                <td className={s.tdBn}><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Docker CLI-first setup</td>
                <td><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> circleci CLI available</td>
              </tr>
              <tr>
                <td>Dashboard &amp; build visibility</td>
                <td className={s.tdBn}><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Real-time build logs + stage visualization</td>
                <td><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Rich pipeline visualization</td>
              </tr>
              <tr>
                <td>Documentation quality</td>
                <td className={s.tdBn}><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Complete docs available</td>
                <td><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Extensive docs + community guides</td>
              </tr>
              <tr>
                <td>Community &amp; ecosystem</td>
                <td className={s.tdBn}><span className={s.partial}><AlertTriangle aria-label="Warning" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Early stage - GrapeCity developer network</td>
                <td><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Large community, Discuss forum, podcast <span className={`${s.winTag} ${s.winCi}`}>CircleCI Wins</span></td>
              </tr>

              {/* SUPPORT */}
              <tr className={s.catRow}><td colSpan="3"><Handshake aria-label="Support" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /> Support</td></tr>
              <tr>
                <td>Email / ticket support</td>
                <td className={s.tdBn}><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Included</td>
                <td><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Available on paid plans</td>
              </tr>
              <tr>
                <td>Engineer-to-engineer support</td>
                <td className={s.tdBn}><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Direct technical team access <span className={`${s.winTag} ${s.winBn}`}>BN Wins</span></td>
                <td><span className={s.partial}><AlertTriangle aria-label="Warning" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Ticket-based support routing</td>
              </tr>
              <tr>
                <td>SLA guarantees</td>
                <td className={s.tdBn}><span className={s.partial}><AlertTriangle aria-label="Warning" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Email Support within 48 hours</td>
                <td><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Enterprise SLAs</td>
              </tr>
            </tbody>
          </table>
        </motion.div>

        <motion.div
          className={s.legend}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <span><span className={s.check}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Fully supported</span>
          <span><span className={s.partial}><AlertTriangle aria-label="Warning" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Partial / plan-dependent</span>
          <span><span className={s.cross}><X aria-label="No" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Not supported</span>
          <span><span className={`${s.winTag} ${s.winBn}`}>BN Wins</span> BuildNinja structural advantage</span>
          <span><span className={`${s.winTag} ${s.winCi}`}>CircleCI Wins</span> CircleCI ahead</span>
        </motion.div>
      </div>
    </section>
  );
}
