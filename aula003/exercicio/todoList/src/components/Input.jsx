import { useState } from "react";
import { startAll } from "../js/start";
import "./css/input.css";

export function Input() {
    const [nome, setNome] = useState("");
    const [erro, setErro] = useState("");

    function handleSubmit(e) {
        e.preventDefault(); // impede o recarregamento da página
        startAll(nome, setErro);
    }

    return (
        <>
            <form className="inputDiv" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Add a new task..."
                    maxLength={50}
                    value={nome}
                    onChange={(e) => {
                        setNome(e.target.value);
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
