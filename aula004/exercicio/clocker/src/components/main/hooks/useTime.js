import { useEffect, useState } from "react";

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
            });
        }, 1000);

        return () => clearInterval(uptdateTime);
    }, []);

    return time;
}

function switchWeekDay(weekDay) {
    switch (weekDay) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
    }
}

function switchMonth(month) {
    switch (month) {
        case 0:
            return "January";
        case 1:
            return "February";
        case 2:
            return "March";
        case 3:
            return "April";
        case 4:
            return "May";
        case 5:
            return "June";
        case 6:
            return "July";
        case 7:
            return "August";
        case 8:
            return "September";
        case 9:
            return "October";
        case 10:
            return "November";
        case 11:
            return "December";
    }
}

function formatDay(day) {
    const str = day.toString();
    return str.length !== 2 ? "0" + str : str;
}

/*
for (let teste = 2000; teste <= 2100; teste++) {
    const date = new Date(teste, 7, 1);
    const result = {
        weekDay: switchWeekDay(date.getDay()) + ", ",
        mouth: switchMonth(date.getMonth()) + ", ",
        day: formatDay(date.getDate()) + ", ",
        year: date.getFullYear(),
    };
    console.log(result);
}
*/
