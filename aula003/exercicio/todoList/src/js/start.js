import { validateData } from "./validateData";

export function startAll(nome, setErro) {
    validateData(nome, setErro);
}
