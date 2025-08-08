import { setValue } from "./setValue";
import { validateData } from "./validateData";
import { getData } from "./localStorage";

export function startAll(item, setErro, setList, btn, index, list) {
    if (!validateData(item.nome, setErro, btn, index, list)) return;

    setValue(item);
    setList(getData());
}
