import React from 'react';
import { Check, AlertTriangle, Zap, X, DollarSign, Wrench, Link, Lock, TrendingUp, Code, Handshake } from 'lucide-react';
import s from './ComparisonTable.module.css';


export default function ComparisonTable() {
  return (
    <section className={s.section} id="comparison-table">
      <div className={s.container}>
        <span className="badge-alt" style={{ marginBottom: '10px' }}>Full Feature Comparison</span>
        <h2 className="section-title" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', marginBottom: '14px' }}>
          BuildNinja vs GitHub Actions — 45+ Criteria, Honestly Scored
        </h2>
        <p className="section-subtitle">
          Every feature from pricing to security to developer experience. We score this honestly — GitHub Actions wins on ecosystem and marketplace. BuildNinja wins on cost structure, data sovereignty, and platform independence.
        </p>

        <div className={s.tableOuter}>
          <table className={s.cmp} aria-label="BuildNinja vs GitHub Actions feature comparison">
            <thead>
              <tr>
                <th>Feature / Criterion</th>
                <th className={s.thBn}>BuildNinja <span className={s.recBadge}>RECOMMENDED</span></th>
                <th className={s.thGh}>GitHub Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* PRICING */}
              <tr className={s.catRow}><td colSpan="3"><DollarSign aria-label="Pricing" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /> Pricing &amp; Billing Model</td></tr>
              <tr>
                <td>Free build minutes / month</td>
                <td className={s.tdBn}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> <strong>Unlimited</strong> — no cap, no credits <span className={`${s.tagWin} ${s.tagBn}`}>BN Wins</span></td>
                <td>2,000 min/mo private repos · Unlimited public</td>
              </tr>
              <tr>
                <td>Cost per build minute (overage)</td>
                <td className={s.tdBn}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> <strong>$0.00</strong> — always</td>
                <td className={s.tdGh}>$0.008/min Linux · $0.016/min Windows · $0.08/min macOS</td>
              </tr>
              <tr>
                <td>Self-hosted runner orchestration fee</td>
                <td className={s.tdBn}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> <strong>$0.00</strong> — no platform tax <span className={`${s.tagWin} ${s.tagBn}`}>BN Wins</span></td>
                <td className={s.tdGh}><span className={s.icWarn}><AlertTriangle aria-label="Warning" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> $0.002/min from March 2026 (private repos)</td>
              </tr>
              <tr>
                <td>Per-seat pricing</td>
                <td className={s.tdBn}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> <strong>$0/user</strong></td>
                <td className={s.tdGh}>GitHub Team: $4.20/user/mo · Enterprise: $21/user/mo</td>
              </tr>
              <tr>
                <td>Predictable monthly bill</td>
                <td className={s.tdBn}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Yes — server cost is fixed</td>
                <td className={s.tdGh}><span className={s.icWarn}><AlertTriangle aria-label="Warning" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Variable — spikes on heavy sprint weeks</td>
              </tr>
              <tr>
                <td>Cost for 20-person team (100 builds/day)</td>
                <td className={s.tdBn}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> <strong>~$17–50/mo</strong> (server only)</td>
                <td className={s.tdGh}>$250–440/mo (plan + overages + self-hosted fee)</td>
              </tr>

              {/* SETUP & ARCHITECTURE */}
              <tr className={s.catRow}><td colSpan="3"><Zap aria-label="Lightning bolt" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /> Setup &amp; Architecture</td></tr>
              <tr>
                <td>Git provider dependency</td>
                <td className={s.tdBn}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Any provider — GitHub, GitLab, Bitbucket <span className={`${s.tagWin} ${s.tagBn}`}>BN Wins</span></td>
                <td className={s.tdGh}>GitHub only (tightly coupled)</td>
              </tr>
              <tr>
                <td>Self-hosted setup complexity</td>
                <td className={s.tdBn}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> 1 Docker command, 5 minutes <span className={`${s.tagWin} ${s.tagBn}`}>BN Wins</span></td>
                <td className={s.tdGh}>Runner binary + registration + Kubernetes (for scale)</td>
              </tr>
              <tr>
                <td>Cloud SaaS option</td>
                <td className={s.tdBn}><span className={s.icWarn}><AlertTriangle aria-label="Warning" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> In roadmap</td>
                <td className={s.tdGh}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Fully managed — zero infra needed <span className={`${s.tagWin} ${s.tagGh}`}>GH Wins</span></td>
              </tr>
              <tr>
                <td>Works without internet (air-gapped)</td>
                <td className={s.tdBn}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Full offline support after setup <span className={`${s.tagWin} ${s.tagBn}`}>BN Wins</span></td>
                <td className={s.tdGh}><span className={s.icNo}><X aria-label="No" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Requires GitHub.com connectivity</td>
              </tr>
              <tr>
                <td>Vendor lock-in risk</td>
                <td className={s.tdBn}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> None — switch Git host without rebuilding pipelines</td>
                <td className={s.tdGh}><span className={s.icWarn}><AlertTriangle aria-label="Warning" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> High — workflows tied to GitHub ecosystem</td>
              </tr>
              <tr>
                <td>Time to first build</td>
                <td className={s.tdBn}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Under 10 minutes</td>
                <td className={s.tdGh}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Under 10 minutes (if already on GitHub)</td>
              </tr>

              {/* PIPELINE FEATURES */}
              <tr className={s.catRow}><td colSpan="3"><Wrench aria-label="Configuration" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /> CI/CD Pipeline Capabilities</td></tr>
              <tr>
                <td>Pipeline syntax</td>
                <td className={s.tdBn}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Clean YAML (<code style={{ fontSize: '11px' }}>.buildninja.yml</code>) — minimal boilerplate</td>
                <td className={s.tdGh}>YAML (<code style={{ fontSize: '11px' }}>.github/workflows/*.yml</code>) — verbose, trigger-heavy</td>
              </tr>
              <tr>
                <td>Parallel job execution</td>
                <td className={s.tdBn}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Unlimited parallel builds on your hardware <span className={`${s.tagWin} ${s.tagBn}`}>BN Wins</span></td>
                <td className={s.tdGh}><span className={s.icWarn}><AlertTriangle aria-label="Warning" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Parallel jobs consume credits; limited by plan</td>
              </tr>
              <tr>
                <td>Build caching</td>
                <td className={s.tdBn}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Built-in dependency + artifact caching</td>
                <td className={s.tdGh}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Cache action — up to 10GB per repo</td>
              </tr>
              <tr>
                <td>Matrix builds</td>
                <td className={s.tdBn}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Multi-dimension matrix support</td>
                <td className={s.tdGh}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Matrix strategy with include/exclude</td>
              </tr>
              <tr>
                <td>Reusable pipeline components</td>
                <td className={s.tdBn}><span className={s.icWarn}><AlertTriangle aria-label="Warning" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Template library in development</td>
                <td className={s.tdGh}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Actions marketplace (20,000+ actions) <span className={`${s.tagWin} ${s.tagGh}`}>GH Wins</span></td>
              </tr>
              <tr>
                <td>Scheduled builds (cron)</td>
                <td className={s.tdBn}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Flexible cron scheduling</td>
                <td className={s.tdGh}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> schedule event with cron expressions</td>
              </tr>
              <tr>
                <td>Environment approvals / gates</td>
                <td className={s.tdBn}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Environment-based deployment gates</td>
                <td className={s.tdGh}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Required reviewers for environments</td>
              </tr>
              <tr>
                <td>Concurrent builds — no extra cost</td>
                <td className={s.tdBn}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Unlimited concurrency on your server <span className={`${s.tagWin} ${s.tagBn}`}>BN Wins</span></td>
                <td className={s.tdGh}><span className={s.icNo}><X aria-label="No" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Each concurrent job = more minutes consumed</td>
              </tr>
              <tr>
                <td>AI-powered pipeline intelligence</td>
                <td className={s.tdBn}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> BuildNinja Intelligence (Q3 2026) — failure prediction, log AI <span className={`${s.tagWin} ${s.tagBn}`}>BN Unique</span></td>
                <td className={s.tdGh}><span className={s.icWarn}><AlertTriangle aria-label="Warning" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Copilot integrations, no native pipeline AI</td>
              </tr>

              {/* INTEGRATIONS */}
              <tr className={s.catRow}><td colSpan="3"><Link aria-label="Integrations" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /> Integrations &amp; Ecosystem</td></tr>
              <tr>
                <td>GitHub integration</td>
                <td className={s.tdBn}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Full: webhooks, PR checks, status badges</td>
                <td className={s.tdGh}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Native — deepest possible integration</td>
              </tr>
              <tr>
                <td>GitLab integration</td>
                <td className={s.tdBn}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Full support — self-hosted &amp; cloud</td>
                <td className={s.tdGh}><span className={s.icNo}><X aria-label="No" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Not supported (GitHub only)</td>
              </tr>
              <tr>
                <td>Bitbucket integration</td>
                <td className={s.tdBn}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Full support</td>
                <td className={s.tdGh}><span className={s.icNo}><X aria-label="No" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Not supported</td>
              </tr>
              <tr>
                <td>Works across multiple Git hosts</td>
                <td className={s.tdBn}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Single BuildNinja instance, all 3 providers <span className={`${s.tagWin} ${s.tagBn}`}>BN Wins</span></td>
                <td className={s.tdGh}><span className={s.icNo}><X aria-label="No" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> GitHub repositories only</td>
              </tr>
              <tr>
                <td>Docker / container builds</td>
                <td className={s.tdBn}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Docker-first by design</td>
                <td className={s.tdGh}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Docker build and push actions available</td>
              </tr>
              <tr>
                <td>Kubernetes deployments</td>
                <td className={s.tdBn}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Native K8s deploy stages</td>
                <td className={s.tdGh}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> K8s actions in marketplace</td>
              </tr>
              <tr>
                <td>AWS / GCP / Azure deploy</td>
                <td className={s.tdBn}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> SSH + script + Docker-based deploy</td>
                <td className={s.tdGh}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Official cloud provider actions</td>
              </tr>
              <tr>
                <td>Community marketplace/actions</td>
                <td className={s.tdBn}><span className={s.icWarn}><AlertTriangle aria-label="Warning" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Template library growing</td>
                <td className={s.tdGh}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> 20,000+ community actions <span className={`${s.tagWin} ${s.tagGh}`}>GH Wins</span></td>
              </tr>
              <tr>
                <td>Slack/notification integrations</td>
                <td className={s.tdBn}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Webhook-based notifications</td>
                <td className={s.tdGh}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Slack GitHub action available</td>
              </tr>

              {/* SECURITY & COMPLIANCE */}
              <tr className={s.catRow}><td colSpan="3"><Lock aria-label="Security" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /> Security &amp; Compliance</td></tr>
              <tr>
                <td>Source code leaves your network?</td>
                <td className={s.tdBn}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> <strong>Never</strong> — runs entirely on your infra <span className={`${s.tagWin} ${s.tagBn}`}>BN Wins</span></td>
                <td className={s.tdGh}><span className={s.icNo}><X aria-label="No" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Routes through GitHub's servers (Microsoft)</td>
              </tr>
              <tr>
                <td>HIPAA / GDPR / FedRAMP suitability</td>
                <td className={s.tdBn}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Self-hosted = you control compliance entirely</td>
                <td className={s.tdGh}><span className={s.icWarn}><AlertTriangle aria-label="Warning" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> GitHub GHEC has some certifications — code still on GitHub</td>
              </tr>
              <tr>
                <td>Air-gapped deployment</td>
                <td className={s.tdBn}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Fully offline — no internet required post-setup <span className={`${s.tagWin} ${s.tagBn}`}>BN Wins</span></td>
                <td className={s.tdGh}><span className={s.icNo}><X aria-label="No" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Requires GitHub.com connectivity</td>
              </tr>
              <tr>
                <td>RBAC (role-based access control)</td>
                <td className={s.tdBn}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Granular project &amp; org-level RBAC</td>
                <td className={s.tdGh}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Repo permissions + org roles</td>
              </tr>
              <tr>
                <td>Secret encryption</td>
                <td className={s.tdBn}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> AES-256 encrypted vault</td>
                <td className={s.tdGh}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Encrypted environment secrets</td>
              </tr>
              <tr>
                <td>SSO / SAML</td>
                <td className={s.tdBn}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> OAuth via GitHub, GitLab, Google</td>
                <td className={s.tdGh}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> SAML SSO on Enterprise plans</td>
              </tr>
              <tr>
                <td>Audit logs</td>
                <td className={s.tdBn}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Full build and access audit trail</td>
                <td className={s.tdGh}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Audit log API on paid plans</td>
              </tr>

              {/* SCALABILITY */}
              <tr className={s.catRow}><td colSpan="3"><TrendingUp aria-label="Scalability" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /> Scalability &amp; Performance</td></tr>
              <tr>
                <td>Scale as team grows (cost)</td>
                <td className={s.tdBn}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Flat server cost — add 100 users, same bill <span className={`${s.tagWin} ${s.tagBn}`}>BN Wins</span></td>
                <td className={s.tdGh}><span className={s.icNo}><X aria-label="No" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> More users + builds = proportionally higher bill</td>
              </tr>
              <tr>
                <td>Unlimited parallel jobs at no extra cost</td>
                <td className={s.tdBn}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Limited only by server CPU/RAM</td>
                <td className={s.tdGh}><span className={s.icNo}><X aria-label="No" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Each parallel job = additional minutes consumed</td>
              </tr>
              <tr>
                <td>Horizontal agent scaling</td>
                <td className={s.tdBn}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Add build agents — cost stays flat</td>
                <td className={s.tdGh}><span className={s.icWarn}><AlertTriangle aria-label="Warning" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> More runners = more orchestration charges</td>
              </tr>
              <tr>
                <td>Artifact storage limits</td>
                <td className={s.tdBn}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Your own storage — no limits imposed</td>
                <td className={s.tdGh}><span className={s.icWarn}><AlertTriangle aria-label="Warning" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> 500MB–50GB depending on plan tier</td>
              </tr>
              <tr>
                <td>Build log retention</td>
                <td className={s.tdBn}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Unlimited — stored on your server</td>
                <td className={s.tdGh}><span className={s.icWarn}><AlertTriangle aria-label="Warning" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> 90 days maximum</td>
              </tr>

              {/* DEVELOPER EXPERIENCE */}
              <tr className={s.catRow}><td colSpan="3"><Code aria-label="Developer Experience" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /> Developer Experience</td></tr>
              <tr>
                <td>Interactive sandbox / playground</td>
                <td className={s.tdBn}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Dojo — live CI/CD sandbox (unique) <span className={`${s.tagWin} ${s.tagBn}`}>BN Unique</span></td>
                <td className={s.tdGh}><span className={s.icNo}><X aria-label="No" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> No demo environment — sign-up required</td>
              </tr>
              <tr>
                <td>Dashboard &amp; live build logs</td>
                <td className={s.tdBn}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Real-time streaming logs &amp; pipeline visualization</td>
                <td className={s.tdGh}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Good workflow visualization UI</td>
              </tr>
              <tr>
                <td>PR / merge request status checks</td>
                <td className={s.tdBn}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Posts status back to GitHub PRs automatically</td>
                <td className={s.tdGh}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Native, deeply integrated</td>
              </tr>
              <tr>
                <td>Community &amp; documentation</td>
                <td className={s.tdBn}><span className={s.icWarn}><AlertTriangle aria-label="Warning" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Growing — core docs complete</td>
                <td className={s.tdGh}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Enormous community, extensive docs <span className={`${s.tagWin} ${s.tagGh}`}>GH Wins</span></td>
              </tr>
              <tr>
                <td>Marketplace / pre-built actions</td>
                <td className={s.tdBn}><span className={s.icWarn}><AlertTriangle aria-label="Warning" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Template library in development</td>
                <td className={s.tdGh}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> 20,000+ community-maintained actions <span className={`${s.tagWin} ${s.tagGh}`}>GH Wins</span></td>
              </tr>

              {/* SUPPORT */}
              <tr className={s.catRow}><td colSpan="3"><Handshake aria-label="Support" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /> Support &amp; SLAs</td></tr>
              <tr>
                <td>Email support</td>
                <td className={s.tdBn}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Included in all plans</td>
                <td className={s.tdGh}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> GitHub Community + paid support options</td>
              </tr>
              <tr>
                <td>Engineer-to-engineer access</td>
                <td className={s.tdBn}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Direct technical team contact <span className={`${s.tagWin} ${s.tagBn}`}>BN Wins</span></td>
                <td className={s.tdGh}><span className={s.icWarn}><AlertTriangle aria-label="Warning" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Ticket-based routing; depends on plan</td>
              </tr>
              <tr>
                <td>Enterprise SLA</td>
                <td className={s.tdBn}><span className={s.icWarn}><AlertTriangle aria-label="Warning" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> In roadmap for Growth Edition</td>
                <td className={s.tdGh}><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Uptime SLA on Enterprise plans</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={s.tblLegend}>
          <span><span className={s.icYes}><Check aria-label="Yes" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Fully supported</span>
          <span><span className={s.icWarn}><AlertTriangle aria-label="Warning" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Partial / limited</span>
          <span><span className={s.icNo}><X aria-label="No" size={16} color="currentColor" style={{ verticalAlign: 'middle', display: 'inline-block' }} /></span> Not supported</span>
          <span><span className={`${s.tagWin} ${s.tagBn}`}>BN Wins</span> BuildNinja structural advantage</span>
          <span><span className={`${s.tagWin} ${s.tagGh}`}>GH Wins</span> GitHub Actions leads</span>
          <span><span className={`${s.tagWin} ${s.tagBn}`}>BN Unique</span> No competitor equivalent</span>
        </div>
      </div>
    </section>
  );
}
