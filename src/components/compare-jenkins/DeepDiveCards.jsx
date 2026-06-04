import React from 'react';
import { Timer, Puzzle, BadgeDollarSign, FileCode2, Lock, Bot } from 'lucide-react';
import s from './DeepDiveCards.module.css';

export default function DeepDiveCards() {
  return (
    <section id="deep-dive" className={s.section}>
      <div className={s.container}>
        <div className={s.sectionLabel}>Deep Dive</div>
        <h2 className={s.sectionTitle}>Where the Real Differences Lie</h2>
        <p className={s.sectionDesc}>
          The feature table tells you what exists. This section tells you what it <em>feels like</em> to use these tools every day.
        </p>

        <div className={s.diveGrid}>
          
          <div className={`${s.diveCard} ${s.featured}`}>
            <div className={s.diveIcon}><Timer size={28} className={s.iconPrimary} /></div>
            <h3>Time to First Build</h3>
            <p>This is the single biggest practical difference. BuildNinja is designed to get your first pipeline running in under 5 minutes. Jenkins requires JDK installation, downloading the WAR file, running the setup wizard, installing suggested plugins, and then configuring your first job - a process that regularly takes new users 2–4 hours.</p>
            <div className={s.diveVersus}>
              <div className={s.diveVsRow}>
                <div className={s.diveVsNinja}>5 minutes</div>
                <div className={s.diveVsLabel}>avg</div>
                <div className={s.diveVsJenkins}>2–4 hours</div>
              </div>
            </div>
          </div>

          <div className={s.diveCard}>
            <div className={s.diveIcon}><Puzzle size={28} className={s.iconDefault} /></div>
            <h3>Plugin Management Reality</h3>
            <p>Jenkins' 1,800+ plugin ecosystem is both its greatest strength and its biggest operational headache. Plugin conflicts, security vulnerabilities in unmaintained plugins, and version incompatibilities are the #1 cause of Jenkins outages. BuildNinja ships as a unified platform - fewer moving parts, fewer failure points.</p>
            <div className={s.diveVersus}>
              <div className={s.diveVsRow}>
                <div className={s.diveVsNinja}>Unified releases</div>
                <div className={s.diveVsLabel}>updates</div>
                <div className={s.diveVsJenkins}>Per-plugin patches</div>
              </div>
            </div>
          </div>

          <div className={s.diveCard}>
            <div className={s.diveIcon}><BadgeDollarSign size={28} className={s.iconDefault} /></div>
            <h3>Hidden Cost of Jenkins</h3>
            <p>Jenkins itself is free. But running Jenkins well isn't. Teams typically need a dedicated DevOps engineer (or a significant portion of one) to manage Jenkins infrastructure, plugin updates, scaling, and incident response. When you factor in server costs and engineering time, Jenkins often costs $500–$2,000/month for mid-size teams.</p>
            <div className={s.diveVersus}>
              <div className={s.diveVsRow}>
                <div className={s.diveVsNinja}>$0–$99/mo</div>
                <div className={s.diveVsLabel}>TCO</div>
                <div className={s.diveVsJenkins}>$500–$2k+/mo</div>
              </div>
            </div>
          </div>

          <div className={s.diveCard}>
            <div className={s.diveIcon}><FileCode2 size={28} className={s.iconDefault} /></div>
            <h3>Groovy vs. Clean YAML</h3>
            <p>Jenkins Declarative Pipelines are powerful, but Groovy scripted pipelines require developers to learn a JVM language just to configure their CI/CD. BuildNinja uses clean, expressive YAML with sensible defaults that any developer can understand and modify without consulting documentation.</p>
            <div className={s.diveVersus}>
              <div className={s.diveVsRow}>
                <div className={s.diveVsNinja}>YAML + visual UI</div>
                <div className={s.diveVsLabel}>config</div>
                <div className={s.diveVsJenkins}>Groovy DSL</div>
              </div>
            </div>
          </div>

          <div className={s.diveCard}>
            <div className={s.diveIcon}><Lock size={28} className={s.iconDefault} /></div>
            <h3>Security Posture</h3>
            <p>Jenkins' large plugin surface area is a real security concern - CVEs are regularly found in popular plugins. BuildNinja's smaller, controlled codebase and unified update model means fewer attack vectors. Both tools support self-hosting, which gives you full control over your secrets and build artifacts.</p>
          </div>

          <div className={s.diveCard}>
            <div className={s.diveIcon}><Bot size={28} className={s.iconDefault} /></div>
            <h3>The AI Advantage (Coming)</h3>
            <p>BuildNinja v1.2.0 is bringing AI-powered log analysis, configuration review, and build outcome prediction - features Jenkins has no roadmap for. If your team wants CI/CD that actively helps you improve, BuildNinja is the forward-looking choice.</p>
            <div className={s.diveVersus}>
              <div className={s.diveVsRow}>
                <div className={s.diveVsNinja}>AI-native (v1.2)</div>
                <div className={s.diveVsLabel}>roadmap</div>
                <div className={s.diveVsJenkins}>No AI roadmap</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
