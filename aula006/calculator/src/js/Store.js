import { create } from "zustand";

export const useStore = create((set) => ({
    inputValue: "",
    changeInputValue: (value) => set({ inputValue: String(value) }),
}));
