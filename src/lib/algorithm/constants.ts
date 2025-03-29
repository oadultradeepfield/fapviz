import { AlgorithmName, Speed, SpeedName } from "./types";

export const ALGORITHMS: Record<string, AlgorithmName[]> = {
  "Brute Force": [AlgorithmName.Backtracking],
  Heuristic: [AlgorithmName.Greedy],
  "Degree Based Heuristics": [AlgorithmName.DSatur, AlgorithmName.WelshPowell],
} as const;

export const SPEEDS: Speed[] = [
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
