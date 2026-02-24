import { useState } from "react";
import "./Hero.css";
import ReCAPTCHA from "react-google-recaptcha";
import { sendLeadEmail } from "@/services/email/sendEmail";
import { useEffect, useRef } from "react";
import posthog from "posthog-js";
import 'react-international-phone/style.css'
import { PhoneInput } from 'react-international-phone'
import Image from "next/image";
import { paths } from "../../../../../public/static/paths";

export default function Hero() {
    const scrollToSection = () => {
        const section = document.getElementById("partnershipModelsSection");
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const scrollAndFocus = () => {
        const section = document.getElementById("partner-form-section");
        const input = document.getElementById("partner-name-input");

        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }

        // Delay focus slightly to allow scroll animation
        setTimeout(() => {
            if (input) {
                input.focus();
            }
        }, 600);
    };
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
                        <button className="partnerPageHeroButton" onClick={() => { scrollAndFocus(); }}>Let's grow together</button>
                        <button className="partnerPageHeroButton" onClick={() => { scrollToSection(); }}>Explore partnership models</button>
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
