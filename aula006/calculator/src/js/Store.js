import { create } from "zustand";

export const useStore = create((set) => ({
    inputValue: "",
    history: [],
    changeInputValue: (value) => formated(value, set),
    calculateValue: (value) => calculate(value, set),
    clearHistory: () => set({ history: [] }),
}));

function formated(value, set) {
    if (String(value).length < 47) {
        set({ inputValue: String(value) });
    }
}

function calculate(value, set) {
    const sanitized = value
        .replace(/(\d)\.(?=(\d{3})+(\D|$))/g, "$1") // remove pontos que são separadores de milhar
        .replace(/,/g, ".") // vírgula → ponto decimal
        .replace(/\b0+(\d)/g, "$1"); // remove zeros à esquerda

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

    set((state) => ({
        history: [...state.history, { calculo: sanitized, resultado: result }],
    }));

    return result;
}
