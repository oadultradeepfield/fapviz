import {
  AlgorithmName,
  ColorPalette,
  ColorPaletteName,
  Speed,
  SpeedName,
} from "./types";

export const Algorithms: Record<string, AlgorithmName[]> = {
  "Brute Force": [AlgorithmName.Backtracking],
  Heuristic: [AlgorithmName.Greedy],
  "Degree Based Heuristics": [AlgorithmName.DSatur, AlgorithmName.WelshPowell],
} as const;

export const Colors: Record<string, string> = {
  // Referencing vibrant colors from Material Design and Google's palette
  VIVID_RED: "#d32f2f",
  VIVID_GREEN: "#2e7d32",
  VIVID_YELLOW: "#fbc02d",
  VIVID_BLUE: "#1565c0",
  VIVID_ORANGE: "#ef6c00",
  VIVID_PURPLE: "#6a1b9a",
  VIVID_CYAN: "#00838f",
  VIVID_MAGENTA: "#ad1457",
  VIVID_LIME: "#afb42b",
  VIVID_PINK: "#d81b60",

  // Pastel colors inspired by Japanese and Scandinavian design palettes
  PASTEL_RED: "#ffabab",
  PASTEL_CORAL: "#ffd1dc",
  PASTEL_PEACH: "#ffcdb2",
  PASTEL_GREEN: "#c5e1a5",
  PASTEL_AQUA: "#a5f1e9",
  PASTEL_LILAC: "#b3a6c4",
  PASTEL_YELLOW: "#ffeda3",
  PASTEL_BLUE: "#c6e2ff",
  PASTEL_ROSE: "#f4b4b4",
  PASTEL_PURPLE: "#ceb3ff",

  // Neon colors with references from digital art and synthwave aesthetics
  NEON_RED: "#ff2a6d",
  NEON_ORANGE: "#ff6b35",
  NEON_YELLOW: "#ffdc00",
  NEON_GREEN: "#05f140",
  NEON_CYAN: "#2de1fc",
  NEON_INDIGO: "#5f4bb6",
  NEON_PINK: "#ff4384",
  NEON_PURPLE: "#9c27b0",
  NEON_FIRE: "#ff5722",
  NEON_BLUE: "#2196f3",
} as const;

export const ColorPalettes: ColorPalette[] = [
  {
    paletteName: ColorPaletteName.VividLabels,
    colors: [
      Colors.VIVID_RED,
      Colors.VIVID_GREEN,
      Colors.VIVID_YELLOW,
      Colors.VIVID_BLUE,
      Colors.VIVID_ORANGE,
      Colors.VIVID_PURPLE,
      Colors.VIVID_CYAN,
      Colors.VIVID_MAGENTA,
      Colors.VIVID_LIME,
      Colors.VIVID_PINK,
    ],
  },
  {
    paletteName: ColorPaletteName.PastelBrights,
    colors: [
      Colors.PASTEL_RED,
      Colors.PASTEL_CORAL,
      Colors.PASTEL_PEACH,
      Colors.PASTEL_GREEN,
      Colors.PASTEL_AQUA,
      Colors.PASTEL_LILAC,
      Colors.PASTEL_YELLOW,
      Colors.PASTEL_BLUE,
      Colors.PASTEL_ROSE,
      Colors.PASTEL_PURPLE,
    ],
  },
  {
    paletteName: ColorPaletteName.NeonCyber,
    colors: [
      Colors.NEON_RED,
      Colors.NEON_ORANGE,
      Colors.NEON_YELLOW,
      Colors.NEON_GREEN,
      Colors.NEON_CYAN,
      Colors.NEON_INDIGO,
      Colors.NEON_PINK,
      Colors.NEON_PURPLE,
      Colors.NEON_FIRE,
      Colors.NEON_BLUE,
    ],
  },
] as const;

export const Speeds: Speed[] = [
  {
    speedName: SpeedName.Slow,
    speedFactor: 0.5,
  },
  {
    speedName: SpeedName.Normal,
    speedFactor: 1.0,
  },
  {
    speedName: SpeedName.Fast,
    speedFactor: 2.0,
  },
] as const;
