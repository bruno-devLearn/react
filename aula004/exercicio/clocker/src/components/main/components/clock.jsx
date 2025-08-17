import { useState } from "react";
import useTime from "../hooks/useTime";

export default function Clock() {
    const [format, setFormat] = useState("24h");
    const time = useTime();

    function active() {
        format === "24h" ? setFormat("12h") : setFormat("24h");
    }

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
                    <span id="hour">
                        {format === "24h" ? time.hour24 : time.hour12}
                    </span>
                    <span id="minute">
                        {time.minutes ? time.minutes : "00:"}
                    </span>
                    <span id="seconds">
                        {time.seconds ? time.seconds : "00"}
                    </span>
                    <span className="meridiem">
                        {format === "12h" ? time.meridiem : null}
                    </span>
                </div>
                <div className="buttons">
                    <button
                        id="24h"
                        className={
                            format === "24h" ? "selected" : "no-selected"
                        }
                        onClick={() => (format !== "24h" ? active() : null)}
                    >
                        24h
                    </button>
                    <button
                        id="12h"
                        className={
                            format === "12h" ? "selected" : "no-selected"
                        }
                        onClick={() => (format !== "12h" ? active() : null)}
                    >
                        12h
                    </button>
                </div>
            </div>
        </div>
    );
}
