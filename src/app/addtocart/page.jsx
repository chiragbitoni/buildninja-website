"use client";

import { Suspense } from "react";
import AddToCartContent from "./AddToCartContent";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AddToCartContent />
    </Suspense>
  );
}
