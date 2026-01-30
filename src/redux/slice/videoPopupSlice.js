import { createSlice } from "@reduxjs/toolkit";

const videoPopupSlice = createSlice({
  name: "videoPopup",
  initialState: {
    isOpen: false,
    videoId: null,
    title: "",
    ctaText: "",
    link: "",
  },
  reducers: {
    openVideo(state, action) {
      const { videoId, title, ctaText, link } = action.payload;

      state.isOpen = true;
      state.videoId = videoId;
      state.title = title;
      state.ctaText = ctaText;
      state.link = link;
    },
    closeVideo(state) {
      state.isOpen = false;
      state.videoId = null;
      state.title = "";
      state.ctaText = "";
      state.link = ""
    },
  },
});

export const { openVideo, closeVideo } = videoPopupSlice.actions;
export default videoPopupSlice.reducer;
