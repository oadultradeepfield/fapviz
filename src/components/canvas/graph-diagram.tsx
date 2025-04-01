"use client";

import { useDeleteElements } from "@/hooks/delete-elements";
import { useIsValidConnection } from "@/hooks/is-valid-connection";
import { useOnConnect } from "@/hooks/on-connect";
import { useOnNodeDragStop } from "@/hooks/on-node-drag-stop";
import { TEMPLATE_GRAPHS } from "@/lib/graph/constants";
import { useGraphStore } from "@/stores/graph-store";
import {
  Background,
  Controls,
  ReactFlow,
  ReactFlowProvider,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

export default function GraphDiagram() {
  const { graph, setSelectedElements } = useGraphStore();
  const onNodeDragStop = useOnNodeDragStop();
  const onConnect = useOnConnect();
  const isValidConnection = useIsValidConnection();
  const handleDelete = useDeleteElements();

  return (
    <div style={{ height: "100%" }}>
      <ReactFlowProvider>
        <ReactFlow
          defaultNodes={TEMPLATE_GRAPHS.EMPTY_GRAPH.nodes}
          defaultEdges={TEMPLATE_GRAPHS.EMPTY_GRAPH.edges}
          nodes={graph.nodes}
          edges={graph.edges}
          onNodeDragStop={onNodeDragStop}
          onConnect={onConnect}
          isValidConnection={isValidConnection}
          onSelectionChange={setSelectedElements}
          onDelete={handleDelete}
          fitView
        >
          <Background />
          <Controls position="bottom-right" showInteractive={false} />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
}
