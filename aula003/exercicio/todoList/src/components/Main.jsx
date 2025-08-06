import { useState } from "react";
import { Input } from "./Input";
import { Card } from "./Card";
import { getData } from "../js/localStorage";

export function Main() {
    const [list, setList] = useState(getData);

    return (
        <main>
            <Input setList={setList} list={list} />
            <Card list={list} />
        </main>
    );
}
