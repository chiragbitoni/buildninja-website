"use client"
import { useRouter } from "next/navigation";
import Hero from "../components/Download/Sections/Hero/Hero";
import { useEffect, useState } from "react";
import { getToken } from "@/lib/auth";

export default function Download() {
    const router = useRouter();
    useEffect(()=>{
        if(getToken()){
            // router.replace("/download/dashboard")
        }
    },[]);
    return (
        <div>
            <Hero />
        </div>
    )
}
