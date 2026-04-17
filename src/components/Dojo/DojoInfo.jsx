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
    title: "Template Projects",
    icon: faCube,
    text: "We've pre-seeded the Dojo with sample projects (Node.js, Python, Docker) so you can start running builds immediately without configuring VCS."
  },
  {
    title: "Auto-Authentication",
    icon: faFingerprint,
    text: "No login required. Your Dojo session is automatically authenticated using a Grapehub Account."
  },
  {
    title: "Periodic Persistence",
    icon: faRotate,
    text: "Any configurations or scripts you create will be available until the next 6-hour reset cycle."
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
