"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Hero from "@/app/components/Download/Dashboard/Sections/Hero/Hero";
import { checkAuth } from "@/services/auth/check";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    async function verify() {
      const loggedIn = await checkAuth();

      if (!loggedIn) router.replace("/install");
    }
    verify();
  }, []);

  return <Hero />;
}
