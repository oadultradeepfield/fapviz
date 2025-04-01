import { TemplateGraphName } from "@/lib/graph/types";
import { useGraphStore } from "@/stores/graph-store";
import { useCallback } from "react";

export function useCreateGraphFromTemplate() {
  const { setGraphFromTemplate } = useGraphStore();

  return useCallback(
    (template: TemplateGraphName) => {
      setGraphFromTemplate(template);
    },
    [setGraphFromTemplate],
  );
}
