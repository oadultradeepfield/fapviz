import { Button } from "@/components/ui/button";

export default function ActionButtons() {
  return (
    <div className="flex gap-x-2">
      <Button type="submit">Start</Button>
      <Button variant="outline" type="reset">
        Reset
      </Button>
    </div>
  );
}
