'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import s from './MetricsBars.module.css';

export default function MetricsBars() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    // Simple intersection observer to trigger animation
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );
    
    const element = document.getElementById('jenkins-metrics-grid');
    if (element) {
      observer.observe(element);
    }
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const metrics = [
    {
      label: 'Setup Speed',
      ninja: { label: '5 min', width: '95%' },
      jenkins: { label: '2–4 hrs', width: '35%' }
    },
    {
      label: 'Ease of Use',
      ninja: { label: '9/10', width: '90%' },
      jenkins: { label: '4/10', width: '40%' }
    },
    {
      label: 'Maintenance Overhead',
      ninja: { label: 'Low', width: '88%' },
      jenkins: { label: 'Very High', width: '30%' }
    },
    {
      label: 'Plugin Ecosystem',
      ninja: { label: 'Growing', width: '60%' },
      jenkins: { label: '1800+ plugins', width: '95%' }
    },
    {
      label: 'Scalability',
      ninja: { label: 'Unlimited', width: '92%' },
      jenkins: { label: 'Complex scaling', width: '65%' }
    },
    {
      label: 'Total Cost (team of 20)',
      ninja: { label: '$10–50/mo', width: '95%' },
      jenkins: { label: '$500–2k+/mo*', width: '45%' }
    }
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
        >At a Glance</motion.span>
        <motion.h2
          className="section-title"
          style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', marginBottom: '14px' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >How They Stack Up</motion.h2>
        <motion.p
          className="section-subtitle"
          style={{ margin: '0 auto', maxWidth: '1000px' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Six key performance dimensions where modern teams feel the most friction. Scores are derived from setup documentation, community benchmarks, and real-world usage reports.
        </motion.p>

        <div id="jenkins-metrics-grid" className={s.metricsGrid}>
          {metrics.map((m, idx) => (
            <div key={idx} className={s.metricCard}>
              <div className={s.metricLabel}>{m.label}</div>
              <div className={s.metricBars}>
                
                <div className={s.metricRow}>
                  <div className={s.metricRowLabel}>
                    <span className={s.metricName}>BuildNinja</span>
                    <span className={s.metricVal}>{m.ninja.label}</span>
                  </div>
                  <div className={s.metricBarTrack}>
                    <motion.div 
                      className={`${s.metricBarFill} ${s.fillNinja}`}
                      initial={{ width: 0 }}
                      animate={{ width: inView ? m.ninja.width : 0 }}
                      transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.1 }}
                    />
                  </div>
                </div>
                
                <div className={s.metricRow}>
                  <div className={s.metricRowLabel}>
                    <span className={s.metricName}>Jenkins</span>
                    <span className={s.metricVal}>{m.jenkins.label}</span>
                  </div>
                  <div className={s.metricBarTrack}>
                    <motion.div 
                      className={`${s.metricBarFill} ${s.fillJenkins}`}
                      initial={{ width: 0 }}
                      animate={{ width: inView ? m.jenkins.width : 0 }}
                      transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.1 }}
                    />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        <p className={s.note}>
          *Jenkins licensing is free, but infrastructure, DevOps engineer time (~$80k–$120k/yr), and plugin management costs add up significantly.
        </p>
      </div>
    </section>
  );
}
