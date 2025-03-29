"use client";

import { useOnConnect } from "@/hooks/on-connect";
import { useOnNodeDragStop } from "@/hooks/on-node-drag-stop";
import { EMPTY_GRAPH } from "@/lib/graph/constants";
import { useGraphStore } from "@/stores/graph-store";
import {
  Background,
  Controls,
  ReactFlow,
  ReactFlowProvider,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

export default function GraphDiagram() {
  const { graph } = useGraphStore();
  const onNodeDragStop = useOnNodeDragStop();
  const onConnect = useOnConnect();

  return (
    <div style={{ height: "100%" }}>
      <ReactFlowProvider>
        <ReactFlow
          defaultNodes={EMPTY_GRAPH.nodes}
          defaultEdges={EMPTY_GRAPH.edges}
          nodes={graph.nodes}
          edges={graph.edges}
          onNodeDragStop={onNodeDragStop}
          onConnect={onConnect}
          fitView
        >
          <Background />
          <Controls position="bottom-right" showInteractive={false} />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
}
