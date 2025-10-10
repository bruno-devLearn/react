import { create } from "zustand";

export const useCity = create((set) => ({
    inputValue: "",
    updateInputValue: (newValue) => set({ inputValue: newValue }),
    city: {},
    updateCity: (data) => set({ city: data }),
}));
