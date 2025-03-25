import { ColorPalette, Speed } from "./types";

export const COLORS = {
  VIVID_RED: "#e6194b",
  VIVID_GREEN: "#3cb44b",
  VIVID_YELLOW: "#ffe119",
  VIVID_BLUE: "#4363d8",
  VIVID_ORANGE: "#f58231",
  VIVID_PURPLE: "#911eb4",
  VIVID_CYAN: "#46f0f0",
  VIVID_MAGENTA: "#f032e6",
  VIVID_LIME: "#bcf60c",
  VIVID_PINK: "#fabebe",

  PASTEL_RED: "#ff9aa2",
  PASTEL_CORAL: "#ffb7b2",
  PASTEL_PEACH: "#ffdac1",
  PASTEL_GREEN: "#e2f0cb",
  PASTEL_AQUA: "#b5ead7",
  PASTEL_LILAC: "#c7ceea",
  PASTEL_YELLOW: "#ffcb77",
  PASTEL_BLUE: "#a1cfff",
  PASTEL_ROSE: "#d4a5a5",
  PASTEL_PURPLE: "#b39ddb",

  NEON_RED: "#ff073a",
  NEON_ORANGE: "#ff8c00",
  NEON_YELLOW: "#ffdd33",
  NEON_GREEN: "#33ff57",
  NEON_CYAN: "#00ffff",
  NEON_INDIGO: "#4b0082",
  NEON_PINK: "#ff1493",
  NEON_PURPLE: "#800080",
  NEON_FIRE: "#ff4500",
  NEON_BLUE: "#1e90ff",
} as const;

export const ColorPalettes: ColorPalette[] = [
  {
    paletteName: "Vivid Labels",
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
    paletteName: "Pastel Brights",
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
    paletteName: "Neon Cyber",
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

export const Speeds: Speed[] = [
  {
    speedName: "Slow",
    speedFactor: 0.5,
  },
  {
    speedName: "Fast",
    speedFactor: 2.0,
  },
  {
    speedName: "Normal",
    speedFactor: 1.0,
  },
];
