"use client";

import { useSidebarStore } from "@/stores/sidebarStore";
import { useEffect, useRef } from "react";
import { useWindowSize } from "@/hooks/useWindowSize";

export function useSidebarInit() {
  const { isOpen, setIsOpenBasedOnWidth } = useSidebarStore();
  const { width } = useWindowSize();
  const prevWidthRef = useRef(width);

  useEffect(() => {
    const prevWidth = prevWidthRef.current;

    if (!isOpen && width > prevWidth) {
      setIsOpenBasedOnWidth(width);
    } else if (isOpen && width < prevWidth) {
      setIsOpenBasedOnWidth(width);
    }

    prevWidthRef.current = width;
  }, [width, isOpen]);
}
