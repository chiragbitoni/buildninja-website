"use client"
import { useRouter } from "next/navigation";
import Hero from "../../components/Download/Access/Sections/Hero/Hero"
import { useEffect } from "react";
import { getToken } from "@/lib/auth";
export default function DownloadAccess() {
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
