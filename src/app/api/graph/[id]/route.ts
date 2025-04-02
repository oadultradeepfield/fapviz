import { NODE_STYLE } from "@/lib/graph/constants";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } },
) {
  try {
    const { id } = await params;
    const graphId = id;
    const graph = await prisma.graph.findUnique({
      where: {
        id: graphId,
      },
      include: {
        nodes: true,
        edges: true,
      },
    });

    if (!graph) {
      return NextResponse.json({ error: "Graph not found" }, { status: 404 });
    }

    const formattedNodes = graph.nodes.map((node) => ({
      id: node.nodeId,
      data: { label: "📡" },
      style: NODE_STYLE,
      position: {
        x: node.positionX,
        y: node.positionY,
      },
      degree: node.degree,
      saturationDegree: 0,
    }));

    const formattedEdges = graph.edges.map((edge) => ({
      id: edge.edgeId,
      source: edge.source,
      target: edge.target,
    }));

    return NextResponse.json({
      id: graph.id,
      nodes: formattedNodes,
      edges: formattedEdges,
      createdAt: graph.createdAt,
    });
  } catch (error) {
    console.error("Error retrieving graph:", error);
    return NextResponse.json(
      { error: "Failed to retrieve graph" },
      { status: 500 },
    );
  }
}
