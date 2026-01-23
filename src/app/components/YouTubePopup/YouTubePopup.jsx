"use client";
import { useSelector, useDispatch } from "react-redux";
import { closeVideo } from "@/redux/slice/videoPopupSlice";
import "./YouTubePopup.css";
import { useRouter } from "next/navigation";

export default function YouTubePopup() {
  const dispatch = useDispatch();
  const { isOpen, videoId, title, ctaText, link } = useSelector((state) => state.videoPopup);
  const router = useRouter();
  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={() => dispatch(closeVideo())}>
      <div className="popup-card" onClick={(e) => e.stopPropagation()}>

        {/* Header */}
        <div className="popup-header">
          <h2>{title}</h2>
          <p>See how {title} works in action.</p>
        </div>

        {/* Video */}
        <div className="popup-video">
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

        {/* Footer */}
        <div className="popup-footer">
          {/* CTA Text */}
          <p className="popup-cta-text">{ctaText}</p>

          {/* Buttons */}
          <div className="popup-actions">
            <button className="btn-primary"
              onClick={() => {
                dispatch(closeVideo());
                window.location.href = link;
              }}>
              See Documentation For {title}
            </button>
            <button
              className="btn-secondary"
              onClick={() => dispatch(closeVideo())}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

