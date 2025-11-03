import { configureStore } from "@reduxjs/toolkit";
import planReducer from "./slice/planSlice";
import regionReducer from "./slice/regionSlice";
export const store = configureStore({
  reducer: {
    plan: planReducer,
    region: regionReducer,
  },
});
