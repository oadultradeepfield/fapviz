"use client";

import { useSidebarStore } from "@/stores/sidebar-store";
import { Menu } from "lucide-react";
import CustomTooltip from "../common/custom-tooltip";
import { Button } from "../ui/button";

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
      <Menu className="scale-125" />
    </Button>
  );

  return <CustomTooltip trigger={button} tooltipMessage={tooltipMessage} />;
}
