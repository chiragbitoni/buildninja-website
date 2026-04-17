"use client";
import { useEffect, useRef } from "react";

export default function TailwindPageWrapper({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    // We used to force "dark" here, but now we let the global theme handle it
  }, []);

  return (
    <div ref={ref} className="tw-root">
      {children}
    </div>
  );
}
