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
    desc: "Connect your GitHub repositories for seamless version control integration with intelligent caching and scheduled build automation."
  },
  {
    name: "GitLab Integration",
    desc: "Deep integration with GitLab for seamless version control, intelligent repository caching, and streamlined Single Sign-On (SSO) authentication."
  },
  {
    name: "Bitbucket Integration",
    desc: "Deep integration with Bitbucket for native version control, intelligent git caching, and seamless SSO authentication."
  },
  {
    name: "Google Integration",
    desc: "Connect your Google account or Google Workspace for secure, streamlined OAuth authentication and Single Sign-On (SSO)."
  },
  {
    name: "Microsoft Azure AD SSO",
    desc: "Integrate with Microsoft Entra ID (Azure AD) for secure enterprise-grade Single Sign-On (SSO) and streamlined access management."
  },
  {
    name: "Docker Containerization",
    desc: "Package and build standard Docker container images. Cache layers automatically for ultra-fast incremental containerization."
  },
  {
    name: "Kubernetes Orchestration",
    desc: "Deploy compiled artifacts to local or managed Kubernetes clusters with zero downtime using canary strategies."
  },
  {
    name: "SSH Deployment",
    desc: "Securely connect and deploy to remote servers using SSH key authentication and automated execution of deployment scripts."
  },
  {
    name: "Command Line Terminal",
    desc: "Execute custom commands and build scripts directly in a native terminal environment on Windows, Linux, and macOS."
  },
  {
    name: "Script Runner",
    desc: "Run bash, PowerShell, or custom scripts as part of your CI/CD pipeline steps with environment variable support."
  },
  {
    name: "MSBuild compilation",
    desc: "Compile .NET and C++ projects using MSBuild integration, optimized for fast and efficient windows builds."
  },
  {
    name: "VSTest execution",
    desc: "Execute unit tests and integration tests using VSTest runner, with automatic test results parsing and reporting."
  }
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
          <strong> Kubernetes</strong>, and your daily developer tools.
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

        {/* Visually hidden integration descriptions for SEO indexing by search engine crawlers */}
        <div className={styles.visuallyHidden}>
          {integrationDetails.map((item) => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
