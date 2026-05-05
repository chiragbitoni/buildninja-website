"use client";

import styles from "./DojoBanner.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function DojoBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/dojo") {
      setIsVisible(false);
      return;
    }

    const isClosed = document.cookie.split('; ').find(row => row.startsWith('dojo-banner-closed='));
    if (!isClosed) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [pathname]);

  const handleClose = () => {
    setIsVisible(false);
    const date = new Date();
    date.setTime(date.getTime() + (2 * 24 * 60 * 60 * 1000)); // 2 days
    document.cookie = `dojo-banner-closed=true; expires=${date.toUTCString()}; path=/`;
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={styles.banner}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className={styles.container}>
            <div className={styles.content}>
              <div className={styles.left}>
                <span className={styles.badge}>NEW</span>
                <p className={styles.text}>
                  <span className={styles.textFull}>
                    Experience the <strong>Dojo</strong> — Your instant, private playground for CI/CD automation. <span className={styles.highlight}>No installation required.</span>
                  </span>
                  <span className={styles.textMobile}>
                    <strong>Dojo:</strong> Instant CI/CD Sandbox
                  </span>
                </p>
              </div>
              <div className={styles.right}>
                <a 
                  href={process.env.NEXT_PUBLIC_DOJO_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.link}
                >
                  Try Dojo
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.icon}
                  >
                    <path
                      d="M6 12L10 8L6 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <button className={styles.closeBtn} onClick={handleClose} aria-label="Close banner">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.glowLine} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
