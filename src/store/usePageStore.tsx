import { create } from "zustand";

export type Page = 'Work' | 'Blog' | 'Info';

interface PageStore {
    page: Page;
    setPage: (page: Page) => void;
}

export const usePageStore = create<PageStore>((set) => ({
    page: 'Work' as Page,
    setPage: (page: Page) => set({ page }),
}));
