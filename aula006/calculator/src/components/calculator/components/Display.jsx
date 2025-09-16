import { useEffect, useRef } from "react";
import { useStore } from "../../../js/Store";

export function Display() {
    const { inputValue, changeInputValue, calculateValue } = useStore();
    const inputRef = useRef(null);

    useEffect(() => {
        // Foca o input ao montar
        if (inputRef.current) {
            inputRef.current.focus();
        }

        const handleKeyDown = (e) => {
            const allowedKeys = "0123456789+-*/,";
            const specialKeys = ["Backspace", "Delete", "Enter", "="];
            const lastChar = inputValue[inputValue.length - 1];
            //todo: colocar lastChar se for uma operação como um estado

            if (allowedKeys.includes(e.key)) {
                if (
                    (lastChar === "+" ||
                        lastChar === "-" ||
                        lastChar === "/" ||
                        lastChar === "*") &&
                    (e.key === "+" ||
                        e.key === "-" ||
                        e.key === "/" ||
                        e.key === "*")
                ) {
                    changeInputValue(inputValue.slice(0, -1) + e.key);
                } else {
                    changeInputValue(inputValue + e.key);
                }

                e.preventDefault();
            } else if (specialKeys.includes(e.key)) {
                if (e.key === "Backspace") {
                    changeInputValue(inputValue.slice(0, -1));
                    e.preventDefault();
                } else if (e.key === "Delete") {
                    changeInputValue(""); // limpa tudo
                    e.preventDefault();
                } else if (e.key === "Enter" || e.key === "=") {
                    let value;

                    if (
                        inputValue === "/" ||
                        inputValue === "*" ||
                        inputValue === "-" ||
                        inputValue === "+" ||
                        inputValue === "" ||
                        lastChar === "+" ||
                        lastChar === "-" ||
                        lastChar === "/" ||
                        lastChar === "*"
                    ) {
                        return;
                    } else if (inputValue === ",") {
                        value = calculateValue(inputValue + "0");
                    } else {
                        value = calculateValue(inputValue);
                    }

                    changeInputValue(value);
                    e.preventDefault();
                }
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [changeInputValue, inputValue, calculateValue]);

    return (
        <div className="display">
            <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => {
                    // só deixa números e operadores, sem "="
                    const val = e.target.value.replace(/[^0-9+\-*/,]/g, "");
                    changeInputValue(val);
                }}
            />
        </div>
    );
}
