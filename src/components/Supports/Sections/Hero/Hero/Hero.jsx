"use client"
import React, { useState } from "react";
import styles from "./Hero.module.css";
import { supportHeroText } from "../../../../../../public/static/supportPageText";
import ReCAPTCHA from "react-google-recaptcha";
import { sendSupportEmail } from "@/services/email/sendEmail";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import NetworkBackground from "@/components/ui/NetworkBackground";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faEnvelope, 
    faFileLines, 
    faLifeRing, 
    faPaperPlane, 
    faCircleNotch,
    faArrowRight,
    faCheckCircle,
    faUser,
    faTag,
    faAddressCard
} from "@fortawesome/free-solid-svg-icons";

export default function SupportHero() {
    const t = supportHeroText;
    const { theme, resolvedTheme } = useTheme();

    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [captchaToken, setCaptchaToken] = useState(null);
    const [isSuccess, setIsSuccess] = useState(false);

    const currentTheme = theme === "system" ? resolvedTheme : theme;

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!captchaToken) {
            alert("Please verify you are not a robot!");
            return;
        }
        setLoading(true);
        const { success, message } = await sendSupportEmail(form);
        setLoading(false);

        if (success) {
            setIsSuccess(true);
            setForm({ name: "", email: "", subject: "", message: "" });
            setCaptchaToken(null);
            // Auto-reset success state after 5 seconds
            setTimeout(() => setIsSuccess(false), 5000);
        } else {
            alert(message || "Failed to send message. Try again later.");
        }
    };

    // Animation Variants
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { 
                delay: i * 0.12, 
                duration: 0.8, 
                ease: [0.16, 1, 0.3, 1] 
            }
        })
    };

    return (
        <section className={styles.supportSection}>
            <NetworkBackground />
            <div className={styles.bottomFade} />
            
            {/* Header Content */}
            <motion.div 
                className={styles.supportHeader}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className={styles.badge}>
                    <span className={styles.badgeDot}></span> Dedicated Support: Engineering Online
                </div>
                <h1 className={styles.heading}>
                    {t.heading.split("Build").map((part, index) => (
                        <span key={index}>
                            {part}
                            {index === 0 && <span className={styles.accent}>Build</span>}
                        </span>
                    ))}
                </h1>
                <p className={styles.subheading}>{t.subheading}</p>
            </motion.div>

            {/* Main Action Hub */}
            <div className={styles.mainContent}>
                {/* Contact Form Card */}
                <motion.div 
                    className={styles.glassCard}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                    <AnimatePresence mode="wait">
                        {isSuccess ? (
                            <motion.div 
                                key="success"
                                className={styles.successOverlay}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <FontAwesomeIcon icon={faCheckCircle} className={styles.successIcon} />
                                <h2 className={styles.successTitle}>Message Sent!</h2>
                                <p style={{ color: 'var(--color-text-secondary)' }}>
                                    Your request has been filed. Our engineers are on it.
                                </p>
                            </motion.div>
                        ) : (
                            <motion.div 
                                key="form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <h3 className={styles.formTitle}>
                                    Send a Message
                                </h3>
                                
                                <form className={styles.supportForm} onSubmit={handleSubmit}>
                                    <div className={styles.formGrid}>
                                        <motion.div className={styles.field} variants={fadeUp} initial="hidden" animate="visible" custom={1}>
                                            <label>Full Name</label>
                                            <div className={styles.inputWrapper}>
                                                <input
                                                    name="name"
                                                    type="text"
                                                    value={form.name}
                                                    onChange={handleChange}
                                                    placeholder={t.form.fields.name}
                                                    required
                                                />
                                                <FontAwesomeIcon icon={faUser} className={styles.inputIcon} />
                                            </div>
                                        </motion.div>

                                        <motion.div className={styles.field} variants={fadeUp} initial="hidden" animate="visible" custom={2}>
                                            <label>Work Email</label>
                                            <div className={styles.inputWrapper}>
                                                <input
                                                    name="email"
                                                    type="email"
                                                    value={form.email}
                                                    onChange={handleChange}
                                                    placeholder={t.form.fields.email}
                                                    required
                                                />
                                                <FontAwesomeIcon icon={faEnvelope} className={styles.inputIcon} />
                                            </div>
                                        </motion.div>

                                        <motion.div className={`${styles.field} ${styles.fullWidth}`} variants={fadeUp} initial="hidden" animate="visible" custom={3}>
                                            <label>Inquiry Subject</label>
                                            <div className={styles.inputWrapper}>
                                                <input
                                                    name="subject"
                                                    type="text"
                                                    value={form.subject}
                                                    onChange={handleChange}
                                                    placeholder={t.form.fields.subject}
                                                    required
                                                />
                                                <FontAwesomeIcon icon={faTag} className={styles.inputIcon} />
                                            </div>
                                        </motion.div>

                                        <motion.div className={`${styles.field} ${styles.fullWidth}`} variants={fadeUp} initial="hidden" animate="visible" custom={4}>
                                            <label>Detailed Message</label>
                                            <textarea
                                                name="message"
                                                value={form.message}
                                                onChange={handleChange}
                                                placeholder={t.form.fields.message}
                                                required
                                            ></textarea>
                                        </motion.div>
                                    </div>

                                    <motion.div className={styles.captchaWrapper} variants={fadeUp} initial="hidden" animate="visible" custom={5}>
                                        <ReCAPTCHA
                                            key={currentTheme}
                                            theme={currentTheme || "dark"}
                                            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                                            onChange={(token) => setCaptchaToken(token)}
                                        />
                                    </motion.div>

                                    <motion.button 
                                        className={styles.submitBtn} 
                                        type="submit" 
                                        disabled={loading}
                                        variants={fadeUp}
                                        initial="hidden"
                                        animate="visible"
                                        custom={6}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {loading ? (
                                            <>
                                                <FontAwesomeIcon icon={faCircleNotch} spin /> Submitting...
                                            </>
                                        ) : (
                                            <>
                                                {t.form.button} <FontAwesomeIcon icon={faPaperPlane} />
                                            </>
                                        )}
                                    </motion.button>
                                </form>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Sidebar Cards */}
                <div className={styles.sidebar}>
                    <motion.div 
                        className={styles.infoCard}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className={styles.iconBox}>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <span className={styles.cardLabel}>Direct Access</span>
                        <h4 className={styles.cardValue}>hello@grapehub.io</h4>
                        <a href="mailto:hello@grapehub.io" className={styles.cardAction}>
                            Send an email <FontAwesomeIcon icon={faArrowRight} />
                        </a>
                    </motion.div>

                    <motion.div 
                        className={styles.infoCard}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className={styles.iconBox}>
                            <FontAwesomeIcon icon={faFileLines} />
                        </div>
                        <span className={styles.cardLabel}>Documentation</span>
                        <h4 className={styles.cardValue}>Self-Service Guides</h4>
                        <a href="https://docs.buildninja.com" className={styles.cardAction}>
                            Browse Academy <FontAwesomeIcon icon={faArrowRight} />
                        </a>
                    </motion.div>

                    <motion.div 
                        className={styles.infoCard}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        style={{ background: 'rgba(255, 65, 114, 0.05)', borderColor: 'var(--color-primary-border)' }}
                    >
                        <div className={styles.iconBox} style={{ background: 'var(--color-error-bg)', color: 'var(--color-error)' }}>
                            <FontAwesomeIcon icon={faLifeRing} />
                        </div>
                        <h4 style={{ color: 'var(--color-text)', fontSize: '1.2rem', marginBottom: '8px' }}>Critical Assistance</h4>
                        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                            Priority support for Enterprise customers is available 24/7/365.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}





