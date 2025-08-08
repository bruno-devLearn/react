import { changeValue, deleteItem } from "../js/actions";

export function List({
    setList,
    list,
    setValue,
    setBtn,
    setErro,
    setEditIndex,
}) {
    return (
        <>
            {list.map((item, index) => {
                const nome =
                    item.nome.charAt(0).toUpperCase() + item.nome.slice(1);

                return (
                    <div className="list-item" key={item.id}>
                        <div className="check-item checkbox">
                            <label>
                                <input
                                    type="checkbox"
                                    checked={item.checked}
                                    onChange={() => {
                                        changeValue(item, setList, index, list);
                                    }}
                                />

                                <div className="outer-square">
                                    <div className="inner-square"></div>

                                    <span className="material-symbols-outlined">
                                        check
                                    </span>
                                </div>

                                <span className="text">
                                    {!item.checked ? nome : <del>{nome}</del>}
                                </span>
                            </label>
                        </div>

                        <div className="actions">
                            <span
                                className="material-symbols-outlined"
                                onClick={() => deleteItem(setList, index)}
                            >
                                delete
                            </span>

                            <span
                                className="material-symbols-outlined"
                                onClick={() => {
                                    setEditIndex(index);
                                    setValue(item.nome);
                                    setBtn("Edit");
                                    setErro("");
                                }}
                            >
                                edit_square
                            </span>
                        </div>
                    </div>
                );
            })}
        </>
    );
}
