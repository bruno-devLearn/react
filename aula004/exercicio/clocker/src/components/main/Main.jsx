import "../css/main.css";
import Timer from "./components/timer.jsx";
import Clock from "./components/clock.jsx";
import Stopwatch from "./components/stopwatch.jsx";

export default function Main({ option }) {
    const components = {
        clock: <Clock />,
        stopwatch: <Stopwatch />,
        timer: <Timer />,
    };

    return <main>{components[option]}</main>;
}
