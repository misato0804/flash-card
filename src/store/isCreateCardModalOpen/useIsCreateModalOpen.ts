import { create } from 'zustand'
import {IsCreateCardModalOpenType} from "@/store/isCreateCardModalOpen/type";

export const useIsCreateCardModalOpen = create<IsCreateCardModalOpenType>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
    toggle: () => set((state) => ({ isOpen: !state.isOpen }))
}))