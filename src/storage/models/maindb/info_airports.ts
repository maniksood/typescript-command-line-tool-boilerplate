/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {info_airportsInstance, info_airportsAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<info_airportsInstance, info_airportsAttribute>('info_airports', {
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
    _json: {
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
    info_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    data_source: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'info_airports'
  });
};
