"use client";

import { Node } from "@/lib/graph/types";
import { useGraphStore } from "@/stores/graph-store";
import { Connection, Edge, getOutgoers } from "@xyflow/react";
import { useCallback } from "react";

export function useIsValidConnection() {
  const { graph } = useGraphStore();
  const { nodes, edges } = graph;

  return useCallback(
    (connection: Edge | Connection) => {
      const target = nodes.find((node) => node.id === connection.target);
      const source = nodes.find((node) => node.id === connection.source);

      if (!target || !source) {
        return false;
      }

      if (connection.source === connection.target) {
        return false;
      }

      const connectionAlreadyExists = edges.some(
        (edge) =>
          edge.source === connection.source &&
          edge.target === connection.target,
      );

      if (connectionAlreadyExists) return false;

      const hasCycle = (
        nodeId: string,
        visited = new Set<string>(),
      ): boolean => {
        if (nodeId === connection.source) {
          return true;
        }

        if (visited.has(nodeId)) {
          return false;
        }

        visited.add(nodeId);

        const outgoers = getOutgoers({ id: nodeId } as Node, nodes, edges);

        for (const outgoer of outgoers) {
          if (hasCycle(outgoer.id, new Set(visited))) {
            return true;
          }
        }

        return false;
      };

      return !hasCycle(connection.target);
    },
    [nodes, edges],
  );
}
