export enum ColorPaletteName {
  VividLabels = "Vivid Labels",
  PastelBrights = "Pastel Brights",
  NeonCyber = "Neon Cyber",
}

export interface ColorPalette {
  paletteName: ColorPaletteName;
  colors: string[];
}

export interface Node {
  id: string;
  label: string;
  colorIndex?: number;
  fill?: string;
  degree: number;
  saturationDegree: number;
}

export interface Edge {
  id: string;
  label: string;
  source: string;
  target: string;
}

export interface Graph {
  nodes: Node[];
  edges: Edge[];
}

export type AdjacencyList = Record<string, string[]>;

export enum AlgorithmName {
  Backtracking = "Backtracking",
  Greedy = "Greedy",
  DSatur = "DSatur",
  WelshPowell = "Welsh-Powell",
}

export interface Algorithm {
  algorithmName: AlgorithmName;
  algorithm: (graph: AdjacencyList) => void;
}

export enum SpeedName {
  Slow = "Slow (0.5x)",
  Normal = "Normal",
  Fast = "Fast (2x)",
}

export interface Speed {
  speedName: SpeedName;
  speedFactor: number;
}
