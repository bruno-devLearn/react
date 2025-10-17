import { create } from "zustand";

export const useData = create((set) => ({
    inputValue: "",
    updateInput: (newValue) => set({ inputValue: newValue }),
    data: {},
    after: "",
    before: "",
    namePrefix: "",
    updateData: (newData) => set({ data: newData }),
    updateAfter: (newAfter, newBefore) =>
        set({ after: newAfter, before: newBefore }),
    updateNamePrefix: (newValue) => set({ namePrefix: newValue }),
    indexPage: 0,
    updateIndex: (newIndex) => set({ indexPage: newIndex }),
}));
