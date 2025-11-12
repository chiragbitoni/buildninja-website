import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  region: "india",       // 'india' or 'worldwide'
  billing: "annual",     // 'monthly' or 'annual'
  multiYear: "annual",   // 'annual', 'twoYear', 'threeYear'
};

const pricingSlice = createSlice({
  name: "pricing",
  initialState,
  reducers: {
    setRegion: (state, action) => {
      state.region = action.payload;
    },
    setBilling: (state, action) => {
      state.billing = action.payload;
    },
    setMultiYear: (state, action) => {
      state.multiYear = action.payload;
    },
    resetPricing: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const { setRegion, setBilling, setMultiYear, resetPricing } =
  pricingSlice.actions;

export default pricingSlice.reducer;
