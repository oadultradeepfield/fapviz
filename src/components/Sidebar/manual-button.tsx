"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useGraphReset } from "@/hooks/graph-reset";
import { useGraphStore } from "@/stores/graph-store";
import { Plus, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function ManualButtons() {
  const { createNode, nodeCounter } = useGraphStore();
  const handleReset = useGraphReset();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor="template">Start manually</Label>
      <Button
        onClick={createNode}
        disabled={mounted ? nodeCounter >= 20 : false}
      >
        <Plus />
        Add new transmitter
      </Button>
      <Button
        variant="outline"
        onClick={handleReset}
        disabled={mounted ? nodeCounter === 0 : false}
      >
        <Trash2 />
        Remove all transmitters
      </Button>
    </div>
  );
}
