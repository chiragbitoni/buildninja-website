"use client";

import styles from "./InstallDashboard.module.css";
import { useEffect, useState } from "react";
import { downloadDashboardData as staticData } from "../../../../public/static/downloadDashboardPageText";
import { useRouter } from "next/navigation";
import { fetchInstallers, downloadInstaller } from "@/services/auth/installers";
import posthog from "posthog-js";
import { useDispatch } from "react-redux";
import { openVideo } from "@/redux/slice/videoPopupSlice";
import { getAuthCookie } from "@/lib/cookieAuth";
import { motion } from "framer-motion";
import OrbitAnimation from "@/components/Home/OrbitAnimation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faWindows, 
  faLinux, 
  faApple, 
  faDocker 
} from "@fortawesome/free-brands-svg-icons";
import { 
  faDownload, 
  faPlayCircle, 
  faCopy, 
  faTerminal, 
  faHistory, 
  faMicrochip, 
  faInfoCircle,
  faLifeRing,
  faCalendarAlt,
  faCheckCircle,
  faExternalLinkAlt
} from "@fortawesome/free-solid-svg-icons";

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

export default function InstallDashboard() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [data, setData] = useState({ latest: {}, history: [] });
  const [loading, setLoading] = useState(true);
  const [hasHistory, setHasHistory] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    posthog.capture("docker_command_copied", { type });
    // Potential toast notification could go here
  };

  useEffect(() => {
    const user = getAuthCookie();
    if (user?.userId) {
      posthog.identify(user.userId, { email: user.email });
    }
    
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
        posthog.capture("installer_list_failed", { error: err?.message });
        console.error("Installer fetch failed", err);
        setHasHistory(false);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const handleDownload = (url, meta) => {
    if (!url) return;
    posthog.capture("installer_download_clicked", {
      ...meta,
      source_page: "download_dashboard",
    });
    downloadInstaller(url.split("/").pop());
  };

  const latestWindows = data.latest?.windows;
  const latestLinux = data.latest?.linux;
  const latestMac = data.latest?.mac;
  const releaseDate = latestWindows?.releasedOn || latestLinux?.releasedOn || latestMac?.releasedOn;

  return (
    <section className={styles.dashboard}>
      <div className={styles.grid} />
      <OrbitAnimation />
      
      <motion.div 
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <header className={styles.header}>
          <span className={styles.breadcrumb}>{staticData.breadcrumb}</span>
          <h1 className={styles.title}>{staticData.title}</h1>
        </header>

        {/* ── Main Current Release Card ── */}
        <motion.div className={styles.mainCard} variants={itemVariants}>
          <div className={styles.cardHeader}>
            <div className={styles.releaseStatus}>
              <h2 className={styles.sectionTitle} style={{ marginBottom: 0 }}>Current Stable Release</h2>
              <span className={styles.badge}>Live</span>
            </div>
            <div className={styles.versionItem}>
              <FontAwesomeIcon icon={faCalendarAlt} style={{ marginRight: 8, opacity: 0.6 }} />
              Released: <b>{releaseDate ? new Date(releaseDate).toLocaleDateString("en-GB") : "—"}</b>
            </div>
          </div>

          <div className={styles.versionGrid}>
            {/* Windows */}
            {latestWindows && (
              <div className={styles.osSection}>
                <h3 className={styles.osTitle}>
                  <FontAwesomeIcon icon={faWindows} /> Windows
                </h3>
                <div className={styles.versionInfo}>
                  <span className={styles.versionItem}>Version: <b>{latestWindows.version}</b></span>
                </div>
                <div className={styles.actions}>
                  <button 
                    className={styles.downloadBtn}
                    onClick={() => handleDownload(latestWindows.downloadUrl, { os: "windows", version: latestWindows.version })}
                  >
                    <FontAwesomeIcon icon={faDownload} /> Download .exe
                  </button>
                  <button 
                    className={styles.guideBtn}
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
              <div className={styles.osSection}>
                <h3 className={styles.osTitle}>
                  <FontAwesomeIcon icon={faLinux} /> Linux
                </h3>
                <div className={styles.versionInfo}>
                  <span className={styles.versionItem}>Server: <b>{latestLinux.serverVersion}</b></span>
                  <span className={styles.versionItem}>Agent: <b>{latestLinux.agentVersion}</b></span>
                </div>
                <div className={styles.actions}>
                  <button 
                    className={styles.downloadBtn}
                    onClick={() => handleDownload(latestLinux.serverDownloadUrl, { os: "linux", type: "server", version: latestLinux.serverVersion })}
                  >
                    <FontAwesomeIcon icon={faDownload} /> Server
                  </button>
                  <button 
                    className={styles.downloadBtn}
                    onClick={() => handleDownload(latestLinux.agentDownloadUrl, { os: "linux", type: "agent", version: latestLinux.agentVersion })}
                  >
                    <FontAwesomeIcon icon={faDownload} /> Agent
                  </button>
                </div>
              </div>
            )}

            {/* Mac */}
            {latestMac && (
              <div className={styles.osSection}>
                <h3 className={styles.osTitle}>
                  <FontAwesomeIcon icon={faApple} /> macOS
                </h3>
                <div className={styles.versionInfo}>
                  <span className={styles.versionItem}>Server: <b>{latestMac.serverVersion}</b></span>
                  <span className={styles.versionItem}>Agent: <b>{latestMac.agentVersion}</b></span>
                </div>
                <div className={styles.actions}>
                  <button 
                    className={styles.downloadBtn}
                    onClick={() => handleDownload(latestMac.serverDownloadUrl, { os: "mac", type: "server", version: latestMac.serverVersion })}
                  >
                    <FontAwesomeIcon icon={faDownload} /> Server
                  </button>
                  <button 
                    className={styles.downloadBtn}
                    onClick={() => handleDownload(latestMac.agentDownloadUrl, { os: "mac", type: "agent", version: latestMac.agentVersion })}
                  >
                    <FontAwesomeIcon icon={faDownload} /> Agent
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Docker Commands Sub-section */}
          <div className={styles.dockerSection}>
            <h4 className={styles.sectionTitle} style={{ fontSize: 16 }}>
              <FontAwesomeIcon icon={faDocker} style={{ marginRight: 8 }} /> {staticData.docker.title}
            </h4>
            <div className={styles.dockerGrid}>
              <div className={styles.dockerBox}>
                <div className={styles.dockerCode}>
                  <span style={{ opacity: 0.5, marginRight: 8 }}>$</span>
                  {staticData.docker.serverCmd}
                </div>
                <FontAwesomeIcon 
                  icon={faCopy} 
                  className={styles.copyIcon} 
                  onClick={() => copyToClipboard(staticData.docker.serverCmd, "server")}
                />
              </div>
              <div className={styles.dockerBox}>
                <div className={styles.dockerCode}>
                  <span style={{ opacity: 0.5, marginRight: 8 }}>$</span>
                  {staticData.docker.agentCmd}
                </div>
                <FontAwesomeIcon 
                  icon={faCopy} 
                  className={styles.copyIcon} 
                  onClick={() => copyToClipboard(staticData.docker.agentCmd, "agent")}
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── History Sub-section ── */}
        {hasHistory && (
          <motion.div className={styles.historySection} variants={itemVariants}>
            <h2 className={styles.sectionTitle}>
              <FontAwesomeIcon icon={faHistory} style={{ marginRight: 12, opacity: 0.7 }} />
              Previous Versions
            </h2>
            <div className={styles.historyGrid}>
              {data.history.map((v, i) => (
                <div key={i} className={styles.historyRow}>
                  <div>
                    <div className={styles.historyLabel}>Server</div>
                    <div className={styles.historyValue}>{v.serverVersion}</div>
                  </div>
                  <div>
                    <div className={styles.historyLabel}>Agent</div>
                    <div className={styles.historyValue}>{v.agentVersion}</div>
                  </div>
                  <div>
                    <div className={styles.historyLabel}>Released</div>
                    <div className={styles.historyValue}>{new Date(v.releasedOn).toDateString()}</div>
                  </div>
                  <div className={styles.actions} style={{ gap: 8 }}>
                    <button 
                      className={styles.guideBtn} 
                      style={{ padding: '8px 16px' }}
                      onClick={() => handleDownload(v.serverDownloadUrl, { type: "server", version: v.serverVersion })}
                    >
                      Server
                    </button>
                    <button 
                      className={styles.guideBtn} 
                      style={{ padding: '8px 16px' }}
                      onClick={() => handleDownload(v.agentDownloadUrl, { type: "agent", version: v.agentVersion })}
                    >
                      Agent
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* ── System Requirements ── */}
        <motion.div className={styles.systemSection} variants={itemVariants}>
          <h2 className={styles.sectionTitle}>
            <FontAwesomeIcon icon={faMicrochip} style={{ marginRight: 12, opacity: 0.7 }} />
            {staticData.systemRequirements.title}
          </h2>
          
          <div className={styles.mongoNote}>
            <FontAwesomeIcon icon={faInfoCircle} style={{ fontSize: 20, marginTop: 2, color: "var(--color-info)" }} />
            <div>
              <div style={{ fontWeight: 700, marginBottom: 4 }}>{staticData.systemRequirements.mongoRequired} Required</div>
              <p style={{ opacity: 0.8, fontSize: 14 }}>{staticData.systemRequirements.mongoNote}</p>
            </div>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table className={styles.systemTable}>
              <thead>
                <tr>
                  <th>Component</th>
                  <th>Minimum Specification</th>
                </tr>
              </thead>
              <tbody>
                {staticData.systemRequirements.rows.map((row, i) => (
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
          <h2 className={styles.sectionTitle} style={{ textAlign: "center" }}>
            <FontAwesomeIcon icon={faLifeRing} style={{ marginRight: 12, opacity: 0.7 }} />
            Support Resources
          </h2>

          <div className={styles.supportGrid}>
            {staticData.support.cards.map((card, i) => (
              <div key={i} className={styles.supportCard}>
                <div>
                  <h3 style={{ fontSize: 18, marginBottom: 12 }}>{card.title}</h3>
                  <p style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{card.desc}</p>
                </div>
                <button 
                  className={styles.downloadBtn} 
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
    </section>
  );
}
