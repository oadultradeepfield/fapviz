import { AlgorithmName, SpeedName } from "@/lib/algorithm/types";
import { ColorPaletteName } from "@/lib/color/types";
import { create } from "zustand";

interface AlgorithmConfigStore {
  algorithm: AlgorithmName;
  colorPalette: ColorPaletteName;
  speed: SpeedName;
  setAlgorithm: (algorithm: AlgorithmName) => void;
  setColorPalette: (colorPalette: ColorPaletteName) => void;
  setSpeed: (speed: SpeedName) => void;
}

export const useAlgorithmConfigStore = create<AlgorithmConfigStore>((set) => ({
  algorithm: AlgorithmName.Backtracking,
  colorPalette: ColorPaletteName.VividLabels,
  speed: SpeedName.Normal,
  setAlgorithm: (algorithm) => set({ algorithm }),
  setColorPalette: (colorPalette) => set({ colorPalette }),
  setSpeed: (speed) => set({ speed }),
}));
