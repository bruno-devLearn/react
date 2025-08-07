import { useState, useRef } from "react";
import { startAll } from "../js/start";
import "./css/input.css";

export function Input({ setList, setValue, value }) {
    const inputRef = useRef(null);

    const [erro, setErro] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        const item = {
            nome: value.trim(),
            checked: false,
        };

        startAll(item, setErro, setList);
        setValue("");
        inputRef.current.focus();
    }

    return (
        <>
            <form className="inputDiv" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Add a new task..."
                    maxLength={50}
                    value={value}
                    ref={inputRef}
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
