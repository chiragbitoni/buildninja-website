"use client";
import Image from "next/image";
import styles from "./FooterAskAI.module.css";
import { env } from "@/lib/config/env";

const ChatGPTSvg = () => (
    <svg viewBox="0 0 320 320" width="28" height="28" fill="currentColor" aria-hidden="true" focusable="false">
        <path d="m297.06 130.97c7.26-21.79 4.76-45.66-6.85-65.48-17.46-30.4-52.56-46.04-86.84-38.68-15.25-17.18-37.16-26.95-60.13-26.81-35.04-.08-66.13 22.48-76.91 55.82-22.51 4.61-41.94 18.7-53.31 38.67-17.59 30.32-13.58 68.54 9.92 94.54-7.26 21.79-4.76 45.66 6.85 65.48 17.46 30.4 52.56 46.04 86.84 38.68 15.24 17.18 37.16 26.95 60.13 26.8 35.06.09 66.16-22.49 76.94-55.86 22.51-4.61 41.94-18.7 53.31-38.67 17.57-30.32 13.55-68.51-9.94-94.51zm-120.28 168.11c-14.03.02-27.62-4.89-38.39-13.88.49-.26 1.34-.73 1.89-1.07l63.72-36.8c3.26-1.85 5.26-5.32 5.24-9.07v-89.83l26.93 15.55c.29.14.48.42.52.74v74.39c-.04 33.08-26.83 59.9-59.91 59.97zm-128.84-55.03c-7.03-12.14-9.56-26.37-7.15-40.18.47.28 1.3.79 1.89 1.13l63.72 36.8c3.23 1.89 7.23 1.89 10.47 0l77.79-44.92v31.1c.02.32-.13.63-.38.83l-64.41 37.19c-28.69 16.52-65.33 6.7-81.92-21.95zm-16.77-139.09c7-12.16 18.05-21.46 31.21-26.29 0 .55-.03 1.52-.03 2.2v73.61c-.02 3.74 1.98 7.21 5.23 9.06l77.79 44.91-26.93 15.55c-.27.18-.61.21-.91.08l-64.42-37.22c-28.63-16.58-38.45-53.21-21.95-81.89zm221.26 51.49-77.79-44.92 26.93-15.54c.27-.18.61-.21.91-.08l64.42 37.19c28.68 16.57 38.51 53.26 21.94 81.94-7.01 12.14-18.05 21.44-31.2 26.28v-75.81c.03-3.74-1.96-7.2-5.2-9.06zm26.8-40.34c-.47-.29-1.3-.79-1.89-1.13l-63.72-36.8c-3.23-1.89-7.23-1.89-10.47 0l-77.79 44.92v-31.1c-.02-.32.13-.63.38-.83l64.41-37.16c28.69-16.55 65.37-6.7 81.91 22 6.99 12.12 9.52 26.31 7.15 40.1zm-168.51 55.43-26.94-15.55c-.29-.14-.48-.42-.52-.74v-74.39c.02-33.12 26.89-59.96 60.01-59.94 14.01 0 27.57 4.92 38.34 13.88-.49.26-1.33.73-1.89 1.07l-63.72 36.8c-3.26 1.85-5.26 5.31-5.24 9.06l-.04 89.79zm14.63-31.54 34.65-20.01 34.65 20v40.01l-34.65 20-34.65-20z" />
    </svg>
);

const PerplexitySvg = () => (
    <svg viewBox="0 0 150 150" width="28" height="28" fill="none" aria-hidden="true" focusable="false">
        <g transform="translate(-10.674,-10.674)">
            <path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M85.6758 22.7223C87.5821 22.7223 89.1279 24.2681 89.1279 26.1744V57.5016L122.896 23.734C123.884 22.747 125.369 22.451 126.658 22.985C127.948 23.5193 128.789 24.7784 128.789 26.1744V62.275H140.215C142.121 62.2751 143.666 63.821 143.666 65.7272V115.415C143.666 117.321 142.121 118.867 140.215 118.867H128.788V145.156C128.788 146.552 127.947 147.81 126.657 148.344C125.367 148.879 123.883 148.583 122.896 147.596L89.1279 113.829V145.174C89.1277 147.081 87.582 148.626 85.6758 148.626C83.7697 148.626 82.2239 147.081 82.2236 145.174V113.83L48.457 147.596C47.4699 148.583 45.9851 148.879 44.6953 148.344C43.4058 147.81 42.5646 146.552 42.5645 145.156V118.867H31.1348C29.2285 118.867 27.6826 117.321 27.6826 115.415V65.7272C27.6828 63.8211 29.2286 62.2752 31.1348 62.275H42.5645V26.1744C42.5645 24.7784 43.4056 23.5193 44.6953 22.985C45.9851 22.4508 47.4699 22.7469 48.457 23.734L82.2236 57.4996V26.1744C82.2237 24.2682 83.7695 22.7224 85.6758 22.7223ZM49.4688 102.101V136.822L82.2236 104.067V73.442L49.4688 102.101ZM89.1279 104.065L121.885 136.822V115.45C121.885 115.438 121.884 115.426 121.884 115.415C121.884 115.403 121.885 115.391 121.885 115.379V102.101L89.1279 73.4401V104.065ZM127.609 97.9371C128.359 98.5926 128.788 99.5404 128.788 100.536V111.964H136.763V69.1793H94.7402L127.609 97.9371ZM34.5869 111.964H42.5645V100.536C42.5645 99.5404 42.995 98.5926 43.7441 97.9371L76.6123 69.1793H34.5869V111.964ZM49.4688 62.275H77.2354L49.4688 34.5074V62.275ZM94.1191 62.275H121.886V34.5074L94.1191 62.275Z" />
        </g>
    </svg>
);

