"use client";
import './Hero.css';
import { heroSectionText } from "../../../../../../public/static/downloadPageText";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { emailSignup } from "@/services/auth/emailSignup";
import { checkAuth } from '@/services/auth/check';
import { setAuthCookie } from '@/lib/cookieAuth';
import posthog from "posthog-js";
import Image from 'next/image';

export default function Hero() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [captchaToken, setCaptchaToken] = useState(null);

    // If already logged in → redirect to dashboard
    useEffect(() => {
        async function verify() {
            const loggedIn = await checkAuth();
            if (loggedIn) router.replace("/install/dashboard");
        }
        verify();
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();

        posthog.capture("signup_cta_clicked", {
            location: "download_hero",
            has_captcha: Boolean(captchaToken),
        });

        if (!captchaToken) {
            posthog.capture("signup_blocked_no_captcha", {
                location: "download_hero",
            });

            alert("Please verify that you are not a robot!");
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
        }
    }
    return (
        <section className="downloadHeroSection">
            <div className="downloadHeroContent">
                <p className="downloadHeroHighlight">{heroSectionText.highlight}</p>
                <h1 className="downloadHeroTitle">{heroSectionText.title}<br /></h1>
                <p className="downloadHeroSubtitle">{heroSectionText.subTitle}<br /></p>

                <div className="downloadHeroEmailContainer">
                    <form className="downloadHeroEmailForm" onSubmit={handleSubmit}>
                        <input
                            required
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="downloadHeroEmailInput"
                            placeholder={heroSectionText.downloadCContainerText.placeHolder}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <ReCAPTCHA
                            className="downloadHeroFormCaptcha"
                            theme="dark"
                            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                            onChange={(token) => {
                                setCaptchaToken(token);
                                posthog.capture("signup_captcha_verified", {
                                    location: "download_hero",
                                });
                            }}
                        />
                        <button className="downloadHeroEmailButton" type="submit">
                            {heroSectionText.downloadCContainerText.buttonText}
                        </button>
                    </form>

                    <div className="downloadHeroEmailIconTextContainer">
                        {heroSectionText.downloadCContainerText.iconText.map((text, index) => (
                            <div className="downloadHeroEmailIconContainer" key={index}>
                                <Image width={0} height={0} className="downloadHeroEmailIcon"
                                    src={heroSectionText.downloadCContainerText.iconPath} alt='Grapecity Download Icon' />
                                <div className="downloadHeroEmailIconTextItem">{text}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
