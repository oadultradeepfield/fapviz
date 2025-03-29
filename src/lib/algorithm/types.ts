import { AdjacencyList } from "../graph/types";

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
