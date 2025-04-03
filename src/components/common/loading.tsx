import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center space-y-4">
      <Loader2 className="h-10 w-10 animate-spin" />
      <p className="text-muted-foreground">Loading graph from database...</p>
    </div>
  );
}
