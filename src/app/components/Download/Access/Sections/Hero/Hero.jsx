import "./Hero.css";
import { downloadAccessHeroText } from "../../../../../../../public/static/downloadAccessPageText";
import { paths } from "../../../../../../../public/static/paths";
import { useRouter } from "next/navigation";

export default function Hero() {

    const text = downloadAccessHeroText;
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
    };
    const router = useRouter();
    const handleButtonClick = (e) => {
        router.push(e);
    }

    return (
        <section className="downloadAccessHeroSection">
            <div className="downloadAccessHeroContent">
                {/* Heading */}
                <div className="downloadAccessHeroHeader">
                    <img className="downloadAccessHeroTick" src={paths.icons.greenCircleTickOverLapWithBG}></img>
                    <h1 className="downloadAccessHeroTitle">{text.heading}</h1>
                    <p className="downloadAccessHeroSubtitle">{text.subHeading}</p>
                </div>

                {/* Windows Installers */}
                <div className="downloadAccessHeroCard">
                    <h2 className="downloadAccessHeroCardTitle">{text.windows.title}</h2>

                    <div className="downloadAccessHeroFileRow">
                        <div className="downloadAccessHeroFileRowFlex">
                            <img src={paths.icons.downloadWhite}></img>
                            <div>
                                <p className="downloadAccessHeroFileName">{text.windows.serverName}</p>
                                <p className="downloadAccessHeroFileVersion">{text.windows.serverVersion}</p>
                            </div>
                        </div>
                        <button className="downloadAccessHeroBtn">{text.windows.downloadBtn}</button>
                    </div>

                    <div className="downloadAccessHeroFileRow">
                        <div className="downloadAccessHeroFileRowFlex">
                            <img src={paths.icons.downloadWhite}></img>
                            <div>
                                <p className="downloadAccessHeroFileName">{text.windows.agentName}</p>
                                <p className="downloadAccessHeroFileVersion">{text.windows.agentVersion}</p>
                            </div>
                        </div>
                        <button className="downloadAccessHeroBtn">{text.windows.downloadBtn}</button>
                    </div>
                </div>

                {/* Docker Section */}
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
                                <img src={paths.icons.copy}></img>

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
                                <img src={paths.icons.copy}></img>

                            </button>
                        </div>
                    </div>

                </div>

                {/* Next Steps */}
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

                {/* Bottom Links */}
                <div className="downloadAccessHeroBottom">
                    <div className="downloadAccessHeroBottomItem">
                        <img src={paths.icons.codeFile}></img>
                        <h3>{text.bottomLinks.guide}</h3>
                        <p>{text.bottomLinks.guideDesc}</p>
                        <button onClick={() => { window.location.href = `${process.env.NEXT_PUBLIC_DOCUMENTATION_URL}/docs/category/quick-setup-guide`; }}>{text.bottomLinks.guideButton}</button>
                    </div>

                    <div className="downloadAccessHeroBottomItem">
                        <img src={paths.icons.book}></img>
                        <h3>{text.bottomLinks.docs}</h3>
                        <p>{text.bottomLinks.docsDesc}</p>
                        <button onClick={() => { window.location.href = `${process.env.NEXT_PUBLIC_DOCUMENTATION_URL}/docs/overview`; }}>{text.bottomLinks.guideButton}</button>
                    </div>

                    <div className="downloadAccessHeroBottomItem">
                        <img src={paths.icons.database}></img>
                        <h3>{text.bottomLinks.support}</h3>
                        <p>{text.bottomLinks.supportDesc}</p>
                        <button onClick={() => handleButtonClick("/support")}>{text.bottomLinks.supportButton}</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
