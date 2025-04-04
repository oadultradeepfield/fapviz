import GraphDiagram from "@/components/canvas/graph-diagram";
import CanvasDisplay from "@/components/common/canvas-display";
import Navigation from "@/components/navigation/navigation";
import Sidebar from "@/components/sidebar/sidebar";

export default function Home() {
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
