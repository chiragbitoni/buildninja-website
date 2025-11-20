import { configureStore } from "@reduxjs/toolkit";
import planReducer from "./slice/planSlice";
import pricingReducer from "./slice/pricingSlice";
import authReducer from "./slice/authSlice";

export const store = configureStore({
  reducer: {
    plan: planReducer,
    pricing: pricingReducer,
    auth: authReducer,
  },
});
