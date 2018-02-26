// tslint:disable
import * as Sequelize from 'sequelize';


// table: email_templates2
export interface email_templates2Attribute {
  id:number;
  name?:string;
  bucket_name?:string;
  template_unique_code?:string;
  type?:string;
  templates?:any;
  createdAt?:Date;
  updatedAt?:Date;
}
export interface email_templates2Instance extends Sequelize.Instance<email_templates2Attribute>, email_templates2Attribute { }
export interface email_templates2Model extends Sequelize.Model<email_templates2Instance, email_templates2Attribute> { }

// table: claims_flight_data
export interface claims_flight_dataAttribute {
  id:number;
  flight_detail_id?:string;
  airline_code?:string;
  flight_number?:string;
  date_of_departure?:string;
  flight_data?:any;
  createdAt?:Date;
  updatedAt?:Date;
}
export interface claims_flight_dataInstance extends Sequelize.Instance<claims_flight_dataAttribute>, claims_flight_dataAttribute { }
export interface claims_flight_dataModel extends Sequelize.Model<claims_flight_dataInstance, claims_flight_dataAttribute> { }

// table: notifications
export interface notificationsAttribute {
  id:number;
  claim_id?:string;
  notifications?:any;
  createdAt?:Date;
  updatedAt?:Date;
  api_data_reference?:any;
  notification_id?:string;
}
export interface notificationsInstance extends Sequelize.Instance<notificationsAttribute>, notificationsAttribute { }
export interface notificationsModel extends Sequelize.Model<notificationsInstance, notificationsAttribute> { }

// table: email_campaigns
export interface email_campaignsAttribute {
  id:number;
  campaign_data?:any;
  claim_id?:string;
  createdAt?:Date;
  updatedAt?:Date;
}
export interface email_campaignsInstance extends Sequelize.Instance<email_campaignsAttribute>, email_campaignsAttribute { }
export interface email_campaignsModel extends Sequelize.Model<email_campaignsInstance, email_campaignsAttribute> { }

// table: claims_test
export interface claims_testAttribute {
  id:number;
  claim_id?:string;
  user_id?:string;
  flight_detail_id?:string;
  source?:string;
  claim_meta_data?:any;
  claim_management?:any;
  createdAt?:Date;
  updatedAt?:Date;
  flags?:any;
}
export interface claims_testInstance extends Sequelize.Instance<claims_testAttribute>, claims_testAttribute { }
export interface claims_testModel extends Sequelize.Model<claims_testInstance, claims_testAttribute> { }

// table: claims_temp
export interface claims_tempAttribute {
  id:number;
  claim_id?:string;
  user_id?:string;
  flight_detail_id?:string;
  source?:string;
  claim_meta_data?:any;
  claim_management?:any;
  createdAt?:Date;
  updatedAt?:Date;
  flags?:any;
  misc_values?:any;
}
export interface claims_tempInstance extends Sequelize.Instance<claims_tempAttribute>, claims_tempAttribute { }
export interface claims_tempModel extends Sequelize.Model<claims_tempInstance, claims_tempAttribute> { }

// table: users
export interface usersAttribute {
  id:number;
  user_id:string;
  email:string;
  name?:string;
  picture?:string;
  addresses?:any;
  createdAt:Date;
  updatedAt:Date;
  source?:string;
  flags?:any;
}
export interface usersInstance extends Sequelize.Instance<usersAttribute>, usersAttribute { }
export interface usersModel extends Sequelize.Model<usersInstance, usersAttribute> { }

// table: email_templates
export interface email_templatesAttribute {
  id:number;
  name?:string;
  type?:string;
  _json?:any;
  createdAt?:Date;
  updatedAt?:Date;
}
export interface email_templatesInstance extends Sequelize.Instance<email_templatesAttribute>, email_templatesAttribute { }
export interface email_templatesModel extends Sequelize.Model<email_templatesInstance, email_templatesAttribute> { }

// table: claims
export interface claimsAttribute {
  id:number;
  claim_id?:string;
  user_id?:string;
  flight_detail_id?:string;
  source?:string;
  claim_meta_data?:any;
  claim_management?:any;
  createdAt:Date;
  updatedAt:Date;
  flags?:any;
  misc_values?:any;
}
export interface claimsInstance extends Sequelize.Instance<claimsAttribute>, claimsAttribute { }
export interface claimsModel extends Sequelize.Model<claimsInstance, claimsAttribute> { }

// table: claims_flight_data_old
export interface claims_flight_data_oldAttribute {
  id:number;
  flight_detail_id?:string;
  airline_code?:string;
  flight_number?:string;
  date_of_departure?:string;
  flight_data?:any;
  createdAt:Date;
  updatedAt:Date;
}
export interface claims_flight_data_oldInstance extends Sequelize.Instance<claims_flight_data_oldAttribute>, claims_flight_data_oldAttribute { }
export interface claims_flight_data_oldModel extends Sequelize.Model<claims_flight_data_oldInstance, claims_flight_data_oldAttribute> { }

// table: test2
export interface test2Attribute {
  id:number;
}
export interface test2Instance extends Sequelize.Instance<test2Attribute>, test2Attribute { }
export interface test2Model extends Sequelize.Model<test2Instance, test2Attribute> { }

// table: jarvis_users
export interface jarvis_usersAttribute {
  id:number;
  email?:string;
  password?:string;
  role?:string;
  createdAt?:Date;
  updatedAt?:Date;
}
export interface jarvis_usersInstance extends Sequelize.Instance<jarvis_usersAttribute>, jarvis_usersAttribute { }
export interface jarvis_usersModel extends Sequelize.Model<jarvis_usersInstance, jarvis_usersAttribute> { }

// table: SequelizeMeta
export interface SequelizeMetaAttribute {
  name:string;
}
export interface SequelizeMetaInstance extends Sequelize.Instance<SequelizeMetaAttribute>, SequelizeMetaAttribute { }
export interface SequelizeMetaModel extends Sequelize.Model<SequelizeMetaInstance, SequelizeMetaAttribute> { }

// table: case_details
export interface case_detailsAttribute {
  id:number;
  claim_id?:string;
  case_details?:string;
  case_meta_data?:any;
  createdAt?:Date;
  updatedAt?:Date;
}
export interface case_detailsInstance extends Sequelize.Instance<case_detailsAttribute>, case_detailsAttribute { }
export interface case_detailsModel extends Sequelize.Model<case_detailsInstance, case_detailsAttribute> { }
