"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Hero from "../components/Download/Sections/Hero/Hero";

export default function Download() {
  const router = useRouter();

  useEffect(() => {
    async function check() {
      const res = await fetch("/api/check-token").then(r => r.json());
      if (res.token) router.replace("/download/dashboard");
    }
    check();
  }, []);

  return <Hero />;
}
