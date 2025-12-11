"use client";
import { useSelector, useDispatch } from "react-redux";
import { closeVideo } from "@/redux/slice/videoPopupSlice";
import "./YouTubePopup.css";

export default function YouTubePopup() {
  const dispatch = useDispatch();
  const { isOpen, videoId } = useSelector((state) => state.videoPopup);

  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={() => dispatch(closeVideo())}>

      {/* Close button - now positioned on top-left of screen */}
      <button
        className="close-btn-global"
        onClick={(e) => {
          e.stopPropagation();
          dispatch(closeVideo());
        }}
      >
        ×
      </button>

      <div className="popup-box" onClick={(e) => e.stopPropagation()}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0&autoplay=1`}
          className="youtube-frame"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
