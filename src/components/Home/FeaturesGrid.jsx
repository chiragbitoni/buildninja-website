"use client";
import { useDispatch } from "react-redux";
import { openVideo } from "@/redux/slice/videoPopupSlice";
import { motion } from "framer-motion";
import styles from "./FeaturesGrid.module.css";

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Real-Time Dashboard & Logs",
    desc: "Monitor builds live — filter logs by runner, step, or time. Dashboards auto-refresh with customisable time ranges and beautiful performance charts.",
    videoId: 'Pjl3muKtmhE',
    videoLink: 'https://buildninja.grapehub.io/docs/user-guide/customize-dashboard-view'
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Agent Management",
    desc: "Authorize, monitor, and configure build agents across Windows, Linux, and macOS. Set capability requirements to route builds to the right agent automatically.",
    videoId: 'MnvaPLguA6c',
    videoLink: 'https://buildninja.grapehub.io/docs/manage-agents/'
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    title: "Notifications & Alerts",
    desc: "Configurable alerts for build results, agent disconnections, approvals, and more. Full SMTP + customisable email templates for every event.",
    videoId: '2OuADSNMEoc',
    videoLink: 'https://buildninja.grapehub.io/docs/manage-projects-and-builds/configure-build-notification-settings'
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="18" r="3" />
        <circle cx="6" cy="6" r="3" />
        <path d="M13 6h3a2 2 0 0 1 2 2v7" />
        <line x1="6" y1="9" x2="6" y2="21" />
      </svg>
    ),
    title: "Version Control & Native Git",
    desc: "Deep integrations with GitHub, GitLab, Bitbucket, and any Git host. Built-in Git with intelligent caching cuts clone time dramatically.",
    videoId: 'YOpVrKIF8wE',
    videoLink: 'https://buildninja.grapehub.io/docs/manage-projects-and-builds/configure-and-edit-builds'
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "Security & Access Control",
    desc: "Role-based access control (RBAC) at project and system level. SSO with SAML 2.0, LDAP, OAuth. AES-256 encryption for all secrets.",
    videoId: 'C-Ln6bbGo2E',
    videoLink: 'https://buildninja.grapehub.io/docs/manage-projects-and-builds/manage-project-and-configuration-access'
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" />
      </svg>
    ),
    title: "Pipeline Runners",
    desc: "Execute scripts in any shell. Run commands on remote servers via SSH. Define build parameters and variables securely at config or project level.",
    videoId: 'IOd9CmP6G4c',
    videoLink: 'https://buildninja.grapehub.io/docs/getting-started/interface-basics#build-runners'
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Smart Build Automation",
    desc: "Trigger builds automatically on schedule, commit, or custom event. Multi-environment support with intelligent retry and dependency resolution.",
    videoId: '5wFDALkVM0Y',
    videoLink: 'https://buildninja.grapehub.io/docs/manage-projects-and-builds/schedule-build-triggers'
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for smooth reveal
    },
  },
};

export default function FeaturesGrid() {
  const dispatch = useDispatch();

  const handleVideoClick = (e, feature) => {
    e.stopPropagation();
    if (!feature.videoId) return;
    dispatch(
      openVideo({
        videoId: feature.videoId,
        title: feature.title,
        ctaText: feature.desc,
        link: feature.videoLink,
      })
    );
  };

  return (
    <section className={styles.section} id="features">
      <div className={styles.glow} />
      
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.badge}>Core Intelligence</div>
          <h2 className={styles.title}>
            Engineered for <span className={styles.titleGradient}>Reliability.</span><br />
            Built for Scale.
          </h2>
          <p className={styles.subtitle}>
            Intelligence-driven CI/CD that prioritizes stability. Ship elite software without the infrastructure overhead.
          </p>
        </motion.div>

        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((f, i) => (
            <motion.div 
              key={i} 
              className={styles.card}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className={styles.iconWrapper}>
                {f.icon}
              </div>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.desc}</p>
              {f.videoId && (
                <button
                  className={styles.videoBadge}
                  onClick={(e) => handleVideoClick(e, f)}
                  aria-label={`Watch ${f.title} demo`}
                  data-cursor-grow
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  Watch Demo
                </button>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
