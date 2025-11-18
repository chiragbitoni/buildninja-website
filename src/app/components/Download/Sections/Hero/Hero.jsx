"use client";
import './Hero.css';
import { heroSectionText } from "../../../../../../public/static/downloadPageText";
import { useRouter } from 'next/navigation';
import { saveToken } from '@/lib/auth';
import { useState } from 'react';

export default function Hero() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    async function handleSubmit(e) {
        e.preventDefault();

        const res = await fetch(process.env.NEXT_PUBLIC_EMAIL_SIGNUP_API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, source: 1 }),
        }).then(r => r.json());
        console.log(res)
        if (res.value?.accessToken) {
            saveToken(res.value.accessToken);
            // router.push("/download/access");
            alert("success")
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
                            name='email'
                            type="email"
                            autoComplete="email"
                            className="downloadHeroEmailInput"
                            placeholder={heroSectionText.downloadCContainerText.placeHolder}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <button className="downloadHeroEmailButton" type='submit'>
                            {heroSectionText.downloadCContainerText.buttonText}
                        </button>
                    </form>
                    <div className="downloadHeroEmailIconTextContainer">
                        {heroSectionText.downloadCContainerText.iconText.map((text, index) => (
                            <div className='downloadHeroEmailIconContainer' key={index} >
                                <img className='downloadHeroEmailIcon' src={heroSectionText.downloadCContainerText.iconPath}></img>
                                <div className="downloadHeroEmailIconTextItem">{text}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
