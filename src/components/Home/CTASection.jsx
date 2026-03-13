"use client";
import { openVideo } from "@/redux/slice/videoPopupSlice";
import Link from "next/link";
import { useDispatch } from "react-redux";

export default function CTASection() {
  const dispatch = useDispatch();
  return (
    <section style={{
      background: "#08080b",
      padding: "80px 24px 100px",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <div style={{ maxWidth: 820, margin: "0 auto" }}>
        <div style={{
          background: "linear-gradient(135deg, rgba(255,65,114,0.10) 0%, rgba(255,97,53,0.06) 100%)",
          border: "1px solid rgba(255,65,114,0.2)",
          borderRadius: 20,
          padding: "60px 48px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Background glow */}
          <div style={{
            position: "absolute", top: -60, left: "50%", transform: "translateX(-50%)",
            width: 400, height: 200,
            background: "radial-gradient(ellipse, rgba(255,65,114,0.18) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          <h2 style={{
            fontSize: "clamp(28px, 4.5vw, 50px)",
            fontWeight: 800, color: "#fff",
            letterSpacing: -2, margin: "0 0 16px", lineHeight: 1.05,
            position: "relative",
          }}>
            Stop Fighting Your CI/CD.<br />
            <span style={{
              background: "linear-gradient(135deg, #ff4172, #ff8c5a)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>Start Shipping Code.</span>
          </h2>
          <p style={{
            fontSize: 16, color: "rgba(200,200,215,0.65)",
            maxWidth: 520, margin: "0 auto 36px",
            lineHeight: 1.65,
          }}>
            Get your CI/CD build process running in under 5 minutes. Free for 3 agents, $199/month unlimited as you scale.
          </p>

          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 36 }}>
            <Link href="/install" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "14px 28px", borderRadius: 10,
              background: "linear-gradient(135deg, #ff4172, #ff6135)",
              color: "#fff", fontSize: 15, fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 4px 28px rgba(255,65,114,0.45)",
              transition: "all 0.18s",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 36px rgba(255,65,114,0.6)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 28px rgba(255,65,114,0.45)"; }}
            >
              Try BuildNinja Free
            </Link>
            <Link href="#demo" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "14px 24px", borderRadius: 10,
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.14)",
              color: "rgba(220,220,230,0.85)", fontSize: 15, fontWeight: 600,
              textDecoration: "none",
              transition: "all 0.18s",
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.13)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
              onClick={() => { dispatch(openVideo({ videoId: process.env.NEXT_PUBLIC_YOUTUBE_VIDEO_ID, title: "BuildNinja", ctaText: "Self Hosted CI/CD That Just Works" })) }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3" /></svg>
              See the 3-Minute Demo
            </Link>
          </div>

          {/* Guarantee */}
          <div style={{
            display: "inline-flex", flexDirection: "column", gap: 8,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 12, padding: "18px 24px",
            textAlign: "left",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
              <span style={{ fontSize: 16 }}>🛡️</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: "rgba(220,220,230,0.8)" }}>Risk-Free Guarantee</span>
            </div>
            {[
              "30-day free trial license, no credit card required",
              "Cancel anytime, keep full control of your setup",
              "Deploy in minutes with Docker on your own infrastructure",
              "Direct support from our engineering team",
            ].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                <span style={{ fontSize: 13, color: "rgba(180,180,195,0.6)" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section >
  );
}
