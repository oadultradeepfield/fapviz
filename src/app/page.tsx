import Navigation from "@/components/Navigation/Navigation";
import Sidebar from "@/components/Sidebar/Sidebar";

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
