import { useEffect, useRef } from "react";
import { useStore } from "../../../js/Store";

export function Display() {
    const inputValue = useStore((state) => state.inputValue);
    const changeInputValue = useStore((state) => state.changeInputValue);
    const inputRef = useRef(null);

    useEffect(() => {
        // Foca o input ao montar
        if (inputRef.current) {
            inputRef.current.focus();
        }

        const handleKeyDown = (e) => {
            const allowedKeys = "0123456789+-*/,";
            const specialKeys = ["Backspace", "Delete", "Enter", "="];

            if (allowedKeys.includes(e.key)) {
                changeInputValue(inputValue + e.key);
                e.preventDefault();
            } else if (specialKeys.includes(e.key)) {
                if (e.key === "Backspace") {
                    changeInputValue(inputValue.slice(0, -1));
                    e.preventDefault();
                } else if (e.key === "Delete") {
                    changeInputValue(""); // limpa tudo
                    e.preventDefault();
                } else if (e.key === "Enter" || e.key === "=") {
                    console.log("Enter pressionado"); // ou processa a conta
                    e.preventDefault();
                }
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [changeInputValue, inputValue]);

    return (
        <div className="display">
            <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => {
                    // só deixa números e operadores
                    const val = e.target.value.replace(/[^0-9=+\-*/]/g, "");
                    changeInputValue(val);
                }}
            />
        </div>
    );
}
