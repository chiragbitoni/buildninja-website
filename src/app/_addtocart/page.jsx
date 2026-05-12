import { Suspense } from "react";
import AddToCartContent from "./AddToCartContent";

export const metadata = {
  title: "Add to Cart | BuildNinja",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://buildninja.grapehub.io/addtocart",
  },
};

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AddToCartContent />
    </Suspense>
  );
}
