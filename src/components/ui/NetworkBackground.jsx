"use client";
import React, { useEffect, useState } from "react";

export default function NetworkBackground() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  // Generate random beams
  const generateBeams = (count, isHorizontal) => {
    return Array.from({ length: count }).map((_, i) => {
      const size = Math.random() * 200 + 100; // beam length
      const pos = Math.floor(Math.random() * 20) * 5.2; // snap to grid intervals (~52px)
      const duration = Math.random() * 4 + 3; // 3s to 7s
      const delay = Math.random() * 5;
      const reverse = Math.random() > 0.5;

      return (
        <div
          key={i}
          style={{
            position: "absolute",
            [isHorizontal ? "top" : "left"]: `${pos}%`,
            [isHorizontal ? "left" : "top"]: 0,
            width: isHorizontal ? `${size}px` : "2px",
            height: isHorizontal ? "2px" : `${size}px`,
            background: isHorizontal
              ? `linear-gradient(90deg, transparent, rgba(255, 65, 114, 0.8), #ff6b93)`
              : `linear-gradient(180deg, transparent, rgba(255, 65, 114, 0.8), #ff6b93)`,
            boxShadow: `0 0 10px rgba(255,65,114,0.5)`,
            opacity: 0,
            animation: `${isHorizontal ? "beamMoveX" : "beamMoveY"} ${duration}s linear ${delay}s infinite ${reverse ? "reverse" : "normal"}`,
            zIndex: 1,
          }}
        />
      );
    });
  };

  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
      {/* Central Pulsing Glow Core */}
      <div style={{
        position: "absolute",
        top: "10%", left: "50%", transform: "translateX(-50%)",
        width: 1000, height: 700,
        background: "radial-gradient(ellipse at center, rgba(255,65,114,0.15) 0%, rgba(255,65,114,0.05) 30%, transparent 65%)",
        animation: "heroPulse 6s ease-in-out infinite",
        zIndex: 0,
      }} />

      {/* Grid Network Lines/Beams */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.6 }}>
        {generateBeams(12, true)}  {/* 12 Horizontal Beams */}
        {generateBeams(8, false)}  {/* 8 Vertical Beams */}
      </div>

      <style>{`
        @keyframes beamMoveX {
          0% { transform: translateX(-200px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(120vw); opacity: 0; }
        }
        @keyframes beamMoveY {
          0% { transform: translateY(-200px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(120vh); opacity: 0; }
        }
        @keyframes heroPulse {
          0%, 100% { transform: translateX(-50%) scale(1); opacity: 1; }
          50%       { transform: translateX(-50%) scale(1.05); opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}
