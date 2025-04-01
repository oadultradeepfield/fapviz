import { Position } from "@xyflow/react";
import { Graph, TemplateGraphName } from "./types";

export const EMPTY_GRAPH: Graph = { nodes: [], edges: [] } as const;
export const GRAPH_STORAGE_KEY = "graph_data" as const;
export const COUNTER_STORAGE_KEY = "node_counter" as const;

export const NODE_STYLE = {
  width: 50,
  height: 50,
  fontSize: 20,
} as const;

export const PLANAR_GRAPH: Graph = {
  nodes: [
    {
      id: "0",
      data: { label: "📡" },
      style: NODE_STYLE,
      position: {
        x: -200,
        y: -100,
      },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      degree: 2,
      saturationDegree: 0,
    },
    {
      id: "1",
      data: { label: "📡" },
      style: NODE_STYLE,
      position: {
        x: -150,
        y: 100,
      },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      degree: 2,
      saturationDegree: 0,
    },
    {
      id: "2",
      data: { label: "📡" },
      style: NODE_STYLE,
      position: {
        x: 0,
        y: 0,
      },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      degree: 2,
      saturationDegree: 0,
    },
    {
      id: "3",
      data: { label: "📡" },
      style: NODE_STYLE,
      position: {
        x: 150,
        y: 100,
      },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      degree: 2,
      saturationDegree: 0,
    },
    {
      id: "4",
      data: { label: "📡" },
      style: NODE_STYLE,
      position: {
        x: 200,
        y: -100,
      },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      degree: 2,
      saturationDegree: 0,
    },
  ],
  edges: [
    {
      id: "0-1",
      source: "0",
      target: "1",
    },
    {
      id: "0-2",
      source: "0",
      target: "2",
    },
    {
      id: "1-2",
      source: "1",
      target: "2",
    },
    {
      id: "2-3",
      source: "2",
      target: "3",
    },
    {
      id: "2-4",
      source: "2",
      target: "4",
    },
    {
      id: "3-4",
      source: "3",
      target: "4",
    },
  ],
} as const;

export const COMPLETE_GRAPH: Graph = {
  nodes: [
    {
      id: "0",
      data: { label: "📡" },
      style: NODE_STYLE,
      position: {
        x: -200,
        y: 0,
      },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      degree: 2,
      saturationDegree: 0,
    },
    {
      id: "1",
      data: { label: "📡" },
      style: NODE_STYLE,
      position: {
        x: -100,
        y: 100,
      },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      degree: 2,
      saturationDegree: 0,
    },
    {
      id: "2",
      data: { label: "📡" },
      style: NODE_STYLE,
      position: {
        x: 0,
        y: -100,
      },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      degree: 2,
      saturationDegree: 0,
    },
    {
      id: "3",
      data: { label: "📡" },
      style: NODE_STYLE,
      position: {
        x: 100,
        y: 100,
      },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      degree: 2,
      saturationDegree: 0,
    },
    {
      id: "4",
      data: { label: "📡" },
      style: NODE_STYLE,
      position: {
        x: 200,
        y: 0,
      },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      degree: 2,
      saturationDegree: 0,
    },
  ],
  edges: [
    {
      id: "0-1",
      source: "0",
      target: "1",
    },
    {
      id: "0-2",
      source: "0",
      target: "2",
    },
    {
      id: "0-3",
      source: "0",
      target: "3",
    },
    {
      id: "0-4",
      source: "0",
      target: "4",
    },
    {
      id: "1-2",
      source: "1",
      target: "2",
    },
    {
      id: "1-3",
      source: "1",
      target: "3",
    },
    {
      id: "1-4",
      source: "1",
      target: "4",
    },
    {
      id: "2-3",
      source: "2",
      target: "3",
    },
    {
      id: "2-4",
      source: "2",
      target: "4",
    },
    {
      id: "3-4",
      source: "3",
      target: "4",
    },
  ],
} as const;

export const BIPARTITE_GRAPH: Graph = {
  nodes: [
    {
      id: "0",
      data: { label: "📡" },
      style: NODE_STYLE,
      position: {
        x: -100,
        y: -180,
      },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      degree: 2,
      saturationDegree: 0,
    },
    {
      id: "1",
      data: { label: "📡" },
      style: NODE_STYLE,
      position: {
        x: -100,
        y: -60,
      },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      degree: 2,
      saturationDegree: 0,
    },
    {
      id: "2",
      data: { label: "📡" },
      style: NODE_STYLE,
      position: {
        x: -100,
        y: 60,
      },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      degree: 2,
      saturationDegree: 0,
    },
    {
      id: "3",
      data: { label: "📡" },
      style: NODE_STYLE,
      position: {
        x: -100,
        y: 180,
      },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      degree: 2,
      saturationDegree: 0,
    },
    {
      id: "4",
      data: { label: "📡" },
      style: NODE_STYLE,
      position: {
        x: 100,
        y: -120,
      },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      degree: 2,
      saturationDegree: 0,
    },
    {
      id: "5",
      data: { label: "📡" },
      style: NODE_STYLE,
      position: {
        x: 100,
        y: 0,
      },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      degree: 2,
      saturationDegree: 0,
    },
    {
      id: "6",
      data: { label: "📡" },
      style: NODE_STYLE,
      position: {
        x: 100,
        y: 120,
      },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      degree: 2,
      saturationDegree: 0,
    },
  ],
  edges: [
    {
      id: "0-4",
      source: "0",
      target: "4",
    },
    {
      id: "0-5",
      source: "0",
      target: "5",
    },
    {
      id: "0-6",
      source: "0",
      target: "6",
    },
    {
      id: "1-4",
      source: "1",
      target: "4",
    },
    {
      id: "1-5",
      source: "1",
      target: "5",
    },
    {
      id: "1-6",
      source: "1",
      target: "6",
    },
    {
      id: "2-4",
      source: "2",
      target: "4",
    },
    {
      id: "2-5",
      source: "2",
      target: "5",
    },
    {
      id: "2-6",
      source: "2",
      target: "6",
    },
    {
      id: "3-4",
      source: "3",
      target: "4",
    },
    {
      id: "3-5",
      source: "3",
      target: "5",
    },
    {
      id: "3-6",
      source: "3",
      target: "6",
    },
  ],
} as const;

export const TEMPLATE_GRAPHS: Record<TemplateGraphName, Graph> = {
  EMPTY_GRAPH: EMPTY_GRAPH,
  PLANAR_GRAPH: PLANAR_GRAPH,
  COMPLETE_GRAPH: COMPLETE_GRAPH,
  BIPARTITE_GRAPH: BIPARTITE_GRAPH,
} as const;
