import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Dices, Map, Star } from "lucide-react";

export default function TemplateButtons() {
  return (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor="template">Start from templates</Label>
      <div className="flex flex-col space-y-2">
        <Button variant="outline">
          <Star /> Petersen graph
        </Button>
        <Button variant="outline">
          <Map /> Four color theorem
        </Button>
        <Button variant="outline">
          <Dices /> Random graph (10 nodes)
        </Button>
      </div>
    </div>
  );
}
