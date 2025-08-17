import "../css/header.css";

export default function Header({ option, setOption }) {
    return (
        <header>
            <div className="switcher">
                <span
                    className={`switch ${option === "clock" ? "active" : ""}`}
                    spans:id="Clock"
                    onClick={() => setOption("clock")}
                >
                    Clock
                </span>
                <span
                    className={`switch ${
                        option === "stopwatch" ? "active" : ""
                    }`}
                    id="Stopwatch"
                    onClick={() => setOption("stopwatch")}
                >
                    Stopwatch
                </span>
                <span
                    className={`switch ${option === "timer" ? "active" : ""}`}
                    id="Timer"
                    onClick={() => setOption("timer")}
                >
                    Timer
                </span>
            </div>
        </header>
    );
}
