import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import s from "./PartnerDemographics.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCloud, 
  faCode, 
  faPuzzlePiece, 
  faMicrochip,
  faChevronRight,
  faCheck,
  faUserShield
} from "@fortawesome/free-solid-svg-icons";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const partnerData = [
  {
    id: 1,
    icon: <FontAwesomeIcon icon={faCloud} />,
    title: "DevOps & Cloud Consulting",
    description: "Deliver BuildNinja as part of modernization, platform engineering, or transformation programs.",
    points: [
      "Assess + migrate from legacy CI",
      "Kubernetes-based CI/CD rollout",
      "Regulated/air-gapped implementations",
    ],
    support: "You'll get onboarding support, a clear delivery playbook, and a path to co-marketing once we're aligned on customer outcomes.",
  },
  {
    id: 2,
    icon: <FontAwesomeIcon icon={faCode} />,
    title: "Software / Product Companies",
    description: "Bundle enterprise-grade self-hosted CI/CD into your platform offering, or ship integrations that unlock adoption.",
    points: [
      "Integration plugins",
      "OEM/embedded deployments",
      "Platform engineering bundles",
    ],
    support: "You’ll get onboarding support, a clear delivery playbook, and a path to co-marketing once we’re aligned on customer outcomes.",
  },
  {
    id: 3,
    icon: <FontAwesomeIcon icon={faPuzzlePiece} />,
    title: "System Integrators",
    description: "Provide end-to-end dev platform solutions with a secure, compliant CI/CD layer.",
    points: [
      "Enterprise rollouts",
      "Policy + compliance tooling",
      "Migration factories",
    ],
    support: "You’ll get onboarding support, a clear delivery playbook, and a path to co-marketing once we’re aligned on customer outcomes.",
  },
  {
    id: 4,
    icon: <FontAwesomeIcon icon={faMicrochip} />,
    title: "Managed Service Providers",
    description: "Offer BuildNinja as part of managed DevOps, infrastructure, or delivery pipelines.",
    points: [
      "Managed CI runners",
      "SRE-aligned support",
      "Cost-optimized delivery",
    ],
    support: "You’ll get onboarding support, a clear delivery playbook, and a path to co-marketing once we’re aligned on customer outcomes.",
  },
];

export default function PartnerDemographics() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const active = partnerData[activeIndex];

  useEffect(() => {
    if (isPaused) return;

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev === partnerData.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  return (
    <section className={s.section}>
      <motion.div 
        className={s.inner}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
      >
        <motion.div className={s.header} variants={itemVariants}>
            <span className={s.tag}>Why partner</span>
            <h2 className={s.title}>Teams we love working with</h2>
            <p className={s.subTitle}>DevOps-forward organizations who care about security, reliability, and a great developer experience.</p>
        </motion.div>

        <motion.div className={s.container} variants={itemVariants}>
            {/* LEFT SIDE - Tabs */}
            <div className={s.menuList}>
                {partnerData.map((item, index) => {
                    const isActive = activeIndex === index;
                    return (
                        <div
                            key={item.id}
                            className={`${s.menuItem} ${isActive ? s.menuItemActive : ""}`}
                            onMouseEnter={() => { setActiveIndex(index); setIsPaused(true); }}
                            onMouseLeave={() => setIsPaused(false)}
                            onClick={() => setActiveIndex(index)}
                        >
                            <span className={s.menuIcon}>{item.icon}</span>
                            <div className={s.menuContent}>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                            <span className={s.menuArrow}>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </span>
                        </div>
                    );
                })}
            </div>

            {/* RIGHT SIDE - Details Pane */}
            <div 
                className={s.detailsPane}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <div className={s.detailsHeader}>
                    <div>
                        <h3 className={s.detailsTitle}>{active.title}</h3>
                        <p className={s.detailsDesc}>{active.description}</p>
                    </div>
                    <span className={s.detailsIcon}>{active.icon}</span>
                </div>
                
                <div className={s.pointsList}>
                    {active.points.map((point, index) => (
                        <div key={index} className={s.pointItem}>
                            <span className={s.pointCheck}>
                                <FontAwesomeIcon icon={faCheck} />
                            </span>
                            {point}
                        </div>
                    ))}
                </div>

                <div className={s.supportBlock}>
                    <span className={s.supportIcon}>
                        <FontAwesomeIcon icon={faUserShield} />
                    </span>
                    <div>
                        <h5>How we'll support you</h5>
                        <p>{active.support}</p>
                    </div>
                </div>
            </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
