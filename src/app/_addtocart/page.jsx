import { Suspense } from "react";
import AddToCartContent from "./AddToCartContent";

export const metadata = {
  title: { absolute: "Add to Cart | BuildNinja" },
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://www.buildninja.io/addtocart",
  },
};

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AddToCartContent />
    </Suspense>
  );
}
