import { create } from "zustand";

interface SaveStore {
  isDialogOpen: boolean;
  isSaving: boolean;
  link: string;
  setIsDialogOpen: (isDialogOpen: boolean) => void;
  setIsSaving: (isSaving: boolean) => void;
  setLink: (link: string) => void;
}

export const useSaveStore = create<SaveStore>((set) => ({
  isDialogOpen: false,
  isSaving: false,
  link: "Generating link...",
  setIsSaving: (isSaving) => set(() => ({ isSaving: isSaving })),
  setLink: (link) => set(() => ({ link: link })),
  setIsDialogOpen: (isDialogOpen) =>
    set(() => ({ isDialogOpen: isDialogOpen, link: "Generating link..." })),
}));
