"use client";

import { QuestionMarkCircledIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

import AppLogo from "../Common/AppLogo";
import IconButton from "./IconButton";
import ToggleSidebarButton from "./ToggleSidebarButton";
import { useSidebarStore } from "@/stores/sidebarStore";

export default function Navigation() {
  const { setIsOpen } = useSidebarStore();

  const handleClickHelp = () => {};

  const handleClickGithub = () => {
    window.open("https://www.github.com/oadultradeepfield/fapviz", "_blank");
  };

  return (
    <nav className="bg-stone-800 p-3">
      <div className="container mx-auto flex max-w-full items-center justify-between">
        <ToggleSidebarButton aria-label="Toggle Sidebar" onClick={setIsOpen} />
        <div className="flex flex-1 items-center justify-center gap-3">
          <AppLogo size={40} />
          <div className="text-2xl font-semibold text-gray-100">FAPViz</div>
        </div>
        <div className="flex items-center space-x-2">
          <IconButton
            aria-label="Help"
            onClick={handleClickHelp}
            tooltipMessage="Help"
            style="dark"
          >
            <QuestionMarkCircledIcon className="h-6 w-6" />
          </IconButton>
          <IconButton
            aria-label="Visit GitHub Repository"
            onClick={handleClickGithub}
            tooltipMessage="Visit Repo"
            style="dark"
          >
            <GitHubLogoIcon className="h-6 w-6" />
          </IconButton>
        </div>
      </div>
    </nav>
  );
}
