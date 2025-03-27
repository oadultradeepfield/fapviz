import { ColorPalettes } from "@/lib/constants";
import { ColorPaletteName } from "@/lib/types";

interface ColorPaletteIconProps {
  colorPaletteName: ColorPaletteName;
}

export default function ColorPaletteIcon({
  colorPaletteName,
}: ColorPaletteIconProps) {
  const colors = ColorPalettes.find(
    (palette) => palette.paletteName === colorPaletteName,
  )!.colors;

  return (
    <div className="flex gap-0.5">
      {colors.slice(0, 4).map((color, index) => (
        <div
          key={index}
          className="h-5 w-5 rounded-xs"
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
}
