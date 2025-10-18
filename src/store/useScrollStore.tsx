import { create } from "zustand";

interface ScrollStore {
    isScrolled: number;
    setIsScrolled: (isScrolled: number) => void;
}

export const useScrollStore = create<ScrollStore>(set => ({
    isScrolled: 0,
    setIsScrolled: (isScrolled: number) => set({ isScrolled }),
}))