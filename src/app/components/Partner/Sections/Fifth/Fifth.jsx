import { useState } from "react";
import "./Fifth.css";
import { sendPartnershipEmail } from "@/services/email/sendEmail";
import { useEffect, useRef } from "react";
import 'react-international-phone/style.css'
import Image from "next/image";
import { paths } from "../../../../../../public/static/paths";
import ReCAPTCHA from "react-google-recaptcha";
import posthog from "posthog-js";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
export default function Fifth() {
    const [formData, setFormData] = useState({
        partnershipType: "",
        name: "",
        email: "",
        phone: "",
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // success | error
    const [captchaToken, setCaptchaToken] = useState(null);
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

    //UTM
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

        <section className="partnerPageFifthSection">
            <div className="partnerFifthBanner">
                <Image src="/resources/icons/partnerPageAssets/buildNinjaStars.svg" width={20} height={20} alt="Grapecity Stars Icon"></Image>
                <p>How it works</p>
            </div>
            <div className="partnerFifthHeader">
                <h3 className="partnerFifthHeaderTitle">Ready to explore a partnership?</h3>
                <p className="partnerFifthHeaderSubtitle">If your organization is looking to enhance its DevOps offerings, improve client delivery, or build integrations within the CI/CD ecosystem, we’d love to talk.</p>
            </div>
            <div className="partnerPageFifthContainer">
                {/* LEFT CONTENT */}
                <div className="partnerPageFifthLeftCard">
                    <p className="partnerPageFifthSmallLabel">Quick summary</p>

                    <h2 className="partnerPageFifthCardTitle">
                        BuildNinja in 30 seconds
                    </h2>
                    <hr />
                    <div className="partnerPageFifthFeatureList">
                        <div className="partnerPageFifthFeatureItem">
                            <h4>Self-hosted & secure</h4>
                            <p>Keep pipelines, artifacts, and secrets fully inside the environment.</p>
                        </div>

                        <div className="partnerPageFifthFeatureItem">
                            <h4>Fast execution engine</h4>
                            <p>Parallel builds and high throughput for modern delivery.</p>
                        </div>

                        <div className="partnerPageFifthFeatureItem">
                            <h4>Flexible deployment</h4>
                            <p>Kubernetes, VMs, on-prem, or air-gapped.</p>
                        </div>

                        <div className="partnerPageFifthFeatureItem">
                            <h4>Predictable pricing</h4>
                            <p>No build-minute billing—transparent and consistent.</p>
                        </div>
                    </div>
                    <hr />
                    <div className="partnerPageFifthNextStep">
                        <Image src="/resources/icons/partnerPageAssets/handshake.svg" height={32} width={32} alt="Grapecity Hand Shake Icon"></Image>
                        <div>
                            <strong>Next step</strong>
                            <p>We’ll align on a partner motion and map a pilot to a clear outcome.</p>
                        </div>
                    </div>

                    <button className="partnerPageFifthPrimaryBtn" onClick={() => {
                        window.location.href =
                            "mailto:marketing.in@grapecity.com?subject=Partnership Inquiry&body=Hi Team,%0D%0A%0D%0AI’d like to explore a partnership opportunity.%0D%0A";
                    }}>
                        Email partnership
                    </button>
                </div>
                {/* RIGHT */}
                <div className="partnerPageFifthRight">
                    <div className="partnerPageFifthRightCard">
                        <div>
                            <div className="partnerPageFifthRightHeader">
                                <div>
                                    <h3 className="partnerPageFifthFormTitle">Our commitment</h3>
                                    <p className="partnerPageFifthFormSubtitle">
                                        Partner support you can count on
                                    </p>
                                </div>
                                <div className="partnerPageFifthRightHeaderImageWrapper">
                                    <Image src="/resources/icons/partnerPageAssets/flowerTick.svg" height={48} width={48} alt="Grapecity Hand Shake Icon"></Image>
                                </div>
                            </div>
                            <div>
                                <ul>
                                    <li>
                                        <Image src={paths.icons.landingPageAssets.tickWithGreenBG} width={30} height={30} alt="Grapcity White Tick Icon"></Image>
                                        <p>Dedicated partnership manager</p>
                                    </li>
                                    <li>
                                        <Image src={paths.icons.landingPageAssets.tickWithGreenBG} width={30} height={30} alt="Grapcity White Tick Icon"></Image>
                                        <p>Priority support for engineering & deployment</p>
                                    </li>
                                    <li>
                                        <Image src={paths.icons.landingPageAssets.tickWithGreenBG} width={30} height={30} alt="Grapcity White Tick Icon"></Image>
                                        <p>Shared go-to-market motions</p>
                                    </li>
                                    <li>
                                        <Image src={paths.icons.landingPageAssets.tickWithGreenBG} width={30} height={30} alt="Grapcity White Tick Icon"></Image>
                                        <p>Access to roadmap sessions</p>
                                    </li>
                                    <li>
                                        <Image src={paths.icons.landingPageAssets.tickWithGreenBG} width={30} height={30} alt="Grapcity White Tick Icon"></Image>
                                        <p>Early access to new features</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="partnerFifthSupport">
                                <Image src="/resources/icons/partnerPageAssets/clockBrown.svg" height={32} width={32} alt="Grapecity Hand Shake Icon"></Image>
                                <div>
                                    <h5>Simple enablement path</h5>
                                    <p>Start with a short discovery call, align on the engagement model, then run a co-planned pilot.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="partnerPageFifthRightCard partnerPageFifthRightCard2">
                        <h4 className="partnerPageFifthFormTitle">
                            What kind of partnership are you looking for?
                        </h4>

                        <form className="partnerPageFifthForm" onSubmit={handleSubmit}>

                            {/* Partnership Type */}
                            <label className="partnerPageFifthField">
                                <span>
                                    Partnership Type<span className="partnerPageFifthRequired">*</span>
                                </span>
                                <select
                                    name="partnershipType"
                                    className="partnerPageFifthInput"
                                    value={formData.partnershipType}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Please select</option>
                                    <option>Technology Partner</option>
                                    <option>Reseller</option>
                                    <option>System Integrator</option>
                                </select>
                            </label>

                            {/* Name + Email Row */}
                            <div className="partnerPageFifthFormRow">

                                <label className="partnerPageFifthField">
                                    <span>
                                        Your Name<span className="partnerPageFifthRequired">*</span>
                                    </span>
                                    <input
                                        name="name"
                                        className="partnerPageFifthInput"
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>

                                <label className="partnerPageFifthField">
                                    <span>
                                        Company Email<span className="partnerPageFifthRequired">*</span>
                                    </span>
                                    <input
                                        name="email"
                                        type="email"
                                        className="partnerPageFifthInput"
                                        placeholder="info@company.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>

                            </div>

                            {/* Phone Field */}
                            <label className="partnerPageFifthField">
                                <span>
                                    Phone Number<span className="partnerPageFifthRequired">*</span>
                                </span>

                                <PhoneInput
                                    defaultCountry="us"
                                    value={formData.phone}
                                    onChange={(phone) =>
                                        setFormData((prev) => ({
                                            ...prev,
                                            phone,
                                        }))
                                    }
                                    className="react-international-phone-input-container"
                                />
                            </label>

                            <ReCAPTCHA
                                className="partnerFifthFormCaptcha"
                                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                                onChange={(token) => setCaptchaToken(token)}
                                onExpired={() => setCaptchaToken(null)}
                            />

                            <button
                                type="submit"
                                className="partnerPageFifthPrimaryBtn"
                                disabled={loading || !captchaToken}
                            >
                                {loading ? "Submitting..." : "Submit"}
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
