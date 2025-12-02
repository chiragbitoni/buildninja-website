"use client";

import { usePathname, useSearchParams as nextSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export function useQueryParams() {
  const pathname = usePathname();
  const searchParams = nextSearchParams();
  
  // store params in state to make reactive
  const [params, setParams] = useState(() =>
    new URLSearchParams(searchParams.toString())
  );

  useEffect(() => {
    // whenever pathname or searchParams changes, update state
    setParams(new URLSearchParams(searchParams.toString()));
  }, [pathname, searchParams]);

  return params;
}
