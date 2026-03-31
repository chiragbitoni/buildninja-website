"use client";
import { useState, useEffect, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { motion } from "framer-motion";
import { sendLeadEmail } from "@/services/email/sendEmail";
import posthog from "posthog-js";
import 'react-international-phone/style.css'
import { PhoneInput } from 'react-international-phone'
import { siteConfig } from "@/config/site";
import { useRouter } from "next/navigation";
import s from "./Hero.module.css";

export default function Hero() {
    const router = useRouter();
    const hasStartedRef = useRef(false);
    const formRef = useRef(null);
    const orb1 = useRef(null);
    const orb2 = useRef(null);

    const [loading, setLoading] = useState(false);
    const [captchaToken, setCaptchaToken] = useState(null);
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        company: "",
        teamSize: "",
        countryCode: "+1",
    });

    // Background animation
    useEffect(() => {
        let t = 0;
        const tick = () => {
            t += 0.003;
            if (orb1.current) {
                orb1.current.style.transform = `translate(${Math.sin(t) * 40}px, ${Math.cos(t * 0.8) * 50}px)`;
            }
            if (orb2.current) {
                orb2.current.style.transform = `translate(${Math.cos(t * 0.7) * 45}px, ${Math.sin(t * 1.2) * 35}px)`;
            }
            requestAnimationFrame(tick);
        };
        const id = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(id);
    }, []);

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
        if (!form.phone || form.phone.trim().length < 6) {
            alert("Please enter a valid phone number");
            return;
        }
        if (!captchaToken) {
            posthog.capture("marketing_form_blocked_no_captcha", {
                page: "landing-page",
            });
            alert("Please verify you are not a robot");
            return;
        }
        posthog.capture("marketing_form_submitted", {
            page: "landing-page",
            team_size: form.teamSize,
        });
        const utmData = JSON.parse(localStorage.getItem("utm_data") || "{}");
        setLoading(true);
        const { success, message } = await sendLeadEmail({
            ...form,
            fullPhone: `${form.countryCode} ${form.phone}`,
            utmSource: utmData.utm_source,
            utmMedium: utmData.utm_medium,
            utmCampaign: utmData.utm_campaign,
        });

        setLoading(false);

        if (success) {
            alert("Request submitted! We'll contact you shortly.");
            setForm({
                name: "",
                phone: "",
                email: "",
                company: "",
                teamSize: "",
            });
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
            alert(message || "Something went wrong");
        }
    };

    useEffect(() => {
        const el = formRef.current;
        if (!el) return;

        const handleMouseMove = (e) => {
            const rect = el.getBoundingClientRect();
            el.style.setProperty("--x", `${e.clientX - rect.left}px`);
            el.style.setProperty("--y", `${e.clientY - rect.top}px`);
        };

        el.addEventListener("mousemove", handleMouseMove);
        return () => el.removeEventListener("mousemove", handleMouseMove);
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
        <section className={s.section}>
            <div ref={orb1} className={s.orb1} />
            <div ref={orb2} className={s.orb2} />
            <div className={s.grid} />

            <div className={s.container}>
                {/* LEFT CONTENT */}
                <motion.div 
                    className={s.left}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div 
                        className={s.badge}
                        variants={itemVariants}
                        onClick={() => { router.push("/install"); }}
                    >
                        BUILDNINJA {siteConfig.version.toUpperCase()} NOW AVAILABLE
                    </motion.div>

                    <motion.h2 className={s.title} variants={itemVariants}>
                        Stop Fighting <br />
                        <span>Your CI/CD Tool</span>
                    </motion.h2>

                    <motion.p className={s.subtitle} variants={itemVariants}>
                        Self-hosted CI/CD that just works out of the box.
                        Deploy in minutes. Ship features, not infrastructure.
                    </motion.p>

                    <div className={s.stats}>
                        {[
                            { label: "Agents", value: "Unlimited" },
                            { label: "Free Builds", value: "3 Concurrent" },
                            { label: "Unlimited Scale", value: "$199/mo" }
                        ].map((stat, i) => (
                            <motion.div 
                                className={s.statCard} 
                                key={i}
                                variants={itemVariants}
                            >
                                <strong>{stat.value}</strong>
                                <span>{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* RIGHT FORM */}
                <motion.div 
                    className={s.right} 
                    ref={formRef}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className={s.formContent}>
                        <h3 className={s.formTitle}>Get Started</h3>
                        <p className={s.formSubtitle}>
                            Fill out the form and we’ll help you get set up instantly.
                        </p>

                        <form className={s.form} onSubmit={handleSubmit}>
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
                                            defaultCountry="us"
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

                            <div className={s.captcha}>
                                <ReCAPTCHA
                                    theme="dark"
                                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                                    onChange={(token) => {
                                        setCaptchaToken(token);
                                        posthog.capture("marketing_captcha_verified", {
                                            page: "landing-page",
                                        });
                                    }}
                                />
                            </div>

                            <button
                                type="submit"
                                className={s.submit}
                                disabled={loading}
                            >
                                {loading ? "Submitting..." : "Submit Request"}
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

