import { useEffect, useState } from "react";
import {
    switchWeekDay,
    switchMonth,
    formatDay,
    formatSeconds,
    formatMinutes,
    formatHour24,
    formatHour12,
    getMeridiem,
} from "../../js/timeFormat";

export default function useTime() {
    const [time, setTime] = useState({});

    useEffect(() => {
        const uptdateTime = setInterval(() => {
            const date = new Date();

            setTime({
                weekDay: switchWeekDay(date.getDay()) + ", ",
                mouth: switchMonth(date.getMonth()) + ", ",
                day: formatDay(date.getDate()) + ", ",
                year: date.getFullYear(),
                seconds: formatSeconds(date.getSeconds()),
                minutes: formatMinutes(date.getMinutes()) + ":",
                hour24: formatHour24(date.getHours()) + ":",
                hour12: formatHour12(date.getHours()) + ":",
                meridiem: getMeridiem(date.getHours()),
            });
        }, 1000);

        return () => clearInterval(uptdateTime);
    }, []);

    return time;
}
