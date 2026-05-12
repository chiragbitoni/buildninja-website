import { Suspense } from "react";
import AddToCartContent from "./AddToCartContent";

export const metadata = {
  title: "Add to Cart | BuildNinja",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AddToCartContent />
    </Suspense>
  );
}
