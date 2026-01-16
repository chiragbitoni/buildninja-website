import "./Hero.css";
import { useEffect, useState } from "react";
import { downloadDashboardData as staticData } from "../../../../../../../public/static/downloadDashboardPageText";
import { useRouter } from "next/navigation";
import { paths } from "../../../../../../../public/static/paths";
import { fetchInstallers, downloadInstaller } from "@/services/auth/installers";
import posthog from "posthog-js";

export default function Hero() {
  const router = useRouter();

  const [data, setData] = useState(staticData);
  const [loading, setLoading] = useState(true);
  const [hasHistory, setHasHistory] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    posthog.capture("docker_command_copied", {
      type,
    });
  };
  useEffect(() => {
    const stored = localStorage.getItem("bNEmail");

    if (stored) {
      try {
        const { userId, email } = JSON.parse(stored);

        if (userId) {
          posthog.identify(userId, { email });
        }
      } catch { }
    }
  }, []);

  useEffect(() => {
    posthog.capture("dashboard_viewed", {
      page: "download_dashboard",
    });
  }, []);

  useEffect(() => {
    async function load() {
      try {
        const api = await fetchInstallers();

        posthog.capture("installer_list_loaded", {
          has_history: Boolean(api.history?.length),
        });

        setData(api);
        setHasHistory(api.history && api.history.length > 0);
      } catch (err) {
        posthog.capture("installer_list_failed", {
          error: err?.message,
        });

        console.error("Installer fetch failed, using fallback", err);
        setHasHistory(false);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  const latestWindows = data.latest?.windows;
  const latestLinux = data.latest?.linux;
  const handleDownload = (url, meta) => {
    posthog.capture("installer_download_clicked", {
      ...meta,
      source_page: "download_dashboard",
    });

    downloadInstaller(url.split("/").pop());
  };
  return (
    <section className="downloadDashboardHeroSection">
      <div className="downloadDashboardHeroContent">

        {/* Breadcrumb & Title */}
        <div className="downloadDashboardHeroHeader">
          <h1 className="downloadDashboardHeroTitle">{staticData.title}</h1>
        </div>

        {/* VERSION CARD */}
        <div className="downloadDashboardHeroCard">
          <div className="downloadDashboardHeroCardTitleContainer">
            <h4 className="downloadDashboardHeroCardTitle">Current Release</h4>
            <span className="downloadDashboardHeroBadge">CURRENT VERSION</span>
          </div>

          <p className="downloadDashboardHeroButtonTitle">{latestWindows?.title}</p>
          <div className="downloadDashboardHeroVersions">
            <div>
              <p>Server Version</p>
              <h3>{latestWindows?.serverVersion || "—"}</h3>
            </div>
            <div>
              <p>Agent Version</p>
              <h3>{latestWindows?.agentVersion || "—"}</h3>
            </div>
            <div>
              <p>Release Date</p>
              <h3>{latestWindows?.releasedOn ? new Date(latestWindows.releasedOn).toDateString() : "—"}</h3>
            </div>
          </div>

          {/* Windows Buttons */}

          <div className="downloadDashboardHeroButtons">
            <button
              className="downloadDashboardPinkBtn"
              onClick={() =>
                handleDownload(latestWindows.serverDownloadUrl, {
                  os: "windows",
                  type: "server",
                  version: latestWindows?.serverVersion,
                })
              }
            >
              <img src={paths.icons.downloadWhite} alt="Grapecity White Download Icon" />
              {latestWindows?.serverName}
            </button>

            <button
              className="downloadDashboardPinkBtn"
              onClick={() =>
                handleDownload(latestWindows.agentDownloadUrl, {
                  os: "windows",
                  type: "agent",
                  version: latestWindows?.agentVersion,
                })
              }
            >
              <img src={paths.icons.downloadWhite} alt="Grapecity White Download Icon" />
              {latestWindows?.agentName}
            </button>
          </div>

          <p className="downloadDashboardHeroButtonTitle">{latestLinux?.title}</p>
          <div className="downloadDashboardHeroVersions">
            <div>
              <p>Server Version</p>
              <h3>{latestLinux?.serverVersion || "—"}</h3>
            </div>
            <div>
              <p>Agent Version</p>
              <h3>{latestLinux?.agentVersion || "—"}</h3>
            </div>
            <div>
              <p>Release Date</p>
              <h3>{latestLinux?.releasedOn ? new Date(latestLinux.releasedOn).toDateString() : "—"}</h3>
            </div>
          </div>


          {/* Linux Buttons */}

          <div className="downloadDashboardHeroButtons">
            <button
              className="downloadDashboardPinkBtn"
              onClick={() =>
                handleDownload(latestLinux.serverDownloadUrl, {
                  os: "linux",
                  type: "server",
                  version: latestLinux?.serverVersion,
                })
              }
            >
              <img src={paths.icons.downloadWhite} alt="Grapecity White Download Icon" />
              {latestLinux?.serverName}
            </button>

            <button
              className="downloadDashboardPinkBtn"
              onClick={() =>
                handleDownload(latestLinux.agentDownloadUrl, {
                  os: "linux",
                  type: "agent",
                  version: latestLinux?.agentVersion,
                })
              }
            >
              <img src={paths.icons.downloadWhite} alt="Grapecity White Download Icon"/>
              {latestLinux?.agentName}
            </button>
          </div>

          {/* Docker */}
          <h4 className="downloadDashboardHeroDockerTitle">Docker Commands</h4>

          <div className="downloadDashboardHeroDocker">
            <div className="dockerItem">
              <label>Server Image</label>
              <div className="dockerBox">
                <p>{staticData.docker.serverCmd}</p>
                <button
                  className="copyBtn"
                  onClick={() =>
                    copyToClipboard(staticData.docker.serverCmd, "server")
                  }
                >
                  <img src={paths.icons.copy} alt="Grapecity Copy Icon"/>
                </button>
              </div>
            </div>

            <div className="dockerItem">
              <label>Agent Image</label>
              <div className="dockerBox">
                <p>{staticData.docker.agentCmd}</p>
                <button
                  className="copyBtn"
                  onClick={() =>
                    copyToClipboard(staticData.docker.agentCmd, "agent")
                  }
                >
                  <img src={paths.icons.copy} alt="Grapecity Copy Icon"/>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Previous Versions — Render ONLY if exists */}
        {hasHistory && (
          <>
            <h2 className="downloadDashboardHeroPrevTitle">Previous Versions</h2>

            <div className="downloadDashboardHeroVersionList">
              {data.history.map((v, i) => (
                <div key={i} className="versionRow">
                  <div className="versionBlock">
                    <p>Server Version</p>
                    <h4>{v.serverVersion}</h4>
                  </div>

                  <div className="versionBlock">
                    <p>Agent Version</p>
                    <h4>{v.agentVersion}</h4>
                  </div>

                  <div className="versionBlock">
                    <p>Released</p>
                    <h4>{new Date(v.releasedOn).toDateString()}</h4>
                  </div>

                  <div className="versionBtns">
                    <button
                      onClick={() =>
                        handleDownload(v.serverDownloadUrl, {
                          os: "unknown",
                          type: "server",
                          version: v.serverVersion,
                          source: "previous_versions",
                        })
                      }
                    >
                      Server
                    </button>

                    <button
                      onClick={() =>
                        handleDownload(v.agentDownloadUrl, {
                          os: "unknown",
                          type: "agent",
                          version: v.agentVersion,
                          source: "previous_versions",
                        })
                      }
                    >
                      Agent
                    </button>

                    <img className="versionOpen" src={paths.icons.navigation} alt="Grapecity Navigation Icon"/>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* System Requirements */}
        <div className="downloadDashboardHeroSystemCard">
          <h2 className="systemTitle">{staticData.systemRequirements.title}</h2>

          <div className="mongoBox">
            <h3>{staticData.systemRequirements.mongoRequired}</h3>
            <a
              href="https://www.mongodb.com/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                posthog.capture("external_dependency_clicked", {
                  name: "mongodb",
                  location: "system_requirements",
                })
              }
            >

              {staticData.systemRequirements.mongoDownload}
            </a>
          </div>

          <table className="systemTable">
            <thead>
              <tr>
                <th>Component</th>
                <th>Minimum Specs</th>
              </tr>
            </thead>

            <tbody>
              {staticData.systemRequirements.rows.map((row, i) => (
                <tr key={i}>
                  <td>{row.comp}</td>
                  <td>{row.spec}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Support */}
        <h2 className="supportTitle">{staticData.support.title}</h2>

        <div className="downloadDashboardHeroSupportGrid">
          {staticData.support.cards.map((card, i) => (
            <div key={i} className="supportCard">
              <h3>{card.title}</h3>
              <p>{card.desc}</p>

              {card.router ? (
                <button
                  onClick={() => {
                    posthog.capture("support_cta_clicked", {
                      title: card.title,
                      destination: card.router || card.link,
                      type: card.router ? "internal" : "external",
                    });

                    card.router
                      ? router.push(card.router)
                      : (window.location.href = card.link);
                  }}
                >
                  <img src={paths.icons.navigation} alt="Grapecity Navigation Icon"/>
                  {card.btn}
                </button>
              ) : (
                <button
                  onClick={() => {
                    posthog.capture("support_cta_clicked", {
                      title: card.title,
                      destination: card.link,
                      type: "external",
                    });

                    window.location.href = card.link;
                  }}
                >
                  <img src={paths.icons.navigation} alt="Grapecity Navigation Icon"/>
                  {card.btn}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
