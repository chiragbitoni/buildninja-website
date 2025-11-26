import "./Hero.css";
import { paths } from "../../../../../../../public/static/paths";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { downloadAccessHeroText as staticText } from "../../../../../../../public/static/downloadAccessPageText";
import { fetchInstallers, downloadInstaller } from "@/services/auth/installers";

export default function Hero() {
    const router = useRouter();

    const [installers, setInstallers] = useState(null);
    const [loading, setLoading] = useState(true);

    const copyToClipboard = (text) => navigator.clipboard.writeText(text);

    useEffect(() => {
        router.push("/download")
        async function load() {
            try {
                const data = await fetchInstallers();
                setInstallers(data.latest);
            } catch (err) {
                console.error("Installer API failed → fallback to static text", err);
            } finally {
                setLoading(false);
            }
        }
        load();
    }, []);

    // If API fails, fallback to static text JSON
    const text = installers
        ? {
            heading: staticText.heading,
            subHeading: staticText.subHeading,

            windows: {
                title: installers.windows.title,
                serverName: installers.windows.serverName,
                serverVersion: installers.windows.serverVersion,
                agentName: installers.windows.agentName,
                agentVersion: installers.windows.agentVersion,
                serverDownload: installers.windows.serverDownloadUrl,
                agentDownload: installers.windows.agentDownloadUrl,
            },

            docker: staticText.docker,
            nextSteps: staticText.nextSteps,
            bottomLinks: staticText.bottomLinks,
        }
        : staticText;

    return (
        <section className="downloadAccessHeroSection">
            <div className="downloadAccessHeroContent">
                {/* Heading */}
                <div className="downloadAccessHeroHeader">
                    <img className="downloadAccessHeroTick" src={paths.icons.greenCircleTickOverLapWithBG} />
                    <h1 className="downloadAccessHeroTitle">{text.heading}</h1>
                    <p className="downloadAccessHeroSubtitle">{text.subHeading}</p>
                </div>

                {/* Windows Installers */}
                <div className="downloadAccessHeroCard">
                    <h2 className="downloadAccessHeroCardTitle">
                        {text.windows.title}
                        {loading && <span style={{ marginLeft: 8 }}>⏳</span>}
                    </h2>

                    {/* SERVER */}
                    <div className="downloadAccessHeroFileRow">
                        <div className="downloadAccessHeroFileRowFlex">
                            <img src={paths.icons.downloadWhite} />
                            <div>
                                <p className="downloadAccessHeroFileName">{text.windows.serverName}</p>
                                <p className="downloadAccessHeroFileVersion">{text.windows.serverVersion}</p>
                            </div>
                        </div>

                        <button
                            className="downloadAccessHeroBtn"
                            onClick={() =>
                                downloadInstaller(text.windows.serverDownload.split("/").pop())
                            }
                        >
                            Download
                        </button>
                    </div>
                    {/* AGENT */}
                    <div className="downloadAccessHeroFileRow">
                        <div className="downloadAccessHeroFileRowFlex">
                            <img src={paths.icons.downloadWhite} />
                            <div>
                                <p className="downloadAccessHeroFileName">{text.windows.agentName}</p>
                                <p className="downloadAccessHeroFileVersion">{text.windows.agentVersion}</p>
                            </div>
                        </div>
                        <button
                            className="downloadAccessHeroBtn"
                            onClick={() =>
                                downloadInstaller(text.windows.agentDownload.split("/").pop())
                            }
                        >
                            Download
                        </button>
                    </div>
                </div>

                {/* Docker Section (unchanged) */}
                <div className="downloadAccessHeroCard">
                    <h2 className="downloadAccessHeroCardTitle">{text.docker.title}</h2>

                    <div className="downloadAccessHeroDockerBlock">
                        <p className="downloadAccessHeroDockerLabel">{text.docker.serverLabel}</p>

                        <div className="downloadAccessHeroDockerCmdRow">
                            <code className="downloadAccessHeroDockerCmd">{text.docker.serverCmd}</code>
                            <button
                                className="downloadAccessHeroCopyBtn"
                                onClick={() => copyToClipboard(text.docker.serverCmd)}
                            >
                                <img src={paths.icons.copy} />
                            </button>
                        </div>
                    </div>

                    <div className="downloadAccessHeroDockerBlock">
                        <p className="downloadAccessHeroDockerLabel">{text.docker.agentLabel}</p>

                        <div className="downloadAccessHeroDockerCmdRow">
                            <code className="downloadAccessHeroDockerCmd">{text.docker.agentCmd}</code>
                            <button
                                className="downloadAccessHeroCopyBtn"
                                onClick={() => copyToClipboard(text.docker.agentCmd)}
                            >
                                <img src={paths.icons.copy} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Next Steps (static) */}
                <div className="downloadAccessHeroNextSteps">
                    <h2 className="downloadAccessHeroNextTitle">{text.nextSteps.title}</h2>

                    <div className="downloadAccessHeroStep">
                        <span className="downloadAccessHeroStepNum">1</span>
                        <div>
                            <p>{text.nextSteps.step1Title}</p>
                            <a href="#"><small>{text.nextSteps.step1Link}</small></a>
                        </div>
                    </div>

                    <div className="downloadAccessHeroStep">
                        <span className="downloadAccessHeroStepNum">2</span>
                        <div>
                            <p>{text.nextSteps.step2Title}</p>
                            <small>{text.nextSteps.step2Desc}</small>
                        </div>
                    </div>

                    <div className="downloadAccessHeroStep">
                        <span className="downloadAccessHeroStepNum">3</span>
                        <div>
                            <p>{text.nextSteps.step3Title}</p>
                            <small>{text.nextSteps.step3Desc}</small>
                        </div>
                    </div>
                </div>

                {/* Bottom Links (static) */}
                <div className="downloadAccessHeroBottom">
                    <div className="downloadAccessHeroBottomItem">
                        <img src={paths.icons.codeFile} />
                        <h3>{text.bottomLinks.guide}</h3>
                        <p>{text.bottomLinks.guideDesc}</p>
                        <button onClick={() => window.location.href = `${process.env.NEXT_PUBLIC_DOCUMENTATION_URL}/docs/category/quick-setup-guide`}>
                            {text.bottomLinks.guideButton}
                        </button>
                    </div>

                    <div className="downloadAccessHeroBottomItem">
                        <img src={paths.icons.book} />
                        <h3>{text.bottomLinks.docs}</h3>
                        <p>{text.bottomLinks.docsDesc}</p>
                        <button onClick={() => window.location.href = `${process.env.NEXT_PUBLIC_DOCUMENTATION_URL}/docs/overview`}>
                            {text.bottomLinks.docsButton}
                        </button>
                    </div>

                    <div className="downloadAccessHeroBottomItem">
                        <img src={paths.icons.database} />
                        <h3>{text.bottomLinks.support}</h3>
                        <p>{text.bottomLinks.supportDesc}</p>
                        <button onClick={() => router.push("/support")}>
                            {text.bottomLinks.supportButton}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
