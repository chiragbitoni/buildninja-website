import "./Hero.css";
import { useEffect, useState } from "react";
import { downloadDashboardData as staticData } from "../../../../../../../public/static/downloadDashboardPageText";
import { useRouter } from "next/navigation";
import { paths } from "../../../../../../../public/static/paths";
import { fetchInstallers, downloadInstaller } from "@/services/auth/installers";
import posthog from "posthog-js";
import Image from "next/image";

export default function Hero() {
  const router = useRouter();

  const [data, setData] = useState({ latest: {}, history: [] });
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
  const latestMac = data.latest?.mac;
  const handleDownload = (url, meta) => {
    if (!url) return;

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
          {latestWindows && (
            <div>
              <p className="downloadDashboardHeroButtonTitle">
                {latestWindows?.title}
              </p>

              <div className="downloadDashboardHeroVersions">
                <div>
                  <p>Version</p>
                  <h3>{latestWindows?.version || "—"}</h3>
                </div>

                <div>
                  <p>Release Date</p>
                  <h3>
                    {latestWindows?.releasedOn
                      ? new Date(latestWindows.releasedOn).toDateString()
                      : "—"}
                  </h3>
                </div>
              </div>

              <div className="downloadDashboardHeroButtons">
                <button
                  className="downloadDashboardPinkBtn"
                  onClick={() =>
                    handleDownload(latestWindows.downloadUrl, {
                      os: "windows",
                      type: "installer",
                      version: latestWindows?.version,
                    })
                  }
                >
                  <Image
                    width={0}
                    height={0}
                    className="dashboardHeroDownloadIcon"
                    src={paths.icons.downloadWhite}
                    alt="Download Icon"
                  />
                  {latestWindows?.name || "Download for Windows"}
                </button>
              </div>
            </div>
          )}
          {latestLinux && (
            <div>

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
                  <Image width={0} height={0} className="dashboardHeroDownloadIcon" src={paths.icons.downloadWhite} alt="Grapecity White Download Icon" />
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
                  <Image width={0} height={0} className="dashboardHeroDownloadIcon" src={paths.icons.downloadWhite} alt="Grapecity White Download Icon" />
                  {latestLinux?.agentName}
                </button>
              </div>
            </div>
          )}

          {/* Mac Section */}
          {latestMac && (
            <div>

              <p className="downloadDashboardHeroButtonTitle">
                {latestMac?.title}
              </p>

              <div className="downloadDashboardHeroVersions">
                <div>
                  <p>Server Version</p>
                  <h3>{latestMac?.serverVersion || "—"}</h3>
                </div>

                <div>
                  <p>Agent Version</p>
                  <h3>{latestMac?.agentVersion || "—"}</h3>
                </div>

                <div>
                  <p>Release Date</p>
                  <h3>
                    {latestMac?.releasedOn
                      ? new Date(latestMac.releasedOn).toDateString()
                      : "—"}
                  </h3>
                </div>
              </div>

              <div className="downloadDashboardHeroButtons">
                <button
                  className="downloadDashboardPinkBtn"
                  onClick={() =>
                    handleDownload(latestMac.serverDownloadUrl, {
                      os: "mac",
                      type: "server",
                      version: latestMac?.serverVersion,
                    })
                  }
                >
                  <Image
                    width={0}
                    height={0}
                    className="dashboardHeroDownloadIcon"
                    src={paths.icons.downloadWhite}
                    alt="Download Icon"
                  />
                  {latestMac?.serverName}
                </button>

                <button
                  className="downloadDashboardPinkBtn"
                  onClick={() =>
                    handleDownload(latestMac.agentDownloadUrl, {
                      os: "mac",
                      type: "agent",
                      version: latestMac?.agentVersion,
                    })
                  }
                >
                  <Image
                    width={0}
                    height={0}
                    className="dashboardHeroDownloadIcon"
                    src={paths.icons.downloadWhite}
                    alt="Download Icon"
                  />
                  {latestMac?.agentName}
                </button>
              </div>

            </div>
          )}
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
                  <Image width={0} height={0} className="dashboardHeroDownloadIcon" src={paths.icons.copy} alt="Grapecity Copy Icon" />
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
                  <Image width={0} height={0} className="dashboardHeroDownloadIcon" src={paths.icons.copy} alt="Grapecity Copy Icon" />
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

                    <Image width={0} height={0} className="dashboardHeroDownloadIcon" src={paths.icons.navigation} alt="Grapecity Navigation Icon" />
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
                  <Image width={0} height={0} className="dashboardHeroDownloadIcon" src={paths.icons.navigation} alt="Grapecity Navigation Icon" />
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
                  <Image width={0} height={0} className="dashboardHeroDownloadIcon" src={paths.icons.navigation} alt="Grapecity Navigation Icon" />
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
