"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import InstallSection from "../../components/Download/InstallSection";
import { checkAuth } from "@/services/auth/check";
import { useSelector } from "react-redux";


export default function DownloadPage() {
  const router = useRouter();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [isVerifying, setIsVerifying] = useState(true);

  useEffect(() => {
    async function verify() {
      const loggedIn = await checkAuth();
      if (loggedIn || isLoggedIn) {
        router.replace("/install/dashboard");
      } else {
        setIsVerifying(false); // Only show page if NOT logged in
      }
    }
    verify();
  }, [isLoggedIn, router]);

  if (isVerifying) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'var(--color-bg)' 
      }}>
        <div className="animate-pulse" style={{ color: 'var(--color-text-secondary)' }}>
          Preparing Installer...
        </div>
      </div>
    );
  }

  return <InstallSection />;
}
