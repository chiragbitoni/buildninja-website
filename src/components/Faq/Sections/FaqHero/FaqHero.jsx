"use client";
import { useEffect, useRef } from "react";
import s from "./FaqHero.module.css";
import { heroSectionText, secondSectionText } from "../../../../../public/static/faqPageText";
import { motion } from "framer-motion";

export default function FaqHero() {
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

  return (
    <section className={s.section}>
      <div ref={orb1} className={s.orb1} />
      <div ref={orb2} className={s.orb2} />
      <div className={s.grid} />
      
      <motion.div 
        className={s.inner}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.span 
          className={s.badge}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {heroSectionText.highlight}
        </motion.span>
        
        <motion.h1 
          className={s.heading}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {heroSectionText.title}
        </motion.h1>
        
        <motion.p 
          className={s.description}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {heroSectionText.subTitle} {secondSectionText.content}
        </motion.p>
      </motion.div>
    </section>
  );
}
