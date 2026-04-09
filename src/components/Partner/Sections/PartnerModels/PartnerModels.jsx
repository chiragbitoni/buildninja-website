import React from "react";
import { motion } from "framer-motion";
import s from "./PartnerModels.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHandshake, 
  faLink, 
  faRocket, 
  faGraduationCap, 
  faMicrochip 
} from "@fortawesome/free-solid-svg-icons";

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

const models = [
  {
    icon: <FontAwesomeIcon icon={faHandshake} />,
    title: "Reseller / referral programs",
    description: "Earn through referrals or resale, aligned to your sales motion and customer base.",
    wide: true
  },
  {
    icon: <FontAwesomeIcon icon={faLink} />,
    title: "Integration partnerships",
    description: "Build connectors and reference architectures that make adoption frictionless.",
    wide: false
  },
  {
    icon: <FontAwesomeIcon icon={faRocket} />,
    title: "Co-marketing & launches",
    description: "Tell a joint story with credible outcomes, case studies, webinars, and announcements.",
    wide: false
  },
  {
    icon: <FontAwesomeIcon icon={faGraduationCap} />,
    title: "Implementation & training",
    description: "Deliver onboarding, rollout, and team enablement as a packaged service.",
    wide: false
  },
  {
    icon: <FontAwesomeIcon icon={faMicrochip} />,
    title: "Technology alliances",
    description: "Co-develop solutions inside the CI/CD ecosystem and share distribution.",
    wide: false
  },
];

export default function PartnerModels() {
  return (
    <section className={s.section} id="partnershipModelsSection">
      <motion.div 
        className={s.inner}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
      >
        <motion.div className={s.header} variants={itemVariants}>
            <span className={s.tag}>How It Works</span>
            <h2 className={s.title}>Partnership models</h2>
            <p className={s.subTitle}>Choose a motion that matches your business—then we’ll co-design the rollout and go-to-market plan.</p>
        </motion.div>

        <motion.div className={s.grid} variants={containerVariants}>
            {models.map((card, idx) => (
                <motion.div key={idx} className={`${s.card} ${card.wide ? s.wide : ""}`} variants={itemVariants}>
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
