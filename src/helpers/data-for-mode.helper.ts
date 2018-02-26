import * as sequelize from 'sequelize';
// Models import
import * as DB from '../storage/models/index';
import {airports_data_all, flights_data_all} from './database.helper';
// Individual Model declaration
const Info = DB['Info'];


// ------------------------------------
export const allAirportsData = async (option_updates) => {
  const options = {
    attributes: ['fs', 'name'],
    where: {
      classification: [1, 2, 3]
    },
  };

  return await airports_data_all(options);
};

// ------------------------------------
export const topAirlinesData = async (option_updates) => {

  const options = {
    attributes: ['airline_name', 'airline_code', [sequelize.fn('count', sequelize.col('*')), 'count']],
    where: {
      airline_name: {
        $ne: ''
      }
    },
    group: ['airline_name', 'airline_code'],
    order: [['count', 'DESC']],
    limit: 300
  };

  return await flights_data_all(options);
};
