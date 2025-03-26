import { Tooltip } from "@base-ui-components/react/tooltip";
import TooltipAnimation from "./TooltipAnimation";
import React from "react";
import ArrowSvg from "./ArrowSvg";

interface CustomTooltipProps {
  trigger: React.ReactElement<Record<string, unknown>, string>;
  tooltipMessage: string;
}

export default function CustomTooltip({
  trigger,
  tooltipMessage,
}: CustomTooltipProps) {
  return (
    <Tooltip.Provider delay={300}>
      <Tooltip.Root>
        <Tooltip.Trigger render={trigger} />
        <Tooltip.Portal>
          <Tooltip.Positioner sideOffset={5}>
            <Tooltip.Popup>
              <TooltipAnimation>
                {tooltipMessage}
                <Tooltip.Arrow className="data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180">
                  <ArrowSvg />
                </Tooltip.Arrow>
              </TooltipAnimation>
            </Tooltip.Popup>
          </Tooltip.Positioner>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
