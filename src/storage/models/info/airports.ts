/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {airportsInstance, airportsAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<airportsInstance, airportsAttribute>('airports', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fs: {
      type: DataTypes.STRING,
      allowNull: true
    },
    icao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true
    },
    countryCode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    countryName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    regionName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    timeZoneRegionName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    localTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    utcOffsetHours: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    latitude: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    longitude: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    elevationFeet: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    classification: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    weatherUrl: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    delayIndexUrl: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    website_url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    json_data: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    meta_data: {
      type: DataTypes.JSONB,
      allowNull: true
    }
  }, {
    tableName: 'airports'
  });
};
