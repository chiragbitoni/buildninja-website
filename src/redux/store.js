import { configureStore } from "@reduxjs/toolkit";
import planReducer from "./slice/planSlice";
import regionReducer from "./slice/regionSlice";
import pricingReducer from "./slice/pricingSlice";

export const store = configureStore({
  reducer: {
    plan: planReducer,
    region: regionReducer,
    pricing: pricingReducer,
  },
});
