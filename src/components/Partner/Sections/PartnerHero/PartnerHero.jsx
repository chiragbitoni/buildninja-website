"use client";
import s from "./PartnerHero.module.css";
import { useEffect, useRef } from "react";
import NetworkBackground from "@/components/ui/NetworkBackground";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
};

export default function PartnerHero() {
  const orb1 = useRef(null);
  const orb2 = useRef(null);

  useEffect(() => {
    let t = 0;
    const tick = () => {
      t += 0.005;
      if (orb1.current) orb1.current.style.transform = `translate(${Math.sin(t) * 20}px, ${Math.cos(t * 0.8) * 25}px)`;
      if (orb2.current) orb2.current.style.transform = `translate(${Math.cos(t * 0.7) * 22}px, ${Math.sin(t * 1.2) * 20}px)`;
      requestAnimationFrame(tick);
    };
    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, []);

  const scrollAndFocus = () => {
      const section = document.getElementById("partner-form-section");
      const input = document.getElementById("partner-name-input");
      if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => { if (input) input.focus(); }, 600);
  };
  const scrollToModels = () => {
      const section = document.getElementById("partnershipModelsSection");
      if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className={s.section}>
      <NetworkBackground />
      <div ref={orb1} className={s.orb1} />
      <div ref={orb2} className={s.orb2} />
      <div className={s.grid} />
      <div className={s.bottomFade} />
      
      <motion.div 
        className={s.inner}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className={s.badgeWrap} variants={itemVariants}>
            <span className={s.badge}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
                Self-hosted & secure
            </span>
            <span className={s.badge}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="13 2 13 9 22 9"/><polygon points="13 2 2 22 12 22 11 29 22 9"/></svg>
                Fast, parallel execution
            </span>
            <span className={s.badge}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                Predictable pricing
            </span>
        </motion.div>
        
        <motion.h1 className={s.heading} variants={itemVariants}>
            Partner with <span className={s.accent}>BuildNinja.</span>
        </motion.h1>
        
        <motion.p className={s.description} variants={itemVariants}>
          Ship secure CI/CD inside your customer's infrastructure. BuildNinja is a high-performance self-hosted CI/CD platform built for teams that need speed, security, and control—across cloud, on-prem, or air-gapped environments.
        </motion.p>

        <motion.div className={s.btnGroup} variants={itemVariants}>
            <button className={s.btnPrimary} onClick={scrollAndFocus}>
                Let's grow together
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
            <button className={s.btnSecondary} onClick={scrollToModels}>
                Explore partnership models
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
