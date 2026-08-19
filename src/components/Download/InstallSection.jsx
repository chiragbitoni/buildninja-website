"use client";
import dashboardStyles from "./Dashboard/InstallDashboard.module.css";
import { downloadDashboardData as dashboardData } from "../../../public/static/downloadDashboardPageText";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { openVideo } from "@/redux/slice/videoPopupSlice";
import { emailSignup } from "@/services/auth/emailSignup";
import { fetchInstallers, downloadInstaller } from "@/services/auth/installers";
import { getCachedEmailUser, setCachedEmailUser } from "@/lib/emailCache";
import posthog from "posthog-js";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faCheckCircle, faCopy, faKey, faPlayCircle, faCalendarAlt, faHistory, faMicrochip, faInfoCircle, faLifeRing, faExternalLinkAlt, faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { faWindows, faLinux, faApple, faDocker } from "@fortawesome/free-brands-svg-icons";
import EmailDialog from "./EmailDialog";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function InstallSection({ initialInstallers = null }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const hasInitialData = Boolean(initialInstallers?.latest);
  const [data, setData] = useState(
    hasInitialData
      ? { latest: initialInstallers.latest, history: initialInstallers.history || [] }
      : { latest: {}, history: [] }
  );
  const [loading, setLoading] = useState(!hasInitialData);
  const [hasHistory, setHasHistory] = useState(
    hasInitialData ? Boolean(initialInstallers.history?.length) : false
  );
  const [downloadingUrl, setDownloadingUrl] = useState(null);
  const [hasDownloaded, setHasDownloaded] = useState(false);
  const [copiedType, setCopiedType] = useState(null);
  const [plans, setPlans] = useState([]);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogLoading, setDialogLoading] = useState(false);
  const [dialogError, setDialogError] = useState(null);
  const pendingDownloadRef = useRef(null);

  useEffect(() => {
    // Installer list is baked in at build time - only fetch at runtime when
    // the build-time fetch failed or was unavailable.
    if (hasInitialData) {
      posthog.capture("installer_list_loaded", {
        has_history: Boolean(initialInstallers.history?.length),
      });
      return;
    }
    async function load() {
      try {
        const api = await fetchInstallers();
        posthog.capture("installer_list_loaded", {
          has_history: Boolean(api.history?.length),
        });
        setData(api);
        setHasHistory(api.history && api.history.length > 0);
      } catch (err) {
        posthog.capture("installer_list_failed", { error: err?.message });
        console.error("Installer fetch failed", err);
        setHasHistory(false);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [hasInitialData, initialInstallers]);

  useEffect(() => {
    // Load plans for the license key link
    const storedPlans = localStorage.getItem("plans");
    if (storedPlans) {
      try {
        setPlans(JSON.parse(storedPlans));
        return;
      } catch {
        /* fall through to fetch */
      }
    }
    import("@/services/plans/plans").then(({ fetchPlansFromAPI }) => {
      fetchPlansFromAPI().then((fetched) => {
        if (fetched) {
          setPlans(fetched);
          localStorage.setItem("plans", JSON.stringify(fetched));
        }
      });
    });
  }, []);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    posthog.capture("docker_command_copied", { type });
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  async function performDownload(fileName, meta) {
    if (!fileName) return;
    setDownloadingUrl(fileName);
    try {
      const cached = getCachedEmailUser();
      posthog.capture("installer_download_clicked", {
        ...meta,
        source_page: "install",
        via_cache: Boolean(cached),
      });
      await downloadInstaller(fileName, cached || {});
      setHasDownloaded(true);
      setTimeout(() => {
        const licenseEl = document.getElementById('license-section');
        if (licenseEl) licenseEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 500);
    } catch (err) {
      console.error("Download failed", err);
    } finally {
      setDownloadingUrl(null);
    }
  }

  function handleDownloadClick(fileName, meta) {
    const cached = getCachedEmailUser();
    if (cached) {
      performDownload(fileName, meta);
      return;
    }

    pendingDownloadRef.current = { fileName, meta };
    setDialogError(null);
    setDialogOpen(true);
    posthog.capture("email_dialog_opened", { location: "install_page" });
  }

  async function handleEmailSubmit(email) {
    setDialogLoading(true);
    setDialogError(null);
    try {
      const res = await emailSignup(email);
      const userId = res?.value?.user?.userId;
      const userEmail = res?.value?.user?.email || email;

      setCachedEmailUser({ userId, email: userEmail });
      if (userId) {
        posthog.identify(userId, { email: userEmail });
      }
      posthog.capture("email_dialog_submitted", { registered: Boolean(userId) });

      setDialogOpen(false);
      const pending = pendingDownloadRef.current;
      pendingDownloadRef.current = null;
      if (pending) {
        await performDownload(pending.fileName, pending.meta);
      }
    } catch (err) {
      setDialogError("Something went wrong. Please try again.");
      posthog.capture("email_dialog_error", { error: err?.message });
    } finally {
      setDialogLoading(false);
    }
  }

  const latestWindows = data.latest?.windows;
  const latestLinux = data.latest?.linux;
  const latestMac = data.latest?.mac;
  const releaseDate = latestWindows?.releasedOn || latestLinux?.releasedOn || latestMac?.releasedOn;

  const getGrowthPlanId = () => {
    const growth = (Array.isArray(plans) ? plans : []).find(
      (p) =>
        p.isActive === true &&
        String(p.name || "").trim().toLowerCase().startsWith("growth")
    );
    return growth?.id || "";
  };

  const handleGetFreeKey = async () => {
    let planId = getGrowthPlanId();

    if (!planId) {
      // Plans not loaded yet - fetch on demand so the link never breaks
      const { fetchPlansFromAPI } = await import("@/services/plans/plans");
      const fetched = await fetchPlansFromAPI();
      if (Array.isArray(fetched)) {
        setPlans(fetched);
        planId = (fetched.find(
          (p) =>
            p.isActive === true &&
            String(p.name || "").trim().toLowerCase().startsWith("growth")
        ) || {}).id || "";
      }
    }

    window.location.href = `${process.env.NEXT_PUBLIC_MYACCOUNT_URL}/order?planId=${planId}`;
  };

  return (
    <>
      {/* ── Installer List (old dashboard layout, no auth) ── */}
      <div id="installers" className={dashboardStyles.dashboard}>
        <div className={dashboardStyles.grid} />

        <motion.div
          className={dashboardStyles.container}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <header className={dashboardStyles.header}>
            <span className={dashboardStyles.breadcrumb}>{dashboardData.breadcrumb}</span>
            <h1 className={dashboardStyles.title}>{dashboardData.title}</h1>
          </header>

          {/* ── Main Current Release Card ── */}
          <motion.div className={dashboardStyles.mainCard} variants={itemVariants}>
            <div className={dashboardStyles.cardHeader}>
              <div className={dashboardStyles.releaseStatus}>
                <h2 className={dashboardStyles.sectionTitle} style={{ marginBottom: 0 }}>Current Stable Release</h2>
                <span className={dashboardStyles.badge}>Live</span>
              </div>
              <div className={dashboardStyles.versionItem}>
                <FontAwesomeIcon icon={faCalendarAlt} style={{ marginRight: 8, opacity: 0.6 }} />
                Recent Release: <b>{releaseDate ? new Date(releaseDate).toLocaleDateString("en-GB") : "-"}</b>
              </div>
            </div>

            {loading ? (
              <p style={{ textAlign: "center", color: "var(--color-text-secondary)", padding: "40px 0" }}>Loading installers...</p>
            ) : (
              <div className={dashboardStyles.versionGrid}>
                {/* Windows */}
                {latestWindows && (
                  <div className={dashboardStyles.osSection}>
                    <h3 className={dashboardStyles.osTitle}>
                      <FontAwesomeIcon icon={faWindows} /> Windows Installer
                    </h3>
                    <div className={dashboardStyles.versionInfo}>
                      <span className={dashboardStyles.versionItem}>Version: <b>{latestWindows.version}</b></span>
                    </div>
                    <div className={dashboardStyles.actions}>
                      <button
                        className={dashboardStyles.downloadBtn}
                        onClick={() => handleDownloadClick(latestWindows.downloadUrl.split("/").pop(), { os: "windows", version: latestWindows.version })}
                        disabled={downloadingUrl === latestWindows.downloadUrl.split("/").pop()}
                      >
                        {downloadingUrl === latestWindows.downloadUrl.split("/").pop() ? (
                          <><FontAwesomeIcon icon={faCircleNotch} spin /> Downloading...</>
                        ) : (
                          <><FontAwesomeIcon icon={faDownload} /> Download .exe</>
                        )}
                      </button>
                      <button
                        className={dashboardStyles.guideBtn}
                        onClick={() => dispatch(openVideo({
                          videoId: "zOW9BCYQkxk",
                          title: "Windows Installation Guide",
                          ctaText: "Official Setup Documentation",
                          link: "/docs/getting-started/quick-setup-guide/configure-server-and-agent-on-windows"
                        }))}
                      >
                        <FontAwesomeIcon icon={faPlayCircle} /> Video Guide
                      </button>
                    </div>
                  </div>
                )}

                {/* Linux */}
                {latestLinux && (
                  <div className={dashboardStyles.osSection}>
                    <h3 className={dashboardStyles.osTitle}>
                      <FontAwesomeIcon icon={faLinux} /> Linux Distributables
                    </h3>
                    <div className={dashboardStyles.versionInfo}>
                      <span className={dashboardStyles.versionItem}>Server: <b>{latestLinux.serverVersion}</b></span>
                      <span className={dashboardStyles.versionItem}>Agent: <b>{latestLinux.agentVersion}</b></span>
                    </div>
                    <div className={dashboardStyles.actions}>
                      <button
                        className={dashboardStyles.downloadBtn}
                        onClick={() => handleDownloadClick(latestLinux.serverDownloadUrl.split("/").pop(), { os: "linux", type: "server", version: latestLinux.serverVersion })}
                        disabled={downloadingUrl === latestLinux.serverDownloadUrl.split("/").pop()}
                      >
                        {downloadingUrl === latestLinux.serverDownloadUrl.split("/").pop() ? (
                          <><FontAwesomeIcon icon={faCircleNotch} spin /> Downloading...</>
                        ) : (
                          <><FontAwesomeIcon icon={faDownload} /> Server</>
                        )}
                      </button>
                      <button
                        className={dashboardStyles.downloadBtn}
                        onClick={() => handleDownloadClick(latestLinux.agentDownloadUrl.split("/").pop(), { os: "linux", type: "agent", version: latestLinux.agentVersion })}
                        disabled={downloadingUrl === latestLinux.agentDownloadUrl.split("/").pop()}
                      >
                        {downloadingUrl === latestLinux.agentDownloadUrl.split("/").pop() ? (
                          <><FontAwesomeIcon icon={faCircleNotch} spin /> Downloading...</>
                        ) : (
                          <><FontAwesomeIcon icon={faDownload} /> Agent</>
                        )}
                      </button>
                    </div>
                  </div>
                )}

                {/* Mac */}
                {latestMac && (
                  <div className={dashboardStyles.osSection}>
                    <h3 className={dashboardStyles.osTitle}>
                      <FontAwesomeIcon icon={faApple} /> macOS Distributables
                    </h3>
                    <div className={dashboardStyles.versionInfo}>
                      <span className={dashboardStyles.versionItem}>Server: <b>{latestMac.serverVersion}</b></span>
                      <span className={dashboardStyles.versionItem}>Agent: <b>{latestMac.agentVersion}</b></span>
                    </div>
                    <div className={dashboardStyles.actions}>
                      <button
                        className={dashboardStyles.downloadBtn}
                        onClick={() => handleDownloadClick(latestMac.serverDownloadUrl.split("/").pop(), { os: "mac", type: "server", version: latestMac.serverVersion })}
                        disabled={downloadingUrl === latestMac.serverDownloadUrl.split("/").pop()}
                      >
                        {downloadingUrl === latestMac.serverDownloadUrl.split("/").pop() ? (
                          <><FontAwesomeIcon icon={faCircleNotch} spin /> Downloading...</>
                        ) : (
                          <><FontAwesomeIcon icon={faDownload} /> Server</>
                        )}
                      </button>
                      <button
                        className={dashboardStyles.downloadBtn}
                        onClick={() => handleDownloadClick(latestMac.agentDownloadUrl.split("/").pop(), { os: "mac", type: "agent", version: latestMac.agentVersion })}
                        disabled={downloadingUrl === latestMac.agentDownloadUrl.split("/").pop()}
                      >
                        {downloadingUrl === latestMac.agentDownloadUrl.split("/").pop() ? (
                          <><FontAwesomeIcon icon={faCircleNotch} spin /> Downloading...</>
                        ) : (
                          <><FontAwesomeIcon icon={faDownload} /> Agent</>
                        )}
                      </button>
                    </div>
                  </div>
                )}

                {!latestWindows && !latestLinux && !latestMac && (
                  <p style={{ textAlign: "center", color: "var(--color-text-secondary)" }}>
                    Installers are temporarily unavailable. Please try again later.
                  </p>
                )}
              </div>
            )}

            {/* Docker Commands Sub-section */}
            <div className={dashboardStyles.dockerSection}>
              <h4 className={dashboardStyles.sectionTitle} style={{ fontSize: 16 }}>
                <FontAwesomeIcon icon={faDocker} style={{ marginRight: 8 }} /> {dashboardData.docker.title}
              </h4>
              <div className={dashboardStyles.dockerGrid}>
                <div className={dashboardStyles.dockerBox}>
                  <div className={dashboardStyles.dockerCode}>
                    <span style={{ opacity: 0.5, marginRight: 8 }}>$</span>
                    {dashboardData.docker.serverCmd}
                  </div>
                  <FontAwesomeIcon
                    icon={copiedType === "server" ? faCheckCircle : faCopy}
                    className={`${dashboardStyles.copyIcon} ${copiedType === "server" ? dashboardStyles.copied : ""}`}
                    onClick={() => copyToClipboard(dashboardData.docker.serverCmd, "server")}
                  />
                </div>
                <div className={dashboardStyles.dockerBox}>
                  <div className={dashboardStyles.dockerCode}>
                    <span style={{ opacity: 0.5, marginRight: 8 }}>$</span>
                    {dashboardData.docker.agentCmd}
                  </div>
                  <FontAwesomeIcon
                    icon={copiedType === "agent" ? faCheckCircle : faCopy}
                    className={`${dashboardStyles.copyIcon} ${copiedType === "agent" ? dashboardStyles.copied : ""}`}
                    onClick={() => copyToClipboard(dashboardData.docker.agentCmd, "agent")}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── History Sub-section ── */}
          {hasHistory && (
            <motion.div className={dashboardStyles.historySection} variants={itemVariants}>
              <h2 className={dashboardStyles.sectionTitle}>
                <FontAwesomeIcon icon={faHistory} style={{ marginRight: 12, opacity: 0.7 }} />
                Previous Versions
              </h2>
              <div className={dashboardStyles.historyGrid}>
                {data.history.map((v, i) => (
                  <div key={i} className={dashboardStyles.historyRow}>
                    <div>
                      <div className={dashboardStyles.historyLabel}>Server</div>
                      <div className={dashboardStyles.historyValue}>{v.serverVersion}</div>
                    </div>
                    <div>
                      <div className={dashboardStyles.historyLabel}>Agent</div>
                      <div className={dashboardStyles.historyValue}>{v.agentVersion}</div>
                    </div>
                    <div>
                      <div className={dashboardStyles.historyLabel}>Released</div>
                      <div className={dashboardStyles.historyValue}>{new Date(v.releasedOn).toDateString()}</div>
                    </div>
                    <div className={dashboardStyles.actions} style={{ gap: 8 }}>
                      <button
                        className={dashboardStyles.guideBtn}
                        style={{ padding: '8px 16px' }}
                        onClick={() => handleDownloadClick(v.serverDownloadUrl.split("/").pop(), { type: "server", version: v.serverVersion })}
                        disabled={downloadingUrl === v.serverDownloadUrl.split("/").pop()}
                      >
                        {downloadingUrl === v.serverDownloadUrl.split("/").pop() ? "Wait..." : "Server"}
                      </button>
                      <button
                        className={dashboardStyles.guideBtn}
                        style={{ padding: '8px 16px' }}
                        onClick={() => handleDownloadClick(v.agentDownloadUrl.split("/").pop(), { type: "agent", version: v.agentVersion })}
                        disabled={downloadingUrl === v.agentDownloadUrl.split("/").pop()}
                      >
                        {downloadingUrl === v.agentDownloadUrl.split("/").pop() ? "Wait..." : "Agent"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ── License Activation CTA ── */}
          <motion.div
            id="license-section"
            className={`${dashboardStyles.licenseSection} ${hasDownloaded ? dashboardStyles.highlight : ""}`}
            variants={itemVariants}
          >
            <div className={dashboardStyles.licenseCard}>
              <div className={dashboardStyles.licenseContent}>
                <div className={dashboardStyles.licenseIcon}>
                  <FontAwesomeIcon icon={faKey} />
                </div>
                <div>
                  <h2 className={dashboardStyles.licenseTitle}>{dashboardData.license.title}</h2>
                  <p className={dashboardStyles.licenseDesc}>{dashboardData.license.desc}</p>
                </div>
              </div>
              <button
                className={dashboardStyles.licenseBtn}
                onClick={handleGetFreeKey}
              >
                {dashboardData.license.btn}
                <FontAwesomeIcon icon={faExternalLinkAlt} style={{ marginLeft: 10, fontSize: 13 }} />
              </button>
            </div>
          </motion.div>

          {/* ── System Requirements ── */}
          <motion.div className={dashboardStyles.systemSection} variants={itemVariants}>
            <h2 className={dashboardStyles.sectionTitle}>
              <FontAwesomeIcon icon={faMicrochip} style={{ marginRight: 12, opacity: 0.7 }} />
              {dashboardData.systemRequirements.title}
            </h2>

            <div className={dashboardStyles.mongoNote}>
              <FontAwesomeIcon icon={faInfoCircle} style={{ fontSize: 20, marginTop: 2, color: "var(--color-info)" }} />
              <div>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>{dashboardData.systemRequirements.mongoRequired} Required</div>
                <p style={{ opacity: 0.8, fontSize: 14 }}>{dashboardData.systemRequirements.mongoNote}</p>
              </div>
            </div>

            <div style={{ overflowX: "auto" }}>
              <table className={dashboardStyles.systemTable}>
                <thead>
                  <tr>
                    <th>Component</th>
                    <th>Minimum Specification</th>
                  </tr>
                </thead>
                <tbody>
                  {dashboardData.systemRequirements.rows.map((row, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 600 }}>{row.comp}</td>
                      <td>{row.spec}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* ── Support Resources ── */}
          <motion.div style={{ marginTop: 80 }} variants={itemVariants}>
            <h2 className={dashboardStyles.sectionTitle} style={{ textAlign: "center" }}>
              <FontAwesomeIcon icon={faLifeRing} style={{ marginRight: 12, opacity: 0.7 }} />
              Support Resources
            </h2>

            <div className={dashboardStyles.supportGrid}>
              {dashboardData.support.cards.map((card, i) => (
                <div key={i} className={dashboardStyles.supportCard}>
                  <div>
                    <h3 style={{ fontSize: 18, marginBottom: 12 }}>{card.title}</h3>
                    <p style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{card.desc}</p>
                  </div>
                  <button
                    className={dashboardStyles.downloadBtn}
                    style={{ background: "var(--color-bg-panel)", border: "1px solid var(--color-border)", color: "var(--color-text)" }}
                    onClick={() => {
                      posthog.capture("support_cta_clicked", { title: card.title });
                      card.router ? router.push(card.router) : window.open(card.link, "_blank");
                    }}
                  >
                    {card.btn}
                    <FontAwesomeIcon icon={faExternalLinkAlt} style={{ fontSize: 12, marginLeft: 4 }} />
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <EmailDialog
        open={dialogOpen}
        onClose={() => {
          pendingDownloadRef.current = null;
          setDialogOpen(false);
        }}
        onSubmit={handleEmailSubmit}
        loading={dialogLoading}
        error={dialogError}
      />
    </>
  );
}