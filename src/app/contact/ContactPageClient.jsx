"use client";
import React, { useState } from "react";
import styles from "./ContactPage.module.css";
import ReCAPTCHA from "react-google-recaptcha";

import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import NetworkBackground from "@/components/ui/NetworkBackground";
import { sendContactEmail } from "@/services/email/sendEmail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faPaperPlane,
    faCircleNotch,
    faCheckCircle,
    faUser,
    faTag,
    faMapMarkerAlt,
    faPhoneAlt
} from "@fortawesome/free-solid-svg-icons";

export default function ContactPageClient({ grapehubContactHtml }) {
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
    const { success, message } = await sendContactEmail(form);
    setLoading(false);

    if (success) {
      setIsSuccess(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setCaptchaToken(null);
      setTimeout(() => setIsSuccess(false), 5000);
    } else {
      alert(message || "Failed to send message. Try again later.");
    }
  };



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
        <section className={styles.contactSection}>
            <NetworkBackground />
            <div className={styles.bottomFade} />

            {/* Header Content */}
            <motion.div
                className={styles.contactHeader}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className={styles.badge}>
                    <span className={styles.badgeDot}></span>
                    <span>Get in Touch</span>
                </div>
                <h1 className={styles.heading}>
                    Contact Build<span>Ninja</span>
                </h1>
                <p className={styles.subheading}>
                    Have a question, feedback, or custom licensing inquiry? Contact our team.
                </p>
            </motion.div>

            {/* Main Content Grid */}
            <div className={styles.mainContent}>
                {/* Left: Fetched GrapeHub Info Card */}
                <motion.div
                    className={styles.infoCard}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h3 className={styles.cardTitle}>Office Details</h3>
                    <div
                        className={styles.fetchedContent}
                        dangerouslySetInnerHTML={{ __html: grapehubContactHtml }}
                    />
                    <div className={styles.innerMapWrapper}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0490736031356!2d77.36855611137265!3d28.628291284171272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce550e8440059%3A0x8e3aa40d18c938f4!2sGrapeCity%20India%20Private%20Limited!5e0!3m2!1sen!2sin!4v1779347655710!5m2!1sen!2sin"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className={styles.innerMapIframe}
                        ></iframe>
                    </div>
                </motion.div>

                {/* Right: Contact Form Card */}
                <motion.div
                    className={styles.glassCard}
                    initial={{ opacity: 0, x: 30 }}
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
                                <h2 className={styles.successTitle}>Inquiry Sent!</h2>
                                <p style={{ color: 'var(--color-text-secondary)' }}>
                                    Thank you for reaching out. We will get back to you shortly.
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

                                <form className={styles.contactForm} onSubmit={handleSubmit}>
                                    <div className={styles.formGrid}>
                                        <motion.div className={styles.field} variants={fadeUp} initial="hidden" animate="visible" custom={1}>
                                            <label>Full Name</label>
                                            <div className={styles.inputWrapper}>
                                                <input
                                                    name="name"
                                                    type="text"
                                                    value={form.name}
                                                    onChange={handleChange}
                                                    placeholder="Enter your full name"
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
                                                    placeholder="Enter your work email"
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
                                                    placeholder="e.g. Sales, Enterprise Licensing, Custom Integration"
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
                                                placeholder="Write your message here..."
                                                required
                                            ></textarea>
                                        </motion.div>
                                    </div>

                                    <motion.div className="captcha-container" variants={fadeUp} initial="hidden" animate="visible" custom={5}>
                                        <div className="captcha-inner">
                                            <ReCAPTCHA
                                                key={currentTheme}
                                                theme={currentTheme || "dark"}
                                                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                                                onChange={(token) => setCaptchaToken(token)}
                                            />
                                        </div>
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
                                                Send Inquiry <FontAwesomeIcon icon={faPaperPlane} />
                                            </>
                                        )}
                                    </motion.button>
                                </form>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
