"use client";

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
    ),
    title: "See What Happened Without the Detective Work",
    desc: "Track every build with detailed logs and duration analytics in one clean interface — no hunting through scattered plugin outputs.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
    ),
    title: "Own Your Infrastructure Without the Headache",
    desc: "Monitor all build agents in real-time. See status, capacity, and health without complexity or SSH into every machine.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>
    ),
    title: "Know When Builds Complete Automatically",
    desc: "Instant email alerts for build success or failure, included out of the box. No complex setup, no additional costs.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"/></svg>
    ),
    title: "Change Settings With Confidence",
    desc: "Manage VCS, build steps, and artifacts in one place. Simple, clear configuration without the fear of breaking everything.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
    ),
    title: "Enterprise-Ready Security & Access Control",
    desc: "Control builds and environments with RBAC and powerful Build Parameters. Secure, flexible, and built for real-world teams.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
    ),
    title: "Deploy Anywhere with Native Git & SSH",
    desc: "Clone, build, and deploy without external plugins. Native Git with smart caching and SSH Runner for remote server execution.",
  },
];

export default function FeaturesGrid() {
  return (
    <section style={{
      background: "#08080b",
      padding: "100px 24px",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            background: "rgba(255,65,114,0.08)",
            border: "1px solid rgba(255,65,114,0.2)",
            borderRadius: 100, padding: "4px 14px",
            fontSize: 12, fontWeight: 600, color: "#ff4172",
            letterSpacing: "0.06em", textTransform: "uppercase",
            marginBottom: 20,
          }}>Features</div>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 46px)",
            fontWeight: 800,
            color: "#f0f0f2",
            letterSpacing: -1.5,
            margin: "0 0 16px",
            lineHeight: 1.1,
          }}>
            Deploy with Confidence.<br />
            <span style={{
              background: "linear-gradient(135deg, #ff4172 30%, #ff8c5a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>Without the Complexity.</span>
          </h2>
          <p style={{ fontSize: 16, color: "rgba(180,180,195,0.6)", maxWidth: 480, margin: "0 auto" }}>
            Powerful CI/CD features that let you ship code, not fix pipelines.
          </p>
        </div>

        {/* 3-col grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 18,
        }}>
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, desc, index }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.028)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: 14,
        padding: "28px 26px",
        transition: "all 0.22s cubic-bezier(.4,0,.2,1)",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = "rgba(255,65,114,0.05)";
        e.currentTarget.style.borderColor = "rgba(255,65,114,0.22)";
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow = "0 12px 40px rgba(255,65,114,0.10)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = "rgba(255,255,255,0.028)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div style={{
        width: 44, height: 44,
        background: "rgba(255,65,114,0.10)",
        borderRadius: 11,
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "#ff4172",
        marginBottom: 18,
      }}>
        {icon}
      </div>
      <h3 style={{
        fontSize: 15, fontWeight: 700,
        color: "#e8e8f0",
        margin: "0 0 10px",
        lineHeight: 1.35,
        fontFamily: "'DM Sans', sans-serif",
        letterSpacing: -0.3,
      }}>{title}</h3>
      <p style={{
        fontSize: 13.5, color: "rgba(180,180,195,0.55)",
        lineHeight: 1.65, margin: 0,
      }}>{desc}</p>
    </div>
  );
}
