"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./Dojo.module.css";
import { 
  faShieldHalved, 
  faCube, 
  faFingerprint, 
  faRotate 
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const infoCards = [
  {
    title: "Sandbox Limitations",
    icon: faShieldHalved,
    text: "The Dojo is designed for exploration. Please note the following environmental constraints:",
    bullets: [
      "Environment resets every 6 hours",
      "Build duration limit: 5 minutes",
      "Shared resource pool (parallel builds)",
      "Internet access restricted to Git providers"
    ],
    tall: true
  },
  {
    title: "Template Projects",
    icon: faCube,
    text: "We've pre-seeded the Dojo with sample projects (Node.js, Python, Docker) so you can start running builds immediately without configuring VCS."
  },
  {
    title: "Auto-Authentication",
    icon: faFingerprint,
    text: "No login required. Your Dojo session is automatically authenticated using a temporary sandbox identity that expires when the environment resets."
  },
  {
    title: "Periodic Persistence",
    icon: faRotate,
    text: "Any configurations or scripts you create will be available for the duration of your session but will be permanently cleared during the next 6-hour reset cycle."
  }
];

export default function DojoInfo() {
  return (
    <section className={styles.section}>
      <div className={styles.infoGrid}>
        {infoCards.map((card, idx) => (
          <motion.div 
            key={idx}
            className={`${styles.infoCard} ${card.tall ? styles.tallCard : ""}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <div className={styles.cardIcon}>
              <FontAwesomeIcon icon={card.icon} />
            </div>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardText}>{card.text}</p>
            {card.bullets && (
              <ul className={styles.bulletList}>
                {card.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
