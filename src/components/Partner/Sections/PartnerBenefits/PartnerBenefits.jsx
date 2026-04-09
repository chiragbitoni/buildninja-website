"use client";
import React from "react";
import s from "./PartnerBenefits.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faChartLine, 
  faBullhorn, 
  faCode, 
  faShieldHalved, 
  faBolt, 
  faServer 
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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

const benefits = [
  {
    icon: <FontAwesomeIcon icon={faChartLine} />,
    title: "New revenue opportunities",
    description: "Add implementation, managed services, training, or resale with clear partner pricing and scalable models.",
  },
  {
    icon: <FontAwesomeIcon icon={faBullhorn} />,
    title: "Joint GTM & co-marketing",
    description: "Webinars, case studies, partner spotlights, integration launches, and co-branded campaigns.",
  },
  {
    icon: <FontAwesomeIcon icon={faCode} />,
    title: "Technical enablement",
    description: "Priority onboarding, architecture guidance, and direct engineering support to accelerate delivery.",
  },
  {
    icon: <FontAwesomeIcon icon={faShieldHalved} />,
    title: "Self-hosted security posture",
    description: "Source code, secrets, logs, and artifacts stay inside your customer's environment ideal for compliance.",
  },
  {
    icon: <FontAwesomeIcon icon={faBolt} />,
    title: "Fast parallel execution",
    description: "High-throughput pipelines designed for speed and scale, without build-minute billing surprises.",
  },
  {
    icon: <FontAwesomeIcon icon={faServer} />,
    title: "Flexible deployment",
    description: "Run on Kubernetes, VMs, private cloud, or fully air-gapped infrastructure.",
  },
];

export default function PartnerBenefits() {
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
            <span className={s.tag}>Why Partner</span>
            <h2 className={s.title}>Benefits built for real delivery</h2>
            <p className={s.subTitle}>A partner program designed to help you win, deliver, and expand without friction or surprise costs.</p>
        </motion.div>

        <motion.div className={s.grid} variants={containerVariants}>
            {benefits.map((card, idx) => (
                <motion.div 
                  key={idx} 
                  className={s.card}
                  variants={itemVariants}
                >
                    <div className={s.iconWrap}>{card.icon}</div>
                    <h3 className={s.cardTitle}>{card.title}</h3>
                    <p className={s.cardDesc}>{card.description}</p>
                </motion.div>
            ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
