export const parseDateTimeString = (dateTimeString) => {
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let dateTimeObject = new Date(dateTimeString);
    //convert GMT time to CST
    let temp = dateTimeObject.toLocaleString("en-US", {
        timeZone: "CST",
        hour12: false,
    });
    const [first, second] = temp.split(",").map((item) => item.trim());
    let [month, day, year] = first.split("/");
    let [hours, minutes, seconds] = second.split(":");

    //0 padding
    month = month.padStart(2, "0");
    day = day.padStart(2, "0");
    hours = hours.padStart(2, "0");

    let weekday = weekdays[dateTimeObject.getDay()];
    return {
        month: month,
        day: day,
        year: year,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        weekday: weekday,
    };
};
