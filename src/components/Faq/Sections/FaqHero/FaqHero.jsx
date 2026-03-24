"use client";
import { useEffect, useRef } from "react";
import s from "./FaqHero.module.css";
import { heroSectionText, secondSectionText } from "../../../../../public/static/faqPageText";

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
      
      <div className={s.inner}>
        <span className={s.badge}>{heroSectionText.highlight}</span>
        
        <h1 className={s.heading}>{heroSectionText.title}</h1>
        
        <p className={s.description}>
          {heroSectionText.subTitle} {secondSectionText.content}
        </p>
      </div>
    </section>
  );
}
