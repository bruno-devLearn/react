import { setValue } from "./setValue";
import { validateData } from "./validateData";
import { getData } from "./localStorage";

export function startAll(nome, setErro, setList) {
    if (!validateData(nome, setErro)) return;

    setValue(nome);
    setList(getData());
}
