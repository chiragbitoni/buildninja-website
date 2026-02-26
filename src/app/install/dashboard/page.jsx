"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Hero from "@/components/Download/Dashboard/Sections/Hero/Hero";
import { checkAuth } from "@/services/auth/check";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const router = useRouter();
  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    async function verify() {
      const loggedIn = await checkAuth();
      if (!loggedIn && !isLoggedIn) router.replace("/install");
    }
    verify();
  }, []);

  return <Hero />;
}
