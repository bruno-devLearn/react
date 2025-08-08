import { setData, getData } from "./localStorage";
import { validateData } from "./validateData";

export function deleteItem(setList, item, list) {
    const index = list.findIndex((listItem) => listItem.nome === item.nome);
    if (index !== -1) {
        list.splice(index, 1);
        setData(list);
        setList(getData());
    }

    console.log(list);
}

export function changeValue(item, setList, index, list) {
    item.checked = !item.checked;
    list[index] = item;
    setData(list);
    setList(getData());
}

export function editItem(
    setBtn,
    setValue,
    list,
    value,
    setList,
    index,
    setErro,
    btn
) {
    if (!validateData(value, setErro, btn, index, list)) return;

    list[index].nome = value.trim();

    setData(list);

    setBtn("Add");
    setValue("");
    setList(getData());
}
