"use client";

import { useSidebarStore } from "@/stores/sidebarStore";
import { cn } from "@/lib/utils";
import { Cross2Icon } from "@radix-ui/react-icons";
import IconButton from "../Navigation/IconButton";
import { useSidebarInit } from "@/hooks/useSidebarInit";

export default function Sidebar() {
  useSidebarInit();
  const { isOpen, setIsOpen } = useSidebarStore();

  return (
    <div className="relative">
      <div
        className={cn(
          "fixed top-0 left-0 h-full w-80 border-r-2 border-gray-200 bg-gray-100 text-stone-900 transition-all duration-500",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex items-center justify-between px-4 pt-20">
          <h2 className="text-2xl font-bold">Configuration</h2>
          <IconButton
            aria-label="Close Sidebar"
            onClick={setIsOpen}
            style="light"
          >
            <Cross2Icon className="h-5 w-5"></Cross2Icon>
          </IconButton>
        </div>
      </div>
    </div>
  );
}
