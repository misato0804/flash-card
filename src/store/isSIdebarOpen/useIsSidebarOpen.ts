import { create } from 'zustand'
import {SidebarStatus} from "@/store/isSIdebarOpen/type";

export const useIsSidebarOpen = create<SidebarStatus>((set) => ({
    isOpen: false,
    toggleSidebar: () => set((state) => ({ isOpen : !state.isOpen }))
}))