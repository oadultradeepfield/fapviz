"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useCreateGraphFromTemplate } from "@/hooks/create-graph-from-template";
import { TemplateGraphName } from "@/lib/graph/types";
import { Boxes, Map, Waypoints } from "lucide-react";

export default function TemplateButtons() {
  const handleCreateGraph = useCreateGraphFromTemplate();

  return (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor="template">Start from templates</Label>
      <div className="flex flex-col space-y-2">
        <Button
          variant="outline"
          onClick={() => handleCreateGraph(TemplateGraphName.PlanarGraph)}
        >
          <Map /> Planar Graph
        </Button>
        <Button
          variant="outline"
          onClick={() => handleCreateGraph(TemplateGraphName.CompleteGraph)}
        >
          <Boxes /> Complete Graph
        </Button>
        <Button
          variant="outline"
          onClick={() => handleCreateGraph(TemplateGraphName.BipartiteGraph)}
        >
          <Waypoints /> Bipartite Graph
        </Button>
      </div>
    </div>
  );
}
