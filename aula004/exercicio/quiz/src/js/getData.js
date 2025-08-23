import jsonQuestions from "./questions.json";

export function getData() {
    try {
        return jsonQuestions.questions; // retorna o array de questões
    } catch (error) {
        console.error("Error loading questions:", error);
        return [];
    }
}
