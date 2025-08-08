import { List } from "./List";
import { NoLength } from "./NoLength";
import "./css/card.css";

export function Card({
    setList,
    list,
    setValue,
    setBtn,
    setErro,
    setEditIndex,
}) {
    return (
        <div className="list">
            {list.length === 0 ? (
                <NoLength />
            ) : (
                <List
                    setList={setList}
                    list={list}
                    setValue={setValue}
                    setBtn={setBtn}
                    setErro={setErro}
                    setEditIndex={setEditIndex}
                />
            )}
        </div>
    );
}
