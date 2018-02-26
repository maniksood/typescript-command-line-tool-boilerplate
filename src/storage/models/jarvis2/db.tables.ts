// tslint:disable
import * as path from 'path';
import * as sequelize from 'sequelize';
import * as def from './db';

export interface ITables {
  email_templates2:def.email_templates2Model;
  claims_flight_data:def.claims_flight_dataModel;
  notifications:def.notificationsModel;
  email_campaigns:def.email_campaignsModel;
  claims_test:def.claims_testModel;
  claims_temp:def.claims_tempModel;
  users:def.usersModel;
  email_templates:def.email_templatesModel;
  claims:def.claimsModel;
  claims_flight_data_old:def.claims_flight_data_oldModel;
  test2:def.test2Model;
  jarvis_users:def.jarvis_usersModel;
  SequelizeMeta:def.SequelizeMetaModel;
  case_details:def.case_detailsModel;
}

export const getModels = function(seq:sequelize.Sequelize):ITables {
  const tables:ITables = {
    email_templates2: seq.import(path.join(__dirname, './email_templates2')),
    claims_flight_data: seq.import(path.join(__dirname, './claims_flight_data')),
    notifications: seq.import(path.join(__dirname, './notifications')),
    email_campaigns: seq.import(path.join(__dirname, './email_campaigns')),
    claims_test: seq.import(path.join(__dirname, './claims_test')),
    claims_temp: seq.import(path.join(__dirname, './claims_temp')),
    users: seq.import(path.join(__dirname, './users')),
    email_templates: seq.import(path.join(__dirname, './email_templates')),
    claims: seq.import(path.join(__dirname, './claims')),
    claims_flight_data_old: seq.import(path.join(__dirname, './claims_flight_data_old')),
    test2: seq.import(path.join(__dirname, './test2')),
    jarvis_users: seq.import(path.join(__dirname, './jarvis_users')),
    SequelizeMeta: seq.import(path.join(__dirname, './SequelizeMeta')),
    case_details: seq.import(path.join(__dirname, './case_details')),
  };
  return tables;
};
