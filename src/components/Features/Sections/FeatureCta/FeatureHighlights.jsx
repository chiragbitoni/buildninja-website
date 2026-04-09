'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './FeatureHighlights.module.css';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.98, y: 40 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

export default function FeatureHighlights() {
  return (
    <section className={styles.section}>

      {/* ── Card 1: Real-time Visibility ── */}
      <motion.div
        className={styles.card}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <div className={styles.cardIcon}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10" />
            <line x1="12" y1="20" x2="12" y2="4" />
            <line x1="6" y1="20" x2="6" y2="14" />
          </svg>
        </div>

        <div className={styles.twoColWide}>
          <div>
            <h2 className={styles.cardTitle}>
              Real-time Visibility &amp; High-Density Dashboards
            </h2>
            <p className={styles.cardDesc}>
              Visualizing CI/CD performance at scale requires more than charts.
              Monitor every log line, step status, and infrastructure health
              metric in a single, unified command center — updated every 10 seconds.
            </p>
            <div className={styles.statsRow}>
              <div className={styles.stat}>
                <span className={styles.statValue}>100%</span>
                <span className={styles.statLabel}>Uptime Reliability</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>&lt;30ms</span>
                <span className={styles.statLabel}>Log Latency</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>∞</span>
                <span className={styles.statLabel}>Build History</span>
              </div>
            </div>

            <Link href="/dojo" className={styles.demoButton}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              Explore Living Dashboard
            </Link>
            <span className={styles.demoInfo}>Zero Installation Required • Instant Access</span>
          </div>

          <div className={styles.screenshotWrap}>
            <Image
              src="/resources/dashboard-overview-dark.png"
              alt="BuildNinja Dashboard Overview"
              width={1440}
              height={900}
              className={`${styles.screenshotImg} ${styles.imgDark}`}
            />
            <Image
              src="/resources/dashboard-overview-light.png"
              alt="BuildNinja Dashboard Overview"
              width={1440}
              height={900}
              className={`${styles.screenshotImg} ${styles.imgLight}`}
            />
          </div>
        </div>
      </motion.div>

      {/* ── Card 2: Enterprise Security ── */}
      <motion.div
        className={styles.card}
        style={{ marginTop: '24px' }}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <div className={styles.cardIcon}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>

        <div className={styles.twoCol}>
          <div>
            <h2 className={styles.cardTitle}>
              Enterprise-Grade Security
            </h2>
            <p className={styles.cardDesc}>
              Hardened RBAC, end-to-end encryption for all secrets, SSO with SAML 2.0
              and LDAP, and automated security scanning. Your build infrastructure is
              protected at every layer.
            </p>
            <div className={styles.pillRow}>
              <span className={styles.pill}>AES-256</span>
              <span className={styles.pill}>SAML 2.0</span>
              <span className={styles.pill}>RBAC</span>
              <span className={styles.pill}>Zero-trust</span>
            </div>
          </div>

          <div className={styles.screenshotWrap}>
            <Image
              src="/resources/project-members-dark.png"
              alt="BuildNinja Agents Management View"
              width={1440}
              height={900}
              className={`${styles.screenshotImg} ${styles.imgDark}`}
            />
            <Image
              src="/resources/project-members-light.png"
              alt="BuildNinja Agents Management View"
              width={1440}
              height={900}
              className={`${styles.screenshotImg} ${styles.imgLight}`}
            />
          </div>
        </div>
      </motion.div>

      {/* ── Card 3: Native Git & Pipeline Runners ── */}
      <motion.div
        className={styles.card}
        style={{ marginTop: '24px' }}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <div className={styles.cardIcon}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="4 17 10 11 4 5" />
            <line x1="12" y1="19" x2="20" y2="19" />
          </svg>
        </div>

        <div className={styles.twoColReverse}>
          <div className={styles.screenshotWrap}>
            <Image
              src="/resources/project-changes-dark.png"
              alt="BuildNinja Build Execution Logs"
              width={1440}
              height={900}
              className={`${styles.screenshotImg} ${styles.imgDark}`}
            />
            <Image
              src="/resources/project-changes-light.png"
              alt="BuildNinja Build Execution Logs"
              width={1440}
              height={900}
              className={`${styles.screenshotImg} ${styles.imgLight}`}
            />
          </div>

          <div>
            <h2 className={styles.cardTitle}>
              Native Git &amp; SSH Integration
            </h2>
            <p className={styles.cardDesc}>
              Seamless integration with GitHub, GitLab, and Bitbucket. Deploy via
              SSH tunnels with zero-trust architecture. Script and SSH runners give
              you full control over every step.
            </p>
            <div className={styles.terminal} style={{ background: 'var(--color-bg-panel)', boxShadow: 'inset 0 0 0 1px var(--color-border)', color: 'var(--color-text-secondary)', padding: '16px' }}>
              <div className={styles.termLine} style={{ marginBottom: '8px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#28c840" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <span style={{ color: '#28c840', fontSize: '13px', marginLeft: '4px' }}>14:32:00</span>
                <span style={{ color: '#28c840', fontSize: '13px', marginLeft: '8px' }}>System</span>
              </div>
              <div className={styles.termLine} style={{ paddingLeft: '20px', marginBottom: '8px' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#28c840" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="6"></circle></svg>
                <span style={{ color: '#28c840', fontSize: '13px', marginLeft: '6px' }}>14:32:00</span>
                <span style={{ opacity: 0.7, fontSize: '13px', marginLeft: '8px' }}>Build queued ...</span>
              </div>
              <div className={styles.termLine} style={{ paddingLeft: '20px', marginBottom: '8px' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#28c840" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="6"></circle></svg>
                <span style={{ color: '#28c840', fontSize: '13px', marginLeft: '6px' }}>14:32:01</span>
                <span style={{ opacity: 0.7, fontSize: '13px', marginLeft: '8px' }}>Authenticating SSH key pair</span>
              </div>
              <div className={styles.termLine} style={{ paddingLeft: '20px', marginBottom: '8px' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#28c840" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="6"></circle></svg>
                <span style={{ color: '#28c840', fontSize: '13px', marginLeft: '6px' }}>14:32:03</span>
                <span style={{ opacity: 0.7, fontSize: '13px', marginLeft: '8px' }}>Connected to git@github.com via tunnel</span>
              </div>
              <div className={styles.termLine} style={{ paddingLeft: '20px' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ffbd2e" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="6"></circle></svg>
                <span style={{ color: '#ffbd2e', fontSize: '13px', marginLeft: '6px' }}>14:32:05</span>
                <span style={{ opacity: 0.7, fontSize: '13px', marginLeft: '8px' }}>Executing pipeline ...</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

    </section>
  );
}
