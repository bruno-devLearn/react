import { changeValue, deleteItem, editItem } from "../js/actions";

export function List({ setList, list, setValue }) {
    return (
        <>
            {list.map((item) => (
                <div className="list-item" key={item.nome}>
                    <div className="check-item checkbox">
                        <label>
                            <input
                                type="checkbox"
                                checked={item.checked}
                                onChange={() => {
                                    changeValue(item, setList);
                                }}
                            />
                            <div className="outer-square">
                                <div className="inner-square"></div>
                                <span className="material-symbols-outlined">
                                    check
                                </span>
                            </div>
                            <span className="text">{item.nome}</span>
                        </label>
                    </div>

                    <div className="actions">
                        <span
                            className="material-symbols-outlined"
                            onClick={() => deleteItem(setList, item)}
                        >
                            delete
                        </span>
                        <span
                            className="material-symbols-outlined"
                            onClick={() => editItem(setList, item, setValue)}
                        >
                            edit_square
                        </span>
                    </div>
                </div>
            ))}
        </>
    );
}
