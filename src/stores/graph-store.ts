import {
  COUNTER_STORAGE_KEY,
  EMPTY_GRAPH,
  GRAPH_STORAGE_KEY,
} from "@/lib/graph/constants";
import { AdjacencyList, Graph, Node } from "@/lib/graph/types";
import {
  addEdge,
  addNode,
  createAdjacencyList,
  removeEdge,
  removeNode,
} from "@/lib/graph/utils";
import { Position, type Edge } from "@xyflow/react";
import { create } from "zustand";

interface GraphStore {
  graph: Graph;
  adjacencyList?: AdjacencyList;
  nodeCounter: number;
  graphBackup: Graph;
  selectedNodes: string[];
  selectedEdges: string[];
  setSelectedElements: ({ nodes, edges }: Graph) => void;
  clearGraph: () => void;
  undoDeleteElements: () => void;
  setAdjacencyList: () => void;
  createNode: () => void;
  createEdge: (source: string, target: string) => void;
  updateNodePosition: (
    id: string,
    newPosition: { x: number; y: number },
  ) => void;
  deleteSelectedElements: () => void;
}

export const useGraphStore = create<GraphStore>((set) => {
  const loadGraphFromStorage = (): Graph => {
    if (typeof window === "undefined") return EMPTY_GRAPH;
    const storedGraph = localStorage.getItem(GRAPH_STORAGE_KEY);
    return storedGraph ? JSON.parse(storedGraph) : EMPTY_GRAPH;
  };

  const loadCounterFromStorage = (): number => {
    if (typeof window === "undefined") return 0;
    const storedCounter = localStorage.getItem(COUNTER_STORAGE_KEY);
    return Number(storedCounter);
  };

  const saveGraphToStorage = (graph: Graph) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(GRAPH_STORAGE_KEY, JSON.stringify(graph));
    }
  };

  const saveCounterToStorage = (nodeCounter: number) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(COUNTER_STORAGE_KEY, nodeCounter.toString());
    }
  };

  return {
    graph: loadGraphFromStorage(),
    adjacencyList: undefined,
    nodeCounter: loadCounterFromStorage(),
    graphBackup: EMPTY_GRAPH,
    selectedNodes: [],
    selectedEdges: [],

    setSelectedElements: ({ nodes, edges }) => {
      set(() => ({
        selectedNodes: nodes.map((node) => node.id),
        selectedEdges: edges.map((edge) => edge.id),
      }));
    },

    clearGraph: () => {
      set((state) => {
        const backup = state.graph;
        saveGraphToStorage(EMPTY_GRAPH);
        saveCounterToStorage(0);
        return {
          graph: EMPTY_GRAPH,
          graphBackup: backup,
          adjacencyList: undefined,
          nodeCounter: 0,
        };
      });
    },

    undoDeleteElements: () => {
      set((state) => {
        saveGraphToStorage(state.graphBackup);
        const count = state.graphBackup.nodes.length;
        saveCounterToStorage(count);
        return {
          graph: state.graphBackup,
          adjacencyList: createAdjacencyList(state.graphBackup),
          nodeCounter: count,
        };
      });
    },

    setAdjacencyList: () => {
      set((state) => ({ adjacencyList: createAdjacencyList(state.graph) }));
    },

    createNode: () => {
      set((state) => {
        if (state.nodeCounter >= 20) {
          return state;
        }

        const counter = state.nodeCounter;
        const gridSize = 100;
        const gridCols = 5;

        const col = counter % gridCols;
        const row = Math.floor(counter / gridCols);

        const offsetX = (counter % 7) * 5;
        const offsetY = (counter % 11) * 5;

        const newNode: Node = {
          id: counter.toString(),
          data: { label: "📡" },
          style: {
            width: 50,
            height: 50,
            fontSize: 20,
          },
          position: {
            x: col * gridSize + offsetX,
            y: row * gridSize + offsetY,
          },
          sourcePosition: Position.Right,
          targetPosition: Position.Left,
          degree: 0,
          saturationDegree: 0,
        };

        const newGraph = addNode(state.graph, newNode);
        saveGraphToStorage(newGraph);
        saveCounterToStorage(state.nodeCounter + 1);

        return {
          graph: newGraph,
          nodeCounter: state.nodeCounter + 1,
        };
      });
    },

    createEdge: (source, target) => {
      set((state) => {
        const newEdge: Edge = {
          id: `${source}-${target}`,
          label: `${source} -> ${target}`,
          source,
          target,
        };

        const newGraph = addEdge(state.graph, newEdge);
        saveGraphToStorage(newGraph);

        return {
          graph: newGraph,
        };
      });
    },

    updateNodePosition: (id, newPosition) => {
      set((state) => {
        const updatedNodes = state.graph.nodes.map((node) =>
          node.id === id ? { ...node, position: newPosition } : node,
        );

        const newGraph = { ...state.graph, nodes: updatedNodes };
        saveGraphToStorage(newGraph);

        return {
          graph: newGraph,
        };
      });
    },

    deleteSelectedElements: () => {
      set((state) => {
        const backup = state.graph;
        let newGraph = state.graph;

        state.selectedNodes.forEach((nodeId) => {
          newGraph = removeNode(newGraph, { id: nodeId } as Node);
        });

        state.selectedEdges.forEach((edgeId) => {
          newGraph = removeEdge(newGraph, { id: edgeId } as Edge);
        });

        saveGraphToStorage(newGraph);
        const updatedCounter = newGraph.nodes.length;
        saveCounterToStorage(updatedCounter);

        return {
          graph: newGraph,
          graphBackup: backup,
          selectedNodes: [],
          selectedEdges: [],
          nodeCounter: updatedCounter,
        };
      });
    },
  };
});
