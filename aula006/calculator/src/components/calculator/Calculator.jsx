import { Buttons } from "./components/Buttons";
import { Display } from "./components/Display";
import "../index.css";

export function Calculator() {
    return (
        <div className="calculator">
            <Display />
            <Buttons />
        </div>
    );
}
