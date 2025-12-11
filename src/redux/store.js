import { configureStore } from "@reduxjs/toolkit";
import planReducer from "./slice/planSlice";
import pricingReducer from "./slice/pricingSlice";
import authReducer from "./slice/authSlice";
import videoPopupReducer from "./slice/videoPopupSlice";
export const store = configureStore({
  reducer: {
    plan: planReducer,
    pricing: pricingReducer,
    auth: authReducer,
    videoPopup: videoPopupReducer,
  },
});
