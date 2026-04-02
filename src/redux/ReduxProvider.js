"use client";

import { Provider, useDispatch } from "react-redux";
import { store } from "./store";
import { useEffect } from "react";
import { setRegion } from "./slice/pricingSlice";
import { fetchUserRegionAPI } from "@/services/user/region";

function RegionInitializer({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    async function checkRegion() {
      const regionCode = await fetchUserRegionAPI();
      if (regionCode === "IN" || (regionCode && regionCode.includes("IN"))) {
        dispatch(setRegion("india"));
      }
    }

    checkRegion();
  }, [dispatch]);

  return <>{children}</>;
}

export function ReduxProvider({ children }) {
  return (
    <Provider store={store}>
      <RegionInitializer>{children}</RegionInitializer>
    </Provider>
  );
}
