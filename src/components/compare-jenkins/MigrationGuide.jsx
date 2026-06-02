import React from 'react';
import s from './MigrationGuide.module.css';

export default function MigrationGuide() {
  return (
    <section id="migration" className={s.section}>
      <div className={s.container}>
        <div className={s.sectionLabel}>Migration Guide</div>
        <h2 className={s.sectionTitle}>Switching from Jenkins to BuildNinja</h2>
        <p className={s.sectionDesc}>
          Already on Jenkins and considering a switch? Here's how teams typically migrate without disrupting their delivery cadence.
        </p>

        <div className={s.migrationBox}>
          <h3 className={s.migrationTitle}>Estimated migration time: 1–3 days for most teams</h3>
          <p className={s.migrationSub}>Depending on pipeline complexity. Most teams run both in parallel during transition.</p>
          
          <div className={s.migrationSteps}>
            
            <div className={s.migrationStep}>
              <div className={s.stepNum}>1</div>
              <div className={s.stepContent}>
                <h4>Deploy BuildNinja alongside Jenkins</h4>
                <p>Run <code className={s.codeSnippet}>docker pull buildninja/buildninja</code> on any server. Takes 5 minutes. Keep Jenkins running — no cutover yet.</p>
              </div>
            </div>
            
            <div className={s.migrationStep}>
              <div className={s.stepNum}>2</div>
              <div className={s.stepContent}>
                <h4>Connect your repositories</h4>
                <p>Link your GitHub, GitLab, or Bitbucket repos. BuildNinja supports OAuth so this takes under 2 minutes per repo.</p>
              </div>
            </div>
            
            <div className={s.migrationStep}>
              <div className={s.stepNum}>3</div>
              <div className={s.stepContent}>
                <h4>Recreate pipelines (usually faster than expected)</h4>
                <p>Translate your Jenkinsfiles into BuildNinja's pipeline YAML. For most standard CI/CD workflows (build → test → deploy), this takes 30–60 minutes. Complex Groovy scripts take longer.</p>
              </div>
            </div>
            
            <div className={s.migrationStep}>
              <div className={s.stepNum}>4</div>
              <div className={s.stepContent}>
                <h4>Run both in parallel for 1 week</h4>
                <p>Compare outputs and build times. Validate that BuildNinja's results match Jenkins for your test suites and deployments before full cutover.</p>
              </div>
            </div>
            
            <div className={s.migrationStep}>
              <div className={s.stepNum}>5</div>
              <div className={s.stepContent}>
                <h4>Decommission Jenkins</h4>
                <p>Once confident, point all webhooks to BuildNinja, remove Jenkins from your infra, and reclaim that server budget.</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
