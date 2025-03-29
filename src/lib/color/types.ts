export enum ColorPaletteName {
  VividLabels = "Vivid Labels",
  PastelBrights = "Pastel Brights",
  NeonCyber = "Neon Cyber",
}

export interface ColorPalette {
  paletteName: ColorPaletteName;
  colors: string[];
}
