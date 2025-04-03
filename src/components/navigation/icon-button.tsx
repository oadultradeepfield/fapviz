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
  disabled?: boolean;
}

export default function IconButton({
  children,
  onClick,
  tooltipMessage,
  variant,
  disabled,
}: IconButtonProps) {
  const button = (
    <Button onClick={onClick} variant={variant} size="icon" disabled={disabled}>
      {children}
    </Button>
  );

  return tooltipMessage ? (
    <CustomTooltip trigger={button} tooltipMessage={tooltipMessage} />
  ) : (
    button
  );
}
