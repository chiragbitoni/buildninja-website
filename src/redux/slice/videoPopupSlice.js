import { createSlice } from "@reduxjs/toolkit";

const videoPopupSlice = createSlice({
  name: "videoPopup",
  initialState: {
    isOpen: false,
    videoId: null,
  },
  reducers: {
    openVideo(state, action) {
      state.isOpen = true;
      state.videoId = action.payload; // pass YouTube video ID
    },
    closeVideo(state) {
      state.isOpen = false;
      state.videoId = null;
    },
  },
});

export const { openVideo, closeVideo } = videoPopupSlice.actions;
export default videoPopupSlice.reducer;
