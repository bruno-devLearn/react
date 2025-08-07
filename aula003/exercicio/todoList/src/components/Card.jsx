import { List } from "./List";
import { NoLength } from "./NoLength";
import "./css/card.css";

export function Card({ setList, list, setValue }) {
    return (
        <div className="list">
            {list.length === 0 ? (
                <NoLength />
            ) : (
                <List setList={setList} list={list} setValue={setValue} />
            )}
        </div>
    );
}
