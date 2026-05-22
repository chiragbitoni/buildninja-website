"use client";
import { motion } from "framer-motion";
import styles from "./WorksWith.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faGithub, 
  faGitlab, 
  faBitbucket, 
  faGoogle, 
  faMicrosoft, 
  faDocker, 
  faKubernetes,
  faAws
} from "@fortawesome/free-brands-svg-icons";
import { 
  faServer, 
  faTerminal, 
  faFileCode, 
  faCubes,
  faVials
} from "@fortawesome/free-solid-svg-icons";

const Icons = {
  GitHub: () => <FontAwesomeIcon icon={faGithub} style={{ width: '100%', height: '100%' }} />,
  GitLab: () => <FontAwesomeIcon icon={faGitlab} style={{ width: '100%', height: '100%' }} />,
  Bitbucket: () => <FontAwesomeIcon icon={faBitbucket} style={{ width: '100%', height: '100%' }} />,
  Google: () => <FontAwesomeIcon icon={faGoogle} style={{ width: '100%', height: '100%' }} />,
  "Microsoft Azure AD": () => <FontAwesomeIcon icon={faMicrosoft} style={{ width: '100%', height: '100%' }} />,
  Docker: () => <FontAwesomeIcon icon={faDocker} style={{ width: '100%', height: '100%' }} />,
  Kubernetes: () => <FontAwesomeIcon icon={faKubernetes} style={{ width: '100%', height: '100%' }} />,
  AWS: () => <FontAwesomeIcon icon={faAws} style={{ width: '100%', height: '100%' }} />,
  SSH: () => <FontAwesomeIcon icon={faServer} style={{ width: '100%', height: '100%' }} />,
  "Command Line": () => <FontAwesomeIcon icon={faTerminal} style={{ width: '100%', height: '100%' }} />,
  "Script Runner": () => <FontAwesomeIcon icon={faFileCode} style={{ width: '100%', height: '100%' }} />,
  MSBuild: () => <FontAwesomeIcon icon={faCubes} style={{ width: '100%', height: '100%' }} />,
  VSTest: () => <FontAwesomeIcon icon={faVials} style={{ width: '100%', height: '100%' }} />
};

const tools = [
  "GitHub",
  "GitLab",
  "Bitbucket",
  "Google",
  "Microsoft Azure AD",
  "Docker",
  "Kubernetes",
  "AWS",
  "SSH",
  "Command Line",
  "Script Runner",
  "MSBuild",
  "VSTest"
];

// Combine copies for infinite scrolling effect
const scrollItems = [...tools, ...tools];

const integrationDetails = [
  {
    name: "GitHub Integration",
    desc: "Connect your GitHub repositories. Automatically trigger high-speed build jobs on pull requests, commits, or webhooks.",
    icon: "GitHub"
  },
  {
    name: "GitLab Integration",
    desc: "Integrate with GitLab CI/CD pipelines. Automate continuous integration steps and fetch build reports directly in your repository.",
    icon: "GitLab"
  },
  {
    name: "Bitbucket Integration",
    desc: "Sync with Bitbucket pipelines. Achieve total control over your git branches, build statuses, and deployment approvals.",
    icon: "Bitbucket"
  },
  {
    name: "Docker Containerization",
    desc: "Package and build standard Docker container images. Cache layers automatically for ultra-fast incremental containerization.",
    icon: "Docker"
  },
  {
    name: "Kubernetes Orchestration",
    desc: "Deploy compiled artifacts to local or managed Kubernetes clusters (AWS EKS, Azure AKS, GKE) with automated rolling updates.",
    icon: "Kubernetes"
  },
  {
    name: "AWS Cloud Deployment",
    desc: "Deploy directly to Amazon Web Services (AWS) EC2, S3, or ECR using enterprise-grade secure role authentication and CLI integrations.",
    icon: "AWS"
  },
];

export default function WorksWith() {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        {/* H2 SEO Heading */}
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Integrate BuildNinja with Your Entire DevOps & CI/CD Tech Stack
        </motion.h2>

        {/* SEO Keyword Subheading */}
        <motion.p
          className={styles.subheading}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Accelerate your pipelines. BuildNinja brings enterprise-grade compilation speed and security to 
          <strong> GitHub</strong>, <strong>GitLab</strong>, <strong>Bitbucket</strong>, <strong>Docker</strong>, 
          <strong> Kubernetes</strong>, <strong>AWS</strong>, and your daily developer tools.
        </motion.p>

        {/* Scrolling Carousel with Alt Tags on Logos */}
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
                duration: 45,
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
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  title={`${tool} Integration`}
                  aria-label={`${tool} Integration`}
                >
                  {IconComponent && (
                    <div className={styles.logoIcon} aria-hidden="true">
                      <IconComponent />
                    </div>
                  )}
                  <span>{tool}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Grid of Key Integrations with SEO Descriptions */}
        <div className={styles.detailsGrid}>
          {integrationDetails.map((item, index) => {
            const IconComponent = Icons[item.icon];
            return (
              <motion.div
                key={item.name}
                className={styles.detailsCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
              >
                <div className={styles.cardHeader}>
                  {IconComponent && (
                    <div className={styles.cardIcon} title={item.name} aria-label={item.name}>
                      <IconComponent />
                    </div>
                  )}
                  <h3 className={styles.cardTitle}>{item.name}</h3>
                </div>
                <p className={styles.cardDesc}>{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
