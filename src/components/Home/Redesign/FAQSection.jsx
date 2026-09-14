"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/Marketing/Section";
import { homeFaqs } from "./homeContent";
import styles from "./FAQSection.module.css";

export default function FAQSection() {
  return (
    <Section as="section" id="faq" className={styles.section} space="standard" padX>
      <div className={styles.content}>
        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <p className={styles.eyebrow}>Clear answers</p>
          <h2>Before your next build.</h2>
          <p>Get familiar with the workflow, installation, and AI credits.</p>
          <Link href="/faq">Explore all FAQs <ArrowRight size={14} aria-hidden="true" /></Link>
        </motion.div>
        <div className={styles.questions}>
          {homeFaqs.map((faq, index) => (
            <motion.details
              key={faq.q}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.045, 0.18) }}
            >
              <summary>{faq.q}<span aria-hidden="true">+</span></summary>
              <p>{faq.a}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </Section>
  );
}
