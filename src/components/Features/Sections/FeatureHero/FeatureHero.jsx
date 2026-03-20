'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { openVideo } from '@/redux/slice/videoPopupSlice';
import { siteConfig } from '@/config/site';
import OrbitAnimation from '@/components/Home/OrbitAnimation';
import styles from './FeatureHero.module.css';

// Framer motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function FeatureHero() {
  const dispatch = useDispatch();

  return (
    <>
      <section className={styles.hero}>
        <OrbitAnimation />
        <motion.div 
          className={styles.inner}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={styles.badge} variants={itemVariants}>
            <span className={styles.badgeDot} />
            {siteConfig.version} &nbsp;·&nbsp; Generally Available
          </motion.div>

          <motion.h1 className={styles.heading} variants={itemVariants}>
            Engineered for{' '}
            <span className={styles.headingAccent}>Absolute</span>{' '}
            Control.
          </motion.h1>

          <motion.p className={styles.subtitle} variants={itemVariants}>
            BuildNinja isn't just a CI/CD tool — it's a high-performance
            engine built for teams that demand speed, reliability, and
            full visibility over every build.
          </motion.p>

          <motion.div className={styles.ctaRow} variants={itemVariants}>
            <Link href="/install" className={styles.btnPrimary}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Install Free
            </Link>
            <a 
              className={styles.btnSecondary} 
              onClick={() => dispatch(openVideo({ 
                videoId: process.env.NEXT_PUBLIC_YOUTUBE_VIDEO_ID, 
                title: "BuildNinja", 
                ctaText: "Self Hosted CI/CD That Just Works", 
                link: "https://buildninja.grapehub.io/docs/category/getting-started" 
              }))}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polygon points="10 8 16 12 10 16 10 8"/>
              </svg>
              Watch Demo
            </a>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
