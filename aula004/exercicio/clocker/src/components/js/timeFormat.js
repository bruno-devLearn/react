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

function formatSeconds(seconds) {
    const str = seconds.toString();
    return str.length !== 2 ? "0" + str : str;
}

function formatMinutes(minutes) {
    const str = minutes.toString();
    return str.length !== 2 ? "0" + str : str;
}

function formatHour24(hour) {
    const str = hour.toString();
    return str.length !== 2 ? "0" + str : str;
}

function formatHour12(hour) {
    const hour12 = hour % 12 === 0 ? 12 : hour % 12;

    const str = hour12.toString();
    return str.length !== 2 ? "0" + str : str;
}

function getMeridiem(hour) {
    const period = hour >= 12 ? "PM" : "AM";
    return period;
}

export {
    switchWeekDay,
    switchMonth,
    formatDay,
    formatSeconds,
    formatMinutes,
    formatHour24,
    formatHour12,
    getMeridiem,
};
