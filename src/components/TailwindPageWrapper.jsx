"use client";
import { useEffect, useRef } from "react";

export default function TailwindPageWrapper({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) ref.current.classList.add("dark");
    return () => {
      if (ref.current) ref.current.classList.remove("dark");
    };
  }, []);

  return (
    <div ref={ref} className="tw-root">
      {children}
    </div>
  );
}
