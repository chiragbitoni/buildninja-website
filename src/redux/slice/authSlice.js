import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.user = action.payload.user || null;
      state.token = action.payload.token || null;
      state.isLoggedIn = !!action.payload.user;
    },
    logoutUser(state) {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
    },
    updateUser(state, action) {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
  },
});

export const { loginSuccess, logoutUser, updateUser } = authSlice.actions;
export default authSlice.reducer;
