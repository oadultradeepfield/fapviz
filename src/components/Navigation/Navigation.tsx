"use client";

import { useSidebarStore } from "@/stores/sidebar-store";
import { HelpCircle } from "lucide-react";
import AppLogo from "../common/app-logo";
import { Icons } from "../ui/icons";
import IconButton from "./icon-button";
import ToggleSidebarButton from "./toggle-sidebar-button";

export default function Navigation() {
  const { setIsOpen } = useSidebarStore();

  const handleClickHelp = () => {};

  const handleClickGithub = () => {
    window.open("https://www.github.com/oadultradeepfield/fapviz", "_blank");
  };

  return (
    <nav className="bg-foreground relative z-30 p-3">
      <div className="container mx-auto flex max-w-full items-center justify-between">
        <ToggleSidebarButton aria-label="Toggle Sidebar" onClick={setIsOpen} />
        <div className="flex flex-1 items-center justify-center gap-3">
          <AppLogo size={40} />
          <div className="text-background text-2xl font-semibold">FAPViz</div>
        </div>
        <div className="flex items-center space-x-3">
          <IconButton
            aria-label="Help"
            onClick={handleClickHelp}
            tooltipMessage="Help"
          >
            <HelpCircle className="scale-125" />
          </IconButton>
          <IconButton
            aria-label="Visit GitHub Repository"
            onClick={handleClickGithub}
            tooltipMessage="Visit Repo"
          >
            <Icons.gitHub className="scale-125" />
          </IconButton>
        </div>
      </div>
    </nav>
  );
}
