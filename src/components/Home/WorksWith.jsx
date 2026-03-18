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
  faKubernetes 
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