import { useRef } from "react";
import { startAll } from "../js/start";
import "./css/input.css";

import { editItem } from "../js/actions";

export function Input({
    setList,
    list,
    setValue,
    value,
    btn,
    setBtn,
    erro,
    setErro,
    editIndex,
}) {
    const inputRef = useRef(null);

    function handleSubmit() {
        const item = {
            id: crypto.randomUUID(),
            nome: value.trim(),
            checked: false,
        };

        startAll(item, setErro, setList, btn, editIndex, list);
        setValue("");
        inputRef.current.focus();
    }

    return (
        <>
            <form
                className="inputDiv"
                onSubmit={(e) => {
                    e.preventDefault();

                    if (btn === "Add") {
                        handleSubmit();
                    } else {
                        editItem(
                            setBtn,
                            setValue,
                            list,
                            value,
                            setList,
                            editIndex,
                            setErro,
                            btn
                        );
                    }
                }}
            >
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
                    {btn}
                </button>
            </form>
            <div className="menssage">
                <span>{erro}</span>
            </div>
        </>
    );
}
