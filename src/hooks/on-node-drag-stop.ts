"use client";

import { Node } from "@/lib/graph/types";
import { useGraphStore } from "@/stores/graph-store";
import { OnNodeDrag } from "@xyflow/react";
import { useCallback } from "react";

export function useOnNodeDragStop(): OnNodeDrag {
  const { updateNodePosition } = useGraphStore();

  const onNodeDragStop: OnNodeDrag = useCallback(
    (_event, node: Node) => {
      updateNodePosition(node.id, node.position);
    },
    [updateNodePosition],
  );
  return onNodeDragStop;
}
