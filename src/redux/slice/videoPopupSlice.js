import { createSlice } from "@reduxjs/toolkit";

const videoPopupSlice = createSlice({
  name: "videoPopup",
  initialState: {
    isOpen: false,
    videoId: null,
    title: "",
    ctaText: "",
  },
  reducers: {
    openVideo(state, action) {
      const { videoId, title, ctaText } = action.payload;

      state.isOpen = true;
      state.videoId = videoId;
      state.title = title;
      state.ctaText = ctaText;
    },
    closeVideo(state) {
      state.isOpen = false;
      state.videoId = null;
      state.title = "";
      state.ctaText = "";
    },
  },
});

export const { openVideo, closeVideo } = videoPopupSlice.actions;
export default videoPopupSlice.reducer;
