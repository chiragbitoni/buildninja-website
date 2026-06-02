import React from 'react';
import { CheckCircle2, Minus, XCircle } from 'lucide-react';
import s from './ComparisonTable.module.css';

export default function ComparisonTable() {
  return (
    <section id="comparison-table" className={s.section}>
      <div className={s.container}>
        <div className={s.sectionLabel}>Full Breakdown</div>
        <h2 className={s.sectionTitle}>Feature-by-Feature Comparison</h2>
        <p className={s.sectionDesc}>
          Every major CI/CD capability compared honestly. Where Jenkins leads, we say so. Where BuildNinja leads, we explain why it matters to your team's velocity.
        </p>

        <div className={s.compareTableWrap} role="region" aria-label="Feature comparison table">
          <table className={s.compareTable}>
            <thead>
              <tr>
                <th scope="col">Feature</th>
                <th scope="col">BuildNinja</th>
                <th scope="col">Jenkins</th>
                <th scope="col" className={s.statusCol}>Winner</th>
              </tr>
            </thead>
            <tbody>
              {/* SETUP */}
              <tr className={s.categoryRow}><td colSpan="4">⚙️ Setup & Installation</td></tr>
              <tr>
                <td>Initial Setup Time</td>
                <td className={s.ninjaTd}>Under 5 minutes via Docker <span className={`${s.tag} ${s.tagGreen}`}>Fast</span></td>
                <td className={s.jenkinsTd}>2–4+ hours including Java, WAR, config</td>
                <td className={s.statusIcon}><CheckCircle2 size={18} className={s.iconWin} aria-label="BuildNinja wins" /></td>
              </tr>
              <tr>
                <td>Installation Method</td>
                <td className={s.ninjaTd}>Single <code className={s.codeSnippet}>docker pull</code> command</td>
                <td className={s.jenkinsTd}>Java JDK install + WAR file + init wizard</td>
                <td className={s.statusIcon}><CheckCircle2 size={18} className={s.iconWin} aria-label="BuildNinja wins" /></td>
              </tr>
              <tr>
                <td>DevOps Knowledge Required</td>
                <td className={s.ninjaTd}>Beginner-friendly, no DevOps PhD needed</td>
                <td className={s.jenkinsTd}>Intermediate–advanced expertise required</td>
                <td className={s.statusIcon}><CheckCircle2 size={18} className={s.iconWin} aria-label="BuildNinja wins" /></td>
              </tr>
              <tr>
                <td>Initial Configuration</td>
                <td className={s.ninjaTd}>Visual UI wizard, minimal YAML</td>
                <td className={s.jenkinsTd}>Groovy pipelines, heavy XML/YAML config</td>
                <td className={s.statusIcon}><CheckCircle2 size={18} className={s.iconWin} aria-label="BuildNinja wins" /></td>
              </tr>

              {/* PIPELINES */}
              <tr className={s.categoryRow}><td colSpan="4">🚀 Pipeline Capabilities</td></tr>
              <tr>
                <td>Pipeline as Code</td>
                <td className={s.ninjaTd}>Yes — clean YAML with smart defaults</td>
                <td className={s.jenkinsTd}>Yes — Groovy DSL (Jenkinsfile)</td>
                <td className={s.statusIcon}><Minus size={18} className={s.iconPartial} aria-label="Tie" /></td>
              </tr>
              <tr>
                <td>Parallel Builds</td>
                <td className={s.ninjaTd}>Unlimited parallel builds on your hardware <span className={`${s.tag} ${s.tagGreen}`}>No limits</span></td>
                <td className={s.jenkinsTd}>Requires agent configuration and management</td>
                <td className={s.statusIcon}><CheckCircle2 size={18} className={s.iconWin} aria-label="BuildNinja wins" /></td>
              </tr>
              <tr>
                <td>Build Triggers</td>
                <td className={s.ninjaTd}>Push, PR, schedule, webhook, manual</td>
                <td className={s.jenkinsTd}>Comprehensive — push, PR, cron, polling, API</td>
                <td className={s.statusIcon}><Minus size={18} className={s.iconPartial} aria-label="Tie" /></td>
              </tr>
              <tr>
                <td>Conditional Logic</td>
                <td className={s.ninjaTd}>Visual conditions + YAML expressions</td>
                <td className={s.jenkinsTd}>Full Groovy scripting — powerful but complex</td>
                <td className={s.statusIcon}><Minus size={18} className={s.iconPartial} aria-label="Tie" /></td>
              </tr>
              <tr>
                <td>Matrix Builds</td>
                <td className={s.ninjaTd}>Supported via flexible pipeline config</td>
                <td className={s.jenkinsTd}>Yes, via plugins and scripted pipelines</td>
                <td className={s.statusIcon}><Minus size={18} className={s.iconPartial} aria-label="Tie" /></td>
              </tr>
              <tr>
                <td>AI-Powered Features</td>
                <td className={s.ninjaTd}>Coming soon — log analysis, build prediction <span className={`${s.tag} ${s.tagBlue}`}>v1.2</span></td>
                <td className={s.jenkinsTd}>No built-in AI capabilities</td>
                <td className={s.statusIcon}><CheckCircle2 size={18} className={s.iconWin} aria-label="BuildNinja wins" /></td>
              </tr>

              {/* INTEGRATIONS */}
              <tr className={s.categoryRow}><td colSpan="4">🔗 Integrations & Ecosystem</td></tr>
              <tr>
                <td>Source Control</td>
                <td className={s.ninjaTd}>GitHub, GitLab, Bitbucket (native)</td>
                <td className={s.jenkinsTd}>GitHub, GitLab, Bitbucket, SVN + many more</td>
                <td className={s.statusIcon}><Minus size={18} className={s.iconPartial} aria-label="Tie" /></td>
              </tr>
              <tr>
                <td>Plugin Ecosystem</td>
                <td className={s.ninjaTd}>Core integrations + growing library</td>
                <td className={s.jenkinsTd}>1,800+ plugins — unmatched breadth <span className={`${s.tag} ${s.tagBlue}`}>Jenkins leads</span></td>
                <td className={s.statusIcon}><XCircle size={18} className={s.iconLose} aria-label="Jenkins wins" /></td>
              </tr>
              <tr>
                <td>Docker Support</td>
                <td className={s.ninjaTd}>First-class, native Docker runner</td>
                <td className={s.jenkinsTd}>Yes, via Docker plugin</td>
                <td className={s.statusIcon}><CheckCircle2 size={18} className={s.iconWin} aria-label="BuildNinja wins" /></td>
              </tr>
              <tr>
                <td>Kubernetes Integration</td>
                <td className={s.ninjaTd}>Native Kubernetes deployment support</td>
                <td className={s.jenkinsTd}>Via Kubernetes plugin — widely used</td>
                <td className={s.statusIcon}><Minus size={18} className={s.iconPartial} aria-label="Tie" /></td>
              </tr>
              <tr>
                <td>SSH & Script Runner</td>
                <td className={s.ninjaTd}>Built-in SSH, CLI, MSBuild, VSTest runners</td>
                <td className={s.jenkinsTd}>Yes, via SSH and shell step plugins</td>
                <td className={s.statusIcon}><Minus size={18} className={s.iconPartial} aria-label="Tie" /></td>
              </tr>
              <tr>
                <td>SSO / Auth (Google, MS Azure AD)</td>
                <td className={s.ninjaTd}>Google and Microsoft Azure AD built-in</td>
                <td className={s.jenkinsTd}>Requires external plugins and config</td>
                <td className={s.statusIcon}><CheckCircle2 size={18} className={s.iconWin} aria-label="BuildNinja wins" /></td>
              </tr>

              {/* OPERATIONS */}
              <tr className={s.categoryRow}><td colSpan="4">🛠 Operations & Maintenance</td></tr>
              <tr>
                <td>Update Management</td>
                <td className={s.ninjaTd}>Zero-downtime updates, auto upgrade path</td>
                <td className={s.jenkinsTd}>Manual updates; plugin conflicts common</td>
                <td className={s.statusIcon}><CheckCircle2 size={18} className={s.iconWin} aria-label="BuildNinja wins" /></td>
              </tr>
              <tr>
                <td>Plugin Security Patches</td>
                <td className={s.ninjaTd}>Unified platform updates — no plugin sprawl</td>
                <td className={s.jenkinsTd}>1,800+ plugins, each with own release cycle <span className={`${s.tag} ${s.tagAmber}`}>Risk</span></td>
                <td className={s.statusIcon}><CheckCircle2 size={18} className={s.iconWin} aria-label="BuildNinja wins" /></td>
              </tr>
              <tr>
                <td>Log Visibility</td>
                <td className={s.ninjaTd}>Real-time build logs, clean UI</td>
                <td className={s.jenkinsTd}>Detailed console output, Blue Ocean for UI</td>
                <td className={s.statusIcon}><Minus size={18} className={s.iconPartial} aria-label="Tie" /></td>
              </tr>
              <tr>
                <td>Monitoring & Alerting</td>
                <td className={s.ninjaTd}>Built-in build status dashboard</td>
                <td className={s.jenkinsTd}>Via monitoring plugins (Prometheus, etc.)</td>
                <td className={s.statusIcon}><Minus size={18} className={s.iconPartial} aria-label="Tie" /></td>
              </tr>
              <tr>
                <td>Backup & Recovery</td>
                <td className={s.ninjaTd}>Simple — self-hosted on your infra</td>
                <td className={s.jenkinsTd}>Manual backup of JENKINS_HOME required</td>
                <td className={s.statusIcon}><CheckCircle2 size={18} className={s.iconWin} aria-label="BuildNinja wins" /></td>
              </tr>

              {/* TEAM & SCALABILITY */}
              <tr className={s.categoryRow}><td colSpan="4">👥 Team & Scalability</td></tr>
              <tr>
                <td>User Limits</td>
                <td className={s.ninjaTd}>Unlimited users — no per-seat pricing <span className={`${s.tag} ${s.tagGreen}`}>Free</span></td>
                <td className={s.jenkinsTd}>Unlimited (open source) but infra costs scale</td>
                <td className={s.statusIcon}><CheckCircle2 size={18} className={s.iconWin} aria-label="BuildNinja wins" /></td>
              </tr>
              <tr>
                <td>Project Limits</td>
                <td className={s.ninjaTd}>Unlimited projects</td>
                <td className={s.jenkinsTd}>Unlimited (limited by server resources)</td>
                <td className={s.statusIcon}><Minus size={18} className={s.iconPartial} aria-label="Tie" /></td>
              </tr>
              <tr>
                <td>Multi-team Support</td>
                <td className={s.ninjaTd}>Organization and team-level access controls</td>
                <td className={s.jenkinsTd}>Via Role Strategy Plugin</td>
                <td className={s.statusIcon}><CheckCircle2 size={18} className={s.iconWin} aria-label="BuildNinja wins" /></td>
              </tr>
              <tr>
                <td>Distributed Builds</td>
                <td className={s.ninjaTd}>Parallel builds on owned hardware</td>
                <td className={s.jenkinsTd}>Master-agent architecture — powerful but complex</td>
                <td className={s.statusIcon}><Minus size={18} className={s.iconPartial} aria-label="Tie" /></td>
              </tr>

              {/* COST */}
              <tr className={s.categoryRow}><td colSpan="4">💰 Licensing & Cost</td></tr>
              <tr>
                <td>Software License</td>
                <td className={s.ninjaTd}>Free tier + Growth Edition (paid)</td>
                <td className={s.jenkinsTd}>MIT License — always free</td>
                <td className={s.statusIcon}><Minus size={18} className={s.iconPartial} aria-label="Tie" /></td>
              </tr>
              <tr>
                <td>Total Cost for 20 Devs</td>
                <td className={s.ninjaTd}>$0–$99/month</td>
                <td className={s.jenkinsTd}>$500–$2,000+/mo (infra + DevOps time) <span className={`${s.tag} ${s.tagAmber}`}>Hidden costs</span></td>
                <td className={s.statusIcon}><CheckCircle2 size={18} className={s.iconWin} aria-label="BuildNinja wins" /></td>
              </tr>
              <tr>
                <td>Vendor Lock-in</td>
                <td className={s.ninjaTd}>No lock-in — self-hosted, portable</td>
                <td className={s.jenkinsTd}>No lock-in — fully open source</td>
                <td className={s.statusIcon}><Minus size={18} className={s.iconPartial} aria-label="Tie" /></td>
              </tr>
              <tr>
                <td>Enterprise Hosting Option</td>
                <td className={s.ninjaTd}>Self-hosted, full control</td>
                <td className={s.jenkinsTd}>Self-hosted; CloudBees for enterprise support</td>
                <td className={s.statusIcon}><Minus size={18} className={s.iconPartial} aria-label="Tie" /></td>
              </tr>

              {/* SUPPORT */}
              <tr className={s.categoryRow}><td colSpan="4">🆘 Support & Community</td></tr>
              <tr>
                <td>Official Support</td>
                <td className={s.ninjaTd}>Engineer-to-engineer direct support</td>
                <td className={s.jenkinsTd}>Community forums; CloudBees for paid support</td>
                <td className={s.statusIcon}><CheckCircle2 size={18} className={s.iconWin} aria-label="BuildNinja wins" /></td>
              </tr>
              <tr>
                <td>Community Size</td>
                <td className={s.ninjaTd}>Growing — newer project</td>
                <td className={s.jenkinsTd}>Massive — 14+ years, millions of users <span className={`${s.tag} ${s.tagBlue}`}>Jenkins leads</span></td>
                <td className={s.statusIcon}><XCircle size={18} className={s.iconLose} aria-label="Jenkins wins" /></td>
              </tr>
              <tr>
                <td>Documentation Quality</td>
                <td className={s.ninjaTd}>Modern, concise, searchable docs</td>
                <td className={s.jenkinsTd}>Extensive but often fragmented and outdated</td>
                <td className={s.statusIcon}><CheckCircle2 size={18} className={s.iconWin} aria-label="BuildNinja wins" /></td>
              </tr>
              <tr>
                <td>Stack Overflow Q&A</td>
                <td className={s.ninjaTd}>Emerging</td>
                <td className={s.jenkinsTd}>Hundreds of thousands of answers</td>
                <td className={s.statusIcon}><XCircle size={18} className={s.iconLose} aria-label="Jenkins wins" /></td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className={s.legend}>
          Legend: <span className={s.legendWin}><CheckCircle2 size={14} style={{display:'inline', verticalAlign:'middle'}}/> BuildNinja leads</span> &nbsp;·&nbsp; 
          <span className={s.legendPartial}><Minus size={14} style={{display:'inline', verticalAlign:'middle'}}/> Comparable</span> &nbsp;·&nbsp; 
          <span className={s.legendLose}><XCircle size={14} style={{display:'inline', verticalAlign:'middle'}}/> Jenkins leads</span>
        </p>
      </div>
    </section>
  );
}
