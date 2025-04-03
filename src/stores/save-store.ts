import { create } from "zustand";

interface SaveStore {
  isDialogOpen: boolean;
  isSaving: boolean;
  link: string;
  lastGraphVersion: number | undefined;
  cachedLink: string | undefined;
  setIsDialogOpen: (isDialogOpen: boolean) => void;
  setIsSaving: (isSaving: boolean) => void;
  setLink: (link: string) => void;
  setLastGraphVersion: (version: number) => void;
  setCachedLink: (link: string) => void;
}

export const useSaveStore = create<SaveStore>((set) => ({
  isDialogOpen: false,
  isSaving: false,
  link: "Generating link...",
  lastGraphVersion: undefined,
  cachedLink: undefined,
  setIsDialogOpen: (isDialogOpen) =>
    set(() => ({ isDialogOpen: isDialogOpen })),
  setIsSaving: (isSaving) => set(() => ({ isSaving: isSaving })),
  setLink: (link) => set(() => ({ link: link })),
  setLastGraphVersion: (version) => set(() => ({ lastGraphVersion: version })),
  setCachedLink: (link) => set(() => ({ cachedLink: link })),
}));
