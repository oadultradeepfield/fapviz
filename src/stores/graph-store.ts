import { create } from "zustand";
import {
  addNode,
  removeNode,
  addEdge,
  removeEdge,
  createAdjacencyList,
} from "@/lib/utils";
import { Graph, Node, Edge, AdjacencyList } from "@/lib/types";

// TODO: Add the actual `GraphCanvas` state from Reagraph

interface GraphStore {
  graph: Graph;
  adjacencyList?: AdjacencyList;
  nodeCounter: number;
  edgeCounter: number;
  clearGraph: () => void;
  setAdjacencyList: () => void;
  createNode: () => void;
  createEdge: (source: string, target: string) => void;
  deleteNode: (id: string) => void;
  deleteEdge: (id: string) => void;
}

export const useGraphStore = create<GraphStore>((set) => ({
  graph: { nodes: [], edges: [] },
  adjacencyList: undefined,
  nodeCounter: 0,
  edgeCounter: 0,

  clearGraph: () => {
    set({
      graph: { nodes: [], edges: [] },
      adjacencyList: undefined,
      nodeCounter: 0,
      edgeCounter: 0,
    });
  },

  setAdjacencyList: () => {
    set((state) => ({ adjacencyList: createAdjacencyList(state.graph) }));
  },

  createNode: () => {
    set((state) => {
      const newNode: Node = {
        id: state.nodeCounter.toString(),
        label: `Node ${state.nodeCounter}`,
        colorIndex: undefined,
        fill: undefined,
        degree: 0,
        saturationDegree: 0,
      };

      return {
        graph: addNode(state.graph, newNode),
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

      return {
        graph: addEdge(state.graph, newEdge),
        edgeCounter: state.edgeCounter + 1,
      };
    });
  },

  deleteNode: (id) => {
    set((state) => ({ graph: removeNode(state.graph, { id } as Node) }));
  },

  deleteEdge: (id) => {
    set((state) => ({ graph: removeEdge(state.graph, { id } as Edge) }));
  },
}));
