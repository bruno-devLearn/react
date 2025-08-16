import "../css/header.css";

export default function Header() {
    return (
        <header>
            <div className="switcher">
                <span className="switch" id="Clock">
                    Clock
                </span>
                <span className="switch" id="Stopwatch">
                    Stopwatch
                </span>
                <span className="switch" id="Timer">
                    Timer
                </span>
            </div>
        </header>
    );
}
