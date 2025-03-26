"use client";

import CustomTooltip from "../common/custom-tooltip";
import { useSidebarStore } from "@/stores/sidebar-store";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";

interface ToggleSidebarButtonProps {
  onClick: () => void;
}

export default function ToggleSidebarButton({
  onClick,
}: ToggleSidebarButtonProps) {
  const { isOpen } = useSidebarStore();
  const tooltipMessage = isOpen ? "Close Sidebar" : "Open Sidebar";

  const button = (
    <Button onClick={onClick} size="icon">
      <MenuIcon className="scale-125" />
    </Button>
  );

  return <CustomTooltip trigger={button} tooltipMessage={tooltipMessage} />;
}
