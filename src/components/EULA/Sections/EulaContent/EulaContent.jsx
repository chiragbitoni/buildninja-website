"use client";
import s from "./EulaContent.module.css";
import { motion } from "framer-motion";
import { eulaContent } from "../../../../../public/static/eulaPageText";

export default function EulaContent() {
  return (
    <section className={s.section}>
      <motion.div 
        className={s.card}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div 
          className={s.content} 
          dangerouslySetInnerHTML={{ __html: eulaContent }} 
        />
      </motion.div>
    </section>
  );
}

