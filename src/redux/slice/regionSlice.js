import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  region: "india",
  loading: false,
  error: null,
};

const regionSlice = createSlice({
  name: "region",
  initialState,
  reducers: {
    setRegionStart: (state) => {
      state.loading = true;
    },
    setRegionSuccess: (state, action) => {
      state.loading = false;
      state.region = action.payload;
    },
    setRegionError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setRegionStart, setRegionSuccess, setRegionError } = regionSlice.actions;
export default regionSlice.reducer;
