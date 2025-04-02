import prisma from "@/lib/prisma";
import { Position } from "@xyflow/react";
import { NextResponse } from "next/server";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } },
) {
  try {
    const graphId = params.id;

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
      position: {
        x: node.positionX,
        y: node.positionY,
      },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
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
