import { useState } from "react";
import { startAll } from "../js/start";
import "./css/input.css";

export function Input({ setList }) {
    const [value, setValue] = useState("");
    const [erro, setErro] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        const nome = value.trim();
        startAll(nome, setErro, setList);
    }

    return (
        <>
            <form className="inputDiv" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Add a new task..."
                    maxLength={50}
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value);
                        setErro("");
                    }}
                />
                <button type="submit" className="send">
                    Add
                </button>
            </form>
            <div className="menssage">
                <span>{erro}</span>
            </div>
        </>
    );
}
