"use client";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import InstallSection from "../../components/Download/InstallSection";
import InstallDashboard from "@/components/Download/Dashboard/InstallDashboard";
import { checkAuth } from "@/services/auth/check";

export default function DownloadPage() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const loggedIn = checkAuth();
    if (loggedIn || isLoggedIn) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [isLoggedIn]);

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };

  // We render both panels in the DOM to enable crawling of the public landing page.
  // During SSR (and initial client mount), isAuthenticated is false, meaning:
  // - InstallSection is fully visible (max-height: 5000px, opacity: 1, etc.)
  // - InstallDashboard is fully hidden (max-height: 0px, opacity: 0, overflow: hidden)
  // On the client, if the user is logged in, isAuthenticated becomes true, triggering the swap transition.
  return (
    <div style={{ position: "relative", minHeight: "100vh", background: "var(--color-bg)", overflow: "hidden" }}>
      {/* Install Landing Page Section Container */}
      <div 
        style={{
          maxHeight: isAuthenticated ? "0px" : "8000px",
          opacity: isAuthenticated ? 0 : 1,
          overflow: "hidden",
          transition: "max-height 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease",
          visibility: isAuthenticated ? "hidden" : "visible"
        }}
      >
        <InstallSection onAuthSuccess={handleAuthSuccess} />
      </div>

      {/* Install Dashboard Section Container */}
      <div 
        style={{
          maxHeight: isAuthenticated ? "8000px" : "0px",
          opacity: isAuthenticated ? 1 : 0,
          overflow: "hidden",
          transition: "max-height 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease",
          visibility: isAuthenticated ? "visible" : "hidden"
        }}
      >
        {isClient && <InstallDashboard />}
      </div>
    </div>
  );
}
