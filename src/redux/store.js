import { configureStore } from "@reduxjs/toolkit";
import planReducer from "./slice/planSlice";
import pricingReducer from "./slice/pricingSlice";

export const store = configureStore({
  reducer: {
    plan: planReducer,
    pricing: pricingReducer,
  },
});
