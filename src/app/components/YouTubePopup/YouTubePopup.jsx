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
          src={`https://www.youtube.com/embed/${videoId}?si=CZmwaHZbVM43ONPr`}
          className="youtube-frame"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
        </iframe>
      </div>
    </div>
  );
}
