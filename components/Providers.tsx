"use client";

import { useEffect } from "react";
import { initLenis } from "@/lib/lenis";

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initLenis();
  }, []);

  return <>{children}</>;
}
