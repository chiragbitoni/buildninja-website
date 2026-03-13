"use client";

const pillars = [
  {
    icon: "🚫",
    bad: "Spending weeks configuring Jenkins or complex CI/CD tools",
  },
  {
    icon: "🚫",
    bad: "Dealing with deployment failures during critical business moments",
  },
  {
    icon: "🚫",
    bad: "Burning out engineers on infrastructure instead of innovation",
  },
  {
    icon: "🚫",
    bad: "Paying escalating per-seat costs as your team grows",
  },
  {
    icon: "🚫",
    bad: "Losing customers due to slow feature delivery and buggy releases",
  },
  {
    icon: "🚫",
    bad: "Missing deadlines because your deployment pipeline is unreliable",
  },
];

const whys = [
  {
    label: "The Friction",
    icon: "⚡",
    color: "#f97316",
    desc: "CI/CD tools that promise simplicity but deliver complexity. Deployments that feel like gambling. Your team deserves better.",
  },
  {
    label: "The Flow",
    icon: "🎯",
    color: "#ff4172",
    desc: "Our rule: if a new engineer can't understand it in 5 minutes, it's too complex. We use BuildNinja to deploy BuildNinja itself.",
  },
  {
    label: "The Velocity",
    icon: "🚀",
    color: "#22c55e",
    desc: "Ship features confidently, multiple times daily. No YAML headaches. No DevOps PhD required. Just reliable deployments.",
  },
];

export default function SocialProof() {
  return (
    <section style={{
      background: "#08080b",
      padding: "100px 24px",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Pain points */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            background: "rgba(249,115,22,0.08)",
            border: "1px solid rgba(249,115,22,0.2)",
            borderRadius: 100, padding: "4px 14px",
            fontSize: 12, fontWeight: 600, color: "#f97316",
            letterSpacing: "0.06em", textTransform: "uppercase",
            marginBottom: 20,
          }}>The Problem</div>
          <h2 style={{
            fontSize: "clamp(26px, 4vw, 42px)",
            fontWeight: 800, color: "#f0f0f2",
            letterSpacing: -1.5, margin: "0 0 14px", lineHeight: 1.1,
          }}>
            Don't Let Your CI/CD Tool Become<br />
            <span style={{ color: "#f97316" }}>Your Biggest Bottleneck</span>
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 12, marginBottom: 80,
        }}>
          {pillars.map((p, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "flex-start", gap: 12,
              background: "rgba(249,115,22,0.04)",
              border: "1px solid rgba(249,115,22,0.09)",
              borderRadius: 10, padding: "14px 16px",
            }}>
              <span style={{ fontSize: 15, marginTop: 1, flexShrink: 0 }}>⚠️</span>
              <span style={{ fontSize: 13.5, color: "rgba(200,200,215,0.65)", lineHeight: 1.55 }}>{p.bad}</span>
            </div>
          ))}
        </div>

        {/* Story section */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{
            fontSize: "clamp(26px, 4vw, 42px)",
            fontWeight: 800, color: "#f0f0f2",
            letterSpacing: -1.5, margin: "0 0 14px", lineHeight: 1.1,
          }}>Built by Engineers Who Use Their Own Tools</h2>
          <p style={{ fontSize: 15, color: "rgba(180,180,195,0.55)", maxWidth: 500, margin: "0 auto" }}>
            Built by the GrapeCity India team with 25+ years of enterprise deployment experience.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 18, marginBottom: 80,
        }}>
          {whys.map((w) => (
            <div key={w.label} style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 14,
              padding: "28px 24px",
              transition: "all 0.2s",
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${w.color}44`;
                e.currentTarget.style.background = `${w.color}08`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                e.currentTarget.style.background = "rgba(255,255,255,0.025)";
              }}
            >
              <div style={{ fontSize: 26, marginBottom: 14 }}>{w.icon}</div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: w.color, margin: "0 0 10px" }}>{w.label}</h3>
              <p style={{ fontSize: 14, color: "rgba(180,180,195,0.58)", lineHeight: 1.65, margin: 0 }}>{w.desc}</p>
            </div>
          ))}
        </div>

        {/* Trust stats */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 2,
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: 14,
          overflow: "hidden",
        }}>
          {[
            { value: "Free", label: "Up to 3 Agents", icon: "🆓" },
            { value: "5 min", label: "Setup Time", icon: "⚡" },
            { value: "$199/mo", label: "Unlimited Scale", icon: "💸" },
            { value: "Self-Hosted", label: "Your Control", icon: "🔒" },
          ].map((stat, i) => (
            <div key={i} style={{
              padding: "28px 20px", textAlign: "center",
              borderRight: i < 3 ? "1px solid rgba(255,255,255,0.05)" : "none",
            }}>
              <div style={{ fontSize: 22, marginBottom: 8 }}>{stat.icon}</div>
              <div style={{
                fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 800,
                color: "#fff", letterSpacing: -1, marginBottom: 6,
                fontFamily: "'DM Sans', sans-serif",
              }}>{stat.value}</div>
              <div style={{ fontSize: 12.5, color: "rgba(180,180,195,0.5)" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
