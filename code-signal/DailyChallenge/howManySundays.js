function howManySundays(n, startDay) {
    const days = {"Sunday": 7, "Monday": 6, "Tuesday": 5, "Wednesday": 4, "Thursday": 3, "Friday": 2, "Saturday": 1}

    return n < days[startDay] ? 0 : Math.floor((n - days[startDay]) / 7) + 1

}

// Given a start day and n number of days, determine how many SUndays will occur within the n days
// For n = 9 and startDay = "Saturday" => 2