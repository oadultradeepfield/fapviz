import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import React from "react";

interface CustomTooltipProps {
  trigger: React.ReactNode;
  tooltipMessage: string;
  side?: "top" | "right" | "bottom" | "left";
}

export default function CustomTooltip({
  trigger,
  tooltipMessage,
  side,
}: CustomTooltipProps) {
  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>{trigger}</TooltipTrigger>
        <TooltipContent side={side}>{tooltipMessage}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
