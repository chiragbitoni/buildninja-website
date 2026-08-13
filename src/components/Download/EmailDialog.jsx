"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faEnvelope, faDownload, faCircleNotch, faClock, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { emailDialogText } from "../../../public/static/downloadPageText";
import styles from "./EmailDialog.module.css";

export default function EmailDialog({ open, onClose, onSubmit, loading, error }) {
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || loading) return;
    onSubmit(email.trim());
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.25, ease: [0.34, 1.36, 0.64, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.header}>
              <h2 className={styles.title}>{emailDialogText.title}</h2>
              <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>

            <div className={styles.body}>
              <p className={styles.desc}>{emailDialogText.desc}</p>

              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.inputWrapper}>
                  <FontAwesomeIcon icon={faEnvelope} className={styles.inputIcon} />
                  <input
                    required
                    type="email"
                    autoFocus
                    autoComplete="email"
                    className={styles.input}
                    placeholder={emailDialogText.placeholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                  />
                </div>

                {error && (
                  <p className={styles.error}>
                    <FontAwesomeIcon icon={faExclamationCircle} />
                    {error}
                  </p>
                )}

                <button type="submit" className={styles.submitBtn} disabled={loading}>
                  {loading ? (
                    <FontAwesomeIcon icon={faCircleNotch} spin />
                  ) : (
                    <FontAwesomeIcon icon={faDownload} />
                  )}
                  {loading ? emailDialogText.loadingText : emailDialogText.buttonText}
                </button>
              </form>
            </div>

            <div className={styles.footer}>
              <p className={styles.note}>
                <FontAwesomeIcon icon={faClock} style={{ fontSize: 11 }} />
                {emailDialogText.note}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}