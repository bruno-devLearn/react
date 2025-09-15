import { Buttons } from "./components/Buttons";
import { Display } from "./components/Display";

export function Calculator() {
    return (
        <div className="calculator">
            <Display />
            <Buttons />
        </div>
    );
}
