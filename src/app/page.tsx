import Navigation from "@/components/navigation/navigation";
import Sidebar from "@/components/sidebar/sidebar";

export default function Home() {
  return (
    <div>
      <Navigation />
      <main className="container mx-auto p-4">
        <Sidebar />
      </main>
    </div>
  );
}
