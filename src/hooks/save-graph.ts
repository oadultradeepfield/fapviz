import { SaveGraphResponse } from "@/lib/graph/types";
import { useGraphStore } from "@/stores/graph-store";
import { useSaveStore } from "@/stores/save-store";
import { useCallback } from "react";
import { toast } from "sonner";
import { useCopyLink } from "./copy-link";

export function useSaveGraph() {
  const {
    setIsDialogOpen,
    setIsSaving,
    setLink,
    lastGraphVersion,
    setLastGraphVersion,
    cachedLink,
    setCachedLink,
  } = useSaveStore();

  const { graph, graphVersion } = useGraphStore();
  const handleCopy = useCopyLink();

  return useCallback(async () => {
    try {
      setIsDialogOpen(true);

      const graphUnchanged =
        lastGraphVersion && graphVersion === lastGraphVersion;

      if (graphUnchanged && cachedLink) {
        setLink(cachedLink);
        handleCopy();
        return;
      }

      setIsSaving(true);

      const response = await fetch("/api/graph", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nodes: graph.nodes,
          edges: graph.edges,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to save graph");
      }

      const data: SaveGraphResponse = await response.json();
      setLastGraphVersion(graphVersion);
      setLink(data.url);
      setCachedLink(data.url);
      handleCopy();
    } catch (error) {
      console.error("Error saving graph: ", error);
      toast.error("Failed to generate link. Please try again.", {
        duration: 3000,
        position: "bottom-center",
      });
      setIsDialogOpen(false);
    } finally {
      setIsSaving(false);
    }
  }, [
    setIsDialogOpen,
    setIsSaving,
    setLink,
    graph,
    graphVersion,
    lastGraphVersion,
    cachedLink,
    setLastGraphVersion,
    setCachedLink,
    handleCopy,
  ]);
}
