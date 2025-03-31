import { Graph } from "./types";

export const EMPTY_GRAPH: Graph = { nodes: [], edges: [] } as const;
export const GRAPH_STORAGE_KEY = "graph_data" as const;
export const COUNTER_STORAGE_KEY = "node_counter" as const;
