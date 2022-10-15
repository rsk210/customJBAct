const { DateTime } = require("luxon");


//function to convert the current system date to configured timezone timestamp

/*
* @param {string} Locale - timezone set in journey activity config
*/
const convertDateTimeToLocale = (locale, start, end) => {

    let startDay = DateTime.local().setZone(locale).toFormat("dd"),
        startHour = start.split(":")[0],
        startMinute = start.split(":")[1],

        endHour = end.split(":")[0],
        endMinute = end.split(":")[1];

        if(endHour < startHour || (endHour == startHour && endMinute <= startMinute)){
            //if endhour is less than start hour, set date as the next day
            //if endhour is equal to start hour and end minute is less than start minute, set date as the next day
            endDay = startDay.plus({days: 1}).toFormat("dd")
            console.log('next Date: ', endDay)
        } else {
            endDay = startDay
        }

        

    let startDtObj = DateTime.fromObject({
        day: startDay,
        hour: startHour,
        minute: startMinute
    },
    {
        zone: locale
    })

    let endDtObj = DateTime.fromObject({
        day: endDay,
        hour: endHour,
        minute: endMinute
    },
    {
        zone: locale
    })



    console.log('Start DateTime: ', startDtObj.toISO());
    console.log('End DateTime: ', endDtObj.toISO());
    
    /*let startHour = start.split(":")[0],
        startMinute = start.split(":")[1],
        endHour = end.split(":")[0],
        endMinute = end.split(":")[1];

        console.log(startHour, startMinute, endHour, endMinute);   
    

    let startDateUTC = new Date(),
        startDateTimeUTC = startDateUTC.setHours(startHour, startMinute, 0, 0),
        endDateUTC = new Date(),
        endDateTimeUTC = endDateUTC.setHours(endHour, endMinute, 0, 0);

        options = {
            timeZone: locale
        }

        //get converted date
        convertedStartDateTime = startDateTimeUTC.toLocaleDateString("en-US", options)
        convertedEndDateTime = endDateTimeUTC.toLocaleDateString("en-US", options)
        
        console.log(convertedStartDateTime)
        console.log(convertedEndDateTime)
*/
        //return convertedDateTime
}

module.exports = {
    convertDateTimeToLocale
}

//function to check if current date in converted timezone is between two timestamps

/*
* @param {string} convertedDate - converted date in configured timezone
* @param {string} startTime - start time of the journey activity
* @param {string} endTime - end time of the journey activity
*/
/*
const checkDateBetweenTime = (locale, startTime, endTime) => {
    let convertedDateObj = new Date(convertedDate),
        startTimeObj = new Date(startTime),
        endTimeObj = new Date(endTime)
        console.log(convertedDateObj, startTimeObj, endTimeObj)
    }
*/