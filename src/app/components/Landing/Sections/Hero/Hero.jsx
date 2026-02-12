import { useState } from "react";
import "./Hero.css";
import ReCAPTCHA from "react-google-recaptcha";
import { sendLeadEmail } from "@/services/email/sendEmail";
import { useEffect, useRef } from "react";
import posthog from "posthog-js";
import 'react-international-phone/style.css'
import { PhoneInput } from 'react-international-phone'

export default function Hero() {

    const hasStartedRef = useRef(false);

    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        company: "",
        teamSize: "",
        location: "",
        countryCode: "+1",
    });
    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [captchaToken, setCaptchaToken] = useState(null);
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
            fullPhone: `${form.countryCode} ${form.phone}`, // cleaner
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
        const stored = JSON.parse(localStorage.getItem("utm_data") || "{}");

        if (!stored.utm_source && document.referrer) {
            localStorage.setItem(
                "utm_data",
                JSON.stringify({
                    utm_source: document.referrer,
                    utm_medium: "referral",
                })
            );
        }
    }, []);



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
    return (
        <section className="landingPageHeroSection">
            <div className="landingPageHeroContainer">

                {/* LEFT CONTENT */}
                <div className="landingPageHeroLeft">
                    <span className="landingPageHeroBadge">
                        BUILDNINJA 1.0.0 NOW AVAILABLE
                    </span>

                    <h2 className="landingPageHeroTitle">
                        Stop Fighting <br />
                        <span>Your CI/CD Tool</span>
                    </h2>

                    <p className="landingPageHeroSubtitle">
                        Self-hosted CI/CD that just works out of the box.
                        Deploy in minutes. Ship features, not infrastructure.
                    </p>

                    <div className="landingPageHeroStats">
                        <div className="landingPageHeroStatCard">
                            <strong>Unlimited</strong>
                            <span>Agents</span>
                        </div>

                        <div className="landingPageHeroStatCard">
                            <strong>3 Concurrent</strong>
                            <span>Free Builds</span>
                        </div>

                        <div className="landingPageHeroStatCard">
                            <strong>$199/mo</strong>
                            <span>Unlimited Scale</span>
                        </div>
                    </div>
                </div>

                {/* RIGHT FORM */}
                <div className="landingPageHeroRight" ref={formRef}>
                    <h3 className="landingPageHeroFormTitle">Get Started</h3>
                    <p className="landingPageHeroFormSubtitle">
                        Fill out the form and we’ll help you get set up instantly.
                    </p>

                    <form className="landingPageHeroForm" onSubmit={handleSubmit}>
                        <div className="landingPageHeroFormRow">
                            <label>First Name
                                <input type="text" placeholder="Name" required value={form.name} onChange={handleChange} name="name" />
                            </label>
                            <label>
                                Phone Number
                                <PhoneInput
                                    defaultCountry="us"
                                    value={form.phone}
                                    onChange={(phone) => setForm({ ...form, phone })}
                                    className="react-international-phone-input-container"
                                />

                            </label>

                        </div>

                        <div className="landingPageHeroFormRow">
                            <label>
                                Company Email
                                <input
                                    type="email"
                                    placeholder="info@company.com"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label>
                                Company Name
                                <input
                                    type="text"
                                    placeholder="Enter Company Name"
                                    name="company"
                                    value={form.company}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                        </div>
                        <div className="landingPageHeroFormRow">
                            <label>
                                Team Size
                                <select className="landingPageHeroSelect"
                                    name="teamSize"
                                    value={form.teamSize}
                                    onChange={handleChange}
                                    required>
                                    <option value="">Select Team Size</option>
                                    <option>1–50</option>
                                    <option>51-100</option>
                                    <option>101-200</option>
                                    <option>201-500</option>
                                    <option>501-1000</option>
                                    <option>1000+</option>
                                </select>
                            </label>
                            <label>
                                Location
                                <select
                                    className="landingPageHeroSelect"
                                    name="location"
                                    value={form.location}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select Location</option>
                                    <option value="India">India</option>
                                    <option value="US">United States</option>
                                    <option value="UK">United Kingdom</option>
                                    <option value="Germany">Germany</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Other">Other</option>
                                </select>
                            </label>

                        </div>
                        <ReCAPTCHA
                            className="landingPageHeroFormCaptcha"
                            theme="dark"
                            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                            theme="dark"
                            onChange={(token) => {
                                setCaptchaToken(token);

                                posthog.capture("marketing_captcha_verified", {
                                    page: "landing-page",
                                });
                            }}
                        />

                        <button
                            type="submit"
                            className="landingPageHeroSubmit"
                            disabled={loading}
                        >
                            {loading ? "Submitting..." : "Submit Request"}
                        </button>

                    </form>
                </div>

            </div>
        </section>
    );
}
