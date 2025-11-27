"use client";

export default function TailwindPageWrapper({ children }) {
  return (
    <div className="tw-root">
      {children}
    </div>
  );
}
