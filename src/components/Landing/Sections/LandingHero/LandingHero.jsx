"use client";
import { useState, useEffect, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check, Play, Sparkles } from "lucide-react";
import { sendLeadEmail } from "@/services/email/sendEmail";
import posthog from "posthog-js";
import 'react-international-phone/style.css'
import { PhoneInput } from 'react-international-phone'
import s from "./LandingHeroRedesign.module.css";

export default function LandingHero() {
    const hasStartedRef = useRef(false);
    const { resolvedTheme } = useTheme();
    const captchaTheme = resolvedTheme === "light" ? "light" : "dark";

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);
    const [captchaToken, setCaptchaToken] = useState(null);
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        company: "",
        teamSize: "",
        countryCode: "+1",
    });

    // UTM and PH setup
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const utmData = {
            utm_source: params.get("utm_source") || "",
            utm_medium: params.get("utm_medium") || "",
            utm_campaign: params.get("utm_campaign") || "",
            utm_content: params.get("utm_content") || "",
        };

        if (utmData.utm_source) {
            localStorage.setItem("utm_data", JSON.stringify(utmData));
        } else if (document.referrer) {
            localStorage.setItem(
                "utm_data",
                JSON.stringify({
                    utm_source: document.referrer,
                    utm_medium: "referral",
                })
            );
        }

        posthog.capture("marketing_landing_viewed", {
            page: "landing-page",
            ...utmData,
        });
    }, []);

    const handleChange = (e) => {
        setStatus(null);
        if (!hasStartedRef.current) {
            hasStartedRef.current = true;
            posthog.capture("marketing_form_started", {
                page: "landing-page",
            });
        }
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const submitStart = Date.now();
        // Validate Indian Phone Number (Must start with +91 and have 10 digits after that, starting with 6-9)
        const phoneDigits = form.phone.replace(/\D/g, "");
        const isIndian = form.phone.startsWith("+91");
        const numberPart = phoneDigits.slice(2); // remove 91
        const isValidIndian = isIndian && /^[6-9]\d{9}$/.test(numberPart);

        if (!isValidIndian) {
            setStatus({ type: "error", message: "Please enter a valid 10-digit Indian phone number starting with +91." });
            return;
        }
        if (!captchaToken) {
            posthog.capture("marketing_form_blocked_no_captcha", {
                page: "landing-page",
            });
            setStatus({ type: "error", message: "Please verify you are not a robot before sending your request." });
            return;
        }
        posthog.capture("marketing_form_submitted", {
            page: "landing-page",
            team_size: form.teamSize,
        });
        const utmData = JSON.parse(localStorage.getItem("utm_data") || "{}");
        setLoading(true);
        setStatus({ type: "pending", message: "Sending your request…" });
        try {
            const { success, message } = await sendLeadEmail({
                ...form,
                fullPhone: `${form.countryCode} ${form.phone}`,
                utmSource: utmData.utm_source,
                utmMedium: utmData.utm_medium,
                utmCampaign: utmData.utm_campaign,
            });

            if (success) {
                setStatus({ type: "success", message: "Request sent. We’ll contact you shortly." });
                setForm({
                    name: "",
                    phone: "",
                    email: "",
                    company: "",
                    teamSize: "",
                    countryCode: "+1",
                });
                setCaptchaToken(null);
                posthog.capture("marketing_lead_success", {
                    page: "landing-page",
                    team_size: form.teamSize,
                    latency_ms: Date.now() - submitStart,
                });
            } else {
                posthog.capture("marketing_lead_failed", {
                    page: "landing-page",
                    reason: message || "unknown",
                });
                setStatus({ type: "error", message: message || "Something went wrong. Please try again." });
            }
        } catch (error) {
            posthog.capture("marketing_lead_failed", {
                page: "landing-page",
                reason: error?.message || "unknown",
            });
            setStatus({ type: "error", message: "Something went wrong. Please try again." });
        } finally {
            setLoading(false);
        }
    };

    const [isFormFirst, setIsFormFirst] = useState(false);

    useEffect(() => {
        setIsFormFirst(new URLSearchParams(window.location.search).get("form") === "first");
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section className={`${s.section} ${isFormFirst ? s.formFirst : ""}`}>
            <div className={s.container}>
                {/* LEFT CONTENT */}
                <motion.div
                    className={s.left}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div className={s.badge} variants={itemVariants}>
                        <span className={s.badgeDot} />
                        <span>SELF-HOSTED CI/CD · KENZOAI BUILD INSIGHTS</span>
                    </motion.div>

                    <motion.h1 className={s.title} variants={itemVariants}>
                        Make every build easier to <span>understand.</span>
                    </motion.h1>

                    <motion.p className={s.subtitle} variants={itemVariants}>
                        Automate pipelines, keep build results and changes together, and use kenzoAI for contextual build insights — on infrastructure you manage.
                    </motion.p>

                    <motion.div className={s.actions} variants={itemVariants}>
                        <Link href="/install" className={s.primaryAction}>
                            Explore installation <ArrowRight size={15} aria-hidden="true" />
                        </Link>
                        <Link href="/dojo" className={s.secondaryAction}>
                            <Play size={13} aria-hidden="true" /> Try the live sandbox
                        </Link>
                    </motion.div>

                    <div className={s.proof}>
                        <span><Check size={13} aria-hidden="true" /> Self-hosted control</span>
                        <span><Check size={13} aria-hidden="true" /> Free Growth edition</span>
                        <span><Sparkles size={13} aria-hidden="true" /> kenzoAI insights</span>
                    </div>
                </motion.div>

                {/* RIGHT FORM */}
                <motion.div
                    className={s.right}
                    id="landing-consultation"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className={s.formContent}>
                        <p className={s.formEyebrow}>LET’S TALK BUILDNINJA</p>
                        <h2 className={s.formTitle}>Talk through your CI/CD setup.</h2>
                        <p className={s.formSubtitle}>
                            Tell us a little about your team. We’ll help you explore a BuildNinja workflow that fits.
                        </p>

                        <form className={s.form} onSubmit={handleSubmit} aria-busy={loading}>
                            {status ? <p className={`${s.formStatus} ${status.type === "error" ? s.formStatusError : status.type === "pending" ? s.formStatusPending : s.formStatusSuccess}`} role={status.type === "error" ? "alert" : "status"} aria-live="polite">{status.message}</p> : null}
                            <div className={s.formRow}>
                                <label className={s.formLabel}>
                                    <div>First Name<span className={s.required}>*</span></div>
                                    <input
                                        type="text"
                                        className={s.input}
                                        placeholder="Name"
                                        required
                                        value={form.name}
                                        onChange={handleChange}
                                        name="name"
                                    />
                                </label>
                                <label className={s.formLabel}>
                                    <div>Phone Number<span className={s.required}>*</span></div>
                                    <div className={s.phoneWrap}>
                                        <PhoneInput
                                            defaultCountry="in"
                                            value={form.phone}
                                            onChange={(phone) => setForm({ ...form, phone })}
                                        />
                                    </div>
                                </label>

                            </div>

                            <div className={s.formRow}>
                                <label className={s.formLabel}>
                                    <div>Company Email<span className={s.required}>*</span></div>
                                    <input
                                        type="email"
                                        className={s.input}
                                        placeholder="info@company.com"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                                <label className={s.formLabel}>
                                    <div>Company Name<span className={s.required}>*</span></div>
                                    <input
                                        type="text"
                                        className={s.input}
                                        placeholder="Enter Company Name"
                                        name="company"
                                        value={form.company}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                            </div>

                            <div className={s.formRow}>
                                <label className={s.formLabel}>
                                    <div>Team Size<span className={s.required}>*</span></div>
                                    <select
                                        className={s.select}
                                        name="teamSize"
                                        value={form.teamSize}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select Team Size</option>
                                        <option>1–50</option>
                                        <option>51-100</option>
                                        <option>101-200</option>
                                        <option>201-500</option>
                                        <option>501-1000</option>
                                        <option>1000+</option>
                                    </select>
                                </label>
                            </div>

                            <div className="captcha-container">
                                <div className="captcha-inner">
                                    <ReCAPTCHA
                                        key={captchaTheme}
                                        theme={captchaTheme}
                                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                                        onChange={(token) => {
                                            setCaptchaToken(token);
                                            posthog.capture("marketing_captcha_verified", {
                                                page: "landing-page",
                                            });
                                        }}
                                        onExpired={() => setCaptchaToken(null)}
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className={s.submit}
                                disabled={loading}
                            >
                                {loading ? "Sending request…" : "Request a conversation"}
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

