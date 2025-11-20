"use client";
import './Hero.css';
import { heroSectionText } from "../../../../../../public/static/downloadPageText";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Hero() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [captchaToken, setCaptchaToken] = useState(true);

    async function handleSubmit(e) {
        e.preventDefault();

        // 🚀 1. Check captcha BEFORE API submit
        if (!captchaToken) {
            alert("Please verify that you are not a robot!");
            return;
        }

        // 🚀 2. API Request
        try {
            const res = await fetch("/api/Auth/email-signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email,
                    source: 1,
                    captchaToken, // optional backend validation
                }),
            }).then((r) => r.json());


            // 🚀 3. Handle success
            if (res?.success) {
                router.push("/download/access");
            } else {
                alert(res?.message || "Signup failed. Try again.");
            }
        } catch (err) {
            console.error("Signup error:", err);
            alert("Something went wrong. Try again.");
        }
    }

    return (
        <section className="downloadHeroSection">
            <div className="downloadHeroContent">
                <p className="downloadHeroHighlight">{heroSectionText.highlight}</p>
                <h1 className="downloadHeroTitle">
                    {heroSectionText.title} <br />
                </h1>
                <p className="downloadHeroSubtitle">
                    {heroSectionText.subTitle}<br />
                </p>

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
                            onChange={(token) => setCaptchaToken(token)}
                        />

                        <button className="downloadHeroEmailButton" type="submit">
                            {heroSectionText.downloadCContainerText.buttonText}
                        </button>
                    </form>

                    <div className="downloadHeroEmailIconTextContainer">
                        {heroSectionText.downloadCContainerText.iconText.map((text, index) => (
                            <div className="downloadHeroEmailIconContainer" key={index}>
                                <img
                                    className="downloadHeroEmailIcon"
                                    src={heroSectionText.downloadCContainerText.iconPath}
                                />
                                <div className="downloadHeroEmailIconTextItem">{text}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
