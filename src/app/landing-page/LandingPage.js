"use client";

import { ArrowRight, Check, FileWarning, GitBranch, Server, Sparkles } from "lucide-react";
import LandingHero from "../../components/Landing/Sections/LandingHero/LandingHero";
import { FeatureBento, GettingStarted, SectionLabel } from "../../components/MarketingSite/app/sections";
import { PageMotion } from "../../components/MarketingSite/app/page-motion";
import { SiteLink } from "../../components/MarketingSite/app/site-context";
import styles from "./LandingPage.module.css";

const proofPoints = [
  { icon: Check, title: "Free Growth edition", detail: "Start with the free platform edition." },
  { icon: GitBranch, title: "Your Git provider", detail: "GitHub, GitLab, or Bitbucket." },
  { icon: Server, title: "Your environment", detail: "Windows, Linux, macOS, or Docker." },
  { icon: Sparkles, title: "kenzoAI insights", detail: "Build intelligence in the workflow." },
];

export default function LandingPage() {
  return (
    <main className={`cf-home ${styles.page}`}>
      <PageMotion />
      <LandingHero />

      <section className={styles.proofStrip} aria-label="BuildNinja platform highlights">
        {proofPoints.map(({ icon: Icon, title, detail }) => (
          <article className={styles.proofItem} key={title}>
            <span className={styles.proofIcon}><Icon size={15} aria-hidden="true" /></span>
            <div><h2>{title}</h2><p>{detail}</p></div>
          </article>
        ))}
      </section>

      <GettingStarted chapterLabel="A CLEARER BUILD WORKFLOW" sectionId="landing-how-it-works" />

      <section className={`section ${styles.kenzoSection}`} id="landing-kenzoai" aria-labelledby="landing-kenzoai-title">
        <div className={styles.kenzoCopy}>
          <SectionLabel>BUILT-IN AI BUILD INTELLIGENCE</SectionLabel>
          <h2 id="landing-kenzoai-title">Bring build evidence and the next question together.</h2>
          <p>
            kenzoAI can analyze build logs, explain configurations, review code-change insights, and help your team continue an investigation in context.
          </p>
          <ul>
            <li><Check size={14} aria-hidden="true" /> Find useful signals in a failed build log</li>
            <li><Check size={14} aria-hidden="true" /> Understand configuration steps and dependencies</li>
            <li><Check size={14} aria-hidden="true" /> Review findings alongside the source changes</li>
          </ul>
          <div className={styles.kenzoLinks}>
            <SiteLink href="/kenzo-ai">Explore kenzoAI <ArrowRight size={14} aria-hidden="true" /></SiteLink>
            <span>AI requests use a separate credit balance.</span>
          </div>
        </div>

        <div className={styles.analysisCard} aria-label="Illustrative kenzoAI build analysis">
          <div className={styles.analysisTopbar}>
            <span><i aria-hidden="true" /> BUILD #248</span>
            <span className={styles.failedStatus}>Build failed</span>
          </div>
          <div className={styles.logLine}>
            <code>12:25:06</code>
            <p>error CS0246: The type or namespace name ‘PageModel’ could not be found.</p>
          </div>
          <div className={styles.analysisResult}>
            <span className={styles.analysisLabel}><Sparkles size={13} aria-hidden="true" /> KENZOAI ANALYSIS</span>
            <h3>Check the missing Razor Pages import.</h3>
            <p>The changed file references <code>PageModel</code> without importing its namespace. Review the using directives and project references.</p>
            <div className={styles.evidence}><FileWarning size={13} aria-hidden="true" /> Evidence: build output and changed file</div>
          </div>
          <p className={styles.sampleNote}>Illustrative example. Review AI guidance before applying changes.</p>
        </div>
      </section>

      <section className={`section capability-section ${styles.capabilities}`}>
        <header className="section-heading centered">
          <SectionLabel>ONE WORKFLOW FOR YOUR DAILY BUILDS</SectionLabel>
          <h2>Build, understand, and move forward.</h2>
          <p>Automate routine work, see what needs attention, and keep control of where your builds run.</p>
        </header>
        <FeatureBento />
        <div className="center-action">
          <SiteLink className="text-button" href="/features">Explore all features <ArrowRight size={15} aria-hidden="true" /></SiteLink>
        </div>
      </section>

      <section className="cf-final">
        <div className="cf-final-grid" aria-hidden="true" />
        <span className="cf-pill"><Sparkles size={13} aria-hidden="true" /> YOUR NEXT BUILD STARTS HERE</span>
        <h2>Give your next build<br /><span>a clearer path.</span></h2>
        <p>Explore the workflow, try Dojo, or talk with our team about your CI/CD setup.</p>
        <div>
          <SiteLink className="button" href="#landing-consultation">Talk to our team <ArrowRight size={15} aria-hidden="true" /></SiteLink>
          <SiteLink className="button button-secondary" href="/dojo">Try the live sandbox</SiteLink>
        </div>
      </section>
    </main>
  );
}
