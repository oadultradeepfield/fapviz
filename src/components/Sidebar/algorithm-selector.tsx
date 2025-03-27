import { AlgorithmName } from "@/lib/types";
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
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import { useAlgorithmConfigStore } from "@/stores/algorithm-config-store";
import { Algorithms } from "@/lib/constants";

interface AlgorithmSelectorProps {
  control: any;
}

export default function AlgorithmSelector({ control }: AlgorithmSelectorProps) {
  const { setAlgorithm } = useAlgorithmConfigStore();

  return (
    <FormField
      control={control}
      name="algorithm"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Algorithm</FormLabel>
          <Select
            onValueChange={(value) => {
              field.onChange(value);
              setAlgorithm(value as AlgorithmName);
            }}
            defaultValue={"Backtracking"}
          >
            <FormControl>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select an algorithm" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {Object.entries(Algorithms).map(([group, algorithms]) => (
                <SelectGroup key={group}>
                  <SelectLabel>{group}</SelectLabel>
                  {algorithms.map((algorithm) => (
                    <SelectItem key={algorithm} value={algorithm}>
                      {algorithm}
                    </SelectItem>
                  ))}
                </SelectGroup>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
