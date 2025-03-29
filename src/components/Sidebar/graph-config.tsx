import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ManualButtons from "./manual-button";
import TemplateButtons from "./template-buttons";

export default function GraphConfig() {
  return (
    <Card className="w-full rounded-md">
      <CardHeader>
        <CardTitle>Transmitter network</CardTitle>
        <CardDescription>
          Create and modify transmitters (nodes) and interferences (edges)
          between them.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <ManualButtons />
          <TemplateButtons />
        </div>
      </CardContent>
    </Card>
  );
}
