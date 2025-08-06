import { List } from "./List";
import { NoLength } from "./NoLength";
import "./css/card.css";

export function Card({ list }) {
    return (
        <div className="list">
            {list.length === 0 ? <NoLength /> : <List list={list} />}
        </div>
    );
}
