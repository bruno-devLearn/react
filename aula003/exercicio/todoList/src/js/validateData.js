export function validateData(nome, setErro, btn, index, list) {
    const regex = /^[\p{L}\p{N}\s_-]{3,50}$/u;

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

    if (btn === "Add") {
        if (
            list.some((item) => item.nome.toLowerCase() === nome.toLowerCase())
        ) {
            setErro("This task already exists.");
            return false;
        }
    } else {
        // Edit mode: verifica se tem outro item igual em índice diferente
        if (
            list.some(
                (item, i) =>
                    i !== index &&
                    item.nome.toLowerCase() === nome.toLowerCase()
            )
        ) {
            setErro("This task already exists.");
            return false;
        }
    }

    setErro(""); // limpa erro se válido
    return true;
}
