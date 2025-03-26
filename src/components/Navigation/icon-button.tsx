import CustomTooltip from "../common/custom-tooltip";
import { Button } from "../ui/button";

interface IconButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  tooltipMessage?: string;
  variant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost";
}

export default function IconButton({
  children,
  onClick,
  tooltipMessage,
  variant,
}: IconButtonProps) {
  const button = (
    <Button onClick={onClick} variant={variant} size="icon">
      {children}
    </Button>
  );

  return tooltipMessage ? (
    <CustomTooltip trigger={button} tooltipMessage={tooltipMessage} />
  ) : (
    button
  );
}
