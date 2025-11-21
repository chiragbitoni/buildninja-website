"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Hero from "../components/Download/Sections/Hero/Hero";
import { checkAuth } from "@/services/auth/check";

export default function Download() {
  const router = useRouter();

  useEffect(() => {
    async function verify() {
      const loggedIn = await checkAuth();
      if (loggedIn) router.replace("/download/dashboard");
    }
    verify();
  }, []);

  return <Hero />;
}
