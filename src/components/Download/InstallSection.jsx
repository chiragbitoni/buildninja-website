"use client";
import styles from './InstallSection.module.css';
import { heroSectionText } from "../../../public/static/downloadPageText";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { emailSignup } from "@/services/auth/emailSignup";
import { checkAuth } from '@/services/auth/check';
import { setAuthCookie } from '@/lib/cookieAuth';
import posthog from "posthog-js";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faDownload, faCheckCircle, faRocket, faShieldAlt, faServer } from "@fortawesome/free-solid-svg-icons";
import NetworkBackground from "@/components/ui/NetworkBackground";

const benefitIcons = [faRocket, faShieldAlt, faServer];

export default function InstallSection() {
    const router = useRouter();
    const { theme, resolvedTheme } = useTheme();
    const [email, setEmail] = useState("");
    const [captchaToken, setCaptchaToken] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const currentTheme = theme === "system" ? resolvedTheme : theme;

    async function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);

        posthog.capture("signup_cta_clicked", {
            location: "download_hero",
            has_captcha: Boolean(captchaToken),
        });

        if (!captchaToken) {
            posthog.capture("signup_blocked_no_captcha", {
                location: "download_hero",
            });
            alert("Please verify that you are not a robot!");
            setIsLoading(false);
            return;
        }

        try {
            const res = await emailSignup(email);
            const userId = res?.value?.user?.userId;
            const userEmail = res?.value?.user?.email;

            if (userId && userEmail) {
                posthog.identify(userId, {
                    email: userEmail,
                });
                posthog.capture("email_signup_success", {
                    location: "download_hero",
                });
                setAuthCookie({ userId, email: userEmail });
                router.push("/install/dashboard");
            } else {
                posthog.capture("email_signup_failed", {
                    reason: res?.message || "unknown",
                    location: "download_hero",
                });
                alert(res?.message || "Signup failed. Try again.");
            }
        } catch (err) {
            posthog.capture("email_signup_error", {
                error: err?.message,
                location: "download_hero",
            });
            console.error("Signup error:", err);
            alert("Something went wrong. Try again.");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <section className={styles.installHero}>
            <div className={styles.grid} />
            <NetworkBackground />
            <div className={styles.orb} />
            
            <motion.div 
                className={styles.content}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.span 
                    className={styles.badge}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    {heroSectionText.highlight}
                </motion.span>
                
                <h1 className={styles.title}>
                    {heroSectionText.title}
                </h1>
                
                <p className={styles.subtitle}>
                    {heroSectionText.subTitle}
                </p>

                <motion.div 
                    className={styles.emailCard}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.7 }}
                >
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.inputWrapper}>
                            <FontAwesomeIcon icon={faEnvelope} className={styles.inputIcon} />
                            <input
                                required
                                name="email"
                                type="email"
                                autoComplete="email"
                                className={styles.input}
                                placeholder={heroSectionText.downloadCContainerText.placeHolder}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={isLoading}
                            />
                        </div>

                        <div className={styles.captchaWrapper}>
                            <div className={styles.captchaScale}>
                                <ReCAPTCHA
                                    key={currentTheme}
                                    theme={currentTheme || "dark"}
                                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                                    onChange={(token) => {
                                        setCaptchaToken(token);
                                        posthog.capture("signup_captcha_verified", {
                                            location: "download_hero",
                                        });
                                    }}
                                />
                            </div>
                        </div>

                        <button 
                            className={styles.submitBtn} 
                            type="submit"
                            disabled={isLoading}
                        >
                            <FontAwesomeIcon icon={faDownload} />
                            {isLoading ? "Granting Access..." : heroSectionText.downloadCContainerText.buttonText}
                        </button>
                    </form>
                </motion.div>

                <motion.div 
                    className={styles.benefits}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                >
                    {heroSectionText.downloadCContainerText.iconText.map((text, index) => (
                        <div className={styles.benefitItem} key={index}>
                            <FontAwesomeIcon 
                                icon={benefitIcons[index] || faCheckCircle} 
                                className={styles.benefitIcon} 
                            />
                            <span>{text}</span>
                        </div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}

