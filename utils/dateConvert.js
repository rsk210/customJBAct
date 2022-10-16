const { DateTime } = require("luxon");


//function to convert the current system date to configured timezone timestamp

/*
* @param {string} Locale - timezone set in journey activity config
*/
const getStartEndDateTime = (locale, start, end) => {

    let startDay = DateTime.local().setZone(locale).toFormat("dd"),
        startHour = start.split(":")[0],
        startMinute = start.split(":")[1],

        endHour = end.split(":")[0],
        endMinute = end.split(":")[1];

        if(endHour < startHour || (endHour == startHour && endMinute <= startMinute)){
            //if endhour is less than start hour, set date as the next day
            //if endhour is equal to start hour and end minute is less than start minute, set date as the next day
            endDay = DateTime.local().setZone(locale).plus({days: 1}).toFormat("dd")
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

    checkDateBetweenTime(locale, startDtObj,endDtObj)

}

//function that checks to see if the current local date is between startDtObj and endDtObj

/*
* @param {string} locale - Locale selected through Journey Builder
* @param {string} startDtObj - start date object in configured timezone
* @param {string} endDtObj - end date object in configured timezone
*/
const checkDateBetweenTime = (locale, startDtObj, endDtObj) => {
    let currentDtObj = DateTime.local().setZone(locale);
    if(currentDtObj >= startDtObj && currentDtObj <= endDtObj){
        console.log('current date is between start and end time')

        //set nextDtObj as endDtObj + 1 hour
        let nextDtObj = endDtObj.plus({hours: 1})
        console.log('Next DateTime: ', nextDtObj.toISO())

        return nextDtObj
    } else {
        console.log('current date is not between start and end time')
        
        //set nextDtObj as from now
        let nextDtObj = currentDtObj.plus({hours: 1})
        console.log('Next DateTime: ', nextDtObj.toISO())

        return nextDtObj
    }
}


module.exports = {
    getStartEndDateTime,
    checkDateBetweenTime
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