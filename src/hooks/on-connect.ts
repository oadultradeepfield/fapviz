"use client";

import { useGraphStore } from "@/stores/graph-store";
import type { Connection } from "@xyflow/react";
import { useCallback } from "react";

export function useOnConnect() {
  const { createEdge } = useGraphStore();

  return useCallback(
    (connection: Connection) => {
      createEdge(connection.source, connection.target);
    },
    [createEdge],
  );
}
