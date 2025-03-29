export interface Node {
  id: string;
  label: string;
  colorIndex?: number;
  fill?: string;
  degree?: number;
  saturationDegree?: number;
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
