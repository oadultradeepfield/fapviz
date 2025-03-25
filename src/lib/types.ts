export type ColorPaletteName = "Vivid Labels" | "Pastel Brights" | "Neon Cyber";

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

export type AlgorithmName =
  | "Greedy"
  | "Backtracking"
  | "DSatur"
  | "Welsh-Powell";

export interface Algorithm {
  algorithmName: AlgorithmName;
  algorithm: (graph: AdjacencyList) => void;
}

export type SpeedName = "Slow" | "Normal" | "Fast";

export interface Speed {
  speedName: SpeedName;
  speedFactor: number;
}
