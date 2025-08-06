import { setData, list } from "./localStorage";

export function setValue(nome) {
    list.push(nome);
    setData(list);
    console.log(list);
}
