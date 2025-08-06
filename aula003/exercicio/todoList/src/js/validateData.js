import { list } from "./localStorage";

export function validateData(nome, setErro) {
    const regex = /^[\w\s-]{3,50}$/;

    if (nome.length === 0) {
        setErro("Please enter a task before adding.");
        return false;
    }

    if (!regex.test(nome)) {
        setErro(
            "Task must be 3–50 characters and use only letters, numbers, spaces, hyphens, or underscores."
        );
        return false;
    }

    if (list.some((item) => item.toLowerCase() === nome.toLowerCase())) {
        setErro("This task already exists.");
        return false;
    }

    setErro(""); // limpa erro se válido
    return true;
}
