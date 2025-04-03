import { useFetchGraphStore } from "@/stores/fetch-graph-store";
import { useGraphStore } from "@/stores/graph-store";
import { Position } from "@xyflow/react";
import { useEffect } from "react";
import { toast } from "sonner";

export function useFetchGraph() {
  const { graphId, setIsFetched } = useFetchGraphStore();
  const { clearGraph, setGraph } = useGraphStore();

  useEffect(() => {
    async function fetchGraph() {
      try {
        setIsFetched(false);
        const response = await fetch(`/api/graph/${graphId}`);

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("Graph not found");
          }
          throw new Error("Failed to load graph");
        }

        const data = await response.json();

        if (data.nodes && Array.isArray(data.nodes)) {
          data.nodes = data.nodes.map((node: Node) => ({
            ...node,
            sourcePosition: Position.Right,
            targetPosition: Position.Left,
          }));
        }

        clearGraph();
        setGraph(data);
      } catch (error) {
        console.error("Error fetching graph: ", error);
        toast.error(
          "Could not retrieve the graph from the URL. Please verify the link.",
          {
            duration: 3000,
            position: "bottom-center",
          },
        );
      } finally {
        setIsFetched(true);
      }
    }

    if (graphId) {
      fetchGraph();
    }
  }, [graphId]);
}
