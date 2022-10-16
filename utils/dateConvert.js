const { DateTime } = require("luxon"); //require luxon library

//Function takes the locale, start and end time
//configured within Journey Builder and builds
//2 date objects: start date, end date

/*
* @param {string} locale - Locale selected through Journey Builder
* @param {string} startDtObj - start time selected through Journey Builder
* @param {string} endDtObj - end time selected through Journey Builder
*/

const getNextTriggerDate = (locale, start, end) => {

    let startDay = DateTime.local().setZone(locale).toFormat("dd"),
        startHour = start.split(":")[0],
        startMinute = start.split(":")[1],
        endHour = end.split(":")[0],
        endMinute = end.split(":")[1];

        //if endhour is equal to start hour and end minute is less than start minute, set date as the next day
        //or if end hour is less than start hour, set date as the next day
        //otherwise, set date as the same day

        if(endHour < startHour || (endHour == startHour && endMinute <= startMinute)){
            //console.log('end time is less than start time, setting end date as the next day')
            endDay = DateTime.local().setZone(locale).plus({days: 1}).toFormat("dd")
        } else {
            //console.log('end time is greater than start time, setting end date as the same day')
            endDay = startDay
        }

    //build the start date object using current date
    //and start hour and minute, and locale configured through journey builder
    let startDtObj = DateTime.fromObject({
        day: startDay,
        hour: startHour,
        minute: startMinute
    },
    {
        zone: locale
    })

    //build the end date object using current date
    //and start hour and minute, and locale configured through journey builder
    let endDtObj = DateTime.fromObject({
        day: endDay,
        hour: endHour,
        minute: endMinute
    },
    {
        zone: locale
    })


//Inner function compares startDtObj with endDtObj to determine
//next applicable date (nextDtObj) for contact to pass through wait activity
//if current date is between startDtObj and endDtObj, nextDtObj is set to 1 minute after endDtObj
//if current date is not between startDtObj and endDtObj, nextDtObj is set to 1 minutes after currentDtObj

/*
* @param {string} locale - Locale selected through Journey Builder
* @param {string} startDtObj - start date object in configured timezone
* @param {string} endDtObj - end date object in configured timezone
*/

const checkDateBetweenTime = (locale, startDtObj, endDtObj) => {

        //create a current date object with locale
        //configured through journey builder
        let currentDtObj = DateTime.local().setZone(locale);

        //if current date is between startDtObj and endDtObj
        //set nextDtObj as endDtObj + 1 minute
        //if current date is not between startDtObj and endDtObj
        //set nextDtObj as 1 minute from now
        if(currentDtObj >= startDtObj && currentDtObj <= endDtObj){

            //console.log('current date is between start and end time')
            let nextDtObj = endDtObj.plus({minutes: 1}).setZone(locale);
            //console.log('Next DateTime: ', nextDtObj.toISO())
    
            return nextDtObj
        } else {

            //console.log('current date is not between start and end time')
            let nextDtObj = currentDtObj.plus({minutes: 1}).setZone(locale);
            //console.log('Next DateTime: ', nextDtObj.toISO())
    
            return nextDtObj
        }
    }

    //get next applicable date
    let nextDtObj = checkDateBetweenTime(locale,startDtObj,endDtObj)

    return { startDtObj, endDtObj, nextDtObj};

}


//export functions
module.exports = {
    getNextTriggerDate
}