const GrokSvg = () => (
    <svg viewBox="0 0 1024 1024" width="28" height="28" fill="none" aria-hidden="true" focusable="false">
        <path fill="currentColor" d="M395.479 633.828L735.91 381.105C752.599 368.715 776.454 373.548 784.406 392.792C826.26 494.285 807.561 616.253 724.288 699.996C641.016 783.739 525.151 802.104 419.247 760.277L303.556 814.143C469.49 928.202 670.987 899.995 796.901 773.282C896.776 672.843 927.708 535.937 898.785 412.476L899.047 412.739C857.105 231.37 909.358 158.874 1016.4 10.6326C1018.93 7.11771 1021.47 3.60279 1024 0L883.144 141.651V141.212L395.392 633.916" />
        <path fill="currentColor" d="M325.226 695.251C206.128 580.84 226.662 403.776 328.285 301.668C403.431 226.097 526.549 195.254 634.026 240.596L749.454 186.994C728.657 171.88 702.007 155.623 671.424 144.2C533.19 86.9942 367.693 115.465 255.323 228.382C147.234 337.081 113.244 504.215 171.613 646.833C215.216 753.423 143.739 828.818 71.7385 904.916C46.2237 931.893 20.6216 958.87 0 987.429L325.139 695.339" />
    </svg>
);

const aiTools = [
    { name: "ChatGPT", baseUrl: "https://chatgpt.com/", qSep: "?", icon: <ChatGPTSvg />, themeAware: true },
    { name: "Claude", baseUrl: "https://claude.ai/new", qSep: "?", src: "/resources/Footer/AI/claude.svg" },
    { name: "Perplexity", baseUrl: "https://www.perplexity.ai/", qSep: "?", icon: <PerplexitySvg />, themeAware: true },
    { name: "Gemini", baseUrl: "https://www.google.com/search?udm=50&aep=11", qSep: "&", src: "/resources/Footer/AI/gemini.svg" },
    { name: "Grok", baseUrl: "https://grok.com/", qSep: "?", icon: <GrokSvg />, themeAware: true },
];

const buildPrompt = (siteUrl) =>
    "I'm a leader evaluating BuildNinja. I want to actually understand whether it's a fit for me. First, fetch " +
    siteUrl +
    " and give me a plain-English read on:\n\n" +
    "What problem they're really solving (and for whom)\n" +
    "What outcomes their customers point to — and which claims I should pressure-test on the demo\n\n" +
    "Then ask me 3 sharp questions about my situation — team size, current pain points, what \"success\" looks like, budget reality, internal stakeholders, timeline — so you can tell me whether BuildNinja is likely a strong fit, a stretch, or a mismatch. Be honest if it's the last one.\n\n" +
    "End with the 3 questions I should ask their sales rep that they probably don't want me to ask.";

export default function FooterAskAI() {
    const prompt = buildPrompt(env.BUILDNINJA_URL);

    return (
        <div className={styles.askAIRow}>
            <p className={styles.askAITitle}>Ask AI About BuildNinja</p>
            <div className={styles.askAILogos}>
                {aiTools.map((tool) => (
                    <a
                        key={tool.name}
                        href={`${tool.baseUrl}${tool.qSep}q=${encodeURIComponent(prompt)}`}
                        target="_blank"
                        rel="noreferrer noopener"
                        className={styles.askAILink}
                        title={`Ask ${tool.name} about BuildNinja`}
                        aria-label={`Ask ${tool.name} about BuildNinja`}
                    >
                        {tool.icon ? (
                            <span className={`${styles.askAILogoContainer}${tool.themeAware ? ` ${styles.askAILogoThemeAware}` : ""}`}>
                                {tool.icon}
                            </span>
                        ) : (
                            <Image width={32} height={32} src={tool.src} alt={tool.name} className={styles.askAILogo} />
                        )}
                    </a>
                ))}
            </div>
        </div>
    );
}