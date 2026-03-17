"use client";
import { motion } from "framer-motion";
import styles from "./WorksWith.module.css";

const Icons = {
  GitHub: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  ),
  GitLab: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 5.1 2a.41.41 0 0 1 .4.28l2.44 7.51h8.12l2.44-7.51A.41.41 0 0 1 18.9 2a.42.42 0 0 1 .39.14.41.41 0 0 1 .1.27.42.42 0 0 1-.09.28l-2.44 7.51 1.22 3.78a.84.84 0 0 1-.3.94z"></path>
    </svg>
  ),
  Bitbucket: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.2 2l1.98 13.91 7.7 2.18 7.92-2.18L21.8 2H2.2zM16.5 11.46l-4.5 1.3-4.5-1.3-.8-5.36h10.6l-.8 5.36z"></path>
    </svg>
  ),
  Google: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10c2.83 0 5.37-1.18 7.21-3.08-1.55-1.55-3.32-3.32-4.87-4.87-.58.36-1.35.59-2.22.59-2.13 0-3.9-1.54-4.53-3.6h9.91c.06-.52.1-1.05.1-1.6 0-3.32-2.19-5.74-5.48-5.74-3.23 0-5.87 2.64-5.87 5.87s2.64 5.87 5.87 5.87c1.78 0 3.36-.88 4.31-2.24l-3.27-3.27c-.24.3-.61.47-1.04.47-.84 0-1.54-.58-1.74-1.38h6.21A3.75 3.75 0 0 0 22 12z"></path>
    </svg>
  ),
  "Microsoft Azure AD": () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5.5 21l3.5-6h6l3.5 6H5.5zm8.5-17l-3.5 6h7l-3.5-6z"></path>
    </svg>
  ),
  Docker: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="10" width="8" height="8"></rect>
      <rect x="12" y="10" width="8" height="8"></rect>
      <rect x="7" y="2" width="8" height="8"></rect>
    </svg>
  ),
  Kubernetes: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l9 5-3 10H6L3 7l9-5z"></path>
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M12 12l0-7M12 12l-6 4M12 12l6 4M12 12l-6-4M12 12l6-4"></path>
    </svg>
  ),
  SSH: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
    </svg>
  ),
  "Command Line": () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 17 10 11 4 5"></polyline>
      <line x1="12" y1="19" x2="20" y2="19"></line>
    </svg>
  ),
  "Script Runner": () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <polyline points="10 13 8 15 10 17"></polyline>
      <polyline points="14 13 16 15 14 17"></polyline>
    </svg>
  ),
  MSBuild: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
    </svg>
  ),
  VSTest: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  )
};

const tools = [
  "GitHub",
  "GitLab",
  "Bitbucket",
  "Google",
  "Microsoft Azure AD",
  "Docker",
  "Kubernetes",
  "SSH",
  "Command Line",
  "Script Runner",
  "MSBuild",
  "VSTest"
];

// Combine copies for infinite scrolling effect
const scrollItems = [...tools, ...tools, ...tools];

export default function WorksWith() {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <motion.p 
          className={styles.label}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Integrates With Your Tech Stack Seamlessly
        </motion.p>
        
        <div className={styles.carouselMask}>
          <motion.div 
            className={styles.scroller}
            animate={{
              x: [0, "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {scrollItems.map((tool, i) => {
              const IconComponent = Icons[tool];
              return (
                <motion.div 
                  key={`${tool}-${i}`} 
                  className={styles.logoChip}
                  whileHover={{ 
                    y: -5, 
                    scale: 1.02,
                    borderColor: "var(--color-primary-border)",
                    backgroundColor: "var(--color-bg-surface-hover)" 
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {IconComponent && (
                    <div className={styles.logoIcon}>
                      <IconComponent />
                    </div>
                  )}
                  <span>{tool}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}