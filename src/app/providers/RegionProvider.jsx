"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setRegionStart,
  setRegionSuccess,
  setRegionError,
} from "../../redux/slice/regionSlice";

export default function RegionProvider({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchRegion = async () => {
      dispatch(setRegionStart());

      try {
        const res = await fetch("/api/region", { cache: "no-store" });
        
        const data = await res.json();

        console.log("🌍 Region API response:", data);
        
        // ✅ If region is undefined or API fails, default to global
        const region = data?.region || "global";
        dispatch(setRegionSuccess(region));
    } catch (error) {
          console.error("❌ Error detecting region:", error);
        dispatch(setRegionError(error.message));
      }
    };

    fetchRegion();
  }, [dispatch]);

  return children;
}
