import { useState } from "react";
import { Input } from "./Input";
import { Card } from "./Card";
import { getData } from "../js/localStorage";

export function Main() {
    const [value, setValue] = useState("");
    const [editIndex, setEditIndex] = useState(null);
    const [btn, setBtn] = useState("Add");

    const [erro, setErro] = useState("");
    const [list, setList] = useState(getData());

    return (
        <main>
            <Input
                setList={setList}
                list={list}
                setValue={setValue}
                value={value}
                btn={btn}
                setBtn={setBtn}
                erro={erro}
                setErro={setErro}
                editIndex={editIndex}
            />
            <Card
                setList={setList}
                list={list}
                setValue={setValue}
                setBtn={setBtn}
                setErro={setErro}
                setEditIndex={setEditIndex}
            />
        </main>
    );
}
