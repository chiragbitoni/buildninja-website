"use client"
import React, { useState } from "react";
import "./Hero.css";
import { supportHeroText } from "../../../../../../public/static/supportPageText";
import ReCAPTCHA from "react-google-recaptcha";
import { sendSupportEmail } from "@/services/email/sendEmail";
export default function SupportHero() {
    const t = supportHeroText;

    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [captchaToken, setCaptchaToken] = useState(null);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!captchaToken) {
            alert("Please verify you are not a robot!");
            return;
        }
        setLoading(true);
        const { success, message } = await sendSupportEmail(form);
        setLoading(false);

        if (success) {
            alert("Your message was sent successfully!");
            setForm({ name: "", email: "", subject: "", message: "" });
            setCaptchaToken(null);
        } else {
            alert(message || "Failed to send message. Try again later.");
        }
    };


    return (
        <section className="supportHero">
            <div>
                <h2 className="supportHeroHeading">{t.heading}</h2>
                <p className="supportHeroSubheading">{t.subheading}</p>
            </div>

            <div className="supportHeroContainer">

                {/* Left Section */}
                <div className="supportHeroLeft">
                    <div className="supportHeroHelp">
                        <h3>{t.getHelp}</h3>
                        <p>{t.helpText}</p>
                    </div>

                    <div className="supportHeroOptions">
                        {t.options.map((opt, index) => (
                            <div key={index} className="supportHeroOption">
                                <img className="supportHeroIcon" src={opt.icon} alt={opt.alt}/>
                                <div>
                                    <h4>{opt.title}</h4>
                                    <p>{opt.desc || null}</p>

                                    {opt.mail && <a href={`mailto:${opt.linkText}`}>{opt.linkText}</a>}
                                    {!opt.mail && opt.linkText && <a href={opt.link}>{opt.linkText}</a>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Section */}
                <div className="supportHeroRight">
                    <h3>{t.form.title}</h3>

                    <form className="supportHeroForm" onSubmit={handleSubmit}>
                        <div className="supportHeroRow">
                            <label>
                                Full Name
                                <input
                                    name="name"
                                    type="text"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder={t.form.fields.name}
                                    required
                                />
                            </label>

                            <label>
                                Email
                                <input
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder={t.form.fields.email}
                                    required
                                />
                            </label>
                        </div>

                        <label>
                            Subject
                            <input
                                name="subject"
                                type="text"
                                value={form.subject}
                                onChange={handleChange}
                                placeholder={t.form.fields.subject}
                                required
                            />
                        </label>

                        <label>
                            Message
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder={t.form.fields.message}
                                required
                            ></textarea>
                        </label>

                        <ReCAPTCHA
                            className="supportHeroFormCaptcha"
                            theme="dark"
                            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                            onChange={(token) => setCaptchaToken(token)}
                        />

                        <button type="submit" disabled={loading}>
                            {loading ? "Sending..." : t.form.button}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
