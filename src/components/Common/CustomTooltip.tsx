import { Tooltip } from "radix-ui";
import TooltipAnimation from "./TooltipAnimation";

interface CustomTooltipProps {
  trigger: React.ReactNode;
  tooltipMessage: string;
}

export default function CustomTooltip({
  trigger,
  tooltipMessage,
}: CustomTooltipProps) {
  return (
    <Tooltip.Provider delayDuration={300}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{trigger}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content asChild>
            <TooltipAnimation>
              {tooltipMessage}
              <Tooltip.Arrow className="fill-stone-900" />
            </TooltipAnimation>
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
