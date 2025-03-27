"use client";

import { useSidebarStore } from "@/stores/sidebar-store";
import { cn } from "@/lib/utils";
import IconButton from "../navigation/icon-button";
import { useSidebarInit } from "@/hooks/sidebar-init";
import { ChevronsLeft } from "lucide-react";
import AlgorithmConfig from "./algorithm-config";
import GraphConfig from "./graph-config";

export default function Sidebar() {
  useSidebarInit();
  const { isOpen, setIsOpen } = useSidebarStore();

  return (
    <div
      className={cn(
        "bg-sidebar-primary-foreground border-sidebar-border fixed top-0 left-0 -z-10 h-full w-80 overflow-y-scroll border-r transition-all duration-500",
        isOpen ? "translate-x-0" : "-translate-x-full",
      )}
    >
      <div className="mt-20 flex items-center justify-between px-6">
        <h2 className="text-2xl font-bold">Configuration</h2>
        <IconButton
          aria-label="Close Sidebar"
          onClick={setIsOpen}
          variant="ghost"
        >
          <ChevronsLeft className="scale-125" />
        </IconButton>
      </div>
      <div className="my-6 flex-col space-y-6 px-6">
        <GraphConfig />
        <AlgorithmConfig />
      </div>
    </div>
  );
}
