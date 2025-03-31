import { useGraphStore } from "@/stores/graph-store";
import { useCallback } from "react";
import { toast } from "sonner";

export function useGraphReset() {
  const { clearGraph, undoDeleteElements } = useGraphStore();

  const handleReset = useCallback(() => {
    toast(
      "All transmitters were removed! You can start fresh or undo this action.",
      {
        action: {
          label: "Undo",
          onClick: undoDeleteElements,
        },
        duration: 3000,
        position: "bottom-center",
      },
    );
    clearGraph();
  }, [clearGraph, undoDeleteElements]);

  return handleReset;
}
