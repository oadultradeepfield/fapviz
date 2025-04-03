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
import { SpeedName } from "@/lib/algorithm/types";
import { useAlgorithmConfigStore } from "@/stores/algorithm-config-store";

interface SpeedSelectorProps {
  control: any;
}

export default function SpeedSelector({ control }: SpeedSelectorProps) {
  const { setSpeed } = useAlgorithmConfigStore();

  return (
    <FormField
      control={control}
      name="speed"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Playback Speed</FormLabel>
          <Select
            onValueChange={(value) => {
              field.onChange(value);
              setSpeed(value as SpeedName);
            }}
            defaultValue={"Normal"}
          >
            <FormControl>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a playback speed" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {Object.values(SpeedName).map((palette) => (
                <SelectItem key={palette} value={palette}>
                  {palette}
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
