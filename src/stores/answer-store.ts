import { create } from "zustand";

interface AnswerStore {
  chromaticNumber?: number;
  setchromaticNumber: (chromaticNumber?: number) => void;
}

export const useAnswerStore = create<AnswerStore>((set) => ({
  chromaticNumber: undefined,
  setchromaticNumber: (chromaticNumber?) => set({ chromaticNumber }),
}));
