import { EMPTY_GRAPH } from "@/lib/graph/constants";
import { AdjacencyList, Edge, Graph, Node } from "@/lib/graph/types";
import {
  addEdge,
  addNode,
  createAdjacencyList,
  removeEdge,
  removeNode,
} from "@/lib/graph/utils";
import { create } from "zustand";

interface GraphStore {
  graph: Graph;
  adjacencyList?: AdjacencyList;
  nodeCounter: number;
  edgeCounter: number;
  graphBackup: Graph;
  clearGraph: () => void;
  undoClearGraph: () => void;
  setAdjacencyList: () => void;
  createNode: () => void;
  createEdge: (source: string, target: string) => void;
  deleteNode: (id: string) => void;
  deleteEdge: (id: string) => void;
}

export const useGraphStore = create<GraphStore>((set) => ({
  graph: EMPTY_GRAPH,
  adjacencyList: undefined,
  nodeCounter: 0,
  edgeCounter: 0,
  graphBackup: EMPTY_GRAPH,

  clearGraph: () => {
    set((state) => {
      const backup = state.graph;
      return {
        graph: EMPTY_GRAPH,
        graphBackup: backup,
        adjacencyList: undefined,
        nodeCounter: 0,
        edgeCounter: 0,
      };
    });
  },

  undoClearGraph: () => {
    set((state) => ({
      graph: state.graphBackup,
      adjacencyList: createAdjacencyList(state.graphBackup),
      nodeCounter: state.graphBackup.nodes.length,
      edgeCounter: state.graphBackup.edges.length,
    }));
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
