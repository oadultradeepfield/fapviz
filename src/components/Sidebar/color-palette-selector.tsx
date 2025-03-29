import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ColorPaletteName } from "@/lib/color/types";
import { useAlgorithmConfigStore } from "@/stores/algorithm-config-store";
import ColorPaletteIcon from "../common/color-palette-icon";

interface ColorPaletteSelectorProps {
  control: any;
}

export default function ColorPaletteSelector({
  control,
}: ColorPaletteSelectorProps) {
  const { setColorPalette } = useAlgorithmConfigStore();

  return (
    <FormField
      control={control}
      name="colorPalette"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Color Palette</FormLabel>
          <Select
            onValueChange={(value) => {
              field.onChange(value);
              setColorPalette(value as ColorPaletteName);
            }}
            defaultValue={ColorPaletteName.VividLabels}
          >
            <FormControl>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a palette for coloring nodes" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {Object.values(ColorPaletteName).map((palette) => (
                <SelectItem key={palette} value={palette}>
                  <div className="flex items-center gap-3">
                    <ColorPaletteIcon
                      colorPaletteName={palette}
                      numColors={4}
                      showTooltip={false}
                    />
                    {palette}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
