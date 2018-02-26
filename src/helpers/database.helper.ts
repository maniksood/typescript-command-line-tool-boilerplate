import * as DB from '../storage/models/index';
// Individual Model declaration
const Info = DB['Info'];

export const airports_data_one = async (options) => {
  return await Info.airports.findOne(options);
};

export const airlines_data_one = async (options) => {
  return await Info.airlines.findOne(options);
};

export const flights_data_one = async (options) => {
  return await Info.flights.findOne(options);
};





export const airports_data_all = async (options) => {
  return await Info.airports.findAll(options);
};

export const airlines_data_all = async (options) => {
  return await Info.airlines.findAll(options);
};

export const flights_data_all = async (options) => {
  return await Info.flights.findAll(options);
};
