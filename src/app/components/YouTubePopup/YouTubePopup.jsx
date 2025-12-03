"use client";
import { useSelector, useDispatch } from "react-redux";
import { closeVideo } from "@/redux/slice/videoPopupSlice";
import "./YouTubePopup.css";

export default function YouTubePopup() {
  const dispatch = useDispatch();
  const { isOpen, videoId } = useSelector((state) => state.videoPopup);

  if (!isOpen) return null; // do not render if closed

  return (
    <div className="popup-overlay" onClick={() => dispatch(closeVideo())}>
      <div className="popup-box" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={() => dispatch(closeVideo())}>
          ×
        </button>

        <iframe
          className="youtube-frame"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
