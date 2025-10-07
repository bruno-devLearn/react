import { create } from "zustand";

export const useSquare = create((set, get) => ({
    squareIndex: 0,
    randomIndex: 0,
    tentativas: 0,
    colors: [],
    selectIndex: (value) => indexFunct(set, value),
    updateIndex: (value) => set({ randomIndex: value }),
    updateTentativas: () =>
        set((state) => ({ tentativas: state.tentativas + 1 })),
    updateColorAt: (index, value) => updateColors(index, value, set),
    powerFunct: () => square(get().squareIndex),
}));

function indexFunct(set, value) {
    set({
        squareIndex: value,
        colors: Array(value ** 2).fill("yellow"),
    });
}

function square(value) {
    return value ** 2;
}

function updateColors(index, value, set) {
    set((state) => {
        const newColors = [...state.colors];
        newColors[index] = value;
        return { colors: newColors };
    });
}
