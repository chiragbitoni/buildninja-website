"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Hero from "../../../components/Download/Access/Sections/Hero/Hero/Hero";
import { checkAuth } from "@/services/auth/check";

export default function Access() {
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
