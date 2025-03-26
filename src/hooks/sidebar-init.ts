"use client";

import { useSidebarStore } from "@/stores/sidebar-store";
import { useEffect, useRef } from "react";
import { useWindowSize } from "@/hooks/window-size";

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
