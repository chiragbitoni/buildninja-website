import React, { useState } from "react";
import "./Hero.css";
import { supportHeroText } from "../../../../../../public/static/supportPageText";
import ReCAPTCHA from "react-google-recaptcha";

export default function SupportHero() {
    const t = supportHeroText;
    const [captchaToken, setCaptchaToken] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!captchaToken) {
            alert("Please verify that you are not a robot!");
            return;
        }
        // ✅ send captchaToken to backend for verification
        console.log("Captcha Token:", captchaToken);
    };
    return (
        <section className="supportHero">
            <div>
                <h2 className="supportHeroHeading">{t.heading}</h2>
                <p className="supportHeroSubheading">{t.subheading}</p>
            </div>
            <div className="supportHeroContainer">
                <div className="supportHeroLeft">
                    <div className="supportHeroHelp">
                        <h3>{t.getHelp}</h3>
                        <p>{t.helpText}</p>
                    </div>

                    <div className="supportHeroOptions">
                        {t.options.map((opt, index) => (
                            <div key={index} className="supportHeroOption">
                                <img className="supportHeroIcon" src={opt.icon}></img>
                                <div>
                                    <h4>{opt.title}</h4>
                                    <p>{opt.desc ? opt.desc : null}</p>
                                    {opt.mail ? (<a href={`mailto:${opt.linkText}`}>{opt.linkText}</a>) : null}
                                    {!opt.mail && opt.linkText && <a href="#">{opt.linkText}</a>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="supportHeroRight">
                    <h3>{t.form.title}</h3>
                    <form className="supportHeroForm" onSubmit={handleSubmit}>
                        <div className="supportHeroRow">
                            <label>
                                Full Name
                                <input type="text" placeholder={t.form.fields.name} />
                            </label>
                            <label>
                                Email
                                <input type="email" placeholder={t.form.fields.email} />
                            </label>
                        </div>

                        <label>
                            Subject
                            <input type="text" placeholder={t.form.fields.subject} />
                        </label>

                        <label>
                            Message
                            <textarea placeholder={t.form.fields.message}></textarea>
                        </label>
                        <ReCAPTCHA
                            className="supportHeroFormCaptcha"
                            theme="dark"
                            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                            onChange={(token) => setCaptchaToken(token)}
                        />
                        <button type="submit">{t.form.button}</button>
                    </form>

                </div>
            </div>
        </section>
    );
}
