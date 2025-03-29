import { EMPTY_GRAPH } from "@/lib/graph/constants";
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
  edgeCounter: number;
  graphBackup: Graph;
  clearGraph: () => void;
  undoClearGraph: () => void;
  setAdjacencyList: () => void;
  createNode: () => void;
  createEdge: (source: string, target: string) => void;
  updateNodePosition: (
    id: string,
    newPosition: { x: number; y: number },
  ) => void;
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

  updateNodePosition: (id, newPosition) =>
    set((state) => {
      const updatedNodes = state.graph.nodes.map((node) =>
        node.id === id ? { ...node, position: newPosition } : node,
      );
      return {
        graph: { ...state.graph, nodes: updatedNodes },
      };
    }),

  deleteNode: (id) => {
    set((state) => ({ graph: removeNode(state.graph, { id } as Node) }));
  },

  deleteEdge: (id) => {
    set((state) => ({ graph: removeEdge(state.graph, { id } as Edge) }));
  },
}));
