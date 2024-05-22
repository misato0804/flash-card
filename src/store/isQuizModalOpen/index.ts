import { create } from "zustand";
import { IsQuizModalOpenType } from "./type";

export const useQuizModalOpen = create<IsQuizModalOpenType>((set) => ({
  isOpen: false,
  onQuizOpen: () => set({ isOpen: true }),
  onQuizClose: () => set({ isOpen: false }),
  toggle: () => set((state) => ({ isOpen: !state.isOpen }))
}))