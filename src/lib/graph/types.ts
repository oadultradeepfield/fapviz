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

export enum TemplateGraphName {
  EmptyGraph = "EMPTY_GRAPH",
  PlanarGraph = "PLANAR_GRAPH",
  CompleteGraph = "COMPLETE_GRAPH",
  BipartiteGraph = "BIPARTITE_GRAPH",
}

export type AdjacencyList = Record<string, string[]>;
