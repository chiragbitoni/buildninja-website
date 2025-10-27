import { createSlice } from "@reduxjs/toolkit";

const planSlice = createSlice({
  name: "plan",
  initialState: {
    isAnnual: false, // false = Monthly, true = Annual
  },
  reducers: {
    togglePlan: (state) => {
      state.isAnnual = !state.isAnnual;
    },
    setPlan: (state, action) => {
      state.isAnnual = action.payload;
    },
  },
});

export const { togglePlan, setPlan } = planSlice.actions;
export default planSlice.reducer;
