/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {airlinesInstance, airlinesAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<airlinesInstance, airlinesAttribute>('airlines', {
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
    iata: {
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
    active: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nickname1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nickname2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nickname3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nickname4: {
      type: DataTypes.STRING,
      allowNull: true
    },
    json_data: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    baggage_allowances: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    website: {
      type: DataTypes.TEXT,
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
    checkin_link: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    baggage_link: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'airlines'
  });
};
