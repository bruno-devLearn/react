import { deleteItem } from "../js/actions";

export function List({ setList, list }) {
    return (
        <>
            {list.map((item) => (
                <div className="list-item" key={item}>
                    <div className="check-item checkbox">
                        <label>
                            <input type="checkbox" />
                            <div className="outer-square">
                                <div className="inner-square"></div>
                                <span className="material-symbols-outlined">
                                    check
                                </span>
                            </div>
                            <span className="text">{item}</span>
                        </label>
                    </div>

                    <div className="actions">
                        <span
                            className="material-symbols-outlined"
                            onClick={() => deleteItem(setList, item)}
                        >
                            delete
                        </span>
                        <span className="material-symbols-outlined">
                            edit_square
                        </span>
                    </div>
                </div>
            ))}
        </>
    );
}
