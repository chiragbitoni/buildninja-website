"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "@/redux/slice/authSlice";
import { fetchUser } from "@/services/auth/me";

export default function ClientAuthProvider({ children }) {
    const dispatch = useDispatch();

    useEffect(() => {
        async function loadUser() {
            try {
                const data = await fetchUser();

                // check correct backend response shape
                if (data?.userId) {
                    dispatch(
                        loginSuccess({
                            user: data,    // full response IS the user
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
