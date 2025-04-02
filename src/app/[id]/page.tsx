"use client";

import GraphDiagram from "@/components/canvas/graph-diagram";
import CanvasDisplay from "@/components/common/canvas-display";
import Navigation from "@/components/navigation/navigation";
import Sidebar from "@/components/sidebar/sidebar";
import { useFetchGraph } from "@/hooks/fetch-graph";
import { useFetchGraphStore } from "@/stores/fetch-graph-store";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const params = useParams();
  const { setGraphId } = useFetchGraphStore();

  useEffect(() => {
    if (params.id) {
      setGraphId(params.id as string);
    }
  }, [params.id, setGraphId]);

  useFetchGraph();

  return (
    <div className="flex h-screen flex-col">
      <Navigation />
      <main className="mx-auto flex w-full flex-grow flex-col p-4">
        <Sidebar />
        <CanvasDisplay />
        <div className="flex-grow">
          <GraphDiagram />
        </div>
      </main>
    </div>
  );
}
