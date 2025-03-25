import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { AdjacencyList, ColorPaletteName, Edge, Graph, Node } from "./types";
import { ColorPalettes } from "./constants";

export const cn = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs));
};

const updateNodeInList = (
  nodes: Node[],
  nodeId: string,
  updater: (node: Node) => Node,
): Node[] => nodes.map((node) => (node.id === nodeId ? updater(node) : node));

const adjustDegree = (node: Node, diff: number): Node => ({
  ...node,
  degree: node.degree + diff,
});

export const addNode = (graph: Graph, node: Node): Graph => ({
  ...graph,
  nodes: [...graph.nodes, node],
});

export const addEdge = (graph: Graph, edge: Edge): Graph => {
  const newEdges = [...graph.edges, edge];
  const updatedNodesAfterSource = updateNodeInList(
    graph.nodes,
    edge.source,
    (node) => adjustDegree(node, 1),
  );
  const updatedNodes = updateNodeInList(
    updatedNodesAfterSource,
    edge.target,
    (node) => adjustDegree(node, 1),
  );
  return {
    ...graph,
    nodes: updatedNodes,
    edges: newEdges,
  };
};

export const removeNode = (graph: Graph, node: Node): Graph => {
  const remainingNodes = graph.nodes.filter((n) => n.id !== node.id);
  const newEdges = graph.edges.filter(
    (edge) => edge.source !== node.id && edge.target !== node.id,
  );

  const newNodes = remainingNodes.map((n) => {
    const degree = newEdges.filter(
      (edge) => edge.source === n.id || edge.target === n.id,
    ).length;
    return { ...n, degree };
  });

  return {
    nodes: newNodes,
    edges: newEdges,
  };
};

export const removeEdge = (graph: Graph, edge: Edge): Graph => {
  const newEdges = graph.edges.filter((e) => e.id !== edge.id);
  const updatedNodesAfterSource = updateNodeInList(
    graph.nodes,
    edge.source,
    (node) => adjustDegree(node, -1),
  );

  const updatedNodes = updateNodeInList(
    updatedNodesAfterSource,
    edge.target,
    (node) => adjustDegree(node, -1),
  );

  return {
    ...graph,
    nodes: updatedNodes,
    edges: newEdges,
  };
};

export const createAdjacencyList = (graph: Graph): AdjacencyList => {
  const adj: AdjacencyList = {};

  if (!graph) {
    throw new ReferenceError("Graph is undefined");
  }

  graph.nodes.forEach((node) => {
    adj[node.id] = [];
  });

  graph.edges.forEach((edge) => {
    adj[edge.source].push(edge.target);
    adj[edge.target].push(edge.source);
  });

  graph.nodes.forEach((node) => {
    node.degree = adj[node.id].length;
  });

  return adj;
};

export const setNodeFill = (
  node: Node,
  colorPaletteName: ColorPaletteName,
): Node => {
  if (!node.colorIndex) {
    throw ReferenceError("Color index is undefined");
  }

  const colorPalette = ColorPalettes.find(
    (palette) => palette.paletteName === colorPaletteName,
  );

  if (!colorPalette) {
    throw new Error(`Color palette '${colorPaletteName}' not found`);
  }

  if (node.colorIndex < 0 || node.colorIndex >= colorPalette.colors.length) {
    throw new RangeError(
      `Color index ${node.colorIndex} is out of bounds for palette '${colorPaletteName}'`,
    );
  }

  return {
    ...node,
    fill: colorPalette.colors[node.colorIndex],
  };
};
