import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import CustomTooltip from "../Common/CustomTooltip";

interface ToggleSidebarButtonProps {
  isSidebarActive: boolean;
  onClick: () => void;
}

export default function ToggleSidebarButton({
  isSidebarActive,
  onClick,
}: ToggleSidebarButtonProps) {
  const tooltipMessage = isSidebarActive ? "Close Sidebar" : "Open Sidebar";
  const Button = (
    <button
      onClick={onClick}
      className={cn(
        "cursor-pointer rounded-xl p-2 text-gray-100 transition hover:bg-stone-700 focus:outline-none active:bg-stone-600",
        isSidebarActive && "bg-stone-700 hover:bg-stone-600",
      )}
    >
      <MixerHorizontalIcon className="h-6 w-6" />
    </button>
  );

  return <CustomTooltip trigger={Button} tooltipMessage={tooltipMessage} />;
}
