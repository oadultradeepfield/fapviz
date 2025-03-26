"use client";

import { useSidebarStore } from "@/stores/sidebar-store";
import { cn } from "@/lib/utils";
import IconButton from "../navigation/icon-button";
import { useSidebarInit } from "@/hooks/sidebar-init";
import { ChevronsLeft } from "lucide-react";

export default function Sidebar() {
  useSidebarInit();
  const { isOpen, setIsOpen } = useSidebarStore();

  return (
    <div
      className={cn(
        "bg-sidebar-primary-foreground border-sidebar-border fixed top-0 left-0 -z-10 h-full w-80 border-r transition-all duration-500",
        isOpen ? "translate-x-0" : "-translate-x-full",
      )}
    >
      <div className="flex items-center justify-between px-4 pt-20">
        <h2 className="text-2xl font-bold">Configuration</h2>
        <IconButton
          aria-label="Close Sidebar"
          onClick={setIsOpen}
          variant="ghost"
        >
          <ChevronsLeft className="scale-125" />
        </IconButton>
      </div>
    </div>
  );
}
