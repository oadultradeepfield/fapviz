import { Graph } from "@/lib/graph/types";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const graphData: Graph = body;

    const graph = await prisma.$transaction(async (tx) => {
      const newGraph = await tx.graph.create({
        data: {
          nodes: {
            create: graphData.nodes.map((node) => ({
              nodeId: node.id,
              positionX: node.position.x || 0,
              positionY: node.position.y || 0,
              degree: node.degree || 0,
            })),
          },
          edges: {
            create: graphData.edges.map((edge) => ({
              edgeId: edge.id,
              source: edge.source,
              target: edge.target,
            })),
          },
        },
        include: {
          nodes: true,
          edges: true,
        },
      });

      return newGraph;
    });

    return NextResponse.json(
      {
        id: graph.id,
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/${graph.id}`,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error saving graph:", error);
    return NextResponse.json(
      { error: "Failed to save graph" },
      { status: 500 },
    );
  }
}
