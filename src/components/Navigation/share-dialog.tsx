import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCopyLink } from "@/hooks/copy-link";
import { useSaveStore } from "@/stores/save-store";

interface ShareDialogProps {
  trigger: React.ReactNode;
}

export function ShareDialog({ trigger }: ShareDialogProps) {
  const { isDialogOpen, link, isSaving, setIsDialogOpen } = useSaveStore();
  const handleCopy = useCopyLink();

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share graph</DialogTitle>
          <DialogDescription>
            Anyone with this link will be able to view your graph.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input id="link" value={link} readOnly disabled={isSaving} />
          </div>
          <Button
            onClick={handleCopy}
            size="sm"
            className="px-3"
            disabled={isSaving}
          >
            <span className="sr-only">Copy</span>
            <Copy />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
