import { create } from "zustand";

interface AnswerStore {
  chromaticIndex?: number;
  setChromaticIndex: (chromaticIndex?: number) => void;
}

export const useAnswerStore = create<AnswerStore>((set) => ({
  chromaticIndex: undefined,
  setChromaticIndex: (chromaticIndex?) => set({ chromaticIndex }),
}));
