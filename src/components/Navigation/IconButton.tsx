import CustomTooltip from "../Common/CustomTooltip";

interface IconButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  tooltipMessage: string;
}

export default function IconButton({
  children,
  onClick,
  tooltipMessage,
}: IconButtonProps) {
  const Button = (
    <button
      onClick={onClick}
      className="cursor-pointer rounded-xl p-2 text-gray-100 transition hover:bg-stone-700 focus:outline-none active:bg-stone-600"
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
