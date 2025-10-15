import { create } from "zustand";

export const useData = create((set) => ({
    inputValue: "",
    updateInput: (newValue) => set({ inputValue: newValue }),
    data: {},
    after: null,
    namePrefix: "",
    updateDatas: (newData, newAfter, newNamePrefix) =>
        set({ data: newData, after: newAfter, namePrefix: newNamePrefix }),
}));
