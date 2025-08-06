import { list } from "./localStorage";

export function validateData(value, setErro) {
    const regex = /^[\w\s-]{3,50}$/;
    const nome = value.trim();

    if (nome.length === 0) {
        setErro("Please enter a task before adding.");

        return;
    }

    if (!regex.test(nome)) {
        setErro(
            "Task must be 3–50 characters and use only letters, numbers, spaces, hyphens, or underscores."
        );

        return;
    }

    if (list.some((item) => item.toLowerCase() === nome.toLowerCase())) {
        setErro("This task already exists.");
        return;
    }
}
