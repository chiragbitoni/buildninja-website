import { useState } from "react";
import "./Hero.css";
import ReCAPTCHA from "react-google-recaptcha";
import { sendLeadEmail } from "@/services/email/sendEmail";
import { useEffect, useRef } from "react";
import posthog from "posthog-js";
import 'react-international-phone/style.css'
import { PhoneInput } from 'react-international-phone'
import Image from "next/image";
import { paths } from "../../../../../../public/static/paths";

export default function Hero() {

    const hasStartedRef = useRef(false);

    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        company: "",
        teamSize: "",
        countryCode: "+1",
    });
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

    return (
        <section className="partnerPageHeroSection">
            <div className="partnerPageHeroContainer">

                {/* LEFT CONTENT */}
                <div className="partnerPageHeroLeft">
                    <div className="partnerPageHeroBageContainer">
                        <span className="partnerPageHeroBadge">
                            Self-hosted & secure
                        </span>
                        <span className="partnerPageHeroBadge">
                            Fast, parallel execution
                        </span>
                        <span className="partnerPageHeroBadge">
                            Predictable pricing
                        </span>
                    </div>

                    <h2 className="partnerPageHeroTitle">
                        <span>Partner <br />with BuildNinja.</span>
                    </h2>

                    <p className="partnerPageHeroSubtitle">
                        Ship secure CI/CD inside your customer’s infrastructure.
                    </p>
                    <p className="partnerPageHeroDescription">
                        BuildNiNja is a high-performance self-hosted CI/CD platform built for teams that need speed, security, and control—across cloud, on-prem, or air-gapped environments.
                    </p>
                    <div className="partnerPageHeroButtonContainer">
                        <button className="partnerPageHeroButton">Let's grow together</button>
                        <button className="partnerPageHeroButton">Explore partnership models</button>
                    </div>
                    <div className="partnerPageHeroStats">
                        <div className="partnerPageHeroStatCard">
                            <span>Partner Value</span>
                            <strong>Self-hosted security</strong>
                        </div>

                        <div className="partnerPageHeroStatCard">
                            <span>Partner Value</span>
                            <strong>Enterprise compliance</strong>
                        </div>

                        <div className="partnerPageHeroStatCard">
                            <span>Partner Value</span>
                            <strong>No build-minute billing</strong>
                        </div>
                    </div>
                </div>
                {/* RIGHT */}
                <div className="partnerPageHeroRight">
                    <div className="partnerPageHeroRightCard">
                        <div>
                            <div className="partnerPageHeroRightHeader">
                                <div>
                                    <h3 className="partnerPageHeroFormTitle">Why BuildNinja</h3>
                                    <p className="partnerPageHeroFormSubtitle">
                                        Built for speed. Designed for control.
                                    </p>
                                </div>
                                <div className="partnerPageHeroRightHeaderImageWrapper">
                                    <Image src="/resources/icons/partnerPageAssets/handshake.svg" height={48} width={48} alt="Grapecity Hand Shake Icon"></Image>
                                </div>
                            </div>
                            <div className="partnerPageHeroRightFeaturesContainer">
                                <div className="partnerPageHeroRightFeature">
                                    <Image src="/resources/icons/partnerPageAssets/lock.svg" height={32} width={32} alt="Grapecity Lock Icon"></Image>
                                    <div className="partnerPageHeroRightFeatureText">
                                        <h5>Keep everything in your environment</h5>
                                        <p>Source code, secrets, artifacts, and logs stay inside your customer’s infrastructure.</p>
                                    </div>
                                </div>
                                <div className="partnerPageHeroRightFeature">
                                    <Image src="/resources/icons/partnerPageAssets/clock.svg" height={32} width={32} alt="Grapecity Clock Icon"></Image>
                                    <div className="partnerPageHeroRightFeatureText">
                                        <h5>Parallel pipelines at scale</h5>
                                        <p>High-throughput execution engine for modern teams.</p>
                                    </div>
                                </div>
                                <div className="partnerPageHeroRightFeature">
                                    <Image src="/resources/icons/partnerPageAssets/location.svg" height={32} width={32} alt="Grapecity Lock Icon"></Image>
                                    <div className="partnerPageHeroRightFeatureText">
                                        <h5>Deploy anywhere</h5>
                                        <p>Kubernetes, VMs, private cloud, or air-gapped.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="partnerPageHeroRightCard">
                        <div>
                            <div className="partnerPageHeroRightHeader">
                                <div>
                                    <h3 className="partnerPageHeroFormTitle">Partner readiness</h3>
                                    <p className="partnerPageHeroFormSubtitle">
                                        Onboarding, enablement, and co-marketing.
                                    </p>
                                </div>
                                <div className="partnerPageHeroRightHeaderImageWrapper">
                                    <Image src="/resources/icons/partnerPageAssets/products.svg" height={48} width={48} alt="Grapecity Hand Shake Icon"></Image>
                                </div>
                            </div>
                            <div>
                                <ul>
                                    <li>
                                        <Image src={paths.icons.landingPageAssets.tickWithGreenBG} width={30} height={30} alt="Grapcity White Tick Icon"></Image>
                                        <p>Dedicated partner contact</p>
                                    </li>
                                    <li>
                                        <Image src={paths.icons.landingPageAssets.tickWithGreenBG} width={30} height={30} alt="Grapcity White Tick Icon"></Image>
                                        <p>Priority engineering support</p>
                                    </li>
                                    <li>
                                        <Image src={paths.icons.landingPageAssets.tickWithGreenBG} width={30} height={30} alt="Grapcity White Tick Icon"></Image>
                                        <p>Roadmap sessions</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
