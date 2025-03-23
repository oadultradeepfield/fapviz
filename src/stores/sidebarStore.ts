import { create } from "zustand";

interface SidebarStore {
  isOpen: boolean;
  setIsOpen: () => void;
  setIsOpenBasedOnWidth: (width: number) => void;
}

export const useSidebarStore = create<SidebarStore>((set) => ({
  isOpen: false,
  setIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  setIsOpenBasedOnWidth: (width: number) => {
    set({ isOpen: width >= 1024 });
  },
}));
