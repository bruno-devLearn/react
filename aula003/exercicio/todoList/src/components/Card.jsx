import { List } from "./List";
import { NoLength } from "./NoLength";
import { list } from "../js/localStorage.js";
import "./css/card.css";

export function Card() {
    return (
        <div className="list">
            {list.length === 0 ? <NoLength /> : <List />}
        </div>
    );
}
