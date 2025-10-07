// Importa a função create do Zustand para criar o store global
import { create } from "zustand";

// Cria o hook useSquare, que fornece estados e funções para o jogo
export const useSquare = create((set, get) => ({
    // Estados do jogo
    squareIndex: 0, // Tamanho do grid (ex: 3, 4, 5)
    randomIndex: 0, // Índice aleatório do quadrado "certo"
    tentativas: 0, // Contador de tentativas do jogador
    find: false, // Indica se o jogador acertou e o jogo terminou
    colors: [], // Array de cores dos quadrados (ex: ["yellow", "red", ...])

    // Funções para atualizar o estado
    selectIndex: (value) => indexFunct(set, value), // Define squareIndex e inicializa o array colors
    updateIndex: (value) => set({ randomIndex: value }), // Define o índice aleatório que deve ser clicado
    updateTentativas: () =>
        set((state) => ({ tentativas: state.tentativas + 1 })), // Incrementa tentativas
    updateColorAt: (index, value) => updateColors(index, value, set), // Atualiza a cor de um quadrado específico
    powerFunct: () => square(get().squareIndex), // Retorna o total de quadrados (squareIndex^2)
    updateFind: () => set({ find: true }), // Marca que o jogador acertou e terminou o jogo
    reset: () => resetAll(set), // Reseta todo o estado para o início do jogo
}));

// Função auxiliar para definir squareIndex e inicializar colors
function indexFunct(set, value) {
    set({
        squareIndex: value,
        colors: Array(value ** 2).fill("yellow"), // Cria um array com todas as cores amarelas
    });
}

// Função auxiliar que calcula a potência de 2 do squareIndex
function square(value) {
    return value ** 2;
}

// Função auxiliar para atualizar a cor de um quadrado específico
function updateColors(index, value, set) {
    set((state) => {
        const newColors = [...state.colors]; // Copia o array atual
        newColors[index] = value; // Atualiza a cor do índice específico

        return { colors: newColors }; // Retorna o novo estado
    });
}

// Função auxiliar para resetar todo o estado do jogo
function resetAll(set) {
    set({
        squareIndex: 0,
        randomIndex: 0,
        tentativas: 0,
        colors: [],
        find: false,
    });
}
