import { create } from 'zustand'
import {IsCreateModalOpenType} from "@/store/isCreateDeckModalOpen/type";

export const useIsCreateDeckModalOpen = create<IsCreateModalOpenType>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
    toggle: () => set((state) => ({ isOpen: !state.isOpen }))
}))