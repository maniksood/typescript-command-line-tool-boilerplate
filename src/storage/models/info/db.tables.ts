// tslint:disable
import * as path from 'path';
import * as sequelize from 'sequelize';
import * as def from './db';

export interface ITables {
  info_airlines:def.info_airlinesModel;
  airports:def.airportsModel;
  master_data:def.master_dataModel;
  info_airports:def.info_airportsModel;
  airlines:def.airlinesModel;
  flights:def.flightsModel;
}

export const getModels = function(seq:sequelize.Sequelize):ITables {
  const tables:ITables = {
    info_airlines: seq.import(path.join(__dirname, './info_airlines')),
    airports: seq.import(path.join(__dirname, './airports')),
    master_data: seq.import(path.join(__dirname, './master_data')),
    info_airports: seq.import(path.join(__dirname, './info_airports')),
    airlines: seq.import(path.join(__dirname, './airlines')),
    flights: seq.import(path.join(__dirname, './flights')),
  };
  return tables;
};
