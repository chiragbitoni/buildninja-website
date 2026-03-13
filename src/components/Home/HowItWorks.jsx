"use client";

const steps = [
  {
    step: "01",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>
    ),
    title: "Pull and Run",
    code: "docker pull buildninja/buildninja",
    desc: "Deploy in minutes, not weeks of complex setup. Requires MongoDB.",
  },
  {
    step: "02",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
    ),
    title: "Connect Your Code",
    desc: "Works with GitHub, GitLab, and Bitbucket. No vendor lock-in.",
  },
  {
    step: "03",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"/></svg>
    ),
    title: "Configure Your Build",
    desc: "Set up builds, triggers, and notifications without complexity.",
  },
  {
    step: "04",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
    ),
    title: "Deploy and Scale",
    desc: "Ship confidently with $199/month unlimited users.",
  },
];

export default function HowItWorks() {
  return (
    <section style={{
      background: "linear-gradient(180deg, #0c0c10 0%, #09090d 100%)",
      padding: "100px 24px",
      fontFamily: "'DM Sans', sans-serif",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Decorative line */}
      <div style={{
        position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
        width: 1, height: 80,
        background: "linear-gradient(to bottom, transparent, rgba(255,65,114,0.4))",
      }} />

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            background: "rgba(255,65,114,0.08)",
            border: "1px solid rgba(255,65,114,0.2)",
            borderRadius: 100, padding: "4px 14px",
            fontSize: 12, fontWeight: 600, color: "#ff4172",
            letterSpacing: "0.06em", textTransform: "uppercase",
            marginBottom: 20,
          }}>Setup</div>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 46px)",
            fontWeight: 800, color: "#f0f0f2",
            letterSpacing: -1.5, margin: "0 0 14px", lineHeight: 1.1,
          }}>
            The Simple Self-Hosted Plan
          </h2>
          <p style={{ fontSize: 16, color: "rgba(180,180,195,0.55)", maxWidth: 440, margin: "0 auto" }}>
            From zero to running builds in under 5 minutes.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 20,
          position: "relative",
        }}>
          {steps.map((s, i) => (
            <div key={i} style={{ position: "relative" }}>
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div style={{
                  position: "absolute",
                  top: 36, right: -10, width: 20, height: 1,
                  background: "rgba(255,65,114,0.2)",
                  zIndex: 1,
                  display: "none", // hidden on mobile, handled by css
                }} className="step-connector" />
              )}
              <div style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 14,
                padding: "28px 24px",
                height: "100%",
                transition: "all 0.2s",
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "rgba(255,65,114,0.04)";
                  e.currentTarget.style.borderColor = "rgba(255,65,114,0.2)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.025)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
                  <div style={{
                    width: 40, height: 40,
                    background: "rgba(255,65,114,0.10)",
                    borderRadius: 10,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#ff4172", flexShrink: 0,
                  }}>{s.icon}</div>
                  <span style={{
                    fontSize: 11, fontWeight: 700,
                    color: "rgba(255,65,114,0.6)",
                    letterSpacing: "0.1em",
                    fontFamily: "'DM Mono', monospace",
                  }}>STEP {s.step}</span>
                </div>
                <h3 style={{
                  fontSize: 16, fontWeight: 700,
                  color: "#e8e8f0", margin: "0 0 10px",
                  letterSpacing: -0.3,
                }}>{s.title}</h3>
                {s.code && (
                  <div style={{
                    background: "rgba(0,0,0,0.4)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 8,
                    padding: "8px 12px",
                    marginBottom: 12,
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 11.5,
                    color: "#22c55e",
                    letterSpacing: 0.2,
                    overflowX: "auto",
                    whiteSpace: "nowrap",
                  }}>
                    $ {s.code}
                  </div>
                )}
                <p style={{
                  fontSize: 13.5, color: "rgba(180,180,195,0.55)",
                  lineHeight: 1.6, margin: 0,
                }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
