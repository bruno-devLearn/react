import { setData, list } from "./localStorage";

export function setValue(item) {
    list.push(item);
    setData(list);
    console.log(list);
}
