import { useGraphStore } from "@/stores/graph-store";
import { toast } from "sonner";

export function useGraphReset() {
  const { clearGraph, undoClearGraph } = useGraphStore();

  const handleReset = () => {
    toast(
      "Graph reset successfully! You can start fresh or undo this action.",
      {
        action: {
          label: "Undo",
          onClick: undoClearGraph,
        },
        duration: 5000,
        position: "bottom-center",
      },
    );
    clearGraph();
  };

  return { handleReset };
}
