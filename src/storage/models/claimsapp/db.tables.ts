// tslint:disable
import * as path from 'path';
import * as sequelize from 'sequelize';
import * as def from './db';

export interface ITables {
  api_data:def.api_dataModel;
  n:def.nModel;
  users:def.usersModel;
  email_campaigns:def.email_campaignsModel;
  claims:def.claimsModel;
  case_details:def.case_detailsModel;
  email_templates:def.email_templatesModel;
}

export const getModels = function(seq:sequelize.Sequelize):ITables {
  const tables:ITables = {
    api_data: seq.import(path.join(__dirname, './api_data')),
    n: seq.import(path.join(__dirname, './n')),
    users: seq.import(path.join(__dirname, './users')),
    email_campaigns: seq.import(path.join(__dirname, './email_campaigns')),
    claims: seq.import(path.join(__dirname, './claims')),
    case_details: seq.import(path.join(__dirname, './case_details')),
    email_templates: seq.import(path.join(__dirname, './email_templates')),
  };
  return tables;
};
