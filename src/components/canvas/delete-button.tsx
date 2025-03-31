import { useDeleteElements } from "@/hooks/delete-elements";
import { useGraphStore } from "@/stores/graph-store";
import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";

export default function DeleteButton() {
  const { selectedNodes, selectedEdges } = useGraphStore();
  const handleDelete = useDeleteElements();

  if (selectedNodes.length === 0 && selectedEdges.length === 0) {
    return null;
  }

  return (
    <Button variant="destructive" size="sm" onClick={handleDelete}>
      <Trash2 /> Delete
    </Button>
  );
}
