"use client";

import { useAlgorithmConfigStore } from "@/stores/algorithm-config-store";
import { useAnswerStore } from "@/stores/answer-store";
import DeleteButton from "../canvas/delete-button";
import ColorPaletteIcon from "./color-palette-icon";

export default function CanvasDisplay() {
  const { chromaticNumber } = useAnswerStore();
  const { colorPalette } = useAlgorithmConfigStore();

  return (
    <div className="fixed top-0 right-5 z-10 mt-20 flex flex-col items-end">
      <div className="mb-1">
        <span className="font-semibold">Total Frequencies:</span>
        <span className="ml-2">{chromaticNumber || 0}</span>
      </div>
      <ColorPaletteIcon
        colorPaletteName={colorPalette}
        numColors={chromaticNumber || 0}
        showTooltip={true}
      />
      <DeleteButton />
    </div>
  );
}
