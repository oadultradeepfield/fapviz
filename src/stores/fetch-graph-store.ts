import { create } from "zustand";

interface FetchGraphStore {
  graphId: string;
  isFetched: boolean;
  setGraphId: (graphId: string) => void;
  setIsFetched: (isFetched: boolean) => void;
}

export const useFetchGraphStore = create<FetchGraphStore>((set) => ({
  graphId: "",
  isFetched: true,
  setGraphId: (graphId) =>
    set(() => ({
      graphId: graphId,
    })),
  setIsFetched: (isFetched) =>
    set(() => ({
      isFetched: isFetched,
    })),
}));
