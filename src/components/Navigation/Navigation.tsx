"use client";

import { useSaveGraph } from "@/hooks/save-graph";
import { useGraphStore } from "@/stores/graph-store";
import { useSidebarStore } from "@/stores/sidebar-store";
import { Share } from "lucide-react";
import { useEffect, useState } from "react";
import AppLogo from "../common/app-logo";
import { Icons } from "../ui/icons";
import IconButton from "./icon-button";
import { ShareDialog } from "./share-dialog";
import ToggleSidebarButton from "./toggle-sidebar-button";

export default function Navigation() {
  const { setIsOpen } = useSidebarStore();
  const handleClickShare = useSaveGraph();
  const { graph } = useGraphStore();
  const [isGraphEmpty, setIsGraphEmpty] = useState(false);

  useEffect(() => {
    setIsGraphEmpty(graph.nodes.length === 0 && graph.edges.length === 0);
  }, [graph]);

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
          <ShareDialog
            trigger={
              <IconButton
                aria-label="Share Current Graph"
                onClick={handleClickShare}
                tooltipMessage="Share"
                disabled={isGraphEmpty}
              >
                <Share className="scale-125" />
              </IconButton>
            }
          />
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
