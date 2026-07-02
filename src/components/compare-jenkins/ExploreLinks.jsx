"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import s from './ExploreLinks.module.css';

export default function ExploreLinks() {
  const links = [
    { title: 'BuildNinja vs GitHub Actions', href: '/compare/buildninja-vs-github-actions' },
    { title: 'BuildNinja vs GitLab CI', href: '#' },
    { title: 'BuildNinja vs CircleCI', href: '/compare/buildninja-vs-circleci' },
    { title: 'BuildNinja vs TeamCity', href: '#' },
    { title: 'BuildNinja vs Harness', href: '#' },
    { title: 'All CI/CD Comparisons', href: '#' }
  ];

  return (
    <section className={s.section}>
      <div className={s.container}>
        <motion.span
          className="badge-alt"
          style={{ marginBottom: '10px' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >Also Compare</motion.span>
        <motion.h2
          className="section-title"
          style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', marginBottom: '14px' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >Other Comparison Pages</motion.h2>
        <motion.p
          className="section-subtitle"
          style={{ margin: '0 auto' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Evaluating multiple options? See how BuildNinja stacks up against other leading CI/CD platforms.
        </motion.p>
        <motion.div
          className={s.relatedGrid}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {links.map((link, idx) => (
            <Link key={idx} href={link.href} className={s.relatedCard}>
              <span>{link.title}</span>
              <ArrowRight size={16} className={s.arrow} />
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
