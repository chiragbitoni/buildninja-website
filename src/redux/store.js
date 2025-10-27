import { configureStore } from "@reduxjs/toolkit";
import planReducer from "./slice/planSlice";

export const store = configureStore({
  reducer: {
    plan: planReducer,
  },
});
