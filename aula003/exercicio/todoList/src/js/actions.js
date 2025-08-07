import { setData, list, getData } from "./localStorage";

export function deleteItem(setList, item) {
    const index = list.findIndex((listItem) => listItem.nome === item.nome);
    if (index !== -1) {
        list.splice(index, 1);
        setData(list);
        setList(getData());
    }

    console.log(list);
}

export function changeValue(item, setList) {
    const index = list.findIndex((i) => i.nome === item.nome);

    if (index !== -1) {
        item.checked = !item.checked;
        list[index] = item;
        setData(list);
        setList(getData());
    }
}

export function editItem(setList, item, setValue) {
    setValue(item.nome);
}
