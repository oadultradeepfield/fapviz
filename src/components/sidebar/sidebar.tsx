"use client";

import { Separator } from "@/components/ui/separator";
import { useSidebarInit } from "@/hooks/sidebar-init";
import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/stores/sidebar-store";
import { ChevronsLeft } from "lucide-react";
import IconButton from "../navigation/icon-button";
import AlgorithmConfig from "./algorithm-config";
import GraphConfig from "./graph-config";

export default function Sidebar() {
  useSidebarInit();
  const { isOpen, setIsOpen } = useSidebarStore();

  return (
    <div
      className={cn(
        "bg-sidebar-primary-foreground border-sidebar-border fixed top-0 left-0 z-20 h-full w-full overflow-y-scroll border-r transition-all duration-500 sm:w-80",
        isOpen ? "translate-x-0" : "-translate-x-full",
      )}
    >
      <div className="mt-24 flex items-center justify-between px-8 sm:mt-20 sm:px-6">
        <h2 className="text-2xl font-bold">Configuration</h2>
        <IconButton
          aria-label="Close Sidebar"
          onClick={setIsOpen}
          variant="ghost"
        >
          <ChevronsLeft className="scale-125" />
        </IconButton>
      </div>
      <div className="my-6 flex-col space-y-8 px-8 sm:px-6">
        <GraphConfig />
        <Separator />
        <AlgorithmConfig />
      </div>
    </div>
  );
}
