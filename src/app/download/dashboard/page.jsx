"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Hero from "@/app/components/Download/Dashboard/Sections/Hero/Hero";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    async function check() {
      const res = await fetch("/api/check-token").then(r => r.json());
      if (!res.token) router.replace("/download");
    }
    check();
  }, []);

  return <Hero />;
}
