import { setValue } from "./setValue";
import { validateData } from "./validateData";
import { getData } from "./localStorage";

export function startAll(item, setErro, setList) {
    if (!validateData(item.nome, setErro)) return;

    setValue(item);
    setList(getData());
}
