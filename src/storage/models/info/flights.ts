/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {flightsInstance, flightsAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<flightsInstance, flightsAttribute>('flights', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    airline_code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    airline_code2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    flight_number: {
      type: DataTypes.STRING,
      allowNull: true
    },
    airline_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    source_airport_fs: {
      type: DataTypes.STRING,
      allowNull: true
    },
    source_airport_icao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    source_airport_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    source_city: {
      type: DataTypes.STRING,
      allowNull: true
    },
    departure_time: {
      type: DataTypes.STRING,
      allowNull: true
    },
    departure_time_utc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    departure_terminal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    destination_airport_fs: {
      type: DataTypes.STRING,
      allowNull: true
    },
    destination_airport_icao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    destination_airport_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    destination_city: {
      type: DataTypes.STRING,
      allowNull: true
    },
    arrival_time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    arrival_time_utc: {
      type: DataTypes.TIME,
      allowNull: true
    },
    arrival_terminal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    route: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aircraft: {
      type: DataTypes.STRING,
      allowNull: true
    },
    days_of_week: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    jurisdiction: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'flights'
  });
};
