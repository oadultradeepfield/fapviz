import { ColorPalettes } from "@/lib/color/constants";
import { ColorPaletteName } from "@/lib/color/types";
import ColorIcon from "./color-icon";
import CustomTooltip from "./custom-tooltip";

interface ColorPaletteIconProps {
  colorPaletteName: ColorPaletteName;
  numColors: number;
  showTooltip: boolean;
}

export default function ColorPaletteIcon({
  colorPaletteName,
  numColors,
  showTooltip,
}: ColorPaletteIconProps) {
  const colors =
    ColorPalettes.find((palette) => palette.paletteName === colorPaletteName)
      ?.colors || [];

  return (
    <div className="ml-auto flex gap-0.5">
      {colors.slice(0, numColors).map((backgroundColor, index) => {
        const colorIcon = (
          <div key={index}>
            <ColorIcon index={index} backgroundColor={backgroundColor} />
          </div>
        );

        return showTooltip ? (
          <CustomTooltip
            key={index}
            trigger={colorIcon}
            tooltipMessage={backgroundColor}
            side="bottom"
          />
        ) : (
          colorIcon
        );
      })}
    </div>
  );
}
