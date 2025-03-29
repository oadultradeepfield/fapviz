import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useGraphReset } from "@/hooks/graph-reset";
import { useGraphStore } from "@/stores/graph-store";
import { Plus, Trash2 } from "lucide-react";

export default function ManualButtons() {
  const { createNode } = useGraphStore();
  const { handleReset } = useGraphReset();

  return (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor="template">Start manually</Label>
      <Button onClick={createNode}>
        <Plus />
        Add new transmitter
      </Button>
      <Button variant="outline" onClick={handleReset}>
        <Trash2 />
        Remove all transmitters
      </Button>
    </div>
  );
}
