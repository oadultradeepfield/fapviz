"use client";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import CustomTooltip from "../Common/CustomTooltip";
import { useSidebarStore } from "@/stores/sidebarStore";

interface ToggleSidebarButtonProps {
  onClick: () => void;
}

export default function ToggleSidebarButton({
  onClick,
}: ToggleSidebarButtonProps) {
  const { isOpen } = useSidebarStore();
  const tooltipMessage = isOpen ? "Close Sidebar" : "Open Sidebar";

  const Button = (
    <button
      onClick={onClick}
      className={cn(
        "cursor-pointer rounded-xl p-2 text-gray-100 transition hover:bg-stone-700 focus:outline-none active:bg-stone-600",
        isOpen && "bg-stone-700 hover:bg-stone-600",
      )}
    >
      <HamburgerMenuIcon className="h-6 w-6" />
    </button>
  );

  return <CustomTooltip trigger={Button} tooltipMessage={tooltipMessage} />;
}
