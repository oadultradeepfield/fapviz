import { type Edge, type Node as RFNode } from "@xyflow/react";

export interface Node extends RFNode {
  colorIndex?: number;
  degree?: number;
  saturationDegree?: number;
}

export interface Graph {
  nodes: Node[];
  edges: Edge[];
}

export type AdjacencyList = Record<string, string[]>;
