export default function Clock() {
    return (
        <div className="content">
            <div className="clock">
                <div className="date">
                    <span id="week-day">Saturday, </span>
                    <span id="mouth">August </span>
                    <span id="day">16, </span>
                    <span id="year">2025</span>
                </div>
                <div className="time">
                    <span id="hour">16:</span>
                    <span id="minute">30:</span>
                    <span id="seconds">30</span>
                </div>
                <div className="buttons">
                    <button id="12h" className="no-selected">
                        12h
                    </button>
                    <button id="24h" className="selected">
                        24h
                    </button>
                </div>
            </div>
        </div>
    );
}
