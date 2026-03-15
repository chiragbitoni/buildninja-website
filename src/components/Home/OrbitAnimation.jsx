"use client";

export default function OrbitAnimation() {
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>

      {/* Radial glow behind everything */}
      <div style={{
        position: "absolute",
        top: "-20%", left: "50%", transform: "translateX(-50%)",
        width: 900, height: 700,
        background: "radial-gradient(ellipse at center, rgba(255,65,114,0.12) 0%, rgba(255,65,114,0.04) 40%, transparent 70%)",
        animation: "heroPulse 6s ease-in-out infinite",
      }} />

      {/* Orbit 1 — red dot, 30s */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        width: 600, height: 600, borderRadius: "50%",
        border: "1px solid var(--color-border-subtle)",
        transform: "translate(-50%, -50%)",
        animation: "orbitSpin 20s linear infinite",
      }}>
        <div style={{
          position: "absolute", top: -4, left: "50%",
          width: 8, height: 8, borderRadius: "50%",
          background: "#ff4172",
          boxShadow: "0 0 12px #ff4172",
          transform: "translateX(-50%)",
        }} />
      </div>

      {/* Orbit 2 — green dot, 50s reverse */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        width: 900, height: 900, borderRadius: "50%",
        border: "1px solid var(--color-border-subtle)",
        transform: "translate(-50%, -50%)",
        animation: "orbitSpin 30s linear infinite reverse",
      }}>
        <div style={{
          position: "absolute", top: -4, left: "50%",
          width: 8, height: 8, borderRadius: "50%",
          background: "#00ffb3",
          boxShadow: "0 0 12px #ff6b93",
          transform: "translateX(-50%)",
        }} />
      </div>

      {/* Orbit 3 — yellow dot, 80s */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        width: 1200, height: 1200, borderRadius: "50%",
        border: "1px solid var(--color-border-subtle)",
        transform: "translate(-50%, -50%)",
        animation: "orbitSpin 80s linear infinite",
      }}>
        <div style={{
          position: "absolute", top: -4, left: "50%",
          width: 8, height: 8, borderRadius: "50%",
          background: "#ffd60a",
          boxShadow: "0 0 12px #ffd60a",
          transform: "translateX(-50%)",
        }} />
      </div>

      <style>{`
        @keyframes orbitSpin {
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes heroPulse {
          0%, 100% { transform: translateX(-50%) scale(1); opacity: 1; }
          50%       { transform: translateX(-50%) scale(1.08); opacity: 0.7; }
        }
      `}</style>
    </div>
  );
}
