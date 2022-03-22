/*
 Imagine that you want to schedule a meeting of a certain duration with a coworker. You have access
 to your calendar and your coworker's calendar (both of which contain your respective meetings for
 the day, in the form of [startTime, endTime]), as well as both of your daily bounds
 (i.e., the earliest and latest times at which you're available for meetings every day, in the form of [earliestTime, latestTime]).
 Write a function that takes in your calendar, your daily bounds, your coworker's calendar,
 your coworker's daily bounds, and the duration of the meeting that you want to schedule,
 and that returns a list of all the time blocks (in the form of [startTime, endTime]) during which you could schedule the meeting.
 Note that times will be given and should be returned in military time (example times: '8:30', '9:01', '23:56').

 Sample input: [['9:00', '10:30'], ['12:00', '13:00'], ['16:00', '18:00']] ['9:00', '20:00']
 coworker: [['10:00', '11:30'],['12:30', '14:30'], ['14:30', '15:00'], ['16:00', '17:00']]
 ['10:00', '18:30']
 30

 Sample output: [['11:30', '12:00'], ['15:00', '16:00'], ['18:00', '18:30']]
 */

/* first we will update calendars by adding extra duration based on the bounds. After updating
 calendars we will merge them into single calendar. After merging, we will flatten the merged
 calendar to get the un-availabilities for the both the person. From the un-availabilities we
 can find the available slots by comparing with duration.
 */

// Time: O(c1 + c2), Space: O(c1 + c2)
function calendarMatching(cal1, bounds1, cal2, bounds2, duration) {
    let updatedCal1 = updateCalendar(cal1, bounds1)
    let updatedCal2 = updateCalendar(cal2, bounds2)
    let mergedCalendar = mergeCalendars(updatedCal1, updatedCal2)
    let flattenCalendar = flattenCalendars(mergedCalendar)
    return getMatchingAvailabilities(flattenCalendar, duration)
}

function getMatchingAvailabilities(calendar, duration) {
    let availabilities = []
    for (let i = 1; i < calendar.length; i++) {
        let start = calendar[i - 1].end
        let end = calendar[i].start
        let diff = end - start
        if (diff >= duration)
            availabilities.push(new Meeting(start, end))
    }
    for (let i = 0; i < availabilities.length; i++) {
        availabilities[i] = new Meeting(convertMinutesToTime(availabilities[i].start),
            convertMinutesToTime(availabilities[i].end))
    }
    return availabilities
}

// flat the calendar by combining times
function flattenCalendars(calendar) {
    let flattened = []
    flattened.push(calendar[0])
    for (let i = 1; i < calendar.length; i++) {
        let currentMeeting = calendar[i]
        let previousMeeting = flattened[flattened.length - 1]
        if (previousMeeting.end >= currentMeeting.start) {
            flattened[flattened.length - 1] = new Meeting(previousMeeting.start,
                Math.max(previousMeeting.end, currentMeeting.end))
        } else {
            flattened.push(currentMeeting)
        }
    }
    return flattened
}

// merge both calendars
function mergeCalendars(calendar1, calendar2) {
    let mergedCalendar = []
    let i = 0, j = 0
    while (i < calendar1.length && j < calendar2.length) {
        let meeting1 = calendar1[i], meeting2 = calendar2[j]
        if (meeting1.start < meeting2.start) {
            mergedCalendar.push(meeting1)
            i++
        } else {
            mergedCalendar.push(meeting2)
            j++
        }
    }
    while (i < calendar1.length) mergedCalendar.push(calendar1[i++])
    while (j < calendar2.length) mergedCalendar.push(calendar2[j++])
    return mergedCalendar
}

// add two time intervals from start and end of bound
function updateCalendar(calendar, bounds) {
    let updatedCalendar = []
    updatedCalendar.push(new Meeting("0:00", bounds.start))
    updatedCalendar.push(...calendar)
    updatedCalendar.push(new Meeting(bounds.end, "23:59"))
    let calendarInMinutes = []
    for (let val of updatedCalendar) {
        calendarInMinutes.push(
            new Meeting(convertTimeToMinutes(val.start), convertTimeToMinutes(val.end)))
    }
    return calendarInMinutes
}

//convert time into minutes
function convertTimeToMinutes(time) {
    let split = time.split(':')
    let hours = Number(split[0]), minutes = Number(split[1])
    return hours * 60 + minutes
}

function convertMinutesToTime(minutes) {
    let hours = Math.floor(minutes / 60), mins = minutes % 60
    return `${hours}:${mins < 10 ? '0' + mins : mins}`
}

class Meeting {
    constructor(start, end) {
        this.start = start
        this.end = end
    }
}

function test() {
    let myCal = []
    myCal.push(new Meeting('9:00', '10:30'), new Meeting('12:00', '13:00'),
        new Meeting('16:00', '18:00'))
    let myBounds = new Meeting('9:00', '20:00')
    let coCal = []
    coCal.push(new Meeting('10:00', '11:30'), new Meeting('12:30', '14:30'),
        new Meeting('14:30', '15:00'), new Meeting('16:00', '17:00'))
    let coBounds = new Meeting('10:00', '18:30')
    let duration = 30
    console.log(calendarMatching(myCal, myBounds, coCal, coBounds, duration))
}

test()
