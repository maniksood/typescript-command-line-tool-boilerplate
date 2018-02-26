/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {info_airlinesInstance, info_airlinesAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<info_airlinesInstance, info_airlinesAttribute>('info_airlines', {
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
    json_values: {
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
      type: DataTypes.STRING,
      allowNull: true
    },
    data_source: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'info_airlines'
  });
};
