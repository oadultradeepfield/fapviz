import { AlgorithmName, ColorPaletteName, SpeedName } from "@/lib/types";
import { create } from "zustand";

interface ConfigurationStore {
  algorithm: AlgorithmName;
  colorPalette: ColorPaletteName;
  speed: SpeedName;
  setAlgorithm: (algorithm: AlgorithmName) => void;
  setColorPalette: (colorPalette: ColorPaletteName) => void;
  setSpeed: (speed: SpeedName) => void;
}

export const useConfigurationStore = create<ConfigurationStore>((set) => ({
  algorithm: "Greedy",
  colorPalette: "Vivid Labels",
  speed: "Normal",
  setAlgorithm: (algorithm) => set({ algorithm }),
  setColorPalette: (colorPalette) => set({ colorPalette }),
  setSpeed: (speed) => set({ speed }),
}));
