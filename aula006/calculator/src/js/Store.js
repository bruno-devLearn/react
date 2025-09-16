import { create } from "zustand";

export const useStore = create((set) => ({
    inputValue: "",
    changeInputValue: (value) => set({ inputValue: String(value) }),
    calculateValue: (value) => calculate(value),
}));

function calculate(value) {
    const sanitized = value.replace(/,/g, ".").replace(/\b0+(\d)/g, "$1");
    let result;

    try {
        result = eval(sanitized);
    } catch {
        return "número inválido";
    }

    if (typeof result !== "number" || isNaN(result)) {
        return "número inválido";
    }

    if (!isFinite(result)) {
        return "número infinito";
    }

    if (String(result).length >= 46) {
        return "número muito grande";
    }

    return result;
}
