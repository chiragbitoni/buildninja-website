"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "@/redux/slice/authSlice";

export default function ClientAuthProvider({ children }) {
    const dispatch = useDispatch();
    useEffect(() => {
        async function loadUser() {
            try {
                const res = await fetch("/api/Auth/me", { cache: "no-store" });
                const data = await res.json();

                if (data?.user) {
                    dispatch(
                        loginSuccess({
                            user: data.user,
                            token: "exists",
                        })
                    );
                }
            } catch (err) {
                console.error("User fetch failed:", err);
            }
        }
        loadUser();
    }, []);

    return <>{children}</>;
}
