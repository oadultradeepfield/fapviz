import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { PencilLine } from "lucide-react";

export default function ManualButtons() {
  return (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor="template">Start manually</Label>
      <Button>
        <PencilLine />
        Create or edit graph
      </Button>
    </div>
  );
}
