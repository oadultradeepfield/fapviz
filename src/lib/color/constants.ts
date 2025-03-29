import { ColorPalette, ColorPaletteName } from "./types";

export const COLORS: Record<string, string> = {
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
      COLORS.VIVID_RED,
      COLORS.VIVID_GREEN,
      COLORS.VIVID_YELLOW,
      COLORS.VIVID_BLUE,
      COLORS.VIVID_ORANGE,
      COLORS.VIVID_PURPLE,
      COLORS.VIVID_CYAN,
      COLORS.VIVID_MAGENTA,
      COLORS.VIVID_LIME,
      COLORS.VIVID_PINK,
    ],
  },
  {
    paletteName: ColorPaletteName.PastelBrights,
    colors: [
      COLORS.PASTEL_RED,
      COLORS.PASTEL_CORAL,
      COLORS.PASTEL_PEACH,
      COLORS.PASTEL_GREEN,
      COLORS.PASTEL_AQUA,
      COLORS.PASTEL_LILAC,
      COLORS.PASTEL_YELLOW,
      COLORS.PASTEL_BLUE,
      COLORS.PASTEL_ROSE,
      COLORS.PASTEL_PURPLE,
    ],
  },
  {
    paletteName: ColorPaletteName.NeonCyber,
    colors: [
      COLORS.NEON_RED,
      COLORS.NEON_ORANGE,
      COLORS.NEON_YELLOW,
      COLORS.NEON_GREEN,
      COLORS.NEON_CYAN,
      COLORS.NEON_INDIGO,
      COLORS.NEON_PINK,
      COLORS.NEON_PURPLE,
      COLORS.NEON_FIRE,
      COLORS.NEON_BLUE,
    ],
  },
] as const;
