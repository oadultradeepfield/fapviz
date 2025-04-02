import { useSaveStore } from "@/stores/save-store";
import { useCallback } from "react";
import { toast } from "sonner";

export function useCopyLink() {
  const { link } = useSaveStore();

  return useCallback(async () => {
    try {
      await navigator.clipboard.writeText(link);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
    toast("Link copied to clipboard!", {
      duration: 2000,
      position: "bottom-center",
    });
  }, [link]);
}
