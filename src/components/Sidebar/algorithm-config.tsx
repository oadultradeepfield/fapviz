"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import AlgorithmSelector from "./algorithm-selector";
import ColorPaletteSelector from "./color-palette-selector";
import SpeedSelector from "./speed-selector";
import ActionButtons from "./form-buttons";
import { AlgorithmName, ColorPaletteName, SpeedName } from "@/lib/types";

const FormSchema = z.object({
  algorithm: z.nativeEnum(AlgorithmName).default(AlgorithmName.Backtracking),
  colorPalette: z
    .nativeEnum(ColorPaletteName)
    .default(ColorPaletteName.VividLabels),
  speed: z.nativeEnum(SpeedName).default(SpeedName.Normal),
});

export default function AlgorithmConfig() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  return (
    <Form {...form}>
      <form className="w-4/5 space-y-6">
        <AlgorithmSelector control={form.control} />
        <ColorPaletteSelector control={form.control} />
        <SpeedSelector control={form.control} />
        <ActionButtons />
      </form>
    </Form>
  );
}
