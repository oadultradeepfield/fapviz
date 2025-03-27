"use client";

import { useAnswerStore } from "@/stores/answer-store";

export default function AnswerDisplay() {
  const { chromaticIndex } = useAnswerStore();

  return (
    <div className="fixed top-0 right-5 -z-10 mt-20">
      <span className="font-semibold">Total Frequencies: </span>
      <span>{chromaticIndex ? chromaticIndex : 0}</span>
    </div>
  );
}
