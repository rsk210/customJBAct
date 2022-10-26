const { v1: Uuidv1 } = require('uuid');
const JWT = require('../utils/jwtDecoder');
const SFClient = require('../utils/sfmc-client');
const logger = require('../utils/logger');
const dateTime = require('../utils/dateConvert');

/**
 * The Journey Builder calls this method for each contact processed by the journey.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */

exports.execute = async (req, res) => {
  // decode data
  const data = JWT(req.body);
  logger.info(data);
  
  let configLocale = data.inArguments[0].TimeZoneOptions,
      configStartTime = data.inArguments[0].BlackoutStartTime,
      configFinishTime = data.inArguments[0].BlackoutFinishTime;
  
  let dates = dateTime.getNextTriggerDate(configLocale,configStartTime,configFinishTime),
      startDate = dates.startDtObj.toISO(),
      endDate = dates.endDtObj.toISO(),
      nextDate = dates.nextDtObj.toISO();

  console.log('Start Date Objs: ', startDate, '; End Date Objs',  endDate, '; Next Date Objs', nextDate);

  try {
    const id = Uuidv1();

    await SFClient.saveData(process.env.DATA_EXTENSION_EXTERNAL_KEY, [
      {
        keys: {
          Id: id,
          SubscriberKey: data.inArguments[0].contactKey,
        },
        values: {
          TimeZone: configLocale,
          StartTime: configStartTime,
          EndTime: configFinishTime,
          NextDate: nextDate
        },
      },
    ]);
  } catch (error) {
    logger.error(error);
  }

  res.status(200).send({
    status: 'ok',
  });
};

/**
 * Endpoint that receives a notification when a user saves the journey.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.save = async (req, res) => {
  res.status(200).send({
    status: 'ok',
  });
};

/**
 *  Endpoint that receives a notification when a user publishes the journey.
 * @param req
 * @param res
 */
exports.publish = (req, res) => {
  res.status(200).send({
    status: 'ok',
  });
};

/**
 * Endpoint that receives a notification when a user performs
 * some validation as part of the publishing process.
 * @param req
 * @param res
 */
exports.validate = (req, res) => {
  const { v1: Uuidv1 } = require('uuid');
const JWT = require('../utils/jwtDecoder');
const SFClient = require('../utils/sfmc-client');
const logger = require('../utils/logger');
const dateTime = require('../utils/dateConvert');

/**
 * The Journey Builder calls this method for each contact processed by the journey.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */

exports.execute = async (req, res) => {
  // decode data
  const data = JWT(req.body);
  logger.info(data);
  
  let configLocale = data.inArguments[0].TimeZoneOptions,
      configStartTime = data.inArguments[0].BlackoutStartTime,
      configFinishTime = data.inArguments[0].BlackoutFinishTime;
  
  let dates = dateTime.getNextTriggerDate(configLocale,configStartTime,configFinishTime),
      startDate = dates.startDtObj.toISO(),
      endDate = dates.endDtObj.toISO(),
      nextDate = dates.nextDtObj.toISO();

  console.log('Start Date Objs: ', startDate, '; End Date Objs',  endDate, '; Next Date Objs', nextDate);

  try {
    const id = Uuidv1();

    await SFClient.saveData(process.env.DATA_EXTENSION_EXTERNAL_KEY, [
      {
        keys: {
          Id: id,
          SubscriberKey: data.inArguments[0].contactKey,
        },
        values: {
          TimeZone: configLocale,
          StartTime: configStartTime,
          EndTime: configFinishTime,
          NextDate: nextDate
        },
      },
    ]);
  } catch (error) {
    logger.error(error);
  }

  res.status(200).send({
    status: 'ok',
  });
};

/**
 * Endpoint that receives a notification when a user saves the journey.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.save = async (req, res) => {
  res.status(200).send({
    status: 'ok',
  });
};

/**
 *  Endpoint that receives a notification when a user publishes the journey.
 * @param req
 * @param res
 */
exports.publish = (req, res) => {
  res.status(200).send({
    status: 'ok',
  });
};

/**
 * Endpoint that receives a notification when a user performs
 * some validation as part of the publishing process.
 * @param req
 * @param res
 */
exports.validate = (req, res) => {
  logger.debug('Journey Validated Successfully')
  res.status(200).send({
    status: 'ok',
  });
};

  res.status(200).send({
    status: 'ok',
  });
};
