export default function Timer() {
    return (
        <div className="content">
            <div className="timer">
                <div className="time">
                    <span id="hour">16:</span>
                    <span id="minute">30:</span>
                    <span id="seconds">30</span>
                </div>
                <span className="title">
                    <h2>Remaing Time</h2>
                </span>
                <div className="inputs">
                    <div className="time-box">
                        <input type="text" id="hour" />
                        <span>Hour</span>
                    </div>
                    <div className="time-box">
                        <input type="text" id="minute" />
                        <span>Minutes</span>
                    </div>
                    <div className="time-box">
                        <input type="text" id="seconds" />
                        <span>Seconds</span>
                    </div>
                </div>
                <div className="actions">
                    <button id="start">Start</button>
                    <button id="reset">Reset</button>
                </div>
            </div>
        </div>
    );
}
