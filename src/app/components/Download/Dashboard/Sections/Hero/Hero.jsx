import "./Hero.css";
import { downloadDashboardData as text } from "../../../../../../../public/static/downloadDashboardPageText";
import { paths } from "../../../../../../../public/static/paths";

export default function Hero() {

    return (
        <section className="downloadDashboardHeroSection">
            <div className="downloadDashboardHeroContent">
                <div className="downloadDashboardHeroHeader">
                    <p className="downloadDashboardHeroBreadcrumb">{text.breadcrumb}</p>
                    <h1 className="downloadDashboardHeroTitle">{text.title}</h1>
                </div>
                {/* --- VERSION CARD --- */}
                <div className="downloadDashboardHeroCard">
                    <div className="downloadDashboardHeroCardTitleContainer">
                        <h4 className="downloadDashboardHeroCardTitle">{text.versionsInfo.title}</h4>
                        <span className="downloadDashboardHeroBadge">CURRENT VERSION</span>
                    </div>
                    <div className="downloadDashboardHeroVersions">
                        <div>
                            <p>{text.versionsInfo.serverLabel}</p>
                            <h3>{text.versionsInfo.server}</h3>
                        </div>
                        <div>
                            <p>{text.versionsInfo.agentLabel}</p>
                            <h3>{text.versionsInfo.agent}</h3>
                        </div>
                        <div>
                            <p>{text.versionsInfo.releaseLabel}</p>
                            <h3>{text.versionsInfo.releaseDate}</h3>
                        </div>
                    </div>
                    <p className="downloadDashboardHeroButtonTitle">{text.versionsInfo.windownInstallerTitle}</p>
                    <div className="downloadDashboardHeroButtons">
                        <button className="downloadDashboardPinkBtn"><img src={paths.icons.downloadWhite}></img>{text.versionsInfo.winServerExe}</button>
                        <button className="downloadDashboardPinkBtn"><img src={paths.icons.downloadWhite}></img>{text.versionsInfo.winAgentExe}</button>
                    </div>
                    {/* Docker */}
                    <div className="downloadDashboardHeroDocker">
                        <div className="dockerItem">
                            <label>{text.versionsInfo.docker.serverLabel}</label>
                            <div className="dockerBox">
                                <p>{text.versionsInfo.docker.serverCmd}</p>
                                <span className="copyIcon">📋</span>
                            </div>
                        </div>
                        <div className="dockerItem">
                            <label>{text.versionsInfo.docker.agentLabel}</label>
                            <div className="dockerBox">
                                <p>{text.versionsInfo.docker.agentCmd}</p>
                                <span className="copyIcon">📋</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Installation Methods */}
                <h2 className="downloadDashboardHeroMethodsTitle">{text.methods.title}</h2>
                <div className="downloadDashboardHeroMethods">
                    <div className="methodCard">
                        <ul>
                            {text.methods.windows.steps.map((i) => <li key={i}>{i}</li>)}
                        </ul>
                        <button>{text.methods.windows.button}</button>
                    </div>
                    <div className="methodCard">
                        <ul>
                            {text.methods.docker.steps.map((i) => <li key={i}>{i}</li>)}
                        </ul>
                        <button>{text.methods.docker.button}</button>
                    </div>
                    <div className="methodCard">
                        <ul>
                            {text.methods.kubernetes.steps.map((i) => <li key={i}>{i}</li>)}
                        </ul>
                        <button>{text.methods.kubernetes.button}</button>
                    </div>
                </div>
                {/* Previous Versions */}
                <h2 className="downloadDashboardHeroPrevTitle">{text.previousVersions.title}</h2>
                <div className="downloadDashboardHeroVersionList">
                    {text.previousVersions.list.map((v, i) => (
                        <div key={i} className="versionRow">
                            <div className="versionBlock">
                                <p>Server Version</p>
                                <h4>{v.server}</h4>
                            </div>
                            <div className="versionBlock">
                                <p>Agent Version</p>
                                <h4>{v.agent}</h4>
                            </div>
                            <div className="versionBlock">
                                <p>Released</p>
                                <h4>{v.released}</h4>
                            </div>
                            <div className="versionBtns">
                                <button>Server</button>
                                <button>Agent</button>
                                <span className="versionOpen">↗</span>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="downloadDashboardHeroLoadMore">
                    {text.previousVersions.loadMore}
                </button>
                {/* System Requirements */}
                <div className="downloadDashboardHeroSystemCard">
                    <h2 className="systemTitle">{text.systemRequirements.title}</h2>
                    <div className="mongoBox">
                        <h3>{text.systemRequirements.mongoRequired}</h3>
                        <a href="#">{text.systemRequirements.mongoDownload}</a>
                    </div>
                    <table className="systemTable">
                        <thead>
                            <tr>
                                <th>Component</th>
                                <th>Minimum Specs</th>
                            </tr>
                        </thead>
                        <tbody>
                            {text.systemRequirements.rows.map((row, i) => (
                                <tr key={i}>
                                    <td>{row.comp}</td>
                                    <td>{row.spec}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* Support Resources */}
                <h2 className="supportTitle">{text.support.title}</h2>
                <div className="downloadDashboardHeroSupportGrid">
                    {text.support.cards.map((card, i) => (
                        <div key={i} className="supportCard">
                            <h3>{card.title}</h3>
                            <p>{card.desc}</p>
                            <button>{card.btn}</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
