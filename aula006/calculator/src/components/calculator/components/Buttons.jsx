import { useEffect, useRef, useState, useMemo } from "react";

export function Buttons() {
    const [event, setEvent] = useState("");

    const buttons = useMemo(
        () => [
            { label: "AC", type: "clear", key: "Delete" },
            { label: "C", type: "clear", key: "Backspace" },
            { label: "/", type: "operation", key: "/" },
            { label: "*", type: "operation", key: "*" },
            { label: "7", type: "number", key: "7" },
            { label: "8", type: "number", key: "8" },
            { label: "9", type: "number", key: "9" },
            { label: "-", type: "operation", key: "-" },
            { label: "4", type: "number", key: "4" },
            { label: "5", type: "number", key: "5" },
            { label: "6", type: "number", key: "6" },
            { label: "+", type: "operation", key: "+" },
            { label: "1", type: "number", key: "1" },
            { label: "2", type: "number", key: "2" },
            { label: "3", type: "number", key: "3" },
            { label: "=", type: "equal", key: "Enter" },
            { label: "0", type: "number zero", key: "0" },
            { label: ",", type: "number point", key: "," },
        ],
        []
    );

    const btnRefs = useRef([]);

    useEffect(() => {
        btnRefs.current = btnRefs.current.slice(0, buttons.length);
    }, [buttons.length]);

    useEffect(() => {
        if (!event) return;
        let key = event;
        if (event === "AC") key = "Delete";
        if (event === "C") key = "Backspace";
        if (event === "=") {
            const enterEvent = new KeyboardEvent("keydown", { key: "Enter" });
            document.dispatchEvent(enterEvent);
            const equalEvent = new KeyboardEvent("keydown", { key: "=" });
            document.dispatchEvent(equalEvent);
            setEvent("");
            return;
        }
        const keyboardEvent = new KeyboardEvent("keydown", { key });
        document.dispatchEvent(keyboardEvent);
        setEvent("");
    }, [event]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            let idx = buttons.findIndex((btn) => btn.key === e.key);
            if (e.key === "=") {
                idx = buttons.findIndex((btn) => btn.label === "=");
            }
            if (idx !== -1 && btnRefs.current[idx]) {
                btnRefs.current[idx].classList.add("active");
            }
        };
        const handleKeyUp = (e) => {
            let idx = buttons.findIndex((btn) => btn.key === e.key);
            if (e.key === "=") {
                idx = buttons.findIndex((btn) => btn.label === "=");
            }
            if (idx !== -1 && btnRefs.current[idx]) {
                btnRefs.current[idx].classList.remove("active");
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, [buttons]);

    return (
        <div className="grid">
            {buttons.map((btn, i) => (
                <div
                    key={btn.label}
                    className={btn.type}
                    ref={(el) => (btnRefs.current[i] = el)}
                    onClick={() => setEvent(btn.label)}
                    tabIndex={0}
                    role="button"
                    aria-label={btn.label}
                >
                    {btn.label}
                </div>
            ))}
        </div>
    );
}
