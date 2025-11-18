"use client"
import Hero from "@/app/components/Download/Dashboard/Sections/Hero/Hero"
import { getToken } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function Dashboard() {
    const router = useRouter();
    useEffect(() => {
        if (!getToken()) {
            router.replace("/download")
        }
    }, []);
    return (
        <div>
            <Hero />
        </div>
    )
}
