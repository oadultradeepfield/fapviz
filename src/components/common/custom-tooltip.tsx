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
}

export default function CustomTooltip({
  trigger,
  tooltipMessage,
}: CustomTooltipProps) {
  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>{trigger}</TooltipTrigger>
        <TooltipContent>{tooltipMessage}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
