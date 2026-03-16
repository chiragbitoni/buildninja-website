"use client";
import { useSelector, useDispatch } from "react-redux";
import { closeVideo } from "@/redux/slice/videoPopupSlice";
import { useRouter } from "next/navigation";
import styles from "./YouTubePopup.module.css";

/** Inline X icon — uses currentColor so it adapts to both themes */
function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export default function YouTubePopup() {
  const dispatch = useDispatch();
  const { isOpen, videoId, title, ctaText, link } = useSelector(
    (state) => state.videoPopup
  );
  const router = useRouter();

  if (!isOpen) return null;

  return (
    <div
      className={styles.overlay}
      onClick={() => dispatch(closeVideo())}
      role="dialog"
      aria-modal="true"
      aria-label={`Video: ${title}`}
    >
      <div className={styles.card} onClick={(e) => e.stopPropagation()}>

        {/* ── Header ── */}
        <div className={styles.header}>
          <div className={styles.headerText}>
            <h2>{title}</h2>
            <p>See how {title} works in action.</p>
          </div>
          <button
            className={styles.closeBtn}
            onClick={() => dispatch(closeVideo())}
            aria-label="Close video popup"
          >
            <CloseIcon />
          </button>
        </div>

        {/* ── Video ── */}
        <div className={styles.video}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0&autoplay=1`}
            title={`YouTube video: ${title}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        {/* ── Footer ── */}
        <div className={styles.footer}>
          {ctaText && <p className={styles.ctaText}>{ctaText}</p>}
          <div className={styles.actions}>
            <button
              className={styles.btnPrimary}
              onClick={() => {
                dispatch(closeVideo());
                window.location.href = link;
              }}
            >
              See Documentation for {title}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
