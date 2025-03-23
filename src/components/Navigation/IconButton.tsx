import CustomTooltip from "../Common/CustomTooltip";
import { cn } from "@/lib/utils";

interface IconButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  tooltipMessage?: string;
  style: "light" | "dark";
}

export default function IconButton({
  children,
  onClick,
  tooltipMessage,
  style,
}: IconButtonProps) {
  const baseStyling =
    "cursor-pointer rounded-xl p-2  transition focus:outline-none";
  const lightStyling = "text-stone-900 hover:bg-gray-200  active:bg-stone-300";
  const darkStyling = "text-gray-100 hover:bg-stone-700  active:bg-stone-600";

  const Button = (
    <button
      onClick={onClick}
      className={cn(
        baseStyling,
        style === "light" ? lightStyling : darkStyling,
      )}
    >
      {children}
    </button>
  );

  return tooltipMessage ? (
    <CustomTooltip trigger={Button} tooltipMessage={tooltipMessage} />
  ) : (
    Button
  );
}
