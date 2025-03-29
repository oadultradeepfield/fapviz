import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useGraphReset } from "@/hooks/graph-reset";
import { PencilLine } from "lucide-react";

export default function ManualButtons() {
  const { handleReset } = useGraphReset();

  return (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor="template">Start manually</Label>
      <Button onClick={handleReset}>
        <PencilLine />
        Create new graph
      </Button>
    </div>
  );
}
