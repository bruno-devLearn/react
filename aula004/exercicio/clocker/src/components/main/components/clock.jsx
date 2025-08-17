import useTime from "../hooks/useTime";

export default function Clock() {
    const time = useTime();

    return (
        <div className="content">
            <div className="clock">
                <div className="date">
                    <span id="week-day">{time.weekDay}</span>
                    <span id="mouth">{time.mouth}</span>
                    <span id="day">{time.day}</span>
                    <span id="year">{time.year}</span>
                </div>
                <div className="time">
                    <span id="hour">{time.hour24 ? time.hour24 : "00:"}</span>
                    <span id="minute">
                        {time.minutes ? time.minutes : "00:"}
                    </span>
                    <span id="seconds">
                        {time.seconds ? time.seconds : "00"}
                    </span>
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
