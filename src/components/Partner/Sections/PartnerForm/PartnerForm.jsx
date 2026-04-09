"use client";
import React, { useState, useEffect } from "react";
import s from "./PartnerForm.module.css";
import { sendPartnershipEmail } from "@/services/email/sendEmail";
import ReCAPTCHA from "react-google-recaptcha";
import posthog from "posthog-js";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { useTheme } from "next-themes";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faShieldHalved, 
    faBolt, 
    faGear, 
    faCreditCard, 
    faHandshakeAngle 
} from "@fortawesome/free-solid-svg-icons";

export default function PartnerForm() {
    const [formData, setFormData] = useState({
        partnershipType: "",
        name: "",
        email: "",
        phone: "",
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // success | error
    const [captchaToken, setCaptchaToken] = useState(null);
    const { resolvedTheme } = useTheme();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.partnershipType || !formData.phone) {
            setStatus("error");
            return;
        }

        if (!captchaToken) {
            setStatus("error");
            return;
        }

        setLoading(true);
        setStatus(null);

        try {
            const utmData = JSON.parse(localStorage.getItem("utm_data") || "{}");

            const response = await sendPartnershipEmail({
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                partnershipType: formData.partnershipType,
                utmSource: utmData.utm_source,
                utmMedium: utmData.utm_medium,
                utmCampaign: utmData.utm_campaign,
                utmContent: utmData.utm_content,
            });

            if (response.success) {
                posthog.capture("partner_form_submitted", {
                    page: "partner-page",
                    partnership_type: formData.partnershipType,
                    utm_source: utmData.utm_source || undefined,
                    utm_medium: utmData.utm_medium || undefined,
                    utm_campaign: utmData.utm_campaign || undefined,
                    utm_content: utmData.utm_content || undefined,
                });

                setStatus("success");
                setFormData({
                    partnershipType: "",
                    name: "",
                    email: "",
                    phone: "",
                });
                setCaptchaToken(null);
            } else {
                setStatus("error");
            }
        } catch (err) {
            setStatus("error");
        } finally {
            setLoading(false);
        }
    };

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

        posthog.capture("partner_page_viewed", {
            page: "partner-page",
            utm_source: utmData.utm_source || undefined,
            utm_medium: utmData.utm_medium || undefined,
            utm_campaign: utmData.utm_campaign || undefined,
            utm_content: utmData.utm_content || undefined,
        });
    }, []);

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

    return (
        <section className={s.section} id="partner-form-section">
            <div className={s.inner}>
                <div className={s.header}>
                    <h2 className={s.title}>Ready to explore a partnership?</h2>
                    <p className={s.subTitle}>If your organization is looking to enhance its DevOps offerings, improve client delivery, or build integrations within the CI/CD ecosystem, we'd love to talk.</p>
                </div>

                <div className={s.container}>
                    {/* LEFT PANEL */}
                    <div className={s.card}>
                        <div className={s.cardTopLine}></div>
                        <h3 className={s.cardTitle}>BuildNinja in 30 seconds</h3>
                        <p className={s.cardDesc}>We align on a partner motion and map a pilot to a clear outcome.</p>

                        <div className={s.featureList}>
                            <div className={s.featureItem}>
                                <div className={s.featureIcon}>
                                    <FontAwesomeIcon icon={faShieldHalved} />
                                </div>
                                <div>
                                    <h4>Self-hosted & secure</h4>
                                    <p>Keep pipelines, artifacts, and secrets fully inside the environment.</p>
                                </div>
                            </div>
                            <div className={s.featureItem}>
                                <div className={s.featureIcon}>
                                    <FontAwesomeIcon icon={faBolt} />
                                </div>
                                <div>
                                    <h4>Fast execution engine</h4>
                                    <p>Parallel builds and high throughput for modern delivery.</p>
                                </div>
                            </div>
                            <div className={s.featureItem}>
                                <div className={s.featureIcon}>
                                    <FontAwesomeIcon icon={faGear} />
                                </div>
                                <div>
                                    <h4>Flexible deployment</h4>
                                    <p>Kubernetes, VMs, on-prem, or air-gapped.</p>
                                </div>
                            </div>
                            <div className={s.featureItem}>
                                <div className={s.featureIcon}>
                                    <FontAwesomeIcon icon={faCreditCard} />
                                </div>
                                <div>
                                    <h4>Predictable pricing</h4>
                                    <p>No build-minute billing, transparent and consistent.</p>
                                </div>
                            </div>
                        </div>

                        <div className={s.nextStepBox}>
                            <div className={s.featureIcon}>
                                <FontAwesomeIcon icon={faHandshakeAngle} />
                            </div>
                            <div>
                                <h5>Our commitment</h5>
                                <p>Dedicated partnership manager, priority support, and shared resources.</p>
                            </div>
                        </div>

                        <button className={s.btnPrimary} onClick={() => {
                            window.location.href = "mailto:marketing.in@grapecity.com?subject=Partnership Inquiry&body=Hi Team,%0D%0A%0D%0AI’d like to explore a partnership opportunity.%0D%0A";
                        }}>
                            Email partnership
                        </button>
                    </div>

                    {/* RIGHT PANEL - form */}
                    <div className={s.card}>
                        <div className={s.cardTopLine}></div>
                        <h3 className={s.cardTitle}>What kind of partnership?</h3>
                        <p className={s.cardDesc}>Fill out the form below and we will be in touch shortly.</p>

                        {status === "success" && (
                            <div className={`${s.statusMessage} ${s.statusSuccess}`}>
                                Thank you! Your partnership request was received. We will be in touch shortly.
                            </div>
                        )}

                        {status === "error" && (
                            <div className={`${s.statusMessage} ${s.statusError}`}>
                                There was an error submitting your request. Please check the fields and try again, or email us directly.
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className={s.partnerFormWrap}>
                            <label className={s.formLabel}>
                                <span>Partnership Type <span className={s.formRequirement}>*</span></span>
                                <select name="partnershipType" className={s.formSelect} value={formData.partnershipType} onChange={handleChange} required>
                                    <option value="" disabled>Please select</option>
                                    <option>Technology Partner</option>
                                    <option>Reseller / Channel Partner</option>
                                    <option>System Integrator</option>
                                </select>
                            </label>

                            <label className={s.formLabel}>
                                <span>Your Name <span className={s.formRequirement}>*</span></span>
                                <input name="name" id="partner-name-input" className={s.formInput} placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
                            </label>

                            <label className={s.formLabel}>
                                <span>Company Email <span className={s.formRequirement}>*</span></span>
                                <input name="email" type="email" className={s.formInput} placeholder="info@company.com" value={formData.email} onChange={handleChange} required />
                            </label>

                            <div className={s.formLabel}>
                                <span>Phone Number <span className={s.formRequirement}>*</span></span>
                                <div className={s.phoneWrap}>
                                    <PhoneInput defaultCountry="us" value={formData.phone} onChange={(phone) => setFormData((prev) => ({ ...prev, phone }))} />
                                </div>
                            </div>
                            
                            <div className={s.captchaWrap}>
                                <ReCAPTCHA 
                                    key={resolvedTheme}
                                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} 
                                    theme={resolvedTheme === "light" ? "light" : "dark"} 
                                    onChange={(token) => setCaptchaToken(token)} 
                                    onExpired={() => setCaptchaToken(null)} 
                                />
                            </div>  

                            <button type="submit" className={s.btnPrimary} disabled={loading || !captchaToken}>
                                {loading ? "Submitting..." : "Submit Inquiry"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
