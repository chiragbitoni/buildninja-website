"use client";

import { Suspense } from "react";
import ThirdContent from "./Third";

export default function Third() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThirdContent />
    </Suspense>
  );
}
