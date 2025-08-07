import { useState } from "react";
import { Input } from "./Input";
import { Card } from "./Card";
import { getData } from "../js/localStorage";

export function Main() {
    const [value, setValue] = useState("");
    const [list, setList] = useState(getData());

    return (
        <main>
            <Input setList={setList} setValue={setValue} value={value} />
            <Card setList={setList} list={list} setValue={setValue} />
        </main>
    );
}
