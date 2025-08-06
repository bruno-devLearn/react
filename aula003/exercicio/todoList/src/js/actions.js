import { setData, list, getData } from "./localStorage";

export function deleteItem(setList, item) {
    list.find((listItem, index) => {
        if (listItem === item) {
            list.splice(index, 1);
            setData(list);
            setList(getData);
        }
    });

    console.log(list);
}
