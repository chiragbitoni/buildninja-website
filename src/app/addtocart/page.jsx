import { Suspense } from "react";
import AddToCartPage from "./AddToCartPage";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AddToCartPage />
    </Suspense>
  );
}
