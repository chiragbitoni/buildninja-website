"use client";
import React from "react";
import s from "./FaqCta.module.css";
import { fifthSectionText } from "../../../../../public/static/faqPageText";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { openVideo } from "@/redux/slice/videoPopupSlice";
import { motion } from "framer-motion";

export default function FaqCta() {
  const dispatch = useDispatch();
  return (
    <section className={s.section}>
      <motion.div 
        className={s.inner}
        initial={{ opacity: 0, scale: 0.92, y: 60 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className={s.title}>{fifthSectionText.title}</h2>
        <p className={s.desc}>{fifthSectionText.description}</p>
        
        <div className={s.btnGroup}>
          <Link href="/install" className={s.btnPrimary}>
            {fifthSectionText.button1}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
          <button 
            className={s.btnSecondary}
            onClick={() => { dispatch(openVideo({ videoId: process.env.NEXT_PUBLIC_YOUTUBE_VIDEO_ID, title: "BuildNinja", ctaText: "Self Hosted CI/CD That Just Works", link: "https://buildninja.grapehub.io/docs/category/getting-started" })) }}
          >
            {fifthSectionText.button2}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </button>
        </div>
      </motion.div>
    </section>
  );
}
