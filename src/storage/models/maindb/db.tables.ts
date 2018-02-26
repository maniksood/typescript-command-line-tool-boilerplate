// tslint:disable
import * as path from 'path';
import * as sequelize from 'sequelize';
import * as def from './db';

export interface ITables {
  info_airports:def.info_airportsModel;
  flights:def.flightsModel;
  airlines:def.airlinesModel;
  info_airlines:def.info_airlinesModel;
  airports:def.airportsModel;
}

export const getModels = function(seq:sequelize.Sequelize):ITables {
  const tables:ITables = {
    info_airports: seq.import(path.join(__dirname, './info_airports')),
    flights: seq.import(path.join(__dirname, './flights')),
    airlines: seq.import(path.join(__dirname, './airlines')),
    info_airlines: seq.import(path.join(__dirname, './info_airlines')),
    airports: seq.import(path.join(__dirname, './airports')),
  };
  return tables;
};
