"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Hero from "../../components/Download/Sections/Hero/Hero/Hero";
import { checkAuth } from "@/services/auth/check";
import { useSelector } from "react-redux";


export default function DownloadPage() {
  const router = useRouter();
      const { isLoggedIn } = useSelector((state) => state.auth);
  useEffect(() => {
    async function verify() {
      const loggedIn = await checkAuth();
      if (loggedIn || isLoggedIn) router.replace("/install/dashboard");
    }
    verify();
  }, [isLoggedIn]);

  return <Hero />;
}
