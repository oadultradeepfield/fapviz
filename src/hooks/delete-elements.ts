import { useGraphStore } from "@/stores/graph-store";
import { useCallback } from "react";
import { toast } from "sonner";

export function useDeleteElements() {
  const { deleteSelectedElements, undoDeleteElements } = useGraphStore();

  return useCallback(() => {
    toast(
      "Selected elements were removed! You can proceed or undo this action.",
      {
        action: {
          label: "Undo",
          onClick: undoDeleteElements,
        },
        duration: 3000,
        position: "bottom-center",
      },
    );
    deleteSelectedElements();
  }, [deleteSelectedElements, undoDeleteElements]);
}
