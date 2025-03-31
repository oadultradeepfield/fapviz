import { useGraphStore } from "@/stores/graph-store";
import { type Connection } from "@xyflow/react";
import { useCallback } from "react";
import { useIsValidConnection } from "./is-valid-connection";

export function useOnConnect() {
  const { createEdge } = useGraphStore();
  const isValidConnection = useIsValidConnection();

  return useCallback(
    (connection: Connection) => {
      if (isValidConnection(connection)) {
        createEdge(connection.source, connection.target);
      }
    },
    [createEdge, isValidConnection],
  );
}
