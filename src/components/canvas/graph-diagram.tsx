import { Edge, Node } from "@/lib/graph/types";
import { createReactFlowEdges, createReactFlowNodes } from "@/lib/graph/utils";
import { Background, Controls, ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const nodes: Node[] = [
  {
    id: "1",
    label: "1",
  },
  {
    id: "2",
    label: "2",
  },
];

const edges: Edge[] = [
  {
    source: "1",
    target: "2",
    id: "1-2",
    label: "1-2",
  },
  {
    source: "2",
    target: "1",
    id: "2-1",
    label: "2-1",
  },
];

export default function GraphDiagram() {
  return (
    <div style={{ height: "100%" }}>
      <ReactFlow
        nodes={createReactFlowNodes(nodes)}
        edges={createReactFlowEdges(edges)}
        fitView
      >
        <Background />
        <Controls position="bottom-right" />
      </ReactFlow>
    </div>
  );
}
