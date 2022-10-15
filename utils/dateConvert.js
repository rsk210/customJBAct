const { DateTime } = require("luxon");


//function to convert the current system date to configured timezone timestamp

/*
* @param {string} Locale - timezone set in journey activity config
*/
const convertDateTimeToLocale = (locale, start, end) => {

    let dtObj = DateTime.fromObject({
        hour: start.split(":")[0],
        minute: start.split(":")[1]
    },
    {
        zone: locale
    })

    console.log(dtObj.toISO());
    
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