interface ColorIconProps {
  index: number;
  backgroundColor: string;
}

export default function ColorIcon({ index, backgroundColor }: ColorIconProps) {
  return (
    <div
      key={index}
      className="h-5 w-5 rounded-xs"
      style={{ backgroundColor: backgroundColor }}
    />
  );
}
