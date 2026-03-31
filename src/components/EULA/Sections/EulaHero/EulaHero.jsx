"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import s from "./EulaHero.module.css";

export default function EulaHero() {
  const orb1 = useRef(null);
  const orb2 = useRef(null);

  useEffect(() => {
    let t = 0;
    const tick = () => {
      t += 0.004;
      if (orb1.current) {
        orb1.current.style.transform = `translate(${Math.sin(t) * 30}px, ${Math.cos(t * 0.7) * 40}px)`;
      }
      if (orb2.current) {
        orb2.current.style.transform = `translate(${Math.cos(t * 0.8) * 35}px, ${Math.sin(t * 1.1) * 25}px)`;
      }
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
      
      <div className={s.inner}>
        <motion.span 
          className={s.badge}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Legal Documents
        </motion.span>
        
        <motion.h1 
          className={s.heading}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          End User <span>License</span> Agreement
        </motion.h1>
        
        <motion.p 
          className={s.description}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Everything you need to know about using BuildNinja. Clear, transparent, and fair.
        </motion.p>
      </div>
    </section>
  );
}

