import { create } from 'zustand'
import {IsCreateModalOpenType} from "@/store/isCreateCardModalOpen/type";

export const useIsCreateModalOpen = create<IsCreateModalOpenType>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
    toggle: () => set((state) => ({ isOpen: !state.isOpen }))
}))