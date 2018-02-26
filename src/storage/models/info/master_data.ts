/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {master_dataInstance, master_dataAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<master_dataInstance, master_dataAttribute>('master_data', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    date_of_departure: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    flight_number: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    airline_code: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    scheduled_departure_time: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    source_airport: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    destination_airport: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    flight_status: {
      type: DataTypes.ENUM("UNKNOWN","DIVERTED","MID-AIR","CANCELLED","SCHEDULED","LANDED"),
      allowNull: true
    },
    source_of_time: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    time_object: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    metadata_object: {
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
    operating_carrier: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    flight_plan: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    scheduled_departure_date_source_airport: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'master_data'
  });
};
